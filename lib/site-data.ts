export const whatsappUrl =
  "https://api.whatsapp.com/message/SG2JWLAO726VK1?autoload=1&app_absent=0";

export const instagramUrl =
  "https://www.instagram.com/dionis.grecu?igsh=MW85eWY4bzZnaGdsbA%3D%3D&utm_source=qr";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Examples", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export const heroHighlights = [
  "Next.js, Astro, React / Vite",
  "Tailwind CSS, GSAP, Framer Motion, Lenis",
  "Landing pages, business websites, portfolio sites"
];

export const heroBadges = [
  { label: "Frameworks", value: "Next.js / Astro / React" },
  { label: "Libraries", value: "GSAP + Motion + Lenis" },
  { label: "Best fit", value: "Business / Portfolio / Landing" }
];

export const trustStats = [
  {
    value: 24,
    suffix: "h",
    label: "average reply window",
    description: "Quick answers on scope, timeline and the right setup for the project."
  },
  {
    value: 4,
    suffix: "+",
    label: "framework options",
    description: "Next.js, React with Vite, Astro or a static HTML and Tailwind setup, depending on what the project needs."
  },
  {
    value: 375,
    suffix: "px",
    label: "mobile-first baseline",
    description: "Layouts are built from phone width first, then scaled cleanly to tablet and desktop."
  }
];

export const proofItems = trustStats.map((item) => ({
  value: `${item.value}${item.suffix}`,
  label: item.label
}));

export const trustStrip = [
  "Auto service websites",
  "Barbershop and salon pages",
  "Restaurant and menu websites",
  "Personal brand portfolios",
  "Next.js / Astro / React / Tailwind"
];

export const services = [
  {
    icon: "Sparkles",
    eyebrow: "Business websites",
    title: "Landing pages and business websites built to look clear, modern and easy to trust.",
    copy:
      "Good for local businesses, service providers and teams that need a serious online presence, a clear offer and a simple path to contact.",
    benefits: ["Service sections", "Lead form or WhatsApp", "Mobile-first structure"],
    footer: "Examples: auto service, clinic, restaurant, salon, consulting."
  },
  {
    icon: "Layers3",
    eyebrow: "Portfolio websites",
    title: "Portfolio and personal brand websites for freelancers, creators and small agencies.",
    copy:
      "A clean way to present services, selected work, testimonials and contact details without the site feeling generic or outdated.",
    benefits: ["Projects and case studies", "About and services", "Fast presentation flow"],
    footer: "Examples: designer, marketer, agency, consultant, creator."
  },
  {
    icon: "MonitorSmartphone",
    eyebrow: "Frameworks and stack",
    title: "Built in the setup that fits the project: Next.js, React with Vite, Astro or static HTML and Tailwind.",
    copy:
      "For UI and animation I can work with Tailwind CSS, GSAP, Framer Motion, Lenis, shadcn/ui and lightweight custom components where needed.",
    benefits: ["Next.js", "Astro", "GSAP", "Framer Motion"],
    footer: "Useful when you need a custom build instead of a page builder."
  },
  {
    icon: "Rocket",
    eyebrow: "Redesign and upgrades",
    title: "Rebuilds, refreshes and front-end upgrades for websites that already exist but need a better result.",
    copy:
      "If the current site feels old, crowded or weak on mobile, I can redesign the structure, modernize the UI and improve the overall presentation.",
    benefits: ["Cleaner UI", "Better mobile UX", "Modern front-end refresh"],
    footer: "Best for sites that need a more professional first impression."
  }
];

export const portfolioItems = [
  {
    title: "Auto Service Website",
    label: "Business website example",
    meta: "Example for local services",
    duration: "00:24",
    copy:
      "A website structure focused on services, trust sections, quote requests and a fast contact path for local businesses.",
    video: "/assets/portfolio-showcase-01.mp4",
    stack: ["Service list", "Quote CTA", "Trust and reviews"],
    result: "Good fit for auto service, detailing, repair, cleaning or home services."
  },
  {
    title: "Agency or Freelancer Website",
    label: "Portfolio website example",
    meta: "Example for services and positioning",
    duration: "00:36",
    copy:
      "A service-focused website that presents what you do, selected work, pricing direction and a clear contact flow.",
    video: "/assets/portfolio-showcase-02.mp4",
    stack: ["Services", "Work examples", "Contact section"],
    result: "Good fit for agencies, consultants, freelancers and personal brands."
  },
  {
    title: "Barbershop or Salon Website",
    label: "Booking website example",
    meta: "Example for appointments and local traffic",
    duration: "00:35",
    copy:
      "A presentation website with services, prices, gallery, booking CTA and a stronger visual identity for local service businesses.",
    video: "/assets/portfolio-showcase-03.mp4",
    stack: ["Booking CTA", "Pricing", "Gallery"],
    result: "Good fit for barber, salon, beauty studio, dental clinic or appointment-based businesses."
  }
];

export const processHighlights = [
  "Direct freelancer communication",
  "Clear scope and timeline",
  "Framework chosen by project"
];

export const processSteps = [
  {
    step: "01",
    title: "Brief, business type and examples",
    copy:
      "You send what the business does, what sections you need, a few references and the deadline. From there I outline the right structure and contact flow.",
    deliverable: "Clear scope, page structure and content direction",
    timeframe: "Same-day clarity"
  },
  {
    step: "02",
    title: "Layout and visual direction",
    copy:
      "I shape the hierarchy, section order, typography and UI style so the website looks modern, readable and consistent on mobile and desktop.",
    deliverable: "Approved visual direction and section layout",
    timeframe: "Fast first pass"
  },
  {
    step: "03",
    title: "Development in the chosen stack",
    copy:
      "The site is built in the framework that fits best: Next.js, React with Vite, Astro or static HTML and Tailwind, with libraries added only when useful.",
    deliverable: "Responsive build with clean front-end implementation",
    timeframe: "Launch-ready code"
  },
  {
    step: "04",
    title: "Review, adjustments and handoff",
    copy:
      "After review, I handle the final adjustments so the website is ready to publish and easy for visitors to use on every device.",
    deliverable: "Final polish, fixes and handoff support",
    timeframe: "Quick close-out"
  }
];

export const socialLinks = [
  { label: "Instagram", href: instagramUrl },
  { label: "Fiverr", href: "https://www.fiverr.com/dgrecu011" },
  { label: "WhatsApp", href: whatsappUrl }
];

export const ctaPoints = [
  "Next.js, React / Vite, Astro or static HTML",
  "Tailwind CSS, GSAP, Framer Motion, Lenis, shadcn/ui",
  "Examples: auto service, salon, restaurant, portfolio, agency"
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
