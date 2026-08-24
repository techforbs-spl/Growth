"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const METRICS = [
  { value: "~25%", label: "More inbound enquiries", scope: "AI SEO clients, after citation visibility established in ChatGPT, Gemini and Google AI Overviews", fill: "80%" },
  { value: "18%", label: "Year-on-year revenue growth", scope: "Home and housing e-commerce brand, 12-month organic SEO engagement, US market", fill: "75%" },
  { value: "7+", label: "Businesses now cited in AI search", scope: "Appearing in ChatGPT, Gemini, Perplexity and Google AI Overviews for high-intent queries in their category", fill: "90%" },
  { value: "Under 5 months", label: "To First AI Citation", scope: "From technical overhaul to first AI citation. Outsourced professional services brand, Australia and Canada", fill: "85%" },
];

export default function ResultsSnapshot() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">The numbers that actually matter</p>
          <h2 className="mt-5 max-w-[600px] font-display text-[2rem] font-semibold leading-[1.15] text-dark lg:text-[2.5rem]">
            You cannot pay salaries with impressions.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={0.07 * i}>
              <FillCard {...m} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-[600px] font-body text-[0.85rem] leading-relaxed text-dark/55">
            Every number has a context. Every context has a method. We will show you both before you sign anything.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FillCard({
  value,
  label,
  scope,
  fill,
}: {
  value: string;
  label: string;
  scope: string;
  fill: string;
}) {
  return (
    <div>
      <p className={`tabular font-display font-semibold leading-none text-dark ${
        value.length > 8 
          ? "text-[1.3rem] sm:text-[1.5rem] lg:text-[1.8rem] whitespace-nowrap" 
          : "text-[2.4rem]"
      }`}>
        {value}
      </p>
      <div className="fill-bar mt-5">
        <motion.div
          className="fill-bar__inner"
          initial={{ width: "0%" }}
          whileInView={{ width: fill }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <p className="mt-4 font-body text-[0.95rem] leading-snug text-dark/80">
        {label}
      </p>
      <p className="mt-1.5 font-body text-[0.76rem] text-dark/50">{scope}</p>
    </div>
  );
}
