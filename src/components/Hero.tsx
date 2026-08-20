import { PrimaryCTA, SecondaryCTA } from "./CTA";
import Reveal, { RevealWords } from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div
        className="glow-orb slow"
        style={{ width: 380, height: 380, top: -80, left: -100, background: "var(--green)" }}
        aria-hidden="true"
      />
      <div
        className="glow-orb reverse"
        style={{ width: 320, height: 320, top: 40, right: -80, background: "var(--green-soft)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-6 flex items-center gap-2 text-green-deep">
            <span className="h-[5px] w-[5px] rounded-full bg-green-soft" />
            For B2B teams doing $5–50M in revenue
          </p>
        </Reveal>

        <h1 className="max-w-[760px] font-display text-[2.7rem] font-semibold leading-[1.06] text-dark lg:text-[4.2rem]">
          <RevealWords text="Marketing paced to how your business" />{" "}
          <RevealWords
            text="actually grows."
            delay={0.35}
            className="text-green-deep"
          />
        </h1>

        <Reveal delay={0.5}>
          <p className="mt-7 max-w-[520px] font-body text-[1.08rem] leading-relaxed text-dark/70">
            The Growth Inc. runs AI SEO, paid search, paid social and the websites
            behind them for mid-market B2B companies — reporting on
            pipeline and cost of acquisition, not impressions.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <PrimaryCTA href="#book">Book Now</PrimaryCTA>
            <SecondaryCTA href="#work">See the results</SecondaryCTA>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="mt-16 grid max-w-[640px] grid-cols-3 gap-8 border-t border-dark/10 pt-8">
            <Stat value="4.9/5" label="62 verified engagements" />
            <Stat value="2.4×" label="Median pipeline growth" />
            <Stat value="11 days" label="Kickoff to first launch" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="tabular font-display text-[1.4rem] font-semibold text-dark">
        {value}
      </p>
      <p className="mt-1 font-body text-[0.78rem] leading-snug text-dark/55">
        {label}
      </p>
    </div>
  );
}
