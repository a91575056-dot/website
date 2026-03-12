const header = document.querySelector(".site-header");
const brandLink = document.querySelector(".brand");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = siteNav ? Array.from(siteNav.querySelectorAll('a:not(.button)')) : [];
const navIndicator = document.querySelector(".nav-indicator");
const portfolioVideos = document.querySelectorAll(".portfolio-video");
const portfolioVideoTriggers = document.querySelectorAll("[data-video-dialog-trigger]");
const videoDialog = document.querySelector(".video-dialog");
const videoDialogTitle = document.querySelector(".video-dialog-title");
const videoDialogPlayer = document.querySelector(".video-dialog-player");
const videoDialogCloseControls = document.querySelectorAll("[data-video-dialog-close]");
const videoDialogCloseButton = document.querySelector(".video-dialog-close");
const quickDock = document.querySelector(".quick-dock");
const quickDockTrigger = document.querySelector(".quick-dock-trigger");
const quickDockActions = document.querySelector(".quick-dock-actions");
const quickDockTopAction = document.querySelector(".quick-dock-action-top");
const revealItems = document.querySelectorAll(".reveal");
const mobileNavBreakpoint = window.matchMedia("(max-width: 900px)");
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let lastScrollY = window.scrollY;
let quickDockSuspendTimer = 0;
let highlightedNavLink = null;
let portfolioVideoObserver = null;
let activeVideoTrigger = null;
const clearNavHighlight = () => {
  navLinks.forEach((link) => {
    link.removeAttribute("data-nav-highlighted");
  });
};
const hideNavIndicator = () => {
  if (!navIndicator) {
    return;
  }

  navIndicator.classList.remove("is-visible");
};
const syncNavIndicator = (link) => {
  if (!siteNav || !navIndicator || !link || mobileNavBreakpoint.matches) {
    hideNavIndicator();
    return;
  }

  const navRect = siteNav.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();

  navIndicator.style.setProperty("--nav-indicator-x", `${linkRect.left - navRect.left}px`);
  navIndicator.style.setProperty("--nav-indicator-width", `${linkRect.width}px`);
  navIndicator.classList.add("is-visible");
};
const setNavHighlight = (link = null) => {
  highlightedNavLink = link;
  clearNavHighlight();

  if (!link) {
    hideNavIndicator();
    return;
  }

  link.setAttribute("data-nav-highlighted", "true");
  syncNavIndicator(link);
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
  const playPromise = video.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
};
const syncPortfolioVideos = () => {
  if (!portfolioVideos.length) {
    return;
  }

  if (portfolioVideoObserver) {
    portfolioVideoObserver.disconnect();
    portfolioVideoObserver = null;
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
        const video = entry.target;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          playPortfolioVideo(video);
        } else {
          pausePortfolioVideo(video);
        }
      });
    },
    {
      threshold: [0.15, 0.35, 0.65],
      rootMargin: "0px 0px -10% 0px",
    }
  );

  portfolioVideos.forEach((video) => {
    if (!(video instanceof HTMLVideoElement)) {
      return;
    }

    video.muted = true;
    video.playsInline = true;
    portfolioVideoObserver.observe(video);
  });
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
const setMenuState = (isOpen) => {
  if (!menuToggle || !siteNav) {
    return;
  }

  siteNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen && mobileNavBreakpoint.matches);

  if (isOpen) {
    header?.classList.remove("is-hidden");
  }

  syncQuickDock(Math.max(window.scrollY, 0));
};
const closeMenu = () => setMenuState(false);
const scrollToPageTop = () => {
  window.scrollTo({
    top: 0,
    behavior: reducedMotionQuery.matches ? "auto" : "smooth",
  });
};
const setQuickDockState = (isOpen) => {
  if (!quickDock || !quickDockTrigger) {
    return;
  }

  quickDock.classList.toggle("is-open", isOpen);
  quickDockTrigger.setAttribute("aria-expanded", String(isOpen));
};
const closeQuickDockMenu = (temporarilySuspend = false) => {
  setQuickDockState(false);

  if (!quickDock) {
    return;
  }

  const activeElement = document.activeElement;

  if (activeElement instanceof HTMLElement && quickDock.contains(activeElement)) {
    activeElement.blur();
  }

  if (!temporarilySuspend) {
    return;
  }

  window.clearTimeout(quickDockSuspendTimer);
  quickDock.classList.add("is-suspended");
  quickDockSuspendTimer = window.setTimeout(() => {
    quickDock.classList.remove("is-suspended");
  }, 280);
};
const syncQuickDock = (scrollY) => {
  if (!quickDock) {
    return;
  }

  const menuIsOpen = siteNav?.classList.contains("is-open");
  const shouldShow = !menuIsOpen && scrollY > 140;
  quickDock.classList.toggle("is-visible", shouldShow);

  if (!shouldShow) {
    closeQuickDockMenu();
  }
};

