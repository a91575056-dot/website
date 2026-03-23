import type { Locale } from "@/lib/i18n";

export const whatsappUrl =
  "https://api.whatsapp.com/message/SG2JWLAO726VK1?autoload=1&app_absent=0";

export const instagramUrl =
  "https://www.instagram.com/dionis.grecu?igsh=MW85eWY4bzZnaGdsbA%3D%3D&utm_source=qr";

export const emailAddress = "dioniswebstudio@gmail.com";

export const emailHref = `mailto:${emailAddress}`;

export type NavItem = {
  label: string;
  targetId: string;
};

export type TrustStat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export type ServiceCard = {
  eyebrow: string;
  title: string;
  href: string;
  copy: string;
  benefits: string[];
  footer: string;
};

export type PortfolioItem = {
  title: string;
  label: string;
  meta: string;
  duration: string;
  copy: string;
  image: string;
  video: string;
  stack: string[];
  result: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  copy: string;
  deliverable: string;
  timeframe: string;
};

export type SocialLink = {
  id: "email" | "instagram" | "fiverr" | "whatsapp";
  label: string;
  href: string;
};

type SiteData = {
  brandRole: string;
  navItems: NavItem[];
  header: {
    ctaLabel: string;
    openNavigationLabel: string;
    mobileTitle: string;
    mobileDescription: string;
    whatsappLabel: string;
    sheetTitle: string;
    sheetDescription: string;
    languageSwitcherLabelPrefix: string;
  };
  hero: {
    pillars: string[];
    kicker: string;
    titleLines: [string, string];
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    cardTitle: string;
    cardCopy: string;
    availability: string;
    bestForLabel: string;
    bestForCopy: string;
    buildStyleLabel: string;
    buildStyleCopy: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    copy: string;
    stats: TrustStat[];
    strip: string[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    copy: string;
    openVideoPreview: string;
    requestThisStyle: string;
    videoPreviewSuffix: string;
    fullscreenPreviewPrefix: string;
    fullscreenPreviewHint: string;
    items: PortfolioItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    copy: string;
    cards: ServiceCard[];
    learnMoreLabel: string;
    askLabel: string;
  };
  process: {
    eyebrow: string;
    title: string;
    copy: string;
    highlights: string[];
    steps: ProcessStep[];
    stepLabel: string;
    deliverableLabel: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    copy: string;
    points: string[];
    fastestWayLabel: string;
    whatsappTitle: string;
    whatsappCopy: string;
    primaryButton: string;
    secondaryButton: string;
    emailPrefix: string;
  };
  footer: {
    description: string;
    stackLabel: string;
  };
  socialLinks: SocialLink[];
  whatsappFloatLabel: string;
};

const siteDataByLocale: Record<Locale, SiteData> = {
  en: {
    brandRole: "Freelance web developer",
    navItems: [
      { label: "Work", targetId: "portfolio" },
      { label: "Services", targetId: "services" },
      { label: "Contact", targetId: "contact" }
    ],
    header: {
      ctaLabel: "Start a project",
      openNavigationLabel: "Open navigation",
      mobileTitle: "Freelance web developer",
      mobileDescription: "Landing pages, basic websites and portfolio websites with clear structure and a better mobile experience.",
      whatsappLabel: "Talk on WhatsApp",
      sheetTitle: "Mobile navigation",
      sheetDescription: "Open the main navigation and contact actions for the website.",
      languageSwitcherLabelPrefix: "Switch site language to"
    },
    hero: {
      pillars: ["Freelancer", "Starting from 40 USD", "Mobile-first", "Cleaner contact path"],
      kicker: "Freelancer for landing pages and basic websites",
      titleLines: ["Landing pages and basic websites", "that explain fast and feel better on mobile."],
      copy:
        "I work as a freelancer building landing pages and basic websites starting from 40 USD, with a clean structure, stronger presentation and an obvious contact path from the first screen.",
      primaryCta: "Start a project",
      secondaryCta: "See selected work",
      cardTitle: "Freelance web developer for landing pages and basic websites.",
      cardCopy:
        "Simple websites with a cleaner structure, stronger presentation and a better mobile experience from the first screen.",
      availability: "Freelancer • Projects from 40 USD",
      bestForLabel: "Best for",
      bestForCopy: "Landing pages, basic websites and personal brands that need a better first impression.",
      buildStyleLabel: "Build style",
      buildStyleCopy: "Next.js, React and Tailwind with motion only where it improves the result."
    },
    trust: {
      eyebrow: "What You Get",
      title: "Clear structure, mobile-first layout and a front-end stack chosen for the project.",
      copy:
        "The website should look professional, load well on phones, feel easy to use and make it simple for visitors to contact you.",
      stats: [
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
      ],
      strip: ["Clean hierarchy", "Mobile-first layout", "Fast contact path", "Responsive from 375px", "UI polish with motion"]
    },
    portfolio: {
      eyebrow: "Examples",
      title: "A few concrete website examples for the kinds of projects I usually take.",
      copy:
        "These are example directions for real website types. I can adapt the structure, design and framework to your business, niche and content.",
      openVideoPreview: "Open video preview",
      requestThisStyle: "Request this style",
      videoPreviewSuffix: "video preview",
      fullscreenPreviewPrefix: "Full-screen portfolio video preview for",
      fullscreenPreviewHint: "Tap or click outside to close.",
      items: [
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
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Freelance website services for landing pages and basic websites.",
      copy: "Landing pages and basic websites start from 40 USD, with the scope adjusted to the project, content and stack.",
      cards: [
        {
          eyebrow: "Landing pages",
          title: "Landing pages",
          href: "/landing-page-development",
          copy: "Clear offer, strong first impression and a contact flow that feels obvious from the first screen.",
          benefits: ["Clear offer", "Trust sections", "Fast contact"],
          footer: "Good for services, launches and paid traffic."
        },
        {
          eyebrow: "Basic websites",
          title: "Basic websites",
          href: "/website-development",
          copy: "A simple multi-section website to show your services, business details and contact information without the site feeling generic.",
          benefits: ["Home", "Services", "Contact"],
          footer: "Good for freelancers, local businesses and small teams."
        },
        {
          eyebrow: "Stack and motion",
          title: "Custom front-end builds",
          href: "/freelance-front-end-developer",
          copy: "Next.js, React with Vite, Astro or static HTML and Tailwind, with motion used only where it improves the experience.",
          benefits: ["Next.js", "Astro", "GSAP", "Framer Motion"],
          footer: "Best when you want a custom result instead of a page-builder look."
        },
        {
          eyebrow: "Redesign and upgrades",
          title: "Website redesigns",
          href: "/website-development",
          copy: "If the current site feels dated, crowded or weak on mobile, I can rebuild the structure and refresh the front-end.",
          benefits: ["Cleaner UI", "Better mobile UX", "Modern refresh"],
          footer: "Best for websites that need a stronger first impression."
        }
      ],
      learnMoreLabel: "Learn more",
      askLabel: "Ask"
    },
    process: {
      eyebrow: "Process",
      title: "Simple process, clear scope and the right framework from the start.",
      copy:
        "We decide what the website needs early: sections, style, content direction and development setup. Then I build and refine it until it is ready to publish.",
      highlights: ["Direct communication", "Clear scope and timeline", "Right stack for the project"],
      steps: [
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
          copy: "I define hierarchy, section order, typography and UI style so the website feels calm, modern and readable.",
          deliverable: "Approved visual direction and layout",
          timeframe: "Fast first pass"
        },
        {
          step: "03",
          title: "Build in the chosen stack",
          copy: "The site is built in the framework that fits best, with libraries added only where they improve the result.",
          deliverable: "Responsive build with clean front-end implementation",
          timeframe: "Launch-ready code"
        },
        {
          step: "04",
          title: "Polish and handoff",
          copy: "After review, I handle the final adjustments so the website is ready to publish and easy to use on every device.",
          deliverable: "Final polish, fixes and handoff support",
          timeframe: "Quick close-out"
        }
      ],
      stepLabel: "Step",
      deliverableLabel: "Deliverable"
    },
    cta: {
      eyebrow: "Contact",
      title: "Need a website for your business, service or personal brand?",
      copy:
        "Send what the business does, what pages or sections you need and a few references. I can also advise the right setup: Next.js, React with Vite, Astro or a lighter static build.",
      points: [
        "Landing pages and basic websites from 40 USD",
        "Portfolio websites for freelancers",
        "Mobile-first front-end with clean structure"
      ],
      fastestWayLabel: "Fastest way to talk",
      whatsappTitle: "WhatsApp",
      whatsappCopy: "Best for discussing price, timeline, project scope and which framework makes sense for the website.",
      primaryButton: "Send project details",
      secondaryButton: "See Instagram",
      emailPrefix: "Prefer email?"
    },
    footer: {
      description: "Landing pages, basic websites and portfolio websites built for businesses, freelancers and personal brands.",
      stackLabel: "Next.js, Astro, React/Vite, Tailwind CSS, GSAP, Framer Motion"
    },
    socialLinks: [
      { id: "email", label: "Email", href: emailHref },
      { id: "instagram", label: "Instagram", href: instagramUrl },
      { id: "fiverr", label: "Fiverr", href: "https://www.fiverr.com/dgrecu011" },
      { id: "whatsapp", label: "WhatsApp", href: whatsappUrl }
    ],
    whatsappFloatLabel: "Chat on WhatsApp"
  },
  ro: {
    brandRole: "Freelancer web developer",
    navItems: [
      { label: "Lucrări", targetId: "portfolio" },
      { label: "Servicii", targetId: "services" },
      { label: "Contact", targetId: "contact" }
    ],
    header: {
      ctaLabel: "Începe un proiect",
      openNavigationLabel: "Deschide navigarea",
      mobileTitle: "Freelancer web developer",
      mobileDescription: "Landing page-uri, site-uri basic și site-uri de portofoliu cu structură clară și experiență mai bună pe mobil.",
      whatsappLabel: "Vorbește pe WhatsApp",
      sheetTitle: "Navigare mobilă",
      sheetDescription: "Deschide navigarea principală și acțiunile de contact ale website-ului.",
      languageSwitcherLabelPrefix: "Schimbă limba site-ului în"
    },
    hero: {
      pillars: ["Freelancer", "De la 40 USD", "Mobile-first", "Contact clar"],
      kicker: "Freelancer pentru landing page-uri și site-uri basic",
      titleLines: ["Landing page-uri și site-uri basic", "care explică rapid și arată mai bine pe mobil."],
      copy:
        "Lucrez ca freelancer și construiesc landing page-uri și site-uri basic de la 40 USD, cu structură clară, prezentare mai bună și un pas de contact evident din primul ecran.",
      primaryCta: "Începe un proiect",
      secondaryCta: "Vezi lucrări",
      cardTitle: "Freelance web developer pentru landing page-uri și site-uri basic.",
      cardCopy: "Site-uri simple, cu structură mai clară, prezentare mai bună și experiență mai bună pe mobil din primul ecran.",
      availability: "Freelancer • Proiecte de la 40 USD",
      bestForLabel: "Potrivit pentru",
      bestForCopy: "Landing page-uri, site-uri basic și branduri personale care au nevoie de o primă impresie mai bună.",
      buildStyleLabel: "Tehnologii",
      buildStyleCopy: "Next.js, React și Tailwind, cu animație doar unde îmbunătățește rezultatul."
    },
    trust: {
      eyebrow: "Ce primești",
      title: "Structură clară, layout mobile-first și un stack ales pentru proiect.",
      copy:
        "Site-ul trebuie să arate profesionist, să se încarce bine pe telefon, să fie ușor de folosit și să facă simplu pasul spre contact.",
      stats: [
        {
          value: 24,
          suffix: "h",
          label: "timp de răspuns",
          description: "Răspuns rapid despre scope, termen și setup."
        },
        {
          value: 4,
          suffix: "+",
          label: "opțiuni de stack",
          description: "Next.js, Astro, React sau un build static mai ușor."
        },
        {
          value: 375,
          suffix: "px",
          label: "bază mobile",
          description: "Construit de la lățimea telefonului și scalat curat mai sus."
        }
      ],
      strip: ["Ierarhie clară", "Layout mobile-first", "Contact rapid", "Responsive de la 375px", "Motion folosit cu măsură"]
    },
    portfolio: {
      eyebrow: "Exemple",
      title: "Câteva exemple concrete de site-uri pentru tipurile de proiecte pe care le iau de obicei.",
      copy:
        "Acestea sunt direcții de exemplu pentru tipuri reale de site-uri. Pot adapta structura, designul și framework-ul pentru businessul, nișa și conținutul tău.",
      openVideoPreview: "Vezi preview video",
      requestThisStyle: "Cer stilul acesta",
      videoPreviewSuffix: "preview video",
      fullscreenPreviewPrefix: "Preview video fullscreen pentru",
      fullscreenPreviewHint: "Apasă în afară pentru a închide.",
      items: [
        {
          title: "Landing Page Beauty",
          label: "Exemplu de landing page",
          meta: "Direcție pentru studio beauty",
          duration: "00:24",
          copy: "Un landing page axat pe servicii, tratamente, încredere și un traseu mai rapid spre programare pentru businessuri beauty.",
          image: "/assets/portfolio-barber.jpg",
          video: "/assets/2026-02-09 21-31-55 (2).mp4",
          stack: ["Secțiuni de servicii", "CTA pentru programare", "Blocuri de încredere"],
          result: "Potrivit pentru studio beauty, salon, lashes, brows, skincare sau alte servicii pe bază de programare."
        },
        {
          title: "Landing Page Barber Shop",
          label: "Exemplu de landing page",
          meta: "Direcție pentru barber shop",
          duration: "00:35",
          copy: "Un landing page cu prețuri, galerie, servicii și un flow mai clar de programare pentru barber shop-uri.",
          image: "/assets/portfolio-barber.jpg",
          video: "/assets/portfolio-showcase-03.mp4",
          stack: ["CTA programare", "Prețuri", "Galerie"],
          result: "Potrivit pentru barber shop-uri, studiouri de grooming și alte businessuri locale bazate pe programări."
        }
      ]
    },
    services: {
      eyebrow: "Servicii",
      title: "Servicii freelance pentru landing page-uri și site-uri basic.",
      copy: "Landing page-urile și site-urile basic pornesc de la 40 USD, iar scope-ul se ajustează după proiect, conținut și stack.",
      cards: [
        {
          eyebrow: "Landing page-uri",
          title: "Landing page-uri",
          href: "/landing-page-development",
          copy: "Ofertă clară, primă impresie puternică și un flow de contact care pare evident din primul ecran.",
          benefits: ["Ofertă clară", "Secțiuni de încredere", "Contact rapid"],
          footer: "Bun pentru servicii, lansări și trafic plătit."
        },
        {
          eyebrow: "Site-uri basic",
          title: "Site-uri basic",
          href: "/website-development",
          copy: "Un site simplu, cu mai multe secțiuni, pentru a arăta serviciile, detaliile businessului și contactul fără să pară generic.",
          benefits: ["Acasă", "Servicii", "Contact"],
          footer: "Bun pentru freelanceri, businessuri locale și echipe mici."
        },
        {
          eyebrow: "Stack și motion",
          title: "Build-uri front-end custom",
          href: "/freelance-front-end-developer",
          copy: "Next.js, React cu Vite, Astro sau HTML static cu Tailwind, cu motion folosit doar unde îmbunătățește experiența.",
          benefits: ["Next.js", "Astro", "GSAP", "Framer Motion"],
          footer: "Cel mai bun când vrei un rezultat custom, nu aspect de page builder."
        },
        {
          eyebrow: "Redesign și upgrade",
          title: "Redesign de website",
          href: "/website-development",
          copy: "Dacă site-ul actual pare vechi, încărcat sau slab pe mobil, pot reconstrui structura și refresh-ui front-end-ul.",
          benefits: ["UI mai curat", "UX mai bun pe mobil", "Refresh modern"],
          footer: "Bun pentru site-uri care au nevoie de o primă impresie mai puternică."
        }
      ],
      learnMoreLabel: "Vezi detalii",
      askLabel: "Întreabă"
    },
    process: {
      eyebrow: "Proces",
      title: "Proces simplu, scope clar și framework-ul potrivit de la început.",
      copy:
        "Stabilim devreme ce are nevoie site-ul: secțiuni, stil, direcție de conținut și setup de dezvoltare. Apoi îl construiesc și îl finisez până e gata de publicare.",
      highlights: ["Comunicare directă", "Scope și termen clar", "Stack potrivit pentru proiect"],
      steps: [
        {
          step: "01",
          title: "Brief și direcție",
          copy:
            "Îmi trimiți ce face businessul, ce secțiuni ai nevoie, câteva referințe și termenul. De acolo definesc structura și traseul spre contact.",
          deliverable: "Scope clar, structură de pagină și direcție de conținut",
          timeframe: "Claritate în aceeași zi"
        },
        {
          step: "02",
          title: "Layout și direcție vizuală",
          copy: "Definim ierarhia, ordinea secțiunilor, tipografia și stilul UI ca site-ul să se simtă calm, modern și ușor de citit.",
          deliverable: "Direcție vizuală și layout aprobat",
          timeframe: "Primă variantă rapidă"
        },
        {
          step: "03",
          title: "Build în stack-ul ales",
          copy: "Site-ul este construit în framework-ul care se potrivește cel mai bine, cu librării adăugate doar unde îmbunătățesc rezultatul.",
          deliverable: "Build responsive cu implementare front-end curată",
          timeframe: "Cod gata de lansare"
        },
        {
          step: "04",
          title: "Polish și predare",
          copy: "După review, fac ajustările finale astfel încât site-ul să fie gata de publicare și ușor de folosit pe orice device.",
          deliverable: "Polish final, fixuri și suport la predare",
          timeframe: "Închidere rapidă"
        }
      ],
      stepLabel: "Pasul",
      deliverableLabel: "Livrabil"
    },
    cta: {
      eyebrow: "Contact",
      title: "Ai nevoie de un site pentru businessul, serviciul sau brandul tău personal?",
      copy:
        "Trimite ce face businessul, ce pagini sau secțiuni ai nevoie și câteva referințe. Te pot ajuta și cu alegerea setup-ului potrivit: Next.js, React cu Vite, Astro sau un build static mai ușor.",
      points: [
        "Landing page-uri și site-uri basic de la 40 USD",
        "Site-uri de portofoliu pentru freelanceri",
        "Front-end mobile-first cu structură curată"
      ],
      fastestWayLabel: "Cel mai rapid mod de a vorbi",
      whatsappTitle: "WhatsApp",
      whatsappCopy: "Cel mai bun pentru a discuta prețul, termenul, scope-ul proiectului și ce framework are sens pentru site.",
      primaryButton: "Trimite detaliile proiectului",
      secondaryButton: "Vezi Instagram",
      emailPrefix: "Preferi email?"
    },
    footer: {
      description: "Landing page-uri, site-uri basic și site-uri de portofoliu construite pentru businessuri, freelanceri și branduri personale.",
      stackLabel: "Next.js, Astro, React/Vite, Tailwind CSS, GSAP, Framer Motion"
    },
    socialLinks: [
      { id: "email", label: "Email", href: emailHref },
      { id: "instagram", label: "Instagram", href: instagramUrl },
      { id: "fiverr", label: "Fiverr", href: "https://www.fiverr.com/dgrecu011" },
      { id: "whatsapp", label: "WhatsApp", href: whatsappUrl }
    ],
    whatsappFloatLabel: "Scrie pe WhatsApp"
  },
  ru: {
    brandRole: "Веб-разработчик на фрилансе",
    navItems: [
      { label: "Работы", targetId: "portfolio" },
      { label: "Услуги", targetId: "services" },
      { label: "Контакт", targetId: "contact" }
    ],
    header: {
      ctaLabel: "Начать проект",
      openNavigationLabel: "Открыть навигацию",
      mobileTitle: "Веб-разработчик на фрилансе",
      mobileDescription: "Лендинги, базовые сайты и портфолио с понятной структурой и более сильным опытом на мобильных.",
      whatsappLabel: "Связаться в WhatsApp",
      sheetTitle: "Мобильная навигация",
      sheetDescription: "Открыть основную навигацию сайта и способы связи.",
      languageSwitcherLabelPrefix: "Переключить язык сайта на"
    },
    hero: {
      pillars: ["Фрилансер", "От 40 USD", "Сначала под мобильные", "Быстрый контакт"],
      kicker: "Фрилансер для лендингов и базовых сайтов",
      titleLines: ["Лендинги и базовые сайты", "которые быстро объясняют оффер и лучше выглядят на мобильных."],
      copy:
        "Я работаю как фрилансер и делаю лендинги и базовые сайты от 40 USD с понятной структурой, более сильной подачей и очевидным шагом к контакту с первого экрана.",
      primaryCta: "Начать проект",
      secondaryCta: "Смотреть работы",
      cardTitle: "Фриланс веб-разработчик для лендингов и базовых сайтов.",
      cardCopy: "Простые сайты с более понятной структурой, более сильной подачей и лучшим мобильным опытом с первого экрана.",
      availability: "Фрилансер • Проекты от 40 USD",
      bestForLabel: "Лучше всего подходит для",
      bestForCopy: "Лендингов, базовых сайтов и личных брендов, которым нужен более сильный первый экран.",
      buildStyleLabel: "Стек",
      buildStyleCopy: "Next.js, React и Tailwind, с анимацией только там, где она реально улучшает результат."
    },
    trust: {
      eyebrow: "Что вы получаете",
      title: "Понятную структуру, верстку с приоритетом мобильных и стек, выбранный под задачу.",
      copy:
        "Сайт должен выглядеть профессионально, хорошо работать на телефоне, быть простым в использовании и делать контакт с вами максимально понятным.",
      stats: [
        {
          value: 24,
          suffix: "ч",
          label: "время ответа",
          description: "Быстрые ответы по объему работ, срокам и технической схеме."
        },
        {
          value: 4,
          suffix: "+",
          label: "варианты стека",
          description: "Next.js, Astro, React или более легкая статическая сборка."
        },
        {
          value: 375,
          suffix: "px",
          label: "мобильная база",
          description: "Сначала делаю под ширину телефона, потом аккуратно масштабирую выше."
        }
      ],
      strip: ["Чистая иерархия", "Сначала под мобильные", "Быстрый путь к контакту", "Адаптивность от 375px", "Аккуратная анимация"]
    },
    portfolio: {
      eyebrow: "Примеры",
      title: "Несколько конкретных примеров сайтов для тех типов проектов, которые я беру чаще всего.",
      copy:
        "Это примерные направления для реальных типов сайтов. Я могу адаптировать структуру, дизайн и технологический стек под ваш бизнес, нишу и контент.",
      openVideoPreview: "Открыть видео-превью",
      requestThisStyle: "Хочу такой стиль",
      videoPreviewSuffix: "видео-превью",
      fullscreenPreviewPrefix: "Полноэкранное портфолио-видео для",
      fullscreenPreviewHint: "Нажмите вне окна, чтобы закрыть.",
      items: [
        {
          title: "Лендинг для бьюти-студии",
          label: "Пример лендинга",
          meta: "Направление для бьюти-студии",
          duration: "00:24",
          copy: "Лендинг с фокусом на услугах, процедурах, доверии и более быстром пути к записи для бьюти-бизнеса.",
          image: "/assets/portfolio-barber.jpg",
          video: "/assets/2026-02-09 21-31-55 (2).mp4",
          stack: ["Секции услуг", "CTA на запись", "Блоки доверия"],
          result: "Подходит для бьюти-студий, салонов, lash- и brow-мастеров, skincare-услуг и других форматов работы по записи."
        },
        {
          title: "Лендинг для барбершопа",
          label: "Пример лендинга",
          meta: "Направление для барбершопа",
          duration: "00:35",
          copy: "Лендинг с ценами, галереей, услугами и более понятным сценарием записи для барбершопа.",
          image: "/assets/portfolio-barber.jpg",
          video: "/assets/portfolio-showcase-03.mp4",
          stack: ["CTA на запись", "Цены", "Галерея"],
          result: "Подходит для барбершопов, студий груминга и других локальных бизнесов, работающих по записи."
        }
      ]
    },
    services: {
      eyebrow: "Услуги",
      title: "Фриланс-услуги по лендингам и базовым сайтам.",
      copy: "Лендинги и базовые сайты стартуют от 40 USD, а объем работы зависит от проекта, контента и выбранного стека.",
      cards: [
        {
          eyebrow: "Лендинги",
          title: "Лендинги",
          href: "/landing-page-development",
          copy: "Понятный оффер, сильное первое впечатление и путь к контакту, который ощущается очевидным уже с первого экрана.",
          benefits: ["Понятный оффер", "Блоки доверия", "Быстрый контакт"],
          footer: "Подходит для услуг, запусков и платного трафика."
        },
        {
          eyebrow: "Базовые сайты",
          title: "Базовые сайты",
          href: "/website-development",
          copy: "Простой многосекционный сайт, чтобы показать услуги, информацию о бизнесе и контакт без ощущения шаблонности.",
          benefits: ["Главная", "Услуги", "Контакт"],
          footer: "Подходит для фрилансеров, локального бизнеса и небольших команд."
        },
        {
          eyebrow: "Стек и анимация",
          title: "Кастомная разработка интерфейса",
          href: "/freelance-front-end-developer",
          copy: "Next.js, React с Vite, Astro или статический HTML с Tailwind, с анимацией только там, где она реально улучшает опыт.",
          benefits: ["Next.js", "Astro", "GSAP", "Framer Motion"],
          footer: "Лучший вариант, если нужен кастомный результат, а не ощущение конструктора сайтов."
        },
        {
          eyebrow: "Редизайн и улучшения",
          title: "Редизайн сайта",
          href: "/website-development",
          copy: "Если текущий сайт выглядит устаревшим, перегруженным или слабым на мобильных, я могу перестроить структуру и обновить интерфейс.",
          benefits: ["Более чистый интерфейс", "Лучший опыт на мобильных", "Современное обновление"],
          footer: "Подходит сайтам, которым нужен более сильный первый экран."
        }
      ],
      learnMoreLabel: "Подробнее",
      askLabel: "Спросить"
    },
    process: {
      eyebrow: "Процесс",
      title: "Простой процесс, понятный объем работ и правильный фреймворк с самого начала.",
      copy:
        "Мы заранее определяем, что нужно сайту: секции, стиль, направление контента и схему разработки. Затем я собираю и дорабатываю его до готовности к публикации.",
      highlights: ["Прямая коммуникация", "Понятный объем работ и сроки", "Правильный стек под проект"],
      steps: [
        {
          step: "01",
          title: "Бриф и направление",
          copy:
            "Вы присылаете, чем занимается бизнес, какие секции нужны, несколько референсов и дедлайн. Дальше я выстраиваю структуру и путь к контакту.",
          deliverable: "Понятный объем работ, структура страницы и направление контента",
          timeframe: "Ясность в тот же день"
        },
        {
          step: "02",
          title: "Структура и визуальный тон",
          copy: "Я выстраиваю иерархию, порядок секций, типографику и стиль интерфейса, чтобы сайт ощущался спокойным, современным и легко читаемым.",
          deliverable: "Согласованная структура и визуальное направление",
          timeframe: "Быстрый первый проход"
        },
        {
          step: "03",
          title: "Разработка в выбранном стеке",
          copy: "Сайт собирается на том фреймворке, который подходит лучше всего, а библиотеки добавляются только там, где они реально улучшают результат.",
          deliverable: "Адаптивная сборка с чистой реализацией интерфейса",
          timeframe: "Код готов к запуску"
        },
        {
          step: "04",
          title: "Полировка и передача",
          copy: "После проверки я вношу финальные правки, чтобы сайт был готов к публикации и удобен на любом устройстве.",
          deliverable: "Финальная полировка, правки и поддержка при передаче",
          timeframe: "Быстрое завершение"
        }
      ],
      stepLabel: "Шаг",
      deliverableLabel: "Результат"
    },
    cta: {
      eyebrow: "Контакт",
      title: "Нужен сайт для вашего бизнеса, услуги или личного бренда?",
      copy:
        "Пришлите, чем занимается бизнес, какие страницы или секции нужны, и несколько референсов. Я также подскажу подходящую схему: Next.js, React с Vite, Astro или более легкая статическая сборка.",
      points: ["Лендинги и базовые сайты от 40 USD", "Портфолио-сайты для фрилансеров", "Чистая структура и приоритет мобильных"],
      fastestWayLabel: "Самый быстрый способ связаться",
      whatsappTitle: "WhatsApp",
      whatsappCopy: "Лучший вариант для обсуждения цены, сроков, объема проекта и того, какой фреймворк подходит для сайта.",
      primaryButton: "Отправить детали проекта",
      secondaryButton: "Смотреть Instagram",
      emailPrefix: "Удобнее по email?"
    },
    footer: {
      description: "Лендинги, базовые сайты и портфолио, созданные для бизнеса, фрилансеров и личных брендов.",
      stackLabel: "Next.js, Astro, React/Vite, Tailwind CSS, GSAP, Framer Motion"
    },
    socialLinks: [
      { id: "email", label: "Email", href: emailHref },
      { id: "instagram", label: "Instagram", href: instagramUrl },
      { id: "fiverr", label: "Fiverr", href: "https://www.fiverr.com/dgrecu011" },
      { id: "whatsapp", label: "WhatsApp", href: whatsappUrl }
    ],
    whatsappFloatLabel: "Написать в WhatsApp"
  }
};

export function getSiteData(locale: Locale) {
  return siteDataByLocale[locale];
}
