"use client";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getHomeFaqData } from "@/lib/home-faq-data";

export function FaqSection() {
  const locale = useLocale();
  const faq = getHomeFaqData(locale);

  return (
    <section id="faq" className="py-14 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:gap-12">
          <SectionIntro eyebrow={faq.eyebrow} title={faq.title} copy={faq.copy} className="max-w-none" />

          <Reveal delay={0.08} y={20} blur={8}>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.items.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-item-${index}`}>
                  <AccordionTrigger className="text-base leading-7 text-stone-950 sm:text-[1.05rem]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-stone-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
