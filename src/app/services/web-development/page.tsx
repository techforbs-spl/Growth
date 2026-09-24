import { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import SubpageCTA from "@/components/SubpageCTA";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Globe, Zap, Code, ShieldCheck, CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development — The Growth Inc.",
  description:
    "A site that exists is not the same as a site that works. Fast, AI-crawlable, conversion-engineered web architecture built for pipeline.",
};

const WHAT_WE_BUILD = [
  {
    title: "Campaign Landing Pages",
    desc: "Single-objective, high-converting landing pages built specifically to support high-intent Google Ads and Meta paid traffic.",
  },
  {
    title: "Full Commercial Websites",
    desc: "End-to-end web builds for service businesses, e-commerce brands, healthcare clinics, and professional B2B practices.",
  },
  {
    title: "Technical Rebuilds & Migrations",
    desc: "Complete architectural overhauls when an outdated theme or CMS is actively bottlenecking conversion rates and search rankings.",
  },
  {
    title: "AI-Ready Web Architecture",
    desc: "Entity schema, JSON-LD structured content, and fast static delivery engineered from day one—never bolted on as an afterthought.",
  },
];

const APPROACH_POINTS = [
  {
    title: "Blazing Speed",
    desc: "We do not use bloated page builders or heavy plugins where clean static architecture will load in under 1 second.",
  },
  {
    title: "SEO & AI-Ready from Day 1",
    desc: "Technical SEO, Core Web Vitals, canonical routing, and machine-readable schema are baked directly into the codebase.",
  },
  {
    title: "Zero Handcuff Dependencies",
    desc: "You own 100% of your code and hosting. Everything is documented with clean repositories you can take anywhere.",
  },
];

export default function WebDevelopmentServicePage() {
  return (
    <>
      <ServiceJsonLd
        name="Web Development & Conversion Architecture"
        description="Speed-first, AI-crawlable website architecture and high-converting landing pages designed to drive qualified commercial pipeline."
      />
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <SubpageHero
          eyebrow="Web Development"
          title="A site that exists is not the same as a site that works."
          description="Most websites are built for a designer's portfolio or an agency's creative awards—not for a business's pipeline. We build for conversion, sub-second speed, and AI crawlability from the very first line of code."
          ctaText="Start a Conversation"
          ctaHref="/contact"
        />

        {/* Section 1: What We Build */}
        <section className="py-20 lg:py-28 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="max-w-[760px]">
              <Reveal>
                <span className="eyebrow text-green-deep">Capabilities</span>
                <h2 className="mt-4 font-display text-[2rem] font-bold text-dark sm:text-[2.6rem]">
                  What We Build
                </h2>
                <p className="mt-3 font-body text-[1.05rem] text-dark/75">
                  Every site is custom-engineered for commercial credibility and frictionless user conversion.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {WHAT_WE_BUILD.map((item, idx) => (
                <Reveal key={idx} delay={0.06 * idx}>
                  <div className="rounded-2xl border border-dark/10 bg-paper p-8 shadow-xs hover:border-green/40 transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-tint text-green-deep font-display font-bold">
                      0{idx + 1}
                    </div>
                    <h3 className="mt-5 font-display text-[1.25rem] font-bold text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 font-body text-[0.95rem] leading-relaxed text-dark/70">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: How We Approach Builds */}
        <section className="py-20 lg:py-28 bg-paper-deep/50 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="max-w-[760px]">
              <Reveal>
                <span className="eyebrow text-green-deep">Engineering Standards</span>
                <h2 className="mt-4 font-display text-[2rem] font-bold text-dark sm:text-[2.6rem]">
                  How We Approach Builds
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {APPROACH_POINTS.map((point, idx) => (
                <Reveal key={idx} delay={0.06 * idx}>
                  <div className="h-full rounded-2xl border border-dark/10 bg-paper p-8 shadow-xs">
                    <CheckCircle2 size={24} className="text-green-deep" />
                    <h3 className="mt-4 font-display text-[1.2rem] font-bold text-dark">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 font-body text-[0.92rem] leading-relaxed text-dark/70">
                      {point.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Engagement Format */}
        <section className="py-20 lg:py-28 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="rounded-3xl border border-dark/10 bg-paper p-8 sm:p-12 lg:p-16">
              <div className="max-w-[780px]">
                <span className="eyebrow text-green-deep">Engagement Format</span>
                <h2 className="mt-3 font-display text-[2rem] font-bold text-dark sm:text-[2.4rem]">
                  Project-Based Engagements
                </h2>
                <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-dark/80">
                  Web development is delivered as a defined project, not a perpetual monthly retainer. We conduct a detailed discovery call, deliver a written technical brief before any code is written, and commit to fixed milestones and launch timelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SubpageCTA
          eyebrow="Website Review"
          headline="Have an existing site that is not converting? Or starting from scratch?"
          body="Either way, let's review your current digital architecture and show you what needs to be improved for speed, SEO, and conversion."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
        />
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
