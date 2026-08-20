import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: <IconRadar />,
    tag: "Primary",
    name: "AI SEO",
    problem: "Your organic pipeline stalled once generative answers absorbed the queries you used to rank for.",
    deliverable: "Entity-led content architecture, technical crawl health, visibility tracking across AI overviews.",
  },
  {
    icon: <IconTarget />,
    tag: "Primary",
    name: "Paid Search",
    problem: "Spend keeps climbing on branded terms while new-account pipeline stays flat.",
    deliverable: "Intent-mapped structure, first-party conversion tracking, weekly bid governance.",
  },
  {
    icon: <IconLayers />,
    tag: "Primary",
    name: "Paid Social",
    problem: "Meta and LinkedIn generate clicks that sales doesn't recognize as real demand.",
    deliverable: "ICP-built audience and creative testing, lead scoring into your CRM.",
  },
  {
    icon: <IconFrame />,
    tag: "Supporting",
    name: "Website Systems",
    problem: "Your site converts traffic other channels already paid to bring — or it doesn't.",
    deliverable: "Conversion-focused rebuilds built to support the campaigns above.",
  },
];

export default function ServicePathways() {
  return (
    <section id="services" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">Where to start</p>
          <h2 className="mt-5 max-w-[560px] font-display text-[2rem] font-semibold leading-[1.15] text-dark lg:text-[2.5rem]">
            Four levers. One system behind them.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={0.06 * i}>
              <a
                href="#book"
                className="focus-ring group flex h-full flex-col rounded-3xl border border-dark/10 bg-white/40 p-7 transition-all hover:-translate-y-1.5 hover:bg-white/70 hover:shadow-[0_25px_50px_-25px_rgba(43,31,46,0.25)]"
              >
                <div className="flex items-center justify-between text-green-deep">
                  {s.icon}
                  <span className="eyebrow text-dark/35">{s.tag}</span>
                </div>
                <h3 className="mt-6 font-body text-[1.2rem] font-semibold text-dark">{s.name}</h3>
                <p className="mt-3 font-body text-[0.87rem] leading-relaxed text-dark/60">{s.problem}</p>
                <p className="mt-5 border-t border-dark/10 pt-4 font-body text-[0.8rem] leading-relaxed text-dark/70">
                  {s.deliverable}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-body text-[0.85rem] font-medium text-green-deep opacity-0 transition-opacity group-hover:opacity-100">
                  Explore this service ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconRadar() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="1.4" fill="currentColor" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M13 3.5v6M13 16.5v6M22.5 13h-6M9.5 13h-6" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="13" cy="13" r="2" fill="currentColor" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <path d="M13 2 23 8l-10 6L3 8l10-6Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M3 13l10 6 10-6M3 18l10 6 10-6" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}
function IconFrame() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <rect x="2.5" y="4.5" width="21" height="17" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 9h21" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
