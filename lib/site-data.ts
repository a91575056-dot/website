export const whatsappUrl =
  "https://api.whatsapp.com/message/SG2JWLAO726VK1?autoload=1&app_absent=0";

export const instagramUrl =
  "https://www.instagram.com/dionis.grecu?igsh=MW85eWY4bzZnaGdsbA%3D%3D&utm_source=qr";

export const emailAddress = "dioniswebstudio@gmail.com";

export const emailHref = `mailto:${emailAddress}`;

export const navItems = [
  { label: "Work", targetId: "portfolio" },
  { label: "Services", targetId: "services" },
  { label: "Contact", targetId: "contact" }
];

export const heroHighlights = [
  "Landing pages that explain the offer fast",
  "Business websites with a cleaner mobile layout",
  "Portfolio websites with stronger presentation"
];

export const heroBadges = [
  { label: "Built with", value: "Next.js / Astro / React" },
  { label: "Motion", value: "GSAP + Motion + Lenis" },
  { label: "Best for", value: "Landing / Business / Portfolio" }
];

export const trustStats = [
  {
    value: 24,
    suffix: "h",
    label: "reply window",
    description: "Fast answers on scope, timeline and setup."
  },
  {
    value: 4,
    suffix: "+",
    label: "stack options",
    description: "Next.js, Astro, React or a lighter static build."
  },
  {
    value: 375,
    suffix: "px",
    label: "mobile baseline",
    description: "Built from phone width first, then scaled up cleanly."
  }
];

export const proofItems = trustStats.map((item) => ({
  value: `${item.value}${item.suffix}`,
  label: item.label
}));

export const trustStrip = [
  "Clean hierarchy",
  "Mobile-first layout",
  "Fast contact path",
  "Responsive from 375px",
  "UI polish with motion"
];

export const services = [
  {
    icon: "Sparkles",
    eyebrow: "Landing pages",
    title: "Landing pages",
    href: "/landing-page-development",
    copy:
      "Clear offer, strong first impression and a contact flow that feels obvious from the first screen.",
    benefits: ["Clear offer", "Trust sections", "Fast contact"],
    footer: "Good for services, launches and paid traffic."
  },
  {
    icon: "Layers3",
    eyebrow: "Portfolio websites",
    title: "Portfolio websites",
    href: "/website-development",
    copy:
      "A cleaner way to show your work, services and positioning without the site feeling generic.",
    benefits: ["Selected work", "Services", "About"],
    footer: "Good for freelancers, consultants and small agencies."
  },
  {
    icon: "MonitorSmartphone",
    eyebrow: "Stack and motion",
    title: "Custom front-end builds",
    href: "/freelance-front-end-developer",
    copy:
      "Next.js, React with Vite, Astro or static HTML and Tailwind, with motion used only where it improves the experience.",
    benefits: ["Next.js", "Astro", "GSAP", "Framer Motion"],
    footer: "Best when you want a custom result instead of a page-builder look."
  },
  {
    icon: "Rocket",
    eyebrow: "Redesign and upgrades",
    title: "Website redesigns",
    href: "/website-development",
    copy:
      "If the current site feels dated, crowded or weak on mobile, I can rebuild the structure and refresh the front-end.",
    benefits: ["Cleaner UI", "Better mobile UX", "Modern refresh"],
    footer: "Best for websites that need a stronger first impression."
  }
];

export const portfolioItems = [
  {
    title: "Beauty Landing Page",
    label: "Landing page example",
    meta: "Beauty studio direction",
    duration: "00:24",
    copy: "A landing page focused on services, treatments, trust and a faster booking path for beauty businesses.",
    image: "/assets/portfolio-barber.jpg",
    video: "/assets/2026-02-09 21-31-55 (2).mp4",
    stack: ["Service sections", "Booking CTA", "Trust blocks"],
    result: "Good fit for beauty studio, salon, lashes, brows, skincare or appointment-based services."
  },
  {
    title: "Barber Shop Landing Page",
    label: "Landing page example",
    meta: "Barber shop direction",
    duration: "00:35",
    copy: "A landing page with prices, gallery, services and a clearer booking flow for barber shops.",
    image: "/assets/portfolio-barber.jpg",
    video: "/assets/portfolio-showcase-03.mp4",
    stack: ["Booking CTA", "Pricing", "Gallery"],
    result: "Good fit for barber shops, grooming studios and other appointment-based local businesses."
  }
];

export const processHighlights = [
  "Direct communication",
  "Clear scope and timeline",
  "Right stack for the project"
];

export const processSteps = [
  {
    step: "01",
    title: "Brief and direction",
    copy:
      "You send what the business does, the sections you need, a few references and the deadline. From there I shape the structure and contact path.",
    deliverable: "Clear scope, page structure and content direction",
    timeframe: "Same-day clarity"
  },
  {
    step: "02",
    title: "Layout and visual tone",
    copy:
      "I define hierarchy, section order, typography and UI style so the website feels calm, modern and readable.",
    deliverable: "Approved visual direction and layout",
    timeframe: "Fast first pass"
  },
  {
    step: "03",
    title: "Build in the chosen stack",
    copy:
      "The site is built in the framework that fits best, with libraries added only where they improve the result.",
    deliverable: "Responsive build with clean front-end implementation",
    timeframe: "Launch-ready code"
  },
  {
    step: "04",
    title: "Polish and handoff",
    copy:
      "After review, I handle the final adjustments so the website is ready to publish and easy to use on every device.",
    deliverable: "Final polish, fixes and handoff support",
    timeframe: "Quick close-out"
  }
];

export const socialLinks = [
  { label: "Email", href: emailHref },
  { label: "Instagram", href: instagramUrl },
  { label: "Fiverr", href: "https://www.fiverr.com/dgrecu011" },
  { label: "WhatsApp", href: whatsappUrl }
];

export const ctaPoints = [
  "Landing pages and business websites",
  "Portfolio websites for freelancers",
  "Mobile-first front-end with clean structure"
];

export const aboutPoints = [
  {
    title: "What I build",
    copy: "Landing pages, business websites and portfolio websites for businesses, freelancers and personal brands."
  },
  {
    title: "What matters",
    copy: "A clean first impression, good mobile experience and a clear way for visitors to contact you."
  },
  {
    title: "How I work",
    copy: "Direct communication, clear scope, the right stack for the project and clean front-end implementation."
  }
];

export const pricingBullets = ["Next.js / Astro / React", "Tailwind CSS + animation libraries", "Responsive from 375px"];

export const quoteChecklist = [
  "What the business or service is",
  "How many sections or pages you need",
  "Deadline, references and preferred framework if you have one"
];

export const faqItems = [
  {
    question: "What is the best fit for this service?",
    answer:
      "Landing pages, service business websites, freelancer portfolios and presentation websites for businesses that need a cleaner online presence."
  },
  {
    question: "What should I send to start?",
    answer:
      "Send the business type, required sections, timeline and a few references. That is enough to start with the right structure."
  },
  {
    question: "Which frameworks and libraries can you work with?",
    answer:
      "Depending on the project, I can build with Next.js, React with Vite, Astro or static HTML and Tailwind, and use GSAP, Framer Motion, Lenis and shadcn/ui where useful."
  }
];
