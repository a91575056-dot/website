// Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navShell = document.querySelector("#nav-shell");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navLinksWrap = document.querySelector(".nav-links");
    const homeLinks = document.querySelectorAll('a[href="#home"]');
    const heroVisual = document.querySelector(".hero-visual");
    const contactForm = document.querySelector(".form-card");
    const contactFormProgressBar = document.querySelector("#contact-form-progress-bar");
    const contactFormProgressText = document.querySelector("#contact-form-progress-text");
    const backToTopBtn = document.querySelector("#back-to-top");
    const backToTopProgressBar = document.querySelector(".back-to-top-bar");
    const siteHeader = document.querySelector(".site-header");
    const serviceCards = document.querySelectorAll("[data-service-card]");
    const projectVideos = document.querySelectorAll(".project-video");
    const sections = document.querySelectorAll("header[id], main section[id]");
    const yearEl = document.querySelector("#year");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const backToTopCircumference = 2 * Math.PI * 19;

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    document.body.classList.add("is-ready");

    if (menuToggle && navShell) {
      menuToggle.addEventListener("click", () => {
        const isOpen = navShell.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.forEach((item) => item.classList.remove("active"));
          link.classList.add("active");
          navShell.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
          document.body.classList.remove("menu-open");
          requestAnimationFrame(updateNavIndicator);
        });
      });

      document.addEventListener("click", (event) => {
        if (!navShell.classList.contains("open")) return;
        const target = event.target;
        if (!(target instanceof Element)) return;
        if (navShell.contains(target) || menuToggle.contains(target)) return;

        navShell.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });

      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !navShell.classList.contains("open")) return;
        navShell.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    }

    // Ensure Home links always return to page top, including the Dionis Web Studio logo.
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
        if (navShell && menuToggle) {
          navShell.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
          document.body.classList.remove("menu-open");
        }
      });
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const setupRevealAnimations = () => {
      const revealTargets = document.querySelectorAll(
        ".hero .eyebrow, .hero-title, .hero-copy, .hero-actions, .hero-quick-note, .hero-trust li, .hero-kpi, .hero-visual, .visual-top, .visual-box, .visual-pipeline span, .hero-float, .hero-mini-projects, .contact-badges span, .contact-card-head, .contact-availability, .contact-item, .contact-actions .btn, .form-head, .form-progress-wrap, .section .eyebrow, .section-title, .section-lead, .services-mini-stats span, .card, .final-cta-card, .footer-shell"
      );

      revealTargets.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${(index % 8) * 55}ms`);
      });

      if (reduceMotion || !("IntersectionObserver" in window)) {
        revealTargets.forEach((element) => element.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.14,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      revealTargets.forEach((element) => observer.observe(element));
    };

    const setupCardTiltEffects = () => {
      if (reduceMotion || window.matchMedia("(hover: none)").matches) return;

      const tiltCards = document.querySelectorAll(
        ".service-card, .step-card, .testimonial-card, .benefits-proof, .benefits-list-card"
      );

      tiltCards.forEach((card) => {
        card.dataset.tilt = "true";

        card.addEventListener("pointermove", (event) => {
          if (event.pointerType === "touch") return;
          const rect = card.getBoundingClientRect();
          const ratioX = (event.clientX - rect.left) / rect.width;
          const ratioY = (event.clientY - rect.top) / rect.height;
          const rotateY = (ratioX - 0.5) * 7;
          const rotateX = (0.5 - ratioY) * 7;

          card.style.transform = `translateY(-7px) perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
          card.style.boxShadow = "0 24px 44px rgba(17, 38, 72, 0.2)";
        });

        card.addEventListener("pointerleave", () => {
          card.style.removeProperty("transform");
          card.style.removeProperty("box-shadow");
        });
      });
    };

    const setupHeroVisualParallax = () => {
      if (!heroVisual || reduceMotion || window.matchMedia("(hover: none)").matches) return;

      heroVisual.addEventListener("pointermove", (event) => {
        if (event.pointerType === "touch") return;

        const rect = heroVisual.getBoundingClientRect();
        const ratioX = (event.clientX - rect.left) / rect.width;
        const ratioY = (event.clientY - rect.top) / rect.height;
        const rotateY = (ratioX - 0.5) * 6;
        const rotateX = (0.5 - ratioY) * 6;

        heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        heroVisual.style.boxShadow = "0 40px 78px rgba(11, 28, 53, 0.3)";
      });

      heroVisual.addEventListener("pointerleave", () => {
        heroVisual.style.removeProperty("transform");
        heroVisual.style.removeProperty("box-shadow");
      });
    };

    const setupServiceCardInteractions = () => {
      if (!serviceCards.length) return;

      const cards = Array.from(serviceCards);
      const setActiveCard = (activeCard) => {
        cards.forEach((card) => {
          card.classList.toggle("is-active", card === activeCard);
        });
      };

      cards.forEach((card, index) => {
        if (index === 0 && !cards.some((item) => item.classList.contains("is-active"))) {
          card.classList.add("is-active");
        }

        card.addEventListener("mouseenter", () => {
          if (!window.matchMedia("(hover: hover)").matches) return;
          setActiveCard(card);
        });

        card.addEventListener("focus", () => {
          setActiveCard(card);
        });

        card.addEventListener("click", (event) => {
          const target = event.target;
          if (target instanceof Element && target.closest("a")) return;
          setActiveCard(card);
        });

        card.addEventListener("keydown", (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          setActiveCard(card);
        });
      });
    };

    const setupPortfolioVideoPlayback = () => {
      if (!projectVideos.length) return;

      const videos = Array.from(projectVideos);

      videos.forEach((video) => {
        video.defaultPlaybackRate = 1;
        video.playbackRate = 1;
      });

      const tryPlay = async (video) => {
        try {
          await video.play();
        } catch {
          // Autoplay can still be blocked in some browser states.
        }
      };

      let activeVideo = videos[0] ?? null;

      const setActiveVideo = (nextVideo) => {
        activeVideo = nextVideo;
        videos.forEach((video) => {
          const isActive = video === nextVideo;
          video.dataset.active = String(isActive);
          if (!isActive) {
            video.pause();
          }
        });

        if (nextVideo && nextVideo.dataset.inView === "true") {
          void tryPlay(nextVideo);
        }
      };

      if (!("IntersectionObserver" in window)) {
        if (activeVideo) {
          activeVideo.preload = "auto";
          void tryPlay(activeVideo);
        }
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target;
            if (!(target instanceof HTMLVideoElement)) return;

            const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.28;
            target.dataset.inView = String(isVisible);

            if (isVisible && target === activeVideo) {
              target.preload = "auto";
              void tryPlay(target);
            } else {
              target.pause();
            }
          });
        },
        {
          threshold: [0, 0.28, 0.55],
          rootMargin: "120px 0px 120px 0px",
        }
      );

      videos.forEach((video) => {
        video.addEventListener("canplay", () => {
          if (video === activeVideo && video.paused) {
            void tryPlay(video);
          }
        });

        const card = video.closest(".project-card");
        if (card) {
          card.addEventListener("mouseenter", () => {
            if (window.matchMedia("(hover: hover)").matches) {
              setActiveVideo(video);
            }
          });

          card.addEventListener("focusin", () => {
            setActiveVideo(video);
          });

          card.addEventListener("click", () => {
            setActiveVideo(video);
          });
        }

        observer.observe(video);
      });

      if (activeVideo) {
        setActiveVideo(activeVideo);
      }
    };

    const setupContactFormProgress = () => {
      if (!contactForm || !contactFormProgressBar || !contactFormProgressText) return;

      const requiredFields = Array.from(contactForm.querySelectorAll("[required]"));
      if (!requiredFields.length) return;

      const updateProgress = () => {
        const completedFields = requiredFields.filter((field) => {
          const value = field.value.trim();
          return value.length > 0;
        }).length;

        const percent = Math.round((completedFields / requiredFields.length) * 100);
        contactFormProgressBar.style.width = `${percent}%`;
        contactFormProgressText.textContent = `${percent}%`;
      };

      requiredFields.forEach((field) => {
        field.addEventListener("input", updateProgress);
        field.addEventListener("change", updateProgress);
      });

      updateProgress();
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

    // Update active nav link on scroll
    const setActiveLink = () => {
      const y = window.scrollY + 110;
      let activeId = "home";

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (!id) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (y >= top && y < bottom) {
          activeId = id;
        }
      });

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("active", isActive);
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

    const onScroll = () => {
      setActiveLink();
      updateBackToTop();
      updateHeaderState();
    };

    setupRevealAnimations();
    setupCardTiltEffects();
    setupHeroVisualParallax();
    setupServiceCardInteractions();
    setupPortfolioVideoPlayback();
    setupContactFormProgress();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateNavIndicator);
    onScroll();
