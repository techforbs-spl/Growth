import Reveal from "./Reveal";

const CLIENTS = ["Harrow Systems", "Cascade Metals", "Vantage Fluid", "Northline Freight", "Ambit Health", "Ledger Point"];

export default function CredibilityBar() {
  return (
    <section id="credibility" className="border-y border-dark/10 bg-paper-deep/50">
      <div className="mx-auto max-w-[1160px] px-6 py-14 lg:px-10">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <div className="flex items-center gap-5">
              <StampBadge />
              <p className="max-w-[200px] font-body text-[0.85rem] leading-snug text-dark/65">
                Independently rated 4.9/5 across 62 engagements
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {CLIENTS.map((name) => (
                <span
                  key={name}
                  className="font-body text-[1rem] font-semibold tracking-tight text-dark/40 transition-colors hover:text-dark/80"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-dark/10 pt-6 font-body text-[0.82rem] text-dark/60">
            <a href="#" className="underline decoration-dark/25 hover:text-green-deep">Google Premier Partner</a>
            <a href="#" className="underline decoration-dark/25 hover:text-green-deep">Meta Business Partner</a>
            <a href="#" className="underline decoration-dark/25 hover:text-green-deep">SOC 2 Type II</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StampBadge() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
      <g className="stamp-ring" style={{ transformOrigin: "32px 32px" }}>
        <circle cx="32" cy="32" r="30" fill="none" stroke="var(--green)" strokeWidth="1" strokeDasharray="2 4" />
      </g>
      <circle cx="32" cy="32" r="22" fill="var(--dark)" />
      <text
        x="32"
        y="29"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="600"
        fill="var(--paper)"
      >
        4.9
      </text>
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="6"
        letterSpacing="1"
        fill="var(--green-soft)"
      >
        RATED
      </text>
    </svg>
  );
}
