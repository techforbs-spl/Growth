import Reveal from "./Reveal";

const PILLARS = [
  {
    tag: "Governance",
    title: "One shared definition of a qualified lead, signed off before we start.",
    body: "We write the lead and pipeline definitions into the contract with your sales team, not just marketing.",
  },
  {
    tag: "Access",
    title: "The person who built the strategy sits in your monthly review.",
    body: "No hand-off from a strategist to an anonymous execution pod. The senior lead presents the numbers.",
  },
  {
    tag: "Cadence",
    title: "A public testing log, not a highlight reel.",
    body: "Every experiment — winning or not — is logged with hypothesis, result, and next action.",
  },
  {
    tag: "Transparency",
    title: "Reporting built from your ad accounts and CRM.",
    body: "Dashboards pull live from source systems, not our slide template.",
  },
];

export default function OperatingModel() {
  return (
    <section id="method" className="relative overflow-hidden bg-dark py-24 text-paper lg:py-32">
      <div
        className="glow-orb"
        style={{ width: 300, height: 300, bottom: -100, left: "40%", background: "var(--green)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-green-soft">Why not just hire in-house</p>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] lg:text-[2.4rem]">
              Every agency claims to be data-driven. Here's the structure
              behind ours.
            </h2>
          </Reveal>

          <div className="flex flex-col">
            {PILLARS.map((p, i) => (
              <Reveal key={p.tag} delay={0.06 * i}>
                <div className="grid grid-cols-1 gap-4 border-t border-paper/12 py-8 sm:grid-cols-[110px_1fr]">
                  <span className="eyebrow text-green-soft">{p.tag}</span>
                  <div>
                    <p className="font-body text-[1.1rem] font-semibold leading-snug text-paper">
                      {p.title}
                    </p>
                    <p className="mt-3 max-w-[480px] font-body text-[0.9rem] leading-relaxed text-paper/60">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-paper/12" />
          </div>
        </div>
      </div>
    </section>
  );
}
