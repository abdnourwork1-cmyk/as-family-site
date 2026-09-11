"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/data/faq";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { ChevronDownIcon } from "@/components/icons";
import { EASE } from "@/lib/motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-as-dark py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="Questions"
          title="FREQUENTLY ASKED QUESTIONS"
        />

        <StaggerGroup
          stagger={0.06}
          className="mx-auto mt-14 flex max-w-3xl flex-col gap-4"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <StaggerItem
                key={item.question}
                duration={0.45}
                className={`glass-card overflow-hidden rounded-xl px-5 transition-colors duration-300 ease-premium sm:px-6 ${
                  isOpen ? "border-as-gold/50" : ""
                }`}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-display text-base font-semibold tracking-wide text-as-white"
                  >
                    {item.question}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="shrink-0 text-as-gold"
                    >
                      <ChevronDownIcon className="h-5 w-5" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-as-muted sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
