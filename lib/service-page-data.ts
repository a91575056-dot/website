export type ServicePageLink = {
  label: string;
  href: string;
  description: string;
};

export type ServicePageData = {
  route: string;
  metadataTitle: string;
  metadataDescription: string;
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

export const servicePageLinks: ServicePageLink[] = [
  {
    label: "Landing Page Development",
    href: "/landing-page-development",
    description: "For focused pages built to explain the offer fast and convert better."
  },
  {
    label: "Website Development",
    href: "/website-development",
    description: "For multi-section websites that need a stronger online presence."
  },
  {
    label: "Freelance Front-End Developer",
    href: "/freelance-front-end-developer",
    description: "For founders, designers or agencies that need a front-end build partner."
  }
];

export const landingPageDevelopmentPage: ServicePageData = {
  route: "/landing-page-development",
  metadataTitle: "Landing Page Development | Dionis Grecu",
  metadataDescription:
    "Freelance landing page development for service businesses, freelancers and personal brands that need a clearer offer, better mobile UX and more enquiries.",
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
};

export const websiteDevelopmentPage: ServicePageData = {
  route: "/website-development",
  metadataTitle: "Website Development | Dionis Grecu",
  metadataDescription:
    "Freelance website development for service businesses, personal brands and small teams that need a stronger online presence and a better mobile experience.",
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
};

export const freelanceFrontEndDeveloperPage: ServicePageData = {
  route: "/freelance-front-end-developer",
  metadataTitle: "Freelance Front-End Developer | Dionis Grecu",
  metadataDescription:
    "Freelance front-end developer for landing pages and websites built in Next.js, React, Astro or static HTML and Tailwind for clients, founders, designers and agencies.",
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
};
