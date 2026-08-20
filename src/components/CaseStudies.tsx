"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { SecondaryCTA } from "./CTA";

export default function CaseStudies() {
  return (
    <section id="work" className="bg-paper-deep/50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <p className="eyebrow text-green-deep">Evidence, not adjectives</p>
            <h2 className="mt-5 max-w-[560px] font-display text-[2rem] font-semibold leading-[1.15] text-dark lg:text-[2.5rem]">
              Three accounts, three different starting problems.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <SecondaryCTA href="#book">Read the full case library</SecondaryCTA>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal className="lg:row-span-2">
            <TiltCard className="flex h-full flex-col justify-between rounded-3xl bg-dark p-9 text-paper">
              <FeaturedContent />
            </TiltCard>
          </Reveal>
          <Reveal delay={0.08}>
            <TiltCard className="flex h-full flex-col justify-between rounded-3xl border border-dark/10 bg-paper p-7">
              <CompactContent
                tag="Industrial · SEO"
                client="Cascade Metals"
                problem="Organic traffic flat for 3 years despite monthly blog output."
                outcome="+164% organic sessions, 41 page-one terms"
              />
            </TiltCard>
          </Reveal>
          <Reveal delay={0.14}>
            <TiltCard className="flex h-full flex-col justify-between rounded-3xl border border-dark/10 bg-paper p-7">
              <CompactContent
                tag="Healthcare · Paid Social"
                client="Ambit Health"
                problem="Meta spend rising faster than qualified demo bookings."
                outcome="Cost per demo down 47%, spend unchanged"
              />
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState({});

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateZ(6px)`,
    });
  };

  return (
    <a
      ref={ref}
      href="#book"
      onMouseMove={onMove}
      onMouseLeave={() => setStyle({ transform: "perspective(900px) rotateX(0) rotateY(0)" })}
      style={style}
      className={`tilt-card focus-ring block ${className}`}
    >
      {children}
    </a>
  );
}

function FeaturedContent() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <span className="eyebrow text-green-soft">Logistics · PPC + SEO</span>
          <span className="eyebrow text-paper/40">Northline Freight</span>
        </div>
        <p className="mt-8 max-w-[420px] font-body text-[1rem] leading-relaxed text-paper/75">
          Northline had a 9-person sales team and a marketing budget entirely
          funding branded search. No pipeline attribution existed beyond
          &quot;the website.&quot;
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-paper/10 pt-6">
          <div>
            <p className="tabular font-display text-[2.2rem] font-semibold text-green-soft">3.1×</p>
            <p className="mt-1 font-body text-[0.8rem] text-paper/55">Sales-qualified pipeline</p>
          </div>
          <div>
            <p className="tabular font-display text-[2.2rem] font-semibold text-green-soft">52%</p>
            <p className="mt-1 font-body text-[0.8rem] text-paper/55">Lower cost per opportunity</p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-paper/10 pt-6">
        <p className="font-body text-[1.05rem] font-semibold leading-snug text-paper/90">
          &ldquo;We finally have a marketing report our CFO reads without
          translation.&rdquo;
        </p>
        <p className="mt-3 font-body text-[0.8rem] text-paper/50">
          Priya Nathan, VP Marketing
        </p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 font-body text-[0.9rem] font-medium text-green-soft">
        Read the full case ↗
      </span>
    </>
  );
}

function CompactContent({
  tag,
  client,
  problem,
  outcome,
}: {
  tag: string;
  client: string;
  problem: string;
  outcome: string;
}) {
  return (
    <>
      <div>
        <span className="eyebrow text-green-deep">{tag}</span>
        <p className="mt-5 font-body text-[1.2rem] font-bold text-dark">{client}</p>
        <p className="mt-2 font-body text-[0.9rem] leading-relaxed text-dark/65">{problem}</p>
      </div>
      <p className="mt-6 border-t border-dark/10 pt-4 font-body text-[0.92rem] font-medium text-green-deep">
        {outcome} ↗
      </p>
    </>
  );
}
