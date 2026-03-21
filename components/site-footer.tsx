import { MdOutlineEmail } from "react-icons/md";
import { SiFiverr, SiInstagram, SiWhatsapp } from "react-icons/si";

import { Reveal } from "@/components/reveal";
import { SectionLink } from "@/components/section-link";
import { navItems, socialLinks } from "@/lib/site-data";

const socialIconMap = {
  Email: MdOutlineEmail,
  Instagram: SiInstagram,
  Fiverr: SiFiverr,
  WhatsApp: SiWhatsapp
} as const;

export function SiteFooter() {
  return (
    <footer id="site-footer" className="pb-10 pt-4">
      <div className="section-shell">
        <Reveal className="border-t border-stone-300/80 pt-6" y={20} blur={8}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md">
              <div className="text-lg font-semibold tracking-[-0.03em] text-stone-950">Dionis Grecu</div>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Landing pages, business websites and portfolio websites built for businesses, freelancers and personal brands.
              </p>
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
                  const Icon = socialIconMap[item.label as keyof typeof socialIconMap];

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-stone-950"
                    >
                      {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-xs uppercase tracking-[0.22em] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
            <span>{new Date().getFullYear()} Dionis Grecu</span>
            <span>Next.js, Astro, React/Vite, Tailwind CSS, GSAP, Framer Motion</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