if (menuToggle && siteNav) {
  let navTouchStartX = 0;
  let navTouchStartY = 0;
  let pageScrollTouchStartY = 0;

  menuToggle.addEventListener("click", () => {
    const isOpen = !siteNav.classList.contains("is-open");
    setMenuState(isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setNavHighlight();
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileNavBreakpoint.matches || !siteNav.classList.contains("is-open")) {
      return;
    }

    if (header?.contains(event.target)) {
      return;
    }

    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      closeMenu();
    }
  });

  siteNav.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      navTouchStartX = touch.clientX;
      navTouchStartY = touch.clientY;
    },
    { passive: true }
  );

  siteNav.addEventListener(
    "touchend",
    (event) => {
      if (!mobileNavBreakpoint.matches || !siteNav.classList.contains("is-open")) {
        return;
      }

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - navTouchStartX;
      const deltaY = touch.clientY - navTouchStartY;
      const horizontalSwipe = Math.abs(deltaX) > 70 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2;
      const upwardSwipe = deltaY < -70 && Math.abs(deltaY) > Math.abs(deltaX);

      if (horizontalSwipe || upwardSwipe) {
        closeMenu();
      }
    },
    { passive: true }
  );

  document.addEventListener(
    "touchstart",
    (event) => {
      if (!mobileNavBreakpoint.matches || !siteNav.classList.contains("is-open")) {
        return;
      }

      pageScrollTouchStartY = event.changedTouches[0].clientY;
    },
    { passive: true }
  );

  document.addEventListener(
    "touchmove",
    (event) => {
      if (!mobileNavBreakpoint.matches || !siteNav.classList.contains("is-open")) {
        return;
      }

      const deltaY = event.changedTouches[0].clientY - pageScrollTouchStartY;

      if (Math.abs(deltaY) > 12) {
        closeMenu();
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "wheel",
    (event) => {
      if (!mobileNavBreakpoint.matches || !siteNav.classList.contains("is-open")) {
        return;
      }

      if (Math.abs(event.deltaY) > Math.abs(event.deltaX) && Math.abs(event.deltaY) > 4) {
        closeMenu();
      }
    },
    { passive: true }
  );

  const handleViewportChange = () => {
    if (!mobileNavBreakpoint.matches) {
      closeMenu();
    }

    if (mobileNavBreakpoint.matches) {
      setNavHighlight();
      return;
    }

    if (highlightedNavLink) {
      syncNavIndicator(highlightedNavLink);
    }
  };

  if (typeof mobileNavBreakpoint.addEventListener === "function") {
    mobileNavBreakpoint.addEventListener("change", handleViewportChange);
  } else if (typeof mobileNavBreakpoint.addListener === "function") {
    mobileNavBreakpoint.addListener(handleViewportChange);
  }
}

if (siteNav && navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (!finePointerQuery.matches) {
        return;
      }

      setNavHighlight(link);
    });

    link.addEventListener("focus", () => {
      setNavHighlight(link);
    });

    link.addEventListener("click", () => {
      window.setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }, 0);
    });
  });

  siteNav.addEventListener("mouseleave", () => {
    if (!finePointerQuery.matches) {
      return;
    }

    setNavHighlight();
  });

  siteNav.addEventListener("focusout", (event) => {
    const nextFocusedElement = event.relatedTarget;

    if (nextFocusedElement instanceof Node && siteNav.contains(nextFocusedElement)) {
      return;
    }

    setNavHighlight();
  });

  window.addEventListener("resize", () => {
    if (!highlightedNavLink) {
      return;
    }

    syncNavIndicator(highlightedNavLink);
  });
}

