"use client";

import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <Reveal variant="fade" duration={0.5}>
        <span className="section-eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal variant="up" delay={0.08} duration={0.65}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal variant="up" delay={0.16} duration={0.65}>
          <p className="mt-4 text-base sm:text-lg text-as-muted">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
