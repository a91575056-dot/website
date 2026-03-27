"use client";

import { MdOutlineEmail } from "react-icons/md";
import { SiFiverr, SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";

import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionLink } from "@/components/section-link";
import { getSiteData } from "@/lib/site-data";

const socialIconMap = {
  email: MdOutlineEmail,
  instagram: SiInstagram,
  tiktok: SiTiktok,
  fiverr: SiFiverr,
  whatsapp: SiWhatsapp
} as const;

export function SiteFooter() {
  const locale = useLocale();
  const { footer, navItems, socialLinks } = getSiteData(locale);

  return (
    <footer id="site-footer" className="pb-10 pt-4">
      <div className="section-shell">
        <Reveal className="border-t border-stone-300/80 pt-6" y={20} blur={8}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md">
              <div className="text-lg font-semibold tracking-[-0.03em] text-stone-950">Dionis Grecu</div>
              <p className="mt-3 text-sm leading-7 text-stone-600">{footer.description}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                {navItems.map((item) => (
                  <SectionLink key={item.targetId} targetId={item.targetId} className="transition hover:text-stone-950">
                    {item.label}
                  </SectionLink>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                {socialLinks.map((item) => {
                  const Icon = socialIconMap[item.id];
                  const isFiverr = item.id === "fiverr";

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className={`inline-flex items-center transition hover:text-stone-950 ${
                        isFiverr ? "justify-center" : "gap-2"
                      }`}
                    >
                      {Icon ? <Icon className={isFiverr ? "h-6 w-6 shrink-0" : "h-4 w-4 shrink-0"} /> : null}
                      {isFiverr ? <span className="sr-only">{item.label}</span> : <span>{item.label}</span>}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-xs uppercase tracking-[0.22em] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <span>{new Date().getFullYear()} Dionis Grecu</span>
            <span>{footer.stackLabel}</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
