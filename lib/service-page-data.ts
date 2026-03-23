import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n";

export type ServicePageId = "landingPageDevelopment" | "websiteDevelopment" | "freelanceFrontEndDeveloper";

export type ServicePageLink = {
  label: string;
  href: string;
  description: string;
};

export type ServicePageData = {
  route: string;
  metadataTitle: string;
  metadataDescription: string;
  metadataImageAlt: string;
  keywords: string[];
  eyebrow: string;
  title: string;
  intro: string;
  heroPoints: string[];
  bestFor: string[];
  deliverables: Array<{
    title: string;
    copy: string;
  }>;
  process: Array<{
    title: string;
    copy: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  schemaServiceName: string;
  schemaServiceTypes: string[];
};

export type ServicePageCopy = {
  breadcrumbHomeLabel: string;
  heroPrimaryButton: string;
  heroSecondaryButton: string;
  bestForLabel: string;
  deliverablesEyebrow: string;
  deliverablesTitle: string;
  deliverablesCopy: string;
  processEyebrow: string;
  faqEyebrow: string;
  relatedPagesEyebrow: string;
  relatedPageLabel: string;
  relatedPageCta: string;
  finalCtaEyebrow: string;
  finalCtaTitle: string;
  finalCtaCopy: string;
  finalCtaPrimary: string;
  finalCtaSecondary: string;
  stepLabel: string;
  areaServed: string;
  personJobTitle: string;
};

type ServicePageLocaleBundle = {
  copy: ServicePageCopy;
  links: Record<ServicePageId, ServicePageLink>;
  pages: Record<ServicePageId, ServicePageData>;
};

const servicePageOrder: ServicePageId[] = [
  "landingPageDevelopment",
  "websiteDevelopment",
  "freelanceFrontEndDeveloper"
];

const servicePageDataByLocale: Record<Locale, ServicePageLocaleBundle> = {
  en: {
    copy: {
      breadcrumbHomeLabel: "Home",
      heroPrimaryButton: "Start on WhatsApp",
      heroSecondaryButton: "See selected work",
      bestForLabel: "Good fit for",
      deliverablesEyebrow: "What Is Included",
      deliverablesTitle: "A service page that targets one clear search intent.",
      deliverablesCopy:
        "This page exists to match one type of Google search. Instead of asking the homepage to rank for everything, this page focuses on one service and explains it in more detail.",
      processEyebrow: "How I Work",
      faqEyebrow: "FAQ",
      relatedPagesEyebrow: "Related Pages",
      relatedPageLabel: "SEO Page",
      relatedPageCta: "Open page",
      finalCtaEyebrow: "Need this service?",
      finalCtaTitle: "If this is the page visitors should land on, I can build it for your business.",
      finalCtaCopy:
        "Send the business type, offer, deadline and a few references. I can advise whether you need a landing page, a fuller website or a direct front-end build.",
      finalCtaPrimary: "Talk on WhatsApp",
      finalCtaSecondary: "See selected work",
      stepLabel: "Step",
      areaServed: "Worldwide",
      personJobTitle: "Freelance Front-End Developer"
    },
      links: {
      landingPageDevelopment: {
        label: "Landing Page Development",
        href: "/landing-page-development",
        description: "For focused pages built to explain the offer fast and convert better."
      },
      websiteDevelopment: {
        label: "Website Development",
        href: "/website-development",
        description: "For multi-section websites that need a stronger online presence."
      },
      freelanceFrontEndDeveloper: {
        label: "Freelance Front-End Developer",
        href: "/freelance-front-end-developer",
        description: "For founders, designers or agencies that need a front-end build partner."
      }
    },
    pages: {
      landingPageDevelopment: {
        route: "/landing-page-development",
        metadataTitle: "Landing Page Development | Dionis Grecu",
        metadataDescription:
          "Freelance landing page development for service businesses, freelancers and personal brands that need a clearer offer, better mobile UX and more enquiries.",
        metadataImageAlt: "Dionis Grecu freelance landing page developer",
        keywords: [
          "dionis web",
          "Dionis Web",
          "landing page development",
          "landing page developer",
          "freelance landing page developer",
          "custom landing page design",
          "mobile first landing page"
        ],
        eyebrow: "Landing Page Development",
        title: "Landing page development for businesses that need a clearer offer and more enquiries.",
        intro:
          "I build custom landing pages for service businesses, freelancers and personal brands that want a sharper first impression, a faster path to contact and a mobile-first experience that feels intentional from the first screen.",
        heroPoints: [
          "Built to explain the offer fast",
          "Good for ads, launches and lead generation",
          "Mobile-first from 375px up"
        ],
        bestFor: [
          "Service businesses that need one focused page instead of a full multi-page website",
          "Freelancers or consultants launching a service and needing a clear online presentation",
          "Campaigns, paid traffic or service offers that need a single conversion-focused destination"
        ],
        deliverables: [
          {
            title: "Offer-first structure",
            copy: "Hero, offer, trust, objections and CTA sections arranged around one main conversion goal."
          },
          {
            title: "Mobile-first design",
            copy: "The page is designed to stay readable, clean and convincing on smaller screens first."
          },
          {
            title: "Fast contact path",
            copy: "WhatsApp, form or booking CTA is made obvious early so visitors do not need to hunt for it."
          },
          {
            title: "Custom front-end build",
            copy: "Built in Next.js, React, Astro or static HTML depending on what fits the project best."
          }
        ],
        process: [
          {
            title: "Clarify the offer",
            copy: "We define what the page is selling, who it is for and what action the visitor should take."
          },
          {
            title: "Shape the sections",
            copy: "I organize the landing page around hierarchy, trust and a cleaner reading flow."
          },
          {
            title: "Build and polish",
            copy: "The page is built responsive, refined for mobile and prepared for launch."
          }
        ],
        faqs: [
          {
            question: "When is a landing page better than a full website?",
            answer:
              "A landing page is a better fit when you need one focused page for a specific service, offer, launch or ad campaign."
          },
          {
            question: "Can you build landing pages for international businesses?",
            answer:
              "Yes. The service is remote and built for international businesses, freelancers and personal brands as well."
          },
          {
            question: "What stack do you use for landing page development?",
            answer:
              "Depending on the project, I can build in Next.js, React with Vite, Astro or static HTML and Tailwind."
          }
        ],
        schemaServiceName: "Landing Page Development",
        schemaServiceTypes: ["Landing Page Development", "Lead Generation Page Development", "Marketing Page Development"]
      },
      websiteDevelopment: {
        route: "/website-development",
        metadataTitle: "Website Development | Dionis Grecu",
        metadataDescription:
          "Freelance website development for service businesses, personal brands and small teams that need a stronger online presence and a better mobile experience.",
        metadataImageAlt: "Dionis Grecu freelance website developer",
        keywords: [
          "dionis web",
          "Dionis Web",
          "website development",
          "business website development",
          "freelance website developer",
          "service business website",
          "custom website development"
        ],
        eyebrow: "Website Development",
        title: "Website development for service businesses and personal brands that need a stronger online presence.",
        intro:
          "I build business websites that go beyond a single landing page. The goal is a cleaner structure, a better mobile experience and a site that presents the business more professionally across key sections like Home, Services, About and Contact.",
        heroPoints: [
          "Good for service businesses and growing brands",
          "Multi-section websites with clear hierarchy",
          "Built to stay clean on mobile and desktop"
        ],
        bestFor: [
          "Service businesses that need multiple sections or pages instead of one campaign-focused landing page",
          "Personal brands that need a more complete online presence with services, work and contact",
          "Businesses redesigning an outdated site that feels crowded or weak on mobile"
        ],
        deliverables: [
          {
            title: "Clear site structure",
            copy: "Home, services, about, portfolio and contact sections shaped around clarity and flow."
          },
          {
            title: "Professional visual direction",
            copy: "A cleaner UI, stronger hierarchy and a more modern front-end presentation."
          },
          {
            title: "Responsive implementation",
            copy: "The build is shaped for desktop and mobile so the site still feels polished on smaller screens."
          },
          {
            title: "Framework matched to the project",
            copy: "Next.js, React, Astro or a lighter static approach depending on scope and goals."
          }
        ],
        process: [
          {
            title: "Map the site",
            copy: "We define what pages or sections are needed and what each one should communicate."
          },
          {
            title: "Design the hierarchy",
            copy: "I shape the layout and visual tone so the website feels calm, premium and easy to scan."
          },
          {
            title: "Develop for launch",
            copy: "The site is built responsive, polished and prepared for handoff or publishing."
          }
        ],
        faqs: [
          {
            question: "What is included in website development?",
            answer:
              "Usually the work includes structure, responsive front-end build, CTA flow, section hierarchy and final polish for launch."
          },
          {
            question: "Can the website include services, portfolio and contact sections?",
            answer:
              "Yes. That is one of the main reasons to choose a business website instead of a single landing page."
          },
          {
            question: "Do you work with international businesses?",
            answer:
              "Yes. The work is remote and the website development service is suitable for international clients."
          }
        ],
        schemaServiceName: "Website Development",
        schemaServiceTypes: ["Website Development", "Business Website Development", "Service Website Development"]
      },
      freelanceFrontEndDeveloper: {
        route: "/freelance-front-end-developer",
        metadataTitle: "Freelance Front-End Developer | Dionis Grecu",
        metadataDescription:
          "Freelance front-end developer for landing pages and websites built in Next.js, React, Astro or static HTML and Tailwind for clients, founders, designers and agencies.",
        metadataImageAlt: "Dionis Grecu freelance front-end developer",
        keywords: [
          "dionis web",
          "Dionis Web",
          "freelance front-end developer",
          "nextjs developer freelancer",
          "react front end developer",
          "remote front-end developer",
          "freelance website developer"
        ],
        eyebrow: "Freelance Front-End Developer",
        title: "Freelance front-end developer for landing pages and websites built with a cleaner mobile-first result.",
        intro:
          "If you already have the business direction, content or design references, I can handle the front-end build. I work as a freelance front-end developer on landing pages and websites for founders, designers, agencies and service businesses that want a custom implementation instead of a generic page-builder look.",
        heroPoints: [
          "Remote freelance collaboration",
          "Next.js, React, Astro or static HTML",
          "Good for founders, designers and agencies"
        ],
        bestFor: [
          "Designers who need a front-end developer to turn layouts into responsive code",
          "Founders or freelancers who want a custom site without hiring a full in-house team",
          "Agencies that need a reliable freelance front-end partner for specific projects"
        ],
        deliverables: [
          {
            title: "Responsive front-end build",
            copy: "Layouts are implemented carefully so the website stays sharp and readable across devices."
          },
          {
            title: "Modern stack selection",
            copy: "I can work in Next.js, React with Vite, Astro or static HTML and Tailwind depending on the project."
          },
          {
            title: "Animation used with restraint",
            copy: "GSAP, Framer Motion and similar tools are used only where they improve the experience."
          },
          {
            title: "Clean handoff",
            copy: "The result is prepared for launch and easy to continue working with after delivery."
          }
        ],
        process: [
          {
            title: "Review the direction",
            copy: "You send the business context, references, content or design direction and I define the front-end scope."
          },
          {
            title: "Build the interface",
            copy: "I develop the layout, interaction and responsive behavior in the chosen stack."
          },
          {
            title: "Polish for launch",
            copy: "I handle the final refinements so the website feels production-ready, not just assembled."
          }
        ],
        faqs: [
          {
            question: "Can you work from existing designs or references?",
            answer:
              "Yes. I can work from rough references, content direction or more complete layouts depending on the project."
          },
          {
            question: "What types of projects do you take as a freelance front-end developer?",
            answer:
              "Mostly landing pages, business websites, portfolio sites and redesigns that need a custom responsive front-end build."
          },
          {
            question: "Do you work with international clients and remote communication?",
            answer:
              "Yes. The service is built for remote freelance work and direct communication with international clients."
          }
        ],
        schemaServiceName: "Freelance Front-End Development",
        schemaServiceTypes: ["Freelance Front-End Developer", "Next.js Development", "React Front-End Development"]
      }
    }
  },
  ro: {
    copy: {
      breadcrumbHomeLabel: "Acasă",
      heroPrimaryButton: "Începe pe WhatsApp",
      heroSecondaryButton: "Vezi lucrări selectate",
      bestForLabel: "Potrivit pentru",
      deliverablesEyebrow: "Ce Este Inclus",
      deliverablesTitle: "O pagină de serviciu construită pentru o intenție clară de căutare.",
      deliverablesCopy:
        "Pagina aceasta există pentru a răspunde unui tip clar de căutare pe Google. În loc să punem homepage-ul să încerce să rankeze pentru tot, pagina se concentrează pe un singur serviciu și îl explică mai clar.",
      processEyebrow: "Cum Lucrez",
      faqEyebrow: "Întrebări Frecvente",
      relatedPagesEyebrow: "Pagini Similare",
      relatedPageLabel: "Pagină SEO",
      relatedPageCta: "Deschide pagina",
      finalCtaEyebrow: "Ai nevoie de serviciul acesta?",
      finalCtaTitle: "Dacă aici ar trebui să ajungă vizitatorii, pot construi pagina pentru businessul tău.",
      finalCtaCopy:
        "Trimite tipul de business, oferta, termenul și câteva referințe. Îți pot spune dacă ai nevoie de un landing page, de un website mai complet sau direct de un build front-end.",
      finalCtaPrimary: "Vorbește pe WhatsApp",
      finalCtaSecondary: "Vezi lucrări selectate",
      stepLabel: "Pasul",
      areaServed: "Internațional",
      personJobTitle: "Front-end developer freelancer"
    },
    links: {
      landingPageDevelopment: {
        label: "Dezvoltare Landing Page",
        href: "/landing-page-development",
        description: "Pentru pagini concentrate care explică oferta rapid și convertesc mai bine."
      },
      websiteDevelopment: {
        label: "Dezvoltare Website",
        href: "/website-development",
        description: "Pentru website-uri cu mai multe secțiuni care au nevoie de o prezență online mai puternică."
      },
      freelanceFrontEndDeveloper: {
        label: "Front-End Developer Freelancer",
        href: "/freelance-front-end-developer",
        description: "Pentru fondatori, designeri sau agenții care au nevoie de un partener de implementare front-end."
      }
    },
    pages: {
      landingPageDevelopment: {
        route: "/landing-page-development",
        metadataTitle: "Dezvoltare Landing Page | Dionis Grecu",
        metadataDescription:
          "Serviciu freelance de dezvoltare landing page pentru businessuri de servicii, freelanceri și branduri personale care au nevoie de o ofertă mai clară, UX mai bun pe mobil și mai multe cereri.",
        metadataImageAlt: "Dionis Grecu dezvoltator freelance de landing page-uri",
        keywords: [
          "dionis web",
          "Dionis Web",
          "dezvoltare landing page",
          "creator landing page",
          "landing page freelancer",
          "landing page custom",
          "landing page mobile first"
        ],
        eyebrow: "Dezvoltare Landing Page",
        title: "Landing page-uri pentru businessuri care au nevoie de o ofertă mai clară și mai multe cereri.",
        intro:
          "Construiesc landing page-uri custom pentru businessuri de servicii, freelanceri și branduri personale care vor o primă impresie mai puternică, un drum mai rapid spre contact și o experiență mobile-first care se simte intenționată încă din primul ecran.",
        heroPoints: [
          "Construit ca să explice rapid oferta",
          "Bun pentru reclame, lansări și lead generation",
          "Mobile-first de la 375px în sus"
        ],
        bestFor: [
          "Businessuri de servicii care au nevoie de o singură pagină concentrată în locul unui website complet cu mai multe pagini",
          "Freelanceri sau consultanți care lansează un serviciu și au nevoie de o prezentare online clară",
          "Campanii, trafic plătit sau oferte care au nevoie de o singură destinație concentrată pe conversie"
        ],
        deliverables: [
          {
            title: "Structură centrată pe ofertă",
            copy: "Secțiunile de hero, ofertă, încredere, obiecții și CTA sunt așezate în jurul unui singur obiectiv de conversie."
          },
          {
            title: "Design mobile-first",
            copy: "Pagina este gândită să rămână clară, curată și convingătoare în primul rând pe ecrane mici."
          },
          {
            title: "Contact rapid",
            copy: "WhatsApp, formularul sau CTA-ul de programare apar devreme, fără ca vizitatorul să caute prea mult."
          },
          {
            title: "Build front-end custom",
            copy: "Construiesc în Next.js, React, Astro sau HTML static, în funcție de ce se potrivește mai bine proiectului."
          }
        ],
        process: [
          {
            title: "Clarificăm oferta",
            copy: "Stabilim ce vinde pagina, pentru cine este și ce acțiune trebuie să facă vizitatorul."
          },
          {
            title: "Așezăm secțiunile",
            copy: "Organizez landing page-ul în jurul ierarhiei, încrederii și unui flow mai clar de citire."
          },
          {
            title: "Construiesc și finisez",
            copy: "Pagina este făcută responsive, ajustată pentru mobil și pregătită pentru lansare."
          }
        ],
        faqs: [
          {
            question: "Când este un landing page mai bun decât un website complet?",
            answer:
              "Un landing page este mai potrivit când ai nevoie de o singură pagină concentrată pentru un serviciu, o ofertă, o lansare sau o campanie de reclame."
          },
          {
            question: "Poți construi landing page-uri și pentru businessuri internaționale?",
            answer:
              "Da. Serviciul este remote și potrivit și pentru businessuri internaționale, freelanceri și branduri personale."
          },
          {
            question: "Ce stack folosești pentru dezvoltarea de landing page-uri?",
            answer:
              "În funcție de proiect, pot construi în Next.js, React cu Vite, Astro sau HTML static cu Tailwind."
          }
        ],
        schemaServiceName: "Dezvoltare Landing Page",
        schemaServiceTypes: ["Dezvoltare Landing Page", "Pagină de Lead Generation", "Pagină de Marketing"]
      },
      websiteDevelopment: {
        route: "/website-development",
        metadataTitle: "Dezvoltare Website | Dionis Grecu",
        metadataDescription:
          "Serviciu freelance de dezvoltare website pentru businessuri de servicii, branduri personale și echipe mici care au nevoie de o prezență online mai puternică și o experiență mai bună pe mobil.",
        metadataImageAlt: "Dionis Grecu dezvoltator freelance de website-uri",
        keywords: [
          "dionis web",
          "Dionis Web",
          "dezvoltare website",
          "website pentru business",
          "dezvoltator website freelancer",
          "website servicii",
          "website custom"
        ],
        eyebrow: "Dezvoltare Website",
        title: "Website-uri pentru businessuri de servicii și branduri personale care au nevoie de o prezență online mai puternică.",
        intro:
          "Construiesc website-uri de business care merg dincolo de un singur landing page. Scopul este o structură mai clară, o experiență mai bună pe mobil și un site care prezintă businessul mai profesionist în secțiuni importante precum Home, Servicii, Despre și Contact.",
        heroPoints: [
          "Potrivit pentru businessuri de servicii și branduri în creștere",
          "Website-uri cu mai multe secțiuni și ierarhie clară",
          "Construit să rămână curat pe mobil și desktop"
        ],
        bestFor: [
          "Businessuri de servicii care au nevoie de mai multe secțiuni sau pagini, nu doar de un landing page pentru campanii",
          "Branduri personale care au nevoie de o prezență online mai completă, cu servicii, lucrări și contact",
          "Businessuri care refac un site vechi, aglomerat sau slab pe mobil"
        ],
        deliverables: [
          {
            title: "Structură clară a site-ului",
            copy: "Secțiunile Home, servicii, despre, portofoliu și contact sunt gândite pentru claritate și flow."
          },
          {
            title: "Direcție vizuală mai profesionistă",
            copy: "Un UI mai curat, ierarhie mai puternică și o prezentare front-end mai modernă."
          },
          {
            title: "Implementare responsive",
            copy: "Build-ul este gândit pentru desktop și mobil, astfel încât site-ul să rămână finisat și pe ecrane mici."
          },
          {
            title: "Framework ales după proiect",
            copy: "Next.js, React, Astro sau o variantă statică mai ușoară, în funcție de scop și complexitate."
          }
        ],
        process: [
          {
            title: "Cartografiem site-ul",
            copy: "Stabilim ce pagini sau secțiuni sunt necesare și ce trebuie să comunice fiecare."
          },
          {
            title: "Definim ierarhia",
            copy: "Așez layout-ul și tonul vizual astfel încât website-ul să se simtă calm, premium și ușor de scanat."
          },
          {
            title: "Dezvolt pentru lansare",
            copy: "Site-ul este construit responsive, finisat și pregătit pentru predare sau publicare."
          }
        ],
        faqs: [
          {
            question: "Ce este inclus în dezvoltarea unui website?",
            answer:
              "De obicei sunt incluse structura, build-ul responsive front-end, flow-ul de CTA, ierarhia secțiunilor și finisajul final pentru lansare."
          },
          {
            question: "Website-ul poate include servicii, portofoliu și contact?",
            answer:
              "Da. Acesta este unul dintre principalele motive pentru care alegi un website de business în locul unui singur landing page."
          },
          {
            question: "Lucrezi și cu businessuri internaționale?",
            answer:
              "Da. Lucrul este remote, iar serviciul de dezvoltare website este potrivit și pentru clienți internaționali."
          }
        ],
        schemaServiceName: "Dezvoltare Website",
        schemaServiceTypes: ["Dezvoltare Website", "Website pentru Business", "Website pentru Servicii"]
      },
      freelanceFrontEndDeveloper: {
        route: "/freelance-front-end-developer",
        metadataTitle: "Front-End Developer Freelancer | Dionis Grecu",
        metadataDescription:
          "Front-end developer freelancer pentru landing page-uri și website-uri construite în Next.js, React, Astro sau HTML static cu Tailwind pentru clienți, fondatori, designeri și agenții.",
        metadataImageAlt: "Dionis Grecu front-end developer freelancer",
        keywords: [
          "dionis web",
          "Dionis Web",
          "front-end developer freelancer",
          "developer nextjs freelancer",
          "react front end developer",
          "front-end remote",
          "developer website freelancer"
        ],
        eyebrow: "Front-End Developer Freelancer",
        title: "Front-end developer freelancer pentru landing page-uri și website-uri construite cu un rezultat mai curat și mobile-first.",
        intro:
          "Dacă ai deja direcția de business, conținutul sau referințele de design, mă pot ocupa de implementarea front-end. Lucrez ca front-end developer freelancer pentru landing page-uri și website-uri dedicate fondatorilor, designerilor, agențiilor și businessurilor de servicii care vor o implementare custom, nu un rezultat generic de page builder.",
        heroPoints: [
          "Colaborare remote pe freelance",
          "Next.js, React, Astro sau HTML static",
          "Potrivit pentru fondatori, designeri și agenții"
        ],
        bestFor: [
          "Designeri care au nevoie de un front-end developer care să transforme layout-urile în cod responsive",
          "Fondatori sau freelanceri care vor un site custom fără să angajeze o echipă internă completă",
          "Agenții care au nevoie de un partener freelance de front-end pentru proiecte punctuale"
        ],
        deliverables: [
          {
            title: "Build front-end responsive",
            copy: "Layout-urile sunt implementate atent, astfel încât website-ul să rămână clar și bine citibil pe orice dispozitiv."
          },
          {
            title: "Alegerea stack-ului modern",
            copy: "Pot lucra în Next.js, React cu Vite, Astro sau HTML static cu Tailwind, în funcție de proiect."
          },
          {
            title: "Animație folosită cu măsură",
            copy: "GSAP, Framer Motion și alte tool-uri similare sunt folosite doar acolo unde îmbunătățesc experiența."
          },
          {
            title: "Predare curată",
            copy: "Rezultatul este pregătit pentru lansare și rămâne ușor de continuat după livrare."
          }
        ],
        process: [
          {
            title: "Revizuim direcția",
            copy: "Îmi trimiți contextul businessului, referințele, conținutul sau direcția de design și stabilesc scope-ul front-end."
          },
          {
            title: "Construiesc interfața",
            copy: "Dezvolt layout-ul, interacțiunile și comportamentul responsive în stack-ul ales."
          },
          {
            title: "Finisez pentru lansare",
            copy: "Mă ocup de ajustările finale astfel încât website-ul să pară gata de producție, nu doar asamblat."
          }
        ],
        faqs: [
          {
            question: "Poți lucra pornind de la designuri sau referințe existente?",
            answer:
              "Da. Pot lucra pornind de la referințe mai simple, direcție de conținut sau layout-uri mai complete, în funcție de proiect."
          },
          {
            question: "Ce tipuri de proiecte iei ca front-end developer freelancer?",
            answer:
              "În principal landing page-uri, website-uri de business, site-uri de portofoliu și redesign-uri care au nevoie de un build front-end custom și responsive."
          },
          {
            question: "Lucrezi cu clienți internaționali și comunicare remote?",
            answer:
              "Da. Serviciul este gândit pentru muncă freelance remote și comunicare directă cu clienți internaționali."
          }
        ],
        schemaServiceName: "Dezvoltare Front-End Freelance",
        schemaServiceTypes: ["Front-End Developer Freelancer", "Dezvoltare Next.js", "Dezvoltare React Front-End"]
      }
    }
  },
  ru: {
    copy: {
      breadcrumbHomeLabel: "Главная",
      heroPrimaryButton: "Начать в WhatsApp",
      heroSecondaryButton: "Посмотреть избранные работы",
      bestForLabel: "Лучше всего подходит для",
      deliverablesEyebrow: "Что Включено",
      deliverablesTitle: "Сервисная страница, заточенная под один понятный поисковый запрос.",
      deliverablesCopy:
        "Такая страница нужна, чтобы точно отвечать на конкретный запрос в Google. Вместо того чтобы заставлять главную страницу ранжироваться по всем темам сразу, эта страница объясняет один сервис глубже и понятнее.",
      processEyebrow: "Как Я Работаю",
      faqEyebrow: "FAQ",
      relatedPagesEyebrow: "Похожие Страницы",
      relatedPageLabel: "SEO Страница",
      relatedPageCta: "Открыть страницу",
      finalCtaEyebrow: "Нужна такая услуга?",
      finalCtaTitle: "Если именно сюда должны попадать посетители, я могу собрать такую страницу для вашего бизнеса.",
      finalCtaCopy:
        "Отправьте тип бизнеса, оффер, дедлайн и несколько референсов. Я подскажу, нужен ли вам лендинг, более полный сайт или прямая разработка интерфейса.",
      finalCtaPrimary: "Связаться в WhatsApp",
      finalCtaSecondary: "Посмотреть избранные работы",
      stepLabel: "Шаг",
      areaServed: "По всему миру",
      personJobTitle: "Фриланс разработчик интерфейсов"
    },
    links: {
      landingPageDevelopment: {
        label: "Разработка Лендинга",
        href: "/landing-page-development",
        description: "Для сфокусированных страниц, которые быстро объясняют оффер и лучше конвертируют."
      },
      websiteDevelopment: {
        label: "Разработка Сайта",
        href: "/website-development",
        description: "Для многораздельных сайтов, которым нужна более сильная онлайн-презентация."
      },
      freelanceFrontEndDeveloper: {
        label: "Фриланс разработчик интерфейсов",
        href: "/freelance-front-end-developer",
        description: "Для фаундеров, дизайнеров и агентств, которым нужен партнер по разработке интерфейса."
      }
    },
    pages: {
      landingPageDevelopment: {
        route: "/landing-page-development",
        metadataTitle: "Разработка Лендинга | Dionis Grecu",
        metadataDescription:
          "Фриланс разработка лендингов для сервисных бизнесов, фрилансеров и личных брендов, которым нужен более понятный оффер, лучший опыт на мобильных и больше заявок.",
        metadataImageAlt: "Dionis Grecu фриланс разработчик лендингов",
        keywords: [
          "dionis web",
          "Dionis Web",
          "разработка лендинга",
          "создание лендинга",
          "фриланс разработчик лендингов",
          "лендинг под ключ",
          "mobile first landing page"
        ],
        eyebrow: "Разработка Лендинга",
        title: "Лендинги для бизнеса, которому нужен более понятный оффер и больше заявок.",
        intro:
          "Я делаю кастомные лендинги для сервисных бизнесов, фрилансеров и личных брендов, которым нужна более сильная первая подача, быстрый путь к контакту и опыт, продуманный в первую очередь для мобильных.",
        heroPoints: [
          "Собрано так, чтобы быстро объяснять оффер",
          "Подходит для рекламы, запусков и получения заявок",
          "Сначала под мобильные, от 375px и выше"
        ],
        bestFor: [
          "Сервисных бизнесов, которым нужна одна сфокусированная страница вместо большого многостраничного сайта",
          "Фрилансеров или консультантов, которые запускают услугу и хотят понятную онлайн-презентацию",
          "Кампаний, платного трафика и офферов, которым нужна одна конверсионная целевая страница"
        ],
        deliverables: [
          {
            title: "Структура вокруг оффера",
            copy: "Hero, оффер, доверие, возражения и CTA-секции выстроены вокруг одной главной цели конверсии."
          },
          {
            title: "Дизайн с приоритетом мобильных",
            copy: "Страница собирается так, чтобы в первую очередь оставаться читаемой, чистой и убедительной на маленьких экранах."
          },
          {
            title: "Быстрый путь к контакту",
            copy: "WhatsApp, форма или CTA на запись появляются рано, чтобы посетителю не приходилось искать их по странице."
          },
          {
            title: "Кастомная разработка интерфейса",
            copy: "Собираю в Next.js, React, Astro или на статическом HTML в зависимости от того, что лучше подходит проекту."
          }
        ],
        process: [
          {
            title: "Уточняем оффер",
            copy: "Мы определяем, что именно продает страница, для кого она сделана и какое действие должен совершить посетитель."
          },
          {
            title: "Выстраиваем секции",
            copy: "Я организую лендинг вокруг иерархии, доверия и более чистого сценария чтения."
          },
          {
            title: "Собираю и полирую",
            copy: "Страница делается адаптивной, дорабатывается под мобильные и готовится к запуску."
          }
        ],
        faqs: [
          {
            question: "Когда лендинг лучше полного сайта?",
            answer:
              "Лендинг лучше подходит, когда вам нужна одна сфокусированная страница под конкретную услугу, оффер, запуск или рекламную кампанию."
          },
          {
            question: "Вы делаете лендинги и для международных бизнесов?",
            answer:
              "Да. Работа идет полностью удаленно и подходит для международных бизнесов, фрилансеров и личных брендов."
          },
          {
            question: "Какой стек вы используете для разработки лендингов?",
            answer:
              "В зависимости от проекта я могу собирать в Next.js, React с Vite, Astro или на статическом HTML с Tailwind."
          }
        ],
        schemaServiceName: "Разработка Лендинга",
        schemaServiceTypes: ["Разработка Лендинга", "Страница для получения заявок", "Разработка маркетинговой страницы"]
      },
      websiteDevelopment: {
        route: "/website-development",
        metadataTitle: "Разработка Сайта | Dionis Grecu",
        metadataDescription:
          "Фриланс разработка сайтов для сервисных бизнесов, личных брендов и небольших команд, которым нужна более сильная онлайн-презентация и лучший мобильный опыт.",
        metadataImageAlt: "Dionis Grecu фриланс разработчик сайтов",
        keywords: [
          "dionis web",
          "Dionis Web",
          "разработка сайта",
          "сайт для бизнеса",
          "фриланс разработчик сайтов",
          "сайт для услуг",
          "custom website development"
        ],
        eyebrow: "Разработка Сайта",
        title: "Сайты для сервисных бизнесов и личных брендов, которым нужна более сильная онлайн-презентация.",
        intro:
          "Я делаю бизнес-сайты, которые выходят за рамки одного лендинга. Цель здесь в более понятной структуре, лучшем опыте на мобильных и сайте, который показывает бизнес более профессионально через ключевые разделы вроде главной, услуг, информации о компании и контактов.",
        heroPoints: [
          "Подходит для сервисных бизнесов и растущих брендов",
          "Многораздельные сайты с понятной иерархией",
          "Собрано так, чтобы сайт оставался чистым и на мобильных, и на компьютерах"
        ],
        bestFor: [
          "Сервисных бизнесов, которым нужны несколько секций или страниц, а не один лендинг под кампанию",
          "Личных брендов, которым нужна более полная онлайн-презентация с услугами, работами и контактами",
          "Бизнесов, которые переделывают устаревший сайт, перегруженный или слабый на мобильных"
        ],
        deliverables: [
          {
            title: "Понятная структура сайта",
            copy: "Главная, услуги, о компании, портфолио и контакты выстраиваются вокруг ясности и понятного пользовательского пути."
          },
          {
            title: "Более профессиональное визуальное направление",
            copy: "Более чистый интерфейс, более сильная иерархия и современная подача."
          },
          {
            title: "Адаптивная реализация",
            copy: "Сборка продумывается и для компьютеров, и для мобильных, чтобы сайт оставался аккуратным даже на маленьких экранах."
          },
          {
            title: "Фреймворк под задачу",
            copy: "Next.js, React, Astro или более легкий статический подход в зависимости от объема и цели проекта."
          }
        ],
        process: [
          {
            title: "Картируем сайт",
            copy: "Определяем, какие страницы или секции нужны и что каждая из них должна доносить."
          },
          {
            title: "Проектируем иерархию",
            copy: "Я выстраиваю структуру и визуальный тон так, чтобы сайт ощущался спокойным, премиальным и легко сканировался."
          },
          {
            title: "Разрабатываю под запуск",
            copy: "Сайт собирается адаптивным, полируется и подготавливается к передаче или публикации."
          }
        ],
        faqs: [
          {
            question: "Что входит в разработку сайта?",
            answer:
              "Обычно работа включает структуру, адаптивную разработку интерфейса, CTA-сценарий, иерархию секций и финальную полировку перед запуском."
          },
          {
            question: "Может ли сайт включать секции услуг, портфолио и контакта?",
            answer:
              "Да. Это одна из главных причин выбрать бизнес-сайт вместо одного лендинга."
          },
          {
            question: "Вы работаете с международными бизнесами?",
            answer:
              "Да. Работа идет полностью удаленно, а услуга разработки сайта подходит и для международных клиентов."
          }
        ],
        schemaServiceName: "Разработка Сайта",
        schemaServiceTypes: ["Разработка Сайта", "Разработка Бизнес-Сайта", "Разработка Сайта Услуг"]
      },
      freelanceFrontEndDeveloper: {
        route: "/freelance-front-end-developer",
        metadataTitle: "Фриланс разработчик интерфейсов | Dionis Grecu",
        metadataDescription:
          "Фриланс разработчик интерфейсов для лендингов и сайтов на Next.js, React, Astro или статическом HTML с Tailwind для клиентов, фаундеров, дизайнеров и агентств.",
        metadataImageAlt: "Dionis Grecu, фриланс разработчик интерфейсов",
        keywords: [
          "dionis web",
          "Dionis Web",
          "фриланс разработчик интерфейсов",
          "next.js разработчик фрилансер",
          "react разработчик интерфейсов",
          "удаленный разработчик интерфейсов",
          "фриланс разработчик сайтов"
        ],
        eyebrow: "Фриланс разработчик интерфейсов",
        title: "Фриланс разработчик интерфейсов для лендингов и сайтов с более чистым результатом и приоритетом мобильных.",
        intro:
          "Если у вас уже есть бизнес-направление, контент или дизайн-референсы, я могу взять на себя реализацию интерфейса. Я работаю как фриланс разработчик интерфейсов над лендингами и сайтами для фаундеров, дизайнеров, агентств и сервисных бизнесов, которым нужен кастомный результат, а не ощущение конструктора сайтов.",
        heroPoints: [
          "Удаленное сотрудничество на фрилансе",
          "Next.js, React, Astro или статический HTML",
          "Подходит для фаундеров, дизайнеров и агентств"
        ],
        bestFor: [
          "Дизайнеров, которым нужен разработчик интерфейсов, чтобы превратить макеты в адаптивный код",
          "Фаундеров или фрилансеров, которым нужен кастомный сайт без найма целой штатной команды",
          "Агентств, которым нужен надежный фриланс-партнер по интерфейсной разработке для отдельных проектов"
        ],
        deliverables: [
          {
            title: "Адаптивная разработка интерфейса",
            copy: "Макеты реализуются аккуратно, чтобы сайт оставался четким и читаемым на любых устройствах."
          },
          {
            title: "Выбор современного стека",
            copy: "Я могу работать в Next.js, React с Vite, Astro или на статическом HTML с Tailwind в зависимости от проекта."
          },
          {
            title: "Анимация с чувством меры",
            copy: "GSAP, Framer Motion и похожие инструменты используются только там, где реально улучшают результат."
          },
          {
            title: "Чистая передача",
            copy: "Результат готовится к запуску и остается удобным для дальнейшей работы после сдачи."
          }
        ],
        process: [
          {
            title: "Смотрим на направление",
            copy: "Вы присылаете контекст бизнеса, референсы, контент или дизайн-направление, а я определяю объем работ по интерфейсу."
          },
          {
            title: "Собираю интерфейс",
            copy: "Я разрабатываю структуру, взаимодействия и адаптивное поведение в выбранном стеке."
          },
          {
            title: "Полирую под запуск",
            copy: "Я довожу проект до состояния, в котором сайт выглядит готовым к запуску, а не просто собранным."
          }
        ],
        faqs: [
          {
            question: "Вы можете работать по готовым дизайнам или референсам?",
            answer:
              "Да. Я могу работать как по более простым референсам и контент-направлению, так и по более полным макетам, в зависимости от проекта."
          },
          {
            question: "Какие проекты вы берете как фриланс разработчик интерфейсов?",
            answer:
              "В основном лендинги, бизнес-сайты, портфолио и редизайны, которым нужна кастомная адаптивная разработка интерфейса."
          },
          {
            question: "Вы работаете с международными клиентами и общаетесь удаленно?",
            answer:
              "Да. Я работаю удаленно, в формате фриланса, и напрямую общаюсь с международными клиентами."
          }
        ],
        schemaServiceName: "Фриланс разработка интерфейсов",
        schemaServiceTypes: ["Фриланс разработчик интерфейсов", "Разработка на Next.js", "Разработка интерфейсов на React"]
      }
    }
  }
};

export function getServicePageData(pageId: ServicePageId, locale: Locale) {
  return servicePageDataByLocale[locale].pages[pageId];
}

export function getServicePageCopy(locale: Locale) {
  return servicePageDataByLocale[locale].copy;
}

export function getServicePageLinks(locale: Locale) {
  const localizedLinks = servicePageDataByLocale[locale].links;

  return servicePageOrder.map((pageId) => localizedLinks[pageId]);
}

export function getServicePageMetadata(pageId: ServicePageId, locale: Locale): Metadata {
  const page = getServicePageData(pageId, locale);

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    keywords: page.keywords,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: `https://dionisweb.com${page.route}`
    },
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url: `https://dionisweb.com${page.route}`,
      siteName: "Dionis Web",
      type: "website",
      images: [
        {
          url: "/assets/111.png",
          width: 1024,
          height: 1536,
          alt: page.metadataImageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadataTitle,
      description: page.metadataDescription,
      images: ["/assets/111.png"]
    }
  };
}
