import Reveal from "./Reveal";

const STAGES = [
  { n: "01", title: "Discovery & audit", when: "Weeks 1–2", body: "We review your CRM and past reporting before writing a strategy slide." },
  { n: "02", title: "Plan & baseline", when: "Week 3", body: "A written plan with lead definitions, target KPIs, and a realistic 90-day scope." },
  { n: "03", title: "Build & launch", when: "Weeks 4–6", body: "Campaigns and site work go live in stages so we can isolate what's working." },
  { n: "04", title: "Optimize", when: "Ongoing", body: "Weekly testing against the log, monthly strategy review, quarterly scope check." },
  { n: "05", title: "Report & re-plan", when: "Quarterly", body: "A business review tied to pipeline outcomes decides what scales next." },
];

export default function ProcessJourney() {
  return (
    <section className="bg-paper-deep/50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">What happens after you call</p>
          <h2 className="mt-5 max-w-[560px] font-display text-[2rem] font-semibold leading-[1.15] text-dark lg:text-[2.5rem]">
            A five-stage journey, not a black box.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-5">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={0.06 * i}>
              <div className="flex h-full flex-col gap-5 rounded-3xl border border-dark/10 bg-paper p-6 lg:flex-col">
                <span className="tabular flex h-9 w-9 items-center justify-center rounded-full bg-green text-[0.8rem] font-medium text-paper">
                  {s.n}
                </span>
                <div>
                  <p className="font-body text-[0.72rem] uppercase tracking-wide text-dark/45">{s.when}</p>
                  <p className="mt-1.5 font-body text-[1.05rem] font-semibold text-dark">{s.title}</p>
                  <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-dark/60">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
