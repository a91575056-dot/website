const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteActions = document.querySelector(".site-actions");
const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sectionTargets = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const mobileNavQuery = window.matchMedia("(max-width: 720px)");
const saveData = Boolean(navigator.connection && navigator.connection.saveData);

body.classList.add("js-enabled");

const onMediaChange = (query, handler) => {
  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", handler);
    return;
  }

  if (typeof query.addListener === "function") {
    query.addListener(handler);
  }
};

const setNavState = (isOpen) => {
  if (!navToggle || !siteActions) {
    return;
  }

  body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
};

if (navToggle && siteActions) {
  navToggle.addEventListener("click", () => {
    setNavState(!body.classList.contains("nav-open"));
  });

  document.addEventListener("click", (event) => {
    if (!mobileNavQuery.matches || !body.classList.contains("nav-open")) {
      return;
    }

    if (header && !header.contains(event.target)) {
      setNavState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavState(false);
      navToggle.focus();
    }
  });

  onMediaChange(mobileNavQuery, (event) => {
    if (!event.matches) {
      setNavState(false);
    }
  });
}

const getScrollOffset = () => {
  if (!header) {
    return 24;
  }

  const headerRect = header.getBoundingClientRect();
  const headerStyles = window.getComputedStyle(header);
  const stickyOffset = headerStyles.position === "sticky" ? 20 : 12;

  return headerRect.height + stickyOffset;
};

const setActiveSectionLink = (sectionId) => {
  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;

    if (isActive) {
      link.setAttribute("aria-current", "page");
      return;
    }

    link.removeAttribute("aria-current");
  });
};

const syncHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const syncActiveSection = () => {
  if (!sectionTargets.length) {
    return;
  }

  const referenceY = window.scrollY + getScrollOffset() + window.innerHeight * 0.18;
  let activeSectionId = "";

  sectionTargets.forEach((section) => {
    if (section.offsetTop <= referenceY) {
      activeSectionId = section.id;
    }
  });

  setActiveSectionLink(activeSectionId);
};

let scrollUiFrame = 0;

const syncScrollUi = () => {
  syncHeaderState();
  syncActiveSection();
};

const requestScrollUiSync = () => {
  if (scrollUiFrame) {
    return;
  }

  scrollUiFrame = window.requestAnimationFrame(() => {
    scrollUiFrame = 0;
    syncScrollUi();
  });
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetSelector = link.getAttribute("href");

    if (!targetSelector || targetSelector === "#") {
      return;
    }

    const target = document.querySelector(targetSelector);

    if (!target) {
      return;
    }

    event.preventDefault();

    const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: reduceMotion.matches ? "auto" : "smooth",
    });

    history.replaceState(null, "", targetSelector);
    setActiveSectionLink(target.id);
    setNavState(false);
  });
});

syncScrollUi();

window.addEventListener("scroll", requestScrollUiSync, { passive: true });
window.addEventListener("resize", requestScrollUiSync);
window.addEventListener("load", requestScrollUiSync);

const interactiveButtons = document.querySelectorAll(".button, .header-cta, .nav-toggle");

if (finePointer.matches && !saveData) {
  interactiveButtons.forEach((button) => {
    button.classList.add("interactive-button");

    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      button.style.setProperty("--pointer-x", `${x}%`);
      button.style.setProperty("--pointer-y", `${y}%`);
      button.classList.add("is-hovered");
    });

    button.addEventListener("pointerleave", () => {
      button.classList.remove("is-hovered");
      button.classList.remove("is-pressed");
    });

    button.addEventListener("pointerdown", () => {
      button.classList.add("is-pressed");
    });

    button.addEventListener("pointerup", () => {
      button.classList.remove("is-pressed");
    });

    button.addEventListener("pointercancel", () => {
      button.classList.remove("is-pressed");
    });

    button.addEventListener("blur", () => {
      button.classList.remove("is-hovered");
      button.classList.remove("is-pressed");
    });
  });
}

const revealTargets = [
  ...document.querySelectorAll("main > .section:not(.hero)"),
  ...document.querySelectorAll(".panel-card, .info-card, .project-card, .about-point, .contact-form"),
].filter((element) => !element.closest(".hero"));

