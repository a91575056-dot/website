const menuToggle = document.querySelector(".menu-toggle");
const navShell = document.querySelector("#nav-shell");
const navLinks = document.querySelectorAll(".nav-links a");
const navLinksWrap = document.querySelector(".nav-links");
const homeLinks = document.querySelectorAll('a[href="#home"]');
const backToTopBtn = document.querySelector("#back-to-top");
const backToTopProgressBar = document.querySelector(".back-to-top-bar");
const siteHeader = document.querySelector(".site-header");
const portfolioOpenButtons = document.querySelectorAll("[data-portfolio-video]");
const portfolioModal = document.querySelector("#portfolio-modal");
const portfolioModalVideo = document.querySelector("#portfolio-modal-video");
const portfolioModalTitle = document.querySelector("#portfolio-modal-title");
const portfolioModalClose = document.querySelector("#portfolio-modal-close");
const sections = document.querySelectorAll("header[id], main section[id]");
const yearEl = document.querySelector("#year");
const ga4MeasurementId = (document.querySelector('meta[name="ga4-measurement-id"]')?.content || "").trim();
const shouldEnableGa4 = /^G-[A-Z0-9]+$/i.test(ga4MeasurementId);

const backToTopCircumference = 2 * Math.PI * 19;
const sectionList = Array.from(sections).filter((section) => section.id);
let sectionOffsets = [];
let activeSectionId = "";
let lastScrollY = window.scrollY;

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.body.classList.add("is-ready");

const initGa4 = () => {
  if (!shouldEnableGa4 || typeof document === "undefined") return;
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}`;
  script.referrerPolicy = "strict-origin-when-cross-origin";
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", ga4MeasurementId, {
    anonymize_ip: true,
    transport_type: "beacon",
  });
};

const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
};

const getTrackLocation = (element) => {
  const scope = element.closest("section[id], header[id], footer");
  if (!scope) return "global";
  if (scope.id) return scope.id;
  if (scope.tagName.toLowerCase() === "footer") return "footer";
  return "global";
};

const setupCtaTracking = () => {
  const trackedElements = document.querySelectorAll("[data-track]");
  trackedElements.forEach((element) => {
    element.addEventListener("click", () => {
      const ctaLabel = element.getAttribute("data-track") || "cta";
      trackEvent("cta_click", {
        cta_label: ctaLabel,
        section: getTrackLocation(element),
      });
    });
  });
};

const closeMobileMenu = () => {
  if (!navShell || !menuToggle) return;
  navShell.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

if (menuToggle && navShell) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navShell.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        activeSectionId = href.slice(1);
      }
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      closeMobileMenu();
      requestAnimationFrame(updateNavIndicator);
    });
  });

  document.addEventListener("click", (event) => {
    if (!navShell.classList.contains("open")) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (navShell.contains(target) || menuToggle.contains(target)) return;
    closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  let touchStartY = 0;
  let touchDeltaY = 0;

  navShell.addEventListener(
    "touchstart",
    (event) => {
      if (!navShell.classList.contains("open")) return;
      touchStartY = event.touches[0]?.clientY ?? 0;
      touchDeltaY = 0;
    },
    { passive: true }
  );

  navShell.addEventListener(
    "touchmove",
    (event) => {
      if (!navShell.classList.contains("open") || touchStartY === 0) return;
      touchDeltaY = (event.touches[0]?.clientY ?? touchStartY) - touchStartY;
    },
    { passive: true }
  );

  navShell.addEventListener("touchend", () => {
    if (!navShell.classList.contains("open")) return;
    if (touchDeltaY < -40) {
      closeMobileMenu();
    }
    touchStartY = 0;
    touchDeltaY = 0;
  });
}

homeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash !== "#home") {
      window.history.replaceState(null, "", "#home");
    }
    activeSectionId = "home";
    closeMobileMenu();
  });
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const setupPortfolioPresentationModal = () => {
  if (!portfolioOpenButtons.length || !portfolioModal || !(portfolioModalVideo instanceof HTMLVideoElement)) {
    return;
  }

  const closeModal = () => {
    if (!portfolioModal.classList.contains("open")) return;
    portfolioModal.classList.remove("open");
    portfolioModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("portfolio-modal-open");
    portfolioModalVideo.pause();
    portfolioModalVideo.removeAttribute("src");
    portfolioModalVideo.load();
  };

  const openModal = (videoSrc, title) => {
    if (!videoSrc) return;

    portfolioModalVideo.pause();
    portfolioModalVideo.setAttribute("src", videoSrc);
    portfolioModalVideo.currentTime = 0;
    portfolioModalVideo.load();

    if (portfolioModalTitle) {
      portfolioModalTitle.textContent = title || "Project Presentation";
    }

    portfolioModal.classList.add("open");
    portfolioModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("portfolio-modal-open");
    trackEvent("portfolio_video_open", {
      video_title: (title || "Project Presentation").slice(0, 80),
    });
    void portfolioModalVideo.play().catch(() => {
      // Playback may require explicit user interaction on some browsers.
    });
  };

  portfolioOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.getAttribute("data-portfolio-video"), button.getAttribute("data-portfolio-title"));
    });
  });

  if (portfolioModalClose) {
    portfolioModalClose.addEventListener("click", closeModal);
  }

  portfolioModal.addEventListener("click", (event) => {
    if (event.target === portfolioModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
};

const refreshSectionOffsets = () => {
  sectionOffsets = sectionList
    .map((section) => ({ id: section.id, top: section.offsetTop }))
    .sort((a, b) => a.top - b.top);
};

const updateNavIndicator = () => {
  if (!navLinksWrap) return;

  const activeLink = navLinksWrap.querySelector("a.active");
  if (!activeLink) {
    navLinksWrap.style.setProperty("--nav-indicator-opacity", "0");
    return;
  }

  const wrapRect = navLinksWrap.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();

  if (wrapRect.width === 0 || linkRect.width === 0) {
    navLinksWrap.style.setProperty("--nav-indicator-opacity", "0");
    return;
  }

  navLinksWrap.style.setProperty("--nav-indicator-left", `${linkRect.left - wrapRect.left}px`);
  navLinksWrap.style.setProperty("--nav-indicator-width", `${linkRect.width}px`);
  navLinksWrap.style.setProperty("--nav-indicator-opacity", "1");
};

const setActiveLink = () => {
  if (!sectionOffsets.length) {
    refreshSectionOffsets();
  }
  if (!sectionOffsets.length) return;

  const headerOffset = siteHeader ? siteHeader.offsetHeight : 0;
  const y = window.scrollY + headerOffset + 36;
  let nextActiveId = sectionOffsets[0].id;

  for (let i = 0; i < sectionOffsets.length; i += 1) {
    if (y >= sectionOffsets[i].top) {
      nextActiveId = sectionOffsets[i].id;
    } else {
      break;
    }
  }

  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) {
    nextActiveId = sectionOffsets[sectionOffsets.length - 1].id;
  }

  if (nextActiveId === activeSectionId) {
    return;
  }
  activeSectionId = nextActiveId;

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${nextActiveId}`;
    if (link.classList.contains("active") !== isActive) {
      link.classList.toggle("active", isActive);
    }
  });

  updateNavIndicator();
};

