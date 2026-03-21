import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  className?: string;
  centered?: boolean;
};

export function SectionIntro({ eyebrow, title, copy, className, centered = false }: SectionIntroProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <Reveal y={14} blur={4}>
        <p className="section-kicker">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.04} y={22} blur={8}>
        <h2 className="section-heading text-balance">{title}</h2>
      </Reveal>
      <Reveal delay={0.1} y={20} blur={8}>
        <p className={cn("section-copy", centered && "mx-auto")}>{copy}</p>
      </Reveal>
    </div>
  );
}
