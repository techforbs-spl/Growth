import { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import SubpageCTA from "@/components/SubpageCTA";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Layers, Users, Palette, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Meta Ads Management — The Growth Inc.",
  description:
    "The algorithm does not care about your creative. Your audience does. Full-funnel Meta advertising built for demand generation and revenue.",
};

const PILLARS = [
  {
    title: "Funnel Architecture",
    desc: "Structuring top-of-funnel demand creation separate from bottom-of-funnel conversion capture to prevent budget cannibalization.",
  },
  {
    title: "Audience Segmentation",
    desc: "Leveraging first-party CRM data, lookalikes, and broad algorithmic targeting without overlapping audience fatigue.",
  },
  {
    title: "Creative Strategy",
    desc: "Systematic angle testing across direct-response video, static proof assets, and comparison hooks designed to convert skeptical buyers.",
  },
  {
    title: "Reporting That Makes Sense",
    desc: "Clear dashboards that connect Meta ad impressions directly to blended customer acquisition cost (CAC) and closed revenue.",
  },
];

export default function MetaAdsServicePage() {
  return (
    <>
      <ServiceJsonLd
        name="Meta Ads Management"
        description="Performance-driven Meta Ads management with structured funnel architecture, direct-response creative testing, and transparent CAC reporting."
      />
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <SubpageHero
          eyebrow="Meta Ads"
          title="The algorithm does not care about your creative. Your audience does."
          description="Most Meta ad accounts waste enormous spend endlessly churning through random creative variants without a coherent funnel structure or conversion-ready landing page infrastructure."
          ctaText="Start a Conversation"
          ctaHref="/contact"
        />

        {/* Section 1: What We Focus On */}
        <section className="py-20 lg:py-28 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="max-w-[760px]">
              <Reveal>
                <span className="eyebrow text-green-deep">Execution Standards</span>
                <h2 className="mt-4 font-display text-[2rem] font-bold text-dark sm:text-[2.6rem]">
                  What We Focus On
                </h2>
                <p className="mt-3 font-body text-[1.05rem] text-dark/75">
                  We build scalable paid social engines that turn passive social scrollers into qualified, ready-to-buy pipeline.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PILLARS.map((pillar, idx) => (
                <Reveal key={idx} delay={0.06 * idx}>
                  <div className="rounded-2xl border border-dark/10 bg-paper p-8 shadow-xs hover:border-green/40 transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-tint text-green-deep font-display font-bold">
                      0{idx + 1}
                    </div>
                    <h3 className="mt-5 font-display text-[1.25rem] font-bold text-dark">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 font-body text-[0.95rem] leading-relaxed text-dark/70">
                      {pillar.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Engagement Terms */}
        <section className="py-20 lg:py-28 bg-paper-deep/50 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="rounded-3xl border border-dark/10 bg-paper p-8 sm:p-12 lg:p-16">
              <div className="max-w-[800px]">
                <span className="eyebrow text-green-deep">Engagement Terms</span>
                <h2 className="mt-3 font-display text-[2rem] font-bold text-dark sm:text-[2.4rem]">
                  Minimum Engagement: 3 Months
                </h2>
                <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-dark/80">
                  Paid social requires adequate learning cycles for pixel optimization and iterative creative validation. Three months provides the necessary runway to establish baseline benchmarks, test message angles, and scale profitable ad sets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SubpageCTA
          eyebrow="Free Account Audit"
          headline="We review Meta ad accounts for free."
          body="Send us your account and we will analyze your creative fatigue, audience overlaps, and conversion attribution gaps."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
        />
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
