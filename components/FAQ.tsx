import { faqItems } from "@/data/faq";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDownIcon } from "@/components/icons";

export function FAQ() {
  return (
    <section id="faq" className="relative bg-as-dark py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="Questions"
          title="FREQUENTLY ASKED QUESTIONS"
        />

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group glass-card overflow-hidden rounded-xl px-5 py-1 open:border-as-gold/50 sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-semibold tracking-wide text-as-white marker:content-none">
                {item.question}
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-as-gold transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-as-muted sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
