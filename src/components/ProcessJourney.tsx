import Reveal from "./Reveal";

const STAGES = [
  { n: "01", title: "Discovery and Audit", when: "Weeks 1–2", body: "We look at your past campaigns, current reporting and account data before touching anything. Understanding the real problem comes before the plan." },
  { n: "02", title: "Plan and Baseline", when: "Week 3", body: "A written plan with agreed definitions, target outcomes and a realistic first-phase scope. No fantasy forecasts." },
  { n: "03", title: "Build and Launch", when: "Weeks 4–6", body: "Campaigns and content go live in stages. When something moves, we know exactly why it moved." },
  { n: "04", title: "Optimise", when: "Ongoing", body: "We test, cut what is not earning its place and build on what is. Every decision is logged." },
  { n: "05", title: "Review and Re-plan", when: "Quarterly", body: "We step back, look at the commercial outcome and decide what scales, what stops and what needs a different approach." },
];

export default function ProcessJourney() {
  return (
    <section className="bg-paper-deep/50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">What happens after you reach out</p>
          <h2 className="mt-5 max-w-[620px] font-display text-[2rem] font-semibold leading-[1.15] text-dark lg:text-[2.5rem]">
            No black box. No "leave it with us" and hope for the best.
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