const updateBackToTop = () => {
  if (!backToTopBtn) return;

  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

  if (backToTopProgressBar) {
    backToTopProgressBar.style.strokeDasharray = `${backToTopCircumference.toFixed(2)}`;
    backToTopProgressBar.style.strokeDashoffset = `${(backToTopCircumference * (1 - progress)).toFixed(2)}`;
  }

  backToTopBtn.classList.toggle("is-visible", scrollTop > 220);
};

const updateHeaderState = () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
};

const updateHeaderVisibilityOnScroll = () => {
  if (!siteHeader) return;

  const currentY = window.scrollY;
  const isMenuOpen = document.body.classList.contains("menu-open");
  const nearTop = currentY <= 24;
  const delta = currentY - lastScrollY;

  if (nearTop || isMenuOpen) {
    siteHeader.classList.remove("is-hidden-on-scroll");
  } else if (delta > 6) {
    siteHeader.classList.add("is-hidden-on-scroll");
  } else if (delta < -4) {
    siteHeader.classList.remove("is-hidden-on-scroll");
  }

  lastScrollY = currentY;
};

const onScroll = () => {
  setActiveLink();
  updateBackToTop();
  updateHeaderState();
  updateHeaderVisibilityOnScroll();
};

let scrollFramePending = false;
const handleScroll = () => {
  if (scrollFramePending) return;
  scrollFramePending = true;
  window.requestAnimationFrame(() => {
    scrollFramePending = false;
    onScroll();
  });
};

let resizeTimeoutId = 0;
const handleResize = () => {
  window.clearTimeout(resizeTimeoutId);
  resizeTimeoutId = window.setTimeout(() => {
    if (window.matchMedia("(min-width: 861px)").matches) {
      closeMobileMenu();
    }
    refreshSectionOffsets();
    updateNavIndicator();
    onScroll();
  }, 120);
};

initGa4();
setupCtaTracking();
setupPortfolioPresentationModal();
refreshSectionOffsets();
updateNavIndicator();

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", handleResize);
window.addEventListener("load", () => {
  refreshSectionOffsets();
  updateNavIndicator();
  onScroll();
});

onScroll();
