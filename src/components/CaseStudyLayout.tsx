"use client";

import { useState } from "react";
import Link from "next/link";
import SubpageHeader from "./SubpageHeader";
import SubpageFooter from "./SubpageFooter";
import SubpageCTA from "./SubpageCTA";
import Reveal from "./Reveal";
import CalendlyModal from "./CalendlyModal";
import { CaseStudyItem } from "@/data/caseStudies";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  Sparkles,
  Layers,
  TrendingUp,
} from "lucide-react";

interface CaseStudyLayoutProps {
  study: CaseStudyItem;
}

export default function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-24 border-b border-dark/8 bg-paper">
          <div className="glow-orb top-[-60px] left-[10%] h-[300px] w-[300px] bg-green-tint/80" />
          
          <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10">
            {/* Back link */}
            <div className="mb-8">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 font-body text-[0.88rem] font-medium text-dark/60 hover:text-green-deep transition-colors"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                <span>Back to all work</span>
              </Link>
            </div>

            {/* Scope / Metadata Badges */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-green/10 border border-green/20 px-3 py-1 font-body text-[0.75rem] font-semibold text-green-deep">
                  {study.industry}
                </span>
                <span className="rounded-full bg-paper-deep border border-dark/10 px-3 py-1 font-body text-[0.75rem] font-medium text-dark/70">
                  {study.geography}
                </span>
                <span className="rounded-full bg-paper-deep border border-dark/10 px-3 py-1 font-body text-[0.75rem] font-medium text-dark/70">
                  {study.service}
                </span>
              </div>

              <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.12] tracking-tight text-dark sm:text-[3.2rem] lg:text-[3.8rem] lg:font-extrabold max-w-[950px]">
                {study.title}
              </h1>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[780px] font-body text-[1.15rem] leading-relaxed text-dark/75">
                {study.summary}
              </p>
            </Reveal>

            {/* Metric KPI Highlight Strip */}
            <Reveal delay={0.12}>
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 border-y border-dark/10 py-6">
                <div>
                  <p className="tabular font-display text-[2rem] font-extrabold text-green-deep sm:text-[2.4rem]">
                    {study.metricPrimary}
                  </p>
                  <p className="mt-1 font-body text-[0.82rem] font-medium text-dark/60">
                    {study.metricPrimaryLabel}
                  </p>
                </div>
                <div>
                  <p className="tabular font-display text-[2rem] font-extrabold text-green-deep sm:text-[2.4rem]">
                    {study.metricSecondary}
                  </p>
                  <p className="mt-1 font-body text-[0.82rem] font-medium text-dark/60">
                    {study.metricSecondaryLabel}
                  </p>
                </div>
                <div>
                  <p className="font-display text-[1.4rem] font-bold text-dark sm:text-[1.6rem] pt-1.5">
                    {study.timeline}
                  </p>
                  <p className="mt-1 font-body text-[0.82rem] font-medium text-dark/60">
                    Engagement Window
                  </p>
                </div>
                <div>
                  <p className="font-display text-[1.4rem] font-bold text-dark sm:text-[1.6rem] pt-1.5 flex items-center gap-1.5">
                    <ShieldCheck size={22} className="text-green-deep" /> Verified
                  </p>
                  <p className="mt-1 font-body text-[0.82rem] font-medium text-dark/60">
                    Platform Source of Truth
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Two-Column Deep-Dive Body */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] items-start">
              {/* Left Sticky Sidebar (Noir & Blanco style) */}
              <aside className="lg:sticky lg:top-28 space-y-6">
                <div className="rounded-2xl border border-dark/10 bg-paper-deep/60 p-6">
                  <span className="eyebrow text-green-deep text-[0.72rem]">Client Profile</span>
                  <div className="mt-4 space-y-4 font-body text-[0.88rem]">
                    <div>
                      <p className="text-dark/50 text-[0.78rem] uppercase tracking-wider">Vertical</p>
                      <p className="font-semibold text-dark mt-0.5">{study.clientCategory}</p>
                    </div>
                    <div>
                      <p className="text-dark/50 text-[0.78rem] uppercase tracking-wider">Territories</p>
                      <p className="font-semibold text-dark mt-0.5">{study.geography}</p>
                    </div>
                    <div>
                      <p className="text-dark/50 text-[0.78rem] uppercase tracking-wider">Service Scope</p>
                      <p className="font-semibold text-dark mt-0.5">{study.service}</p>
                    </div>
                    <div>
                      <p className="text-dark/50 text-[0.78rem] uppercase tracking-wider">Evidence Verified</p>
                      <p className="font-semibold text-green-deep mt-0.5">{study.evidenceType}</p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-dark/10 pt-5">
                    <a
                      href="#book"
                      className="block w-full text-center rounded-xl bg-dark py-3 font-body text-[0.85rem] font-semibold text-paper transition-all hover:bg-green"
                    >
                      Audit Your Category
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-dark/10 bg-paper p-6 text-dark/70 font-body text-[0.82rem] leading-relaxed">
                  <p className="font-semibold text-dark text-[0.88rem] mb-2 flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-green" /> NDA Protection
                  </p>
                  Client brand names and proprietary identifiers are obscured to honor strict commercial confidentiality agreements. All performance data reflects actual recorded platform sessions.
                </div>
              </aside>

              {/* Main Editorial Content */}
              <div className="space-y-16">
                {/* 1. The Problem */}
                <div>
                  <Reveal>
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-700 font-display text-xs font-bold">
                        01
                      </span>
                      <h2 className="font-display text-[1.8rem] font-bold text-dark sm:text-[2.2rem]">
                        The Problem
                      </h2>
                    </div>
                    <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-dark/80">
                      {study.problem}
                    </p>
                  </Reveal>

                  <Reveal delay={0.06}>
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {study.problemDetails.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-dark/8 bg-paper-deep/30 p-4"
                        >
                          <AlertCircle size={18} className="text-dark/40 shrink-0 mt-0.5" />
                          <p className="font-body text-[0.88rem] leading-snug text-dark/75">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                {/* 2. What We Did (The Execution Blueprint) */}
                <div>
                  <Reveal>
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-tint text-green-deep font-display text-xs font-bold">
                        02
                      </span>
                      <h2 className="font-display text-[1.8rem] font-bold text-dark sm:text-[2.2rem]">
                        What We Fixed & Implemented
                      </h2>
                    </div>
                    <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-dark/80">
                      We replaced fragmented agency tactics with a structured technical and content architecture tailored for retrieval algorithms.
                    </p>
                  </Reveal>

                  <div className="mt-6 space-y-4">
                    {study.deliverables.map((item, idx) => (
                      <Reveal key={idx} delay={0.04 * idx}>
                        <div className="flex items-start gap-4 rounded-2xl border border-dark/10 bg-paper p-6 shadow-xs hover:border-green/40 transition-colors">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-tint text-green-deep font-semibold text-[0.9rem]">
                            {idx + 1}
                          </div>
                          <div>
                            <h3 className="font-display text-[1.05rem] font-bold text-dark">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 font-body text-[0.9rem] leading-relaxed text-dark/70">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* 3. Verified Platform Evidence Exhibit */}
                <div>
                  <Reveal>
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green text-paper font-display text-xs font-bold">
                        03
                      </span>
                      <h2 className="font-display text-[1.8rem] font-bold text-dark sm:text-[2.2rem]">
                        The Outcome & Platform Evidence
                      </h2>
                    </div>
                    <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-dark/80">
                      {study.outcome}
                    </p>
                  </Reveal>

                  {/* Primary Screenshot Exhibit */}
                  <Reveal delay={0.08}>
                    <div className="mt-8 overflow-hidden rounded-3xl border border-dark/12 bg-dark-deep shadow-2xl">
                      <div className="flex items-center justify-between border-b border-paper/10 bg-dark px-6 py-4 text-paper/70 font-body text-[0.82rem]">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-500/80" />
                          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <span className="h-3 w-3 rounded-full bg-green/80" />
                          <span className="ml-3 font-mono text-[0.78rem] text-paper/50">
                            {study.evidenceType}
                          </span>
                        </div>
                        <button
                          onClick={() => setModalImage(study.imageSrc)}
                          className="flex items-center gap-1.5 text-green-soft hover:text-paper transition-colors font-medium text-xs cursor-pointer"
                        >
                          <Maximize2 size={14} /> Full View
                        </button>
                      </div>

                      <div
                        onClick={() => setModalImage(study.imageSrc)}
                        className="group relative cursor-zoom-in bg-black/40 p-4 sm:p-6"
                      >
                        <img
                          src={study.imageSrc}
                          alt={study.imageAlt}
                          className="w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                          <span className="rounded-full bg-dark/90 px-4 py-2 font-body text-xs font-medium text-paper backdrop-blur-md">
                            Click to expand high-res screenshot
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {/* Stats Cards Breakdown */}
                  <Reveal delay={0.12}>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {study.outcomeStats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-dark/10 bg-paper-deep/50 p-6"
                        >
                          <p className="tabular font-display text-[1.8rem] font-extrabold text-green-deep">
                            {stat.value}
                          </p>
                          <p className="mt-1 font-display text-[0.95rem] font-bold text-dark">
                            {stat.label}
                          </p>
                          <p className="mt-2 font-body text-[0.84rem] text-dark/65 leading-relaxed">
                            {stat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                {/* 4. Strategic Takeaway Callout */}
                <Reveal delay={0.16}>
                  <div className="rounded-3xl border border-green/30 bg-green-tint/50 p-8 sm:p-10">
                    <span className="eyebrow text-green-deep text-[0.72rem]">Strategic Takeaway</span>
                    <h3 className="mt-2 font-display text-[1.4rem] font-bold text-dark">
                      Why this matters for your category
                    </h3>
                    <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-dark/75">
                      Search is no longer a static list of ten blue links. Modern decision makers query generative models for recommendations. If your brand lacks structured entity schema and citable third-party markers, AI models simply default to your competitors.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href="#book"
                        className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 font-body text-[0.85rem] font-semibold text-paper transition-all hover:bg-green-deep"
                      >
                        Check Your Category Citation Gaps
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Navigator (Noir & Blanco style) */}
        <section className="border-t border-dark/10 bg-paper-deep py-16">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="eyebrow text-dark/50">Next Case Study</span>
                <h3 className="mt-1 font-display text-[1.6rem] font-bold text-dark sm:text-[2rem]">
                  {study.nextTitle}
                </h3>
              </div>
              <div>
                <Link
                  href={`/work/${study.nextSlug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3.5 font-body text-[0.9rem] font-semibold text-paper transition-all hover:bg-green"
                >
                  <span>Read Next Case Study</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Page CTA */}
        <SubpageCTA
          eyebrow="AI Search Audit"
          headline="Want to see if your category has citation gaps?"
          body="We run a complimentary citation & entity audit before any engagement starts. Zero cost, no commitment, verified in writing."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
          secondaryButtonText="View All Case Studies"
          secondaryButtonHref="/work"
        />
      </main>

      {/* Screenshot Lightbox Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-h-[90vh] max-w-[1100px] overflow-auto rounded-2xl bg-dark p-2 border border-paper/20">
            <img src={modalImage} alt="Case study evidence detail" className="w-full h-auto rounded-xl" />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 rounded-full bg-dark/80 px-3 py-1 font-body text-xs font-semibold text-paper border border-paper/20 hover:bg-paper hover:text-dark transition-colors cursor-pointer"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