if (portfolioVideoTriggers.length > 0 && videoDialog && videoDialogPlayer) {
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && videoDialog.classList.contains("is-open")) {
      closeVideoDialog();
    }
  });
}

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    closeMenu();
    closeQuickDockMenu(true);
    scrollToPageTop();
  });
}

if (quickDock && quickDockTrigger) {
  quickDockTrigger.addEventListener("click", (event) => {
    const isKeyboardTrigger = event.detail === 0;
    const isOpen = quickDock.classList.contains("is-open");

    if (isOpen) {
      closeQuickDockMenu(true);
      return;
    }

    if (finePointerQuery.matches && !isKeyboardTrigger) {
      return;
    }

    setQuickDockState(true);
  });

  quickDockActions?.querySelectorAll("a, button").forEach((action) => {
    action.addEventListener("click", () => {
      closeQuickDockMenu(true);
    });
  });

  document.addEventListener("click", (event) => {
    if (!quickDock.classList.contains("is-open")) {
      return;
    }

    if (quickDock.contains(event.target)) {
      return;
    }

    closeQuickDockMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && quickDock.classList.contains("is-open")) {
      closeQuickDockMenu();
    }
  });

  const handlePointerChange = () => {
    if (finePointerQuery.matches) {
      closeQuickDockMenu();
      if (highlightedNavLink) {
        syncNavIndicator(highlightedNavLink);
      }
      return;
    }

    setNavHighlight();
  };

  if (typeof finePointerQuery.addEventListener === "function") {
    finePointerQuery.addEventListener("change", handlePointerChange);
  } else if (typeof finePointerQuery.addListener === "function") {
    finePointerQuery.addListener(handlePointerChange);
  }
}

window.addEventListener("scroll", () => {
  if (!header) {
    syncQuickDock(Math.max(window.scrollY, 0));
    return;
  }

  const currentScrollY = Math.max(window.scrollY, 0);
  const scrollDelta = currentScrollY - lastScrollY;
  const menuIsOpen = siteNav?.classList.contains("is-open");

  header.classList.toggle("is-scrolled", currentScrollY > 12);
  syncQuickDock(currentScrollY);

  if (menuIsOpen && mobileNavBreakpoint.matches && Math.abs(scrollDelta) > 4) {
    closeMenu();
  }

  if (quickDock?.classList.contains("is-open") && Math.abs(scrollDelta) > 6) {
    closeQuickDockMenu();
  }

  if (currentScrollY <= 16 || menuIsOpen) {
    header.classList.remove("is-hidden");
  } else if (Math.abs(scrollDelta) > 6) {
    if (scrollDelta > 0 && currentScrollY > 140) {
      header.classList.add("is-hidden");
    } else if (scrollDelta < 0) {
      header.classList.remove("is-hidden");
    }
  }

  lastScrollY = currentScrollY;
});

if (quickDockTopAction) {
  quickDockTopAction.addEventListener("click", () => {
    scrollToPageTop();
  });
}

if (quickDock) {
  syncQuickDock(Math.max(window.scrollY, 0));
}

if (portfolioVideos.length > 0) {
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

  const handleMotionPreferenceChange = () => {
    syncPortfolioVideos();
  };

  if (typeof reducedMotionQuery.addEventListener === "function") {
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);
  } else if (typeof reducedMotionQuery.addListener === "function") {
    reducedMotionQuery.addListener(handleMotionPreferenceChange);
  }
}

if ("IntersectionObserver" in window) {
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
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

syncPortfolioVideos();