revealTargets.forEach((element, index) => {
  element.classList.add("reveal-target");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
});

if (reduceMotion.matches) {
  revealTargets.forEach((element) => {
    element.classList.add("is-visible");
  });
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealTargets.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach((element) => {
    element.classList.add("is-visible");
  });
}

const heroMetrics = [...document.querySelectorAll(".hero-metrics strong")];
const heroMetricsGroup = document.querySelector(".hero-metrics");

const animateMetricValue = (element, duration) => {
  const rawValue = element.textContent.trim();
  const valueMatch = rawValue.match(/^(\d+)(.*)$/);

  if (!valueMatch) {
    return;
  }

  const targetValue = Number(valueMatch[1]);
  const suffix = valueMatch[2];
  const startTime = performance.now();

  const tick = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - (1 - progress) * (1 - progress);
    const currentValue = Math.round(targetValue * easedProgress);

    element.textContent = `${currentValue}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(tick);
      return;
    }

    element.textContent = rawValue;
  };

  window.requestAnimationFrame(tick);
};

if (heroMetricsGroup && heroMetrics.length && !reduceMotion.matches && !saveData) {
  let metricsAnimated = false;

  const startMetricAnimation = () => {
    if (metricsAnimated) {
      return;
    }

    metricsAnimated = true;

    heroMetrics.forEach((metric, index) => {
      animateMetricValue(metric, 760 + index * 140);
    });
  };

  if ("IntersectionObserver" in window) {
    const metricsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          startMetricAnimation();
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.45,
      },
    );

    metricsObserver.observe(heroMetricsGroup);
  } else {
    startMetricAnimation();
  }
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const statusElement = contactForm.querySelector(".form-status");
  const directEmailLink = contactForm.querySelector(".contact-email-link");
  const validators = {
    name: (value) => {
      if (value.trim().length < 2) {
        return "Please enter your name.";
      }

      return "";
    },
    email: (value) => {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      return isValidEmail ? "" : "Enter a valid email address.";
    },
    projectType: (value) => {
      return value.trim() ? "" : "Select a project type.";
    },
    message: (value) => {
      if (value.trim().length < 20) {
        return "Please share at least a few project details.";
      }

      return "";
    },
  };

  const setFieldState = (field, message) => {
    const fieldWrapper = field.closest(".field");
    const errorElement = fieldWrapper?.querySelector(".field-error");

    fieldWrapper?.classList.toggle("is-invalid", Boolean(message));
    field.setAttribute("aria-invalid", String(Boolean(message)));

    if (errorElement) {
      errorElement.textContent = message;
    }
  };

  const validateField = (field) => {
    const validator = validators[field.name];

    if (!validator) {
      setFieldState(field, "");
      return true;
    }

    const message = validator(field.value);
    setFieldState(field, message);
    return !message;
  };

  const buildMailtoLink = (data) => {
    const subject = `Website inquiry from ${data.name}`;
    const bodyLines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Project Type: ${data.projectType}`,
      `Timeline: ${data.timeline || "Not specified"}`,
      "",
      "Project Details:",
      data.message,
    ];

    return `mailto:alex@mercerstudio.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n"),
    )}`;
  };

  contactForm.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") {
        validateField(field);
      }
    });

    field.addEventListener("blur", () => {
      validateField(field);
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = [...contactForm.querySelectorAll("input, select, textarea")];
    const isValid = fields.every((field) => validateField(field));

    if (!isValid) {
      statusElement.textContent = "Please fix the highlighted fields before sending.";
      statusElement.classList.remove("is-success");
      statusElement.classList.add("is-error");

      const firstInvalidField = contactForm.querySelector('[aria-invalid="true"]');
      firstInvalidField?.focus();
      return;
    }

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    const mailtoLink = buildMailtoLink(data);

    if (directEmailLink) {
      directEmailLink.setAttribute("href", mailtoLink);
    }

    statusElement.textContent = "Opening your email client with the project brief.";
    statusElement.classList.remove("is-error");
    statusElement.classList.add("is-success");

    window.location.href = mailtoLink;
  });
}
