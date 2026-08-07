import { tiers } from "@/data/tiers";
import { CrownIcon } from "@/components/icons";

export function LevelTiers() {
  return (
    <section className="relative bg-as-black py-24 sm:py-28">
      <div className="container-as">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="section-eyebrow">Progression</span>
          <h2 className="section-title">LEVEL TIERS</h2>
          <p className="mt-4 text-base sm:text-lg text-as-muted">
            Climb the ranks from Recruit to Legend as your activity inside the
            family grows.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {tiers.map((tier, index) => {
            const intensity = 0.15 + (index / (tiers.length - 1)) * 0.55;
            return (
              <div
                key={tier.name}
                className="card-hover glass-card flex flex-col items-center gap-3 rounded-xl p-5 text-center"
                style={{
                  boxShadow: `inset 0 0 0 1px rgba(212,175,55,${intensity})`,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border text-as-gold-bright"
                  style={{ borderColor: `rgba(212,175,55,${intensity + 0.2})` }}
                >
                  <CrownIcon className="h-6 w-6" />
                </div>
                <p className="font-display text-sm font-bold tracking-widest text-as-white">
                  {tier.name}
                </p>
                <p className="text-xs font-medium text-as-gold-bright">
                  {tier.level}
                </p>
                <p className="text-xs leading-relaxed text-as-muted">
                  {tier.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
