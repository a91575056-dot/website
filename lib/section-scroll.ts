const SECTION_OFFSET = 96;

function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") {
    return "auto";
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function clearUrlHash() {
  if (typeof window === "undefined" || !window.location.hash) {
    return;
  }

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

export function scrollToSection(targetId: string, behavior: ScrollBehavior = getScrollBehavior()) {
  if (typeof window === "undefined") {
    return false;
  }

  if (!targetId || targetId === "top") {
    clearUrlHash();
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const target = document.getElementById(targetId);

  if (!target) {
    return false;
  }

  clearUrlHash();

  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - SECTION_OFFSET);
  window.scrollTo({ top, behavior });

  return true;
}
