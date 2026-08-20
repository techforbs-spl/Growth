"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const METRICS = [
  { value: "38%", label: "Lower cost per qualified lead", scope: "18 accounts, 6+ months", fill: "76%" },
  { value: "2.4×", label: "Median pipeline growth in 2 quarters", scope: "Paid + organic combined", fill: "88%" },
  { value: "71", label: "Keywords moved to page one", scope: "Average, 9 months", fill: "62%" },
  { value: "11 days", label: "Kickoff to first live campaign", scope: "All four service lines", fill: "94%" },
];

export default function ResultsSnapshot() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">What we measure</p>
          <h2 className="mt-5 max-w-[600px] font-display text-[2rem] font-semibold leading-[1.15] text-dark lg:text-[2.5rem]">
            Numbers a finance lead would actually sign off on.
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
            Agency-wide medians across active engagements, Q1 2026 — not a
            sum of unrelated client totals.{" "}
            <a href="#work" className="underline decoration-dark/30 hover:text-green-deep">
              See the methodology behind each case
            </a>
            .
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
      <p className="tabular font-display text-[2.4rem] font-semibold leading-none text-dark">
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
