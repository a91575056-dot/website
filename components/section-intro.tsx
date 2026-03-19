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
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-heading text-balance">{title}</h2>
      <p className={cn("section-copy", centered && "mx-auto")}>{copy}</p>
    </div>
  );
}
