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
            For businesses tired of being invisible when buyers search for what you do
          </p>
        </Reveal>

        <h1 className="max-w-[820px] font-display text-[2.7rem] font-semibold leading-[1.06] text-dark lg:text-[4.0rem]">
          <RevealWords text="When buyers ask AI who to trust, make" />{" "}
          <RevealWords
            text="sure your name is part of the answer."
            delay={0.35}
            className="text-green-deep"
          />
        </h1>

        <Reveal delay={0.5}>
          <div className="mt-7 max-w-[620px] font-body text-[1.08rem] leading-relaxed text-dark/70 space-y-4">
            <p>
              Buyers are no longer only typing into Google. They ask ChatGPT, Perplexity, Gemini and Google AI Overviews who to trust, what to buy and which option makes sense.
            </p>
            <p>
              If your business is missing from those conversations, somebody else is getting the shortlist.
            </p>
            <p>
              The Growth Inc. helps you earn that visibility. Then turns it into qualified demand with Google Ads, Meta Ads and ChatGPT Ads.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <PrimaryCTA href="#book">Get in Touch</PrimaryCTA>
            <SecondaryCTA href="#work">See the Proof</SecondaryCTA>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="mt-16 grid max-w-[840px] grid-cols-2 gap-8 border-t border-dark/10 pt-8 sm:grid-cols-4">
            <Stat value="40+" label="Projects Delivered" />
            <Stat value="7+" label="AI SEO Engagements" />
            <Stat value="~25%" label="Average Enquiry Increase" />
            <Stat value="Under 5 Months" label="To First AI Citation" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  const isLong = value.length > 8;
  return (
    <div>
      <p className={`tabular font-display font-semibold text-dark leading-none ${
        isLong 
          ? "text-[1.05rem] sm:text-[1.2rem] lg:text-[1.4rem] whitespace-nowrap" 
          : "text-[1.4rem]"
      }`}>
        {value}
      </p>
      <p className="mt-2.5 font-body text-[0.78rem] leading-snug text-dark/55">
        {label}
      </p>
    </div>
  );
}
