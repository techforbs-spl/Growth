"use client";

import { useState } from "react";
import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import SubpageCTA from "@/components/SubpageCTA";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import { CASE_STUDIES } from "@/data/caseStudies";
import { ArrowUpRight, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const studiesList = Object.values(CASE_STUDIES);
  const filteredStudies =
    activeFilter === "all"
      ? studiesList
      : studiesList.filter((s) => s.categoryFilter === activeFilter);

  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <SubpageHero
          eyebrow="Our Work"
          title="Results we can talk about. Names we cannot."
          description="All client engagements are covered by NDA. What we can show is the problem, the approach and the outcome. Judge us on that."
          showCTA={false}
        />

        {/* Filter Bar & Case Studies Showcase */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            {/* Filter Tabs (Noir & Blanco style) */}
            <div className="flex flex-wrap items-center gap-2 border-b border-dark/10 pb-6">
              {[
                { id: "all", label: "All Work (3)" },
                { id: "ai-seo", label: "AI SEO & Citations" },
                { id: "ecommerce", label: "E-Commerce Revenue" },
                { id: "healthcare", label: "Healthcare & Local" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-5 py-2 font-body text-[0.88rem] font-medium transition-all cursor-pointer ${
                    activeFilter === filter.id
                      ? "bg-dark text-paper shadow-sm"
                      : "bg-paper-deep/80 text-dark/70 hover:bg-paper-deep hover:text-dark"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="mt-12 flex flex-col gap-12">
              {filteredStudies.map((study, idx) => (
                <Reveal key={study.slug} delay={0.06 * idx}>
                  <div className="group rounded-3xl border border-dark/10 bg-paper p-6 sm:p-9 lg:p-10 shadow-xs transition-all hover:border-green/40 hover:shadow-xl">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
                      {/* Text Column */}
                      <div>
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-green/10 border border-green/20 px-3 py-0.5 font-body text-[0.72rem] font-semibold text-green-deep">
                            {study.industry}
                          </span>
                          <span className="rounded-full bg-paper-deep border border-dark/10 px-3 py-0.5 font-body text-[0.72rem] font-medium text-dark/65">
                            {study.geography}
                          </span>
                          <span className="rounded-full bg-paper-deep border border-dark/10 px-3 py-0.5 font-body text-[0.72rem] font-medium text-dark/65">
                            {study.service}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="mt-4 font-display text-[1.8rem] font-bold leading-tight text-dark sm:text-[2.2rem] group-hover:text-green-deep transition-colors">
                          <Link href={`/work/${study.slug}`}>{study.title}</Link>
                        </h2>

                        {/* Problem */}
                        <p className="mt-4 font-body text-[0.98rem] leading-relaxed text-dark/75">
                          {study.problem}
                        </p>

                        {/* Deliverables summary */}
                        <div className="mt-5 space-y-1.5 border-t border-dark/8 pt-4">
                          <p className="eyebrow text-green-deep text-[0.72rem]">Core Execution Scope:</p>
                          <ul className="space-y-1 font-body text-[0.85rem] text-dark/70">
                            {study.deliverables.slice(0, 3).map((item, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green shrink-0" />
                                <span>{item.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Metric Highlights */}
                        <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-paper-deep/70 p-4 sm:p-5 border border-dark/8">
                          <div>
                            <p className="tabular font-display text-[1.8rem] font-extrabold text-green-deep">
                              {study.metricPrimary}
                            </p>
                            <p className="font-body text-[0.78rem] text-dark/60 font-medium">
                              {study.metricPrimaryLabel}
                            </p>
                          </div>
                          <div>
                            <p className="tabular font-display text-[1.8rem] font-extrabold text-green-deep">
                              {study.metricSecondary}
                            </p>
                            <p className="font-body text-[0.78rem] text-dark/60 font-medium">
                              {study.metricSecondaryLabel}
                            </p>
                          </div>
                        </div>

                        {/* Action link */}
                        <div className="mt-7">
                          <Link
                            href={`/work/${study.slug}`}
                            className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3 font-body text-[0.88rem] font-semibold text-paper transition-all group-hover:bg-green"
                          >
                            <span>Read the case study</span>
                            <ArrowUpRight size={16} />
                          </Link>
                        </div>
                      </div>

                      {/* Screenshot Thumbnail Column (Noir & Blanco tilt/exhibit style) */}
                      <div className="relative">
                        <Link
                          href={`/work/${study.slug}`}
                          className="block overflow-hidden rounded-2xl border border-dark/12 bg-dark shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                        >
                          <div className="flex items-center justify-between border-b border-paper/10 bg-dark-deep px-4 py-2.5 text-paper/60 text-xs font-mono">
                            <span className="truncate">{study.evidenceType}</span>
                            <span className="text-green-soft text-[0.75rem] font-body">Inspect ↗</span>
                          </div>
                          <div className="p-3 bg-black/40">
                            <img
                              src={study.imageSrc}
                              alt={study.imageAlt}
                              className="w-full h-auto max-h-[340px] rounded-lg object-contain object-top"
                              loading="lazy"
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* How We Document Results section */}
            <div className="mt-20 rounded-3xl border border-dark/10 bg-paper-deep/60 p-8 sm:p-12">
              <div className="max-w-[780px]">
                <div className="flex items-center gap-2 text-green-deep">
                  <ShieldCheck size={20} />
                  <span className="eyebrow text-green-deep text-[0.75rem]">Data Integrity Standard</span>
                </div>
                <h3 className="mt-3 font-display text-[1.5rem] font-bold text-dark sm:text-[1.8rem]">
                  How We Document Results
                </h3>
                <p className="mt-3 font-body text-[1rem] leading-relaxed text-dark/75">
                  Every result shown across our case studies comes directly from actual platform data. Platform screenshots (Google Search Console, Shopify Merchant Analytics, live conversational AI prompts) are the definitive source of truth. We do not extrapolate, round up, or project forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <SubpageCTA
          eyebrow="Category Review"
          headline="Have an existing website that is not getting cited or converting?"
          body="Send us your website and we will show you the exact technical or AI citation signals holding your business back."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
        />
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
