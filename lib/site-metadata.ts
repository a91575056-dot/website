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
    title: "Dionis Web | Dionis Grecu Freelance Web Developer",
    description:
      "Dionis Web is the freelance website of Dionis Grecu, building landing pages, basic websites and front-end projects for brands, freelancers and service businesses.",
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
    websiteDescription: "Dionis Web is the freelance website of Dionis Grecu for landing pages, basic websites and portfolio websites.",
    webPageDescription: "Dionis Web is the freelance website of Dionis Grecu for landing pages, basic websites and front-end builds.",
    personJobTitle: "Freelance Web Developer",
    personDescription:
      "Dionis Grecu is the freelancer behind Dionis Web, building landing pages, basic websites and portfolio websites in Next.js, React, Astro and static HTML with Tailwind.",
    areaServed: "Worldwide",
    serviceTypes: ["Landing Page Development", "Business Website Development", "Portfolio Website Development"],
    serviceDescription:
      "Dionis Web provides freelance landing page development, basic website development and portfolio website builds in Next.js, React with Vite, Astro or static HTML and Tailwind.",
    offerDescription: "Freelance front-end development for landing pages, business websites and portfolio websites."
  },
  ro: {
    title: "Dionis Web | Dionis Grecu Freelancer Web Developer",
    description:
      "Dionis Web este website-ul freelance al lui Dionis Grecu pentru landing page-uri, site-uri basic și proiecte front-end pentru branduri, freelanceri și businessuri de servicii.",
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
      "Dionis Web este website-ul freelance al lui Dionis Grecu pentru landing page-uri, site-uri basic și website-uri de portofoliu.",
    webPageDescription:
      "Dionis Web este website-ul freelance al lui Dionis Grecu pentru landing page-uri, site-uri basic și build-uri front-end.",
    personJobTitle: "Freelancer web developer",
    personDescription:
      "Dionis Grecu este freelancerul din spatele Dionis Web și construiește landing page-uri, site-uri basic și site-uri de portofoliu în Next.js, React, Astro și HTML static cu Tailwind.",
    areaServed: "Internațional",
    serviceTypes: ["Dezvoltare Landing Page", "Dezvoltare Website", "Website de Portofoliu"],
    serviceDescription:
      "Dionis Web oferă dezvoltare freelance de landing page-uri, website-uri basic și website-uri de portofoliu în Next.js, React cu Vite, Astro sau HTML static cu Tailwind.",
    offerDescription: "Dezvoltare freelance front-end pentru landing page-uri, website-uri de business și site-uri de portofoliu."
  },
  ru: {
    title: "Dionis Web | Dionis Grecu Фриланс Веб-Разработчик",
    description:
      "Dionis Web это фриланс-сайт Dionis Grecu для лендингов, базовых сайтов и front-end проектов для брендов, фрилансеров и сервисных бизнесов.",
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
    websiteDescription: "Dionis Web это фриланс-сайт Dionis Grecu для лендингов, базовых сайтов и портфолио-сайтов.",
    webPageDescription: "Dionis Web это фриланс-сайт Dionis Grecu для лендингов, базовых сайтов и front-end сборок.",
    personJobTitle: "Фриланс веб-разработчик",
    personDescription:
      "Dionis Grecu это фрилансер, который стоит за Dionis Web и создает лендинги, базовые сайты и портфолио-сайты на Next.js, React, Astro и статическом HTML с Tailwind.",
    areaServed: "По всему миру",
    serviceTypes: ["Разработка Лендинга", "Разработка Бизнес-Сайта", "Портфолио-Сайт"],
    serviceDescription:
      "Dionis Web предлагает фриланс разработку лендингов, базовых сайтов и портфолио-сайтов на Next.js, React с Vite, Astro или статическом HTML с Tailwind.",
    offerDescription: "Фриланс front-end разработка для лендингов, бизнес-сайтов и сайтов-портфолио."
  }
};

export function getSiteMetadata(locale: Locale) {
  return siteMetadataByLocale[locale];
}
