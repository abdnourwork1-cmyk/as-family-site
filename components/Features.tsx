import { features } from "@/data/features";
import { featureIcons } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";

export function Features() {
  return (
    <section className="relative bg-as-dark py-24 sm:py-28">
      <div className="container-as">
        <SectionHeading
          eyebrow="The Difference"
          title="WHY AS FAMILY?"
          description="A gaming community built around real connection, not just a name on a member list."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <div
                key={feature.title}
                className="glass-card card-hover flex flex-col gap-4 p-6 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-as-gold/30 bg-as-gold/5 text-as-gold-bright">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-wide text-as-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-as-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
