import type { Locale } from "@/lib/i18n";

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export type HomeFaqContent = {
  eyebrow: string;
  title: string;
  copy: string;
  items: HomeFaqItem[];
};

const homeFaqByLocale: Record<Locale, HomeFaqContent> = {
  en: {
    eyebrow: "FAQ",
    title: "Common questions before starting a landing page or website project.",
    copy:
      "These are the questions that usually come up before we start. Adding them here makes the website clearer for visitors and stronger for long-tail search queries.",
    items: [
      {
        question: "How much does a project cost?",
        answer:
          "Smaller landing pages and basic websites start from 40 USD. The final price depends on scope, number of sections, content readiness, revisions and whether the project needs custom motion or multiple languages."
      },
      {
        question: "How long does a project usually take?",
        answer:
          "A simple landing page can move quickly once the direction, content and references are clear. Larger websites take longer because they include more structure, more content and more refinement rounds."
      },
      {
        question: "Do I need to provide the text and images?",
        answer:
          "You can send finished text, rough notes, examples you like or an existing website. I can help shape the content structure so the final page reads clearly even if everything is not fully prepared at the start."
      },
      {
        question: "Can you continue working on the website after launch?",
        answer:
          "Yes. After the first version goes live, I can help with follow-up edits, new sections, visual refinements and front-end updates as the business grows."
      }
    ]
  },
  ro: {
    eyebrow: "FAQ",
    title: "Intrebari frecvente inainte sa incepem un landing page sau un website.",
    copy:
      "Aici sunt cele mai comune intrebari pe care le primesc inainte de proiect. Sectiunea ajuta si vizitatorii, si partea de SEO pentru cautari mai specifice.",
    items: [
      {
        question: "Cat costa un proiect?",
        answer:
          "Landing page-urile mici si website-urile basic pornesc de la 40 USD. Pretul final depinde de scope, numarul de sectiuni, cat de pregatit este continutul, rundele de feedback si daca proiectul are nevoie de motion custom sau mai multe limbi."
      },
      {
        question: "Cat dureaza de obicei un proiect?",
        answer:
          "Un landing page simplu se poate misca repede daca directia, continutul si referintele sunt clare. Website-urile mai mari dureaza mai mult fiindca au mai multa structura, mai mult continut si mai multe rafinari."
      },
      {
        question: "Trebuie sa vin eu cu textele si imaginile?",
        answer:
          "Poti trimite texte finale, notite, exemple care iti plac sau site-ul actual. Te pot ajuta sa ordonam continutul ca pagina finala sa se citeasca bine chiar daca nu ai totul pregatit din prima."
      },
      {
        question: "Poti continua sa lucrezi la site si dupa lansare?",
        answer:
          "Da. Dupa prima versiune putem continua cu editari, sectiuni noi, rafinari vizuale si update-uri front-end pe masura ce businessul creste."
      }
    ]
  },
  ru: {
    eyebrow: "FAQ",
    title: "Chastye voprosy pered startom lendinga ili saita.",
    copy:
      "Zdes sobrany voprosy, kotorye chashche vsego poyavlyayutsya pered nachalom proekta. Eto pomogaet i posetitelyam, i SEO po bolee konkretnym zaprosam.",
    items: [
      {
        question: "Skolko stoit proekt?",
        answer:
          "Nebolshie lendingi i basic saity startuyut ot 40 USD. Itogovaya tsena zavisit ot obema rabot, kolichestva sektsiy, gotovnosti kontenta, kolichestva pravok i nalichiya custom motion ili neskolkikh yazykov."
      },
      {
        question: "Skolko vremeni obychno zanimaet proekt?",
        answer:
          "Prostoy lending mozhno sobrat dostatochno bystro, esli ponyatny napravlenie, kontent i referensy. Bolee krupnye saity zanimayut bolshe vremeni, potomu chto v nikh bolshe struktury, kontenta i etapov polirovki."
      },
      {
        question: "Nuzhno li mne samomu gotovit teksty i izobrazheniya?",
        answer:
          "Vy mozhete prislat gotovye teksty, zametki, primery sajtov ili tekushchiy sait. Ya pomogu vystroit strukturu kontenta tak, chtoby itogovaya stranitsa chitalas yasno, dazhe esli vse eshche ne polnostyu podgotovleno."
      },
      {
        question: "Mozhno li prodolzhit rabotu nad saitom posle zapuska?",
        answer:
          "Da. Posle publikatsii pervoy versii ya mogu pomoch s dalneyshimi izmeneniyami, novymi sektsiyami, vizualnoy polirovkoy i front-end obnovleniyami."
      }
    ]
  }
};

export function getHomeFaqData(locale: Locale) {
  return homeFaqByLocale[locale];
}
