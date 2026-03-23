import type { Locale } from "@/lib/i18n";

type SiteMetadataCopy = {
  title: string;
  description: string;
  keywords: string[];
  openGraphLocale: string;
  imageAlt: string;
  websiteDescription: string;
  webPageDescription: string;
  personJobTitle: string;
  personDescription: string;
  areaServed: string;
  serviceTypes: string[];
  serviceDescription: string;
  offerDescription: string;
};

const siteMetadataByLocale: Record<Locale, SiteMetadataCopy> = {
  en: {
    title: "Dionis Web | Premium Landing Pages & Business Websites",
    description:
      "Freelance web developer building premium landing pages and business websites with clear structure, strong mobile experience and faster contact paths.",
    keywords: [
      "dionis web",
      "dionisweb",
      "dionisweb.com",
      "Dionis Web",
      "Dionis Grecu",
      "dionis web developer",
      "dionis web freelancer",
      "freelance landing page developer",
      "landing page developer",
      "landing pages",
      "business websites",
      "website developer",
      "freelance web developer",
      "front-end developer",
      "portfolio websites",
      "Next.js developer",
      "React developer",
      "website freelancer"
    ],
    openGraphLocale: "en_US",
    imageAlt: "Dionis Grecu, freelance landing page developer and website builder",
    websiteDescription: "Dionis Web is the freelance website of Dionis Grecu for premium landing pages, business websites and portfolio websites.",
    webPageDescription:
      "Dionis Web is the freelance website of Dionis Grecu for premium landing pages and business websites with clearer structure and stronger mobile presentation.",
    personJobTitle: "Freelance Web Developer",
    personDescription:
      "Dionis Grecu is the freelancer behind Dionis Web, building landing pages, basic websites and portfolio websites in Next.js, React, Astro and static HTML with Tailwind.",
    areaServed: "Worldwide",
    serviceTypes: ["Landing Page Development", "Business Website Development", "Portfolio Website Development"],
    serviceDescription:
      "Dionis Web provides premium freelance landing page development, business website development and portfolio website builds in Next.js, React with Vite, Astro or static HTML and Tailwind.",
    offerDescription: "Premium freelance website development for landing pages, business websites and portfolio websites."
  },
  ro: {
    title: "Dionis Web | Landing Page-uri Premium și Website-uri de Business",
    description:
      "Freelancer web developer care construiește landing page-uri premium și website-uri de business cu structură clară, experiență mai bună pe mobil și contact mai rapid.",
    keywords: [
      "dionis web",
      "Dionis Web",
      "Dionis Grecu",
      "freelancer web developer",
      "landing page",
      "dezvoltare landing page",
      "dezvoltare website",
      "site pentru business",
      "front-end developer",
      "website freelancer"
    ],
    openGraphLocale: "ro_RO",
    imageAlt: "Dionis Grecu, dezvoltator freelance de landing page-uri și website-uri",
    websiteDescription:
      "Dionis Web este website-ul freelance al lui Dionis Grecu pentru landing page-uri premium, website-uri de business și website-uri de portofoliu.",
    webPageDescription:
      "Dionis Web este website-ul freelance al lui Dionis Grecu pentru landing page-uri premium și website-uri de business cu structură mai clară și prezentare mai puternică pe mobil.",
    personJobTitle: "Freelancer web developer",
    personDescription:
      "Dionis Grecu este freelancerul din spatele Dionis Web și construiește landing page-uri, site-uri basic și site-uri de portofoliu în Next.js, React, Astro și HTML static cu Tailwind.",
    areaServed: "Internațional",
    serviceTypes: ["Dezvoltare Landing Page", "Dezvoltare Website", "Website de Portofoliu"],
    serviceDescription:
      "Dionis Web oferă dezvoltare freelance premium de landing page-uri, website-uri de business și website-uri de portofoliu în Next.js, React cu Vite, Astro sau HTML static cu Tailwind.",
    offerDescription: "Dezvoltare freelance premium pentru landing page-uri, website-uri de business și site-uri de portofoliu."
  },
  ru: {
    title: "Dionis Web | Премиальные Лендинги и Бизнес-Сайты",
    description:
      "Фриланс веб-разработчик, который создает премиальные лендинги и бизнес-сайты с понятной структурой, сильной мобильной подачей и быстрым путем к контакту.",
    keywords: [
      "dionis web",
      "Dionis Web",
      "Dionis Grecu",
      "фриланс веб-разработчик",
      "разработка лендинга",
      "разработка сайта",
      "front-end developer",
      "website freelancer",
      "Next.js developer",
      "React developer"
    ],
    openGraphLocale: "ru_RU",
    imageAlt: "Dionis Grecu, фриланс разработчик лендингов и сайтов",
    websiteDescription: "Dionis Web это фриланс-сайт Dionis Grecu для премиальных лендингов, бизнес-сайтов и сайтов-портфолио.",
    webPageDescription:
      "Dionis Web это фриланс-сайт Dionis Grecu для премиальных лендингов и бизнес-сайтов с более понятной структурой и сильной подачей на мобильных.",
    personJobTitle: "Фриланс веб-разработчик",
    personDescription:
      "Dionis Grecu это фрилансер, который стоит за Dionis Web и создает лендинги, базовые сайты и портфолио-сайты на Next.js, React, Astro и статическом HTML с Tailwind.",
    areaServed: "По всему миру",
    serviceTypes: ["Разработка Лендинга", "Разработка Бизнес-Сайта", "Портфолио-Сайт"],
    serviceDescription:
      "Dionis Web предлагает премиальную фриланс-разработку лендингов, бизнес-сайтов и сайтов-портфолио на Next.js, React с Vite, Astro или статическом HTML с Tailwind.",
    offerDescription: "Премиальная фриланс-разработка для лендингов, бизнес-сайтов и сайтов-портфолио."
  }
};

export function getSiteMetadata(locale: Locale) {
  return siteMetadataByLocale[locale];
}
