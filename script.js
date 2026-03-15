const header = document.querySelector(".site-header");
const brandLink = document.querySelector(".brand");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navScrim = document.querySelector(".nav-scrim");
const navLinks = siteNav ? Array.from(siteNav.querySelectorAll("a[data-scroll-target]")) : [];
const navIndicator = document.querySelector(".nav-indicator");
const scrollLinks = Array.from(document.querySelectorAll("[data-scroll-target]"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const faqItems = Array.from(document.querySelectorAll(".faq-item"));
const portfolioVideos = Array.from(document.querySelectorAll(".portfolio-video"));
const portfolioVideoTriggers = Array.from(document.querySelectorAll("[data-video-dialog-trigger]"));
const videoDialog = document.querySelector(".video-dialog");
const videoDialogTitle = document.querySelector(".video-dialog-title");
const videoDialogPlayer = document.querySelector(".video-dialog-player");
const videoDialogCloseControls = Array.from(document.querySelectorAll("[data-video-dialog-close]"));
const videoDialogCloseButton = document.querySelector(".video-dialog-close");
const quickDock = document.querySelector(".quick-dock");
const quickDockTrigger = document.querySelector(".quick-dock-trigger");
const quickDockActions = document.querySelector(".quick-dock-actions");
const quickDockTopAction = document.querySelector(".quick-dock-action-top");
const whatsappLinks = Array.from(document.querySelectorAll('a[href*="wa.me/"], a[href*="api.whatsapp.com/"]'));
const protectedMediaItems = Array.from(document.querySelectorAll("[data-protected-media]"));
const desktopNavQuery = window.matchMedia("(min-width: 960px)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentNavLink = null;
let portfolioVideoObserver = null;
let activeVideoTrigger = null;
let lastScrollY = Math.max(window.scrollY, 0);

const trackAnalyticsEvent = (eventName, parameters = {}) => {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
};

const getHeaderOffset = () => {
  if (!(header instanceof HTMLElement)) {
    return 24;
  }

  return header.offsetHeight + 16;
};

const getCleanLocation = () => `${window.location.pathname}${window.location.search}`;

const clearLocationHash = () => {
  if (!window.location.hash || !window.history.replaceState) {
    return;
  }

  window.history.replaceState(null, "", getCleanLocation());
};

const getHashTargetId = () => {
  if (!window.location.hash || window.location.hash === "#") {
    return "";
  }

  try {
    return decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return window.location.hash.slice(1);
  }
};

const scrollToSection = (targetId, behavior = reducedMotionQuery.matches ? "auto" : "smooth") => {
  if (!targetId || targetId === "top") {
    window.scrollTo({ top: 0, behavior });
    clearLocationHash();
    return;
  }

  const target = document.getElementById(targetId);

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const targetTop = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior,
  });

  clearLocationHash();
};

const syncNavIndicator = () => {
  if (!navIndicator || !siteNav || !desktopNavQuery.matches || !(currentNavLink instanceof HTMLElement)) {
    navIndicator?.classList.remove("is-visible");
    return;
  }

  const navRect = siteNav.getBoundingClientRect();
  const linkRect = currentNavLink.getBoundingClientRect();

  navIndicator.style.setProperty("--nav-indicator-x", `${linkRect.left - navRect.left}px`);
  navIndicator.style.setProperty("--nav-indicator-width", `${linkRect.width}px`);
  navIndicator.classList.add("is-visible");
};

const setNavHighlight = (link = null) => {
  currentNavLink = link;

  navLinks.forEach((navLink) => {
    if (link && navLink === link) {
      navLink.setAttribute("data-nav-highlighted", "true");
    } else {
      navLink.removeAttribute("data-nav-highlighted");
    }
  });

  syncNavIndicator();
};

const setMenuState = (isOpen) => {
  if (!menuToggle || !siteNav) {
    return;
  }

  const shouldOpen = isOpen && !desktopNavQuery.matches;
  siteNav.classList.toggle("is-open", shouldOpen);
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("menu-open", shouldOpen);

  if (shouldOpen && header instanceof HTMLElement) {
    header.classList.remove("is-hidden");
  }
};

const closeMenu = () => setMenuState(false);

const setQuickDockState = (isOpen) => {
  if (!quickDock || !quickDockTrigger) {
    return;
  }

  quickDock.classList.toggle("is-open", isOpen);
  quickDockTrigger.setAttribute("aria-expanded", String(isOpen));
};

const closeQuickDock = () => {
  setQuickDockState(false);
};

const syncHeaderState = () => {
  if (!(header instanceof HTMLElement)) {
    return;
  }

  const currentScrollY = Math.max(window.scrollY, 0);
  const scrollDelta = currentScrollY - lastScrollY;

  header.classList.toggle("is-scrolled", currentScrollY > 12);

  if (!desktopNavQuery.matches) {
    header.classList.remove("is-hidden");
    lastScrollY = currentScrollY;
    return;
  }

  if (currentScrollY < 36 || siteNav?.classList.contains("is-open")) {
    header.classList.remove("is-hidden");
    lastScrollY = currentScrollY;
    return;
  }

  if (scrollDelta > 7 && currentScrollY > 160) {
    header.classList.add("is-hidden");
  } else if (scrollDelta < -7) {
    header.classList.remove("is-hidden");
  }

  lastScrollY = currentScrollY;
};

const syncQuickDockVisibility = () => {
  if (!quickDock) {
    return;
  }

  const shouldShow = window.scrollY > 220;
  quickDock.classList.toggle("is-visible", shouldShow);

  if (!shouldShow) {
    closeQuickDock();
  }
};

const pausePortfolioVideo = (video) => {
  if (!(video instanceof HTMLVideoElement)) {
    return;
  }

  video.pause();
};

const playPortfolioVideo = (video) => {
  if (!(video instanceof HTMLVideoElement) || reducedMotionQuery.matches || document.hidden) {
    return;
  }

  video.muted = true;
  video.playsInline = true;

  const playPromise = video.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
};

const syncPortfolioVideos = () => {
  if (portfolioVideoObserver) {
    portfolioVideoObserver.disconnect();
    portfolioVideoObserver = null;
  }

  if (portfolioVideos.length === 0) {
    return;
  }

  if (reducedMotionQuery.matches) {
    portfolioVideos.forEach((video) => pausePortfolioVideo(video));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    portfolioVideos.forEach((video) => playPortfolioVideo(video));
    return;
  }

  portfolioVideoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!(entry.target instanceof HTMLVideoElement)) {
          return;
        }

        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          playPortfolioVideo(entry.target);
        } else {
          pausePortfolioVideo(entry.target);
        }
      });
    },
    {
      threshold: [0.15, 0.35, 0.7],
      rootMargin: "0px 0px -8% 0px",
    }
  );

  portfolioVideos.forEach((video) => portfolioVideoObserver?.observe(video));
};

