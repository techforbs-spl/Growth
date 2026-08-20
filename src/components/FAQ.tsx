"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  { q: "What size company do you actually work best with?", a: "Mostly B2B companies doing $5–50M in annual revenue with an existing sales team. If you're pre-revenue, we're likely not the right fit — and we'll say so on the first call." },
  { q: "What's the minimum commitment?", a: "A 6-month initial term for AI SEO and web systems, since those compound over time. Paid media can start at 3 months." },
  { q: "Do you guarantee rankings or a specific ROAS?", a: "No. Anyone guaranteeing a number without seeing your account first is guessing. We'll give a realistic range before you sign anything." },
  { q: "Who owns the accounts and the data?", a: "You do. Ad accounts, analytics, and CMS access stay under your organization from day one." },
  { q: "How much internal time will this actually take?", a: "Roughly 2–3 hours a week in month one, dropping to about an hour a week for ongoing approvals after that." },
  { q: "What if performance dips for a quarter?", a: "It happens, especially through algorithm updates. Our contracts include a defined review checkpoint rather than automatic renewal." },
  { q: "Can you work alongside our existing in-house marketer?", a: "Yes — most accounts have one. We typically run specialist channel work while your in-house lead owns brand and stakeholders." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[860px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-deep">Before you book</p>
          <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] text-dark lg:text-[2.4rem]">
            Honest answers to the questions we get on every discovery call.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-colors ${open ? "border-green/30 bg-white/60" : "border-dark/10"}`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="focus-ring flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-body text-[1.02rem] font-semibold text-dark">{item.q}</span>
                  <span
                    className={`shrink-0 rounded-full border border-dark/20 p-1 text-dark transition-transform duration-300 ${open ? "rotate-45 border-green-deep text-green-deep" : ""}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300"
                  style={{ maxHeight: open ? "220px" : "0px" }}
                >
                  <p className="px-6 pb-6 font-body text-[0.92rem] leading-relaxed text-dark/65">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-10 font-body text-[0.88rem] text-dark/55">
            Something else on your mind?{" "}
            <a href="#book" className="underline decoration-dark/30 hover:text-green-deep">
              Ask it on the call
            </a>{" "}
            — there's no pitch deck waiting for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
