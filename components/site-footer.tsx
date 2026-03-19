import { SiFiverr, SiInstagram, SiWhatsapp } from "react-icons/si";

import { SectionLink } from "@/components/section-link";
import { navItems, socialLinks } from "@/lib/site-data";

const socialIconMap = {
  Instagram: SiInstagram,
  Fiverr: SiFiverr,
  WhatsApp: SiWhatsapp
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="section-shell">
        <div className="glass-panel px-5 py-6 sm:px-7 sm:py-7">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md">
              <div className="text-lg font-semibold text-white">Dionis Grecu</div>
              <p className="mt-3 text-sm leading-7 text-white/56">
                Landing pages, business websites and portfolio websites built for businesses, freelancers and personal brands.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-4 text-sm text-white/58">
                {navItems.map((item) => (
                  <SectionLink key={item.targetId} targetId={item.targetId} className="transition hover:text-white">
                    {item.label}
                  </SectionLink>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/58">
                {socialLinks.map((item) => {
                  const Icon = socialIconMap[item.label as keyof typeof socialIconMap];

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/68 transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
                    >
                      {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="soft-divider mt-6" />
          <div className="mt-5 flex flex-col gap-2 text-xs uppercase tracking-[0.22em] text-white/36 sm:flex-row sm:items-center sm:justify-between">
            <span>{new Date().getFullYear()} Dionis Grecu</span>
            <span>Next.js, Astro, React/Vite, Tailwind CSS, GSAP, Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