const closeVideoDialog = (restoreFocus = true) => {
  if (!videoDialog || !videoDialogPlayer) {
    return;
  }

  videoDialog.classList.remove("is-open");
  videoDialog.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  videoDialogPlayer.pause();
  videoDialogPlayer.removeAttribute("src");
  videoDialogPlayer.load();

  if (restoreFocus && activeVideoTrigger instanceof HTMLElement) {
    activeVideoTrigger.focus();
  }

  activeVideoTrigger = null;
  syncPortfolioVideos();
};

const openVideoDialog = (trigger) => {
  if (!videoDialog || !videoDialogPlayer || !(trigger instanceof HTMLElement)) {
    return;
  }

  const videoSrc = trigger.getAttribute("data-video-src");
  const videoTitle = trigger.getAttribute("data-video-title") || "Website preview";

  if (!videoSrc) {
    return;
  }

  activeVideoTrigger = trigger;
  portfolioVideos.forEach((video) => pausePortfolioVideo(video));
  videoDialogTitle.textContent = videoTitle;
  videoDialogPlayer.src = videoSrc;
  videoDialog.classList.add("is-open");
  videoDialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const playPromise = videoDialogPlayer.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }

  if (videoDialogCloseButton instanceof HTMLElement) {
    videoDialogCloseButton.focus();
  }
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !siteNav.classList.contains("is-open");
    setMenuState(isOpen);
  });
}

navScrim?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeQuickDock();

    if (videoDialog?.classList.contains("is-open")) {
      closeVideoDialog();
    }
  }
});

brandLink?.addEventListener("click", (event) => {
  event.preventDefault();
  closeMenu();
  closeQuickDock();
  scrollToSection("top");
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const targetId = link.getAttribute("data-scroll-target");

    if (!targetId) {
      return;
    }

    event.preventDefault();
    closeMenu();
    closeQuickDock();
    scrollToSection(targetId);
  });
});

if ("IntersectionObserver" in window && navLinks.length > 0) {
  const sectionMap = new Map();

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("data-scroll-target");
    const section = targetId ? document.getElementById(targetId) : null;

    if (section instanceof HTMLElement) {
      sectionMap.set(section, link);
    }
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

      if (visibleEntries.length === 0) {
        if (window.scrollY < 120) {
          setNavHighlight(null);
        }
        return;
      }

      const nextLink = sectionMap.get(visibleEntries[0].target);
      setNavHighlight(nextLink ?? null);
    },
    {
      threshold: [0.16, 0.35, 0.55],
      rootMargin: "-32% 0px -50% 0px",
    }
  );

  sectionMap.forEach((_, section) => sectionObserver.observe(section));
}

portfolioVideoTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openVideoDialog(trigger);
  });
});

videoDialogCloseControls.forEach((control) => {
  control.addEventListener("click", () => {
    closeVideoDialog();
  });
});

quickDockTrigger?.addEventListener("click", () => {
  const isOpen = quickDock?.classList.contains("is-open");
  setQuickDockState(!isOpen);
});

quickDockActions?.querySelectorAll("a, button").forEach((action) => {
  action.addEventListener("click", () => {
    closeQuickDock();
  });
});

quickDockTopAction?.addEventListener("click", () => {
  scrollToSection("top");
});

document.addEventListener("click", (event) => {
  if (quickDock?.classList.contains("is-open") && !quickDock.contains(event.target)) {
    closeQuickDock();
  }
});

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});

whatsappLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const buttonLocation = link.getAttribute("data-whatsapp-location") || "unknown";
    const buttonText =
      link.getAttribute("aria-label") ||
      link.textContent?.replace(/\s+/g, " ").trim() ||
      "WhatsApp";

    trackAnalyticsEvent("whatsapp_click", {
      button_location: buttonLocation,
      button_text: buttonText,
      contact_method: "whatsapp",
    });
  });
});

if ("IntersectionObserver" in window && !reducedMotionQuery.matches) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -12% 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

protectedMediaItems.forEach((item) => {
  const preventInteraction = (event) => {
    event.preventDefault();
  };

  item.addEventListener("contextmenu", preventInteraction);
  item.addEventListener("dragstart", preventInteraction);
  item.addEventListener("selectstart", preventInteraction);
  item.addEventListener("copy", preventInteraction);
  item.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    },
    { passive: false }
  );
});

window.addEventListener("scroll", () => {
  syncHeaderState();
  syncQuickDockVisibility();
});

window.addEventListener("resize", () => {
  syncNavIndicator();

  if (desktopNavQuery.matches) {
    closeMenu();
  }
});

document.addEventListener("visibilitychange", () => {
  if (videoDialog?.classList.contains("is-open")) {
    if (document.hidden) {
      videoDialogPlayer?.pause();
    } else if (videoDialogPlayer instanceof HTMLVideoElement) {
      const playPromise = videoDialogPlayer.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }

    return;
  }

  if (document.hidden) {
    portfolioVideos.forEach((video) => pausePortfolioVideo(video));
    return;
  }

  syncPortfolioVideos();
});

const handleReducedMotionChange = () => {
  syncPortfolioVideos();

  if (reducedMotionQuery.matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
};

if (typeof reducedMotionQuery.addEventListener === "function") {
  reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
} else if (typeof reducedMotionQuery.addListener === "function") {
  reducedMotionQuery.addListener(handleReducedMotionChange);
}

syncHeaderState();
syncQuickDockVisibility();
syncPortfolioVideos();
syncNavIndicator();

const initialHashTarget = getHashTargetId();

if (initialHashTarget) {
  window.requestAnimationFrame(() => {
    scrollToSection(initialHashTarget, "auto");
  });
}
