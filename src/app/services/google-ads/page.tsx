import { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import SubpageCTA from "@/components/SubpageCTA";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Target, Layers, BarChart3, ShieldCheck, CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads Management — The Growth Inc.",
  description:
    "Ad spend that converts. Not just traffic that costs. High-intent Google Search and Performance Max campaigns tied directly to pipeline.",
};

const PILLARS = [
  {
    title: "Campaign Structure",
    desc: "Single-theme ad groups and isolated match types that eliminate wasted spend on non-commercial search variants.",
  },
  {
    title: "Keyword Intent Mapping",
    desc: "Targeting high-intent buyers ready to purchase or book a consultation, not casual informational browsers.",
  },
  {
    title: "Server-Side Conversion Tracking",
    desc: "Full offline conversion and CRM lead stage tracking (HubSpot, Salesforce) so Google Smart Bidding optimizes for revenue, not junk clicks.",
  },
  {
    title: "Account Hygiene & Negative Lists",
    desc: "Weekly search term audits and proactive negative keyword lists that stop budget bleed immediately.",
  },
];

export default function GoogleAdsServicePage() {
  return (
    <>
      <ServiceJsonLd
        name="Google Ads Management"
        description="High-intent Google Ads management focused on pipeline conversion, strict account hygiene, and offline revenue attribution."
      />
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <SubpageHero
          eyebrow="Google Ads"
          title="Ad spend that converts. Not just traffic that costs."
          description="Most Google Ads accounts waste 30% to 50% of their monthly budget on broad-match queries, broken attribution models, and campaigns that report high click volumes but deliver zero pipeline growth."
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
                  We don&apos;t run vanity traffic campaigns. Every campaign is built around pipeline generation and unit economics.
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
                  <strong>The first month is baseline.</strong> We rebuild account structure, fix broken conversion tags, and prune budget waste.
                </p>
                <p className="mt-2 font-body text-[1.05rem] leading-relaxed text-dark/80">
                  <strong>The second month is test and learn.</strong> We optimize bidding algorithms against CRM-verified lead quality and test high-intent ad creative.
                </p>
                <p className="mt-2 font-body text-[1.05rem] leading-relaxed text-dark/80">
                  <strong>The third month is scale.</strong> We allocate spend strictly toward profitable segments while keeping acquisition costs under control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SubpageCTA
          eyebrow="Free Account Audit"
          headline="We review Google Ads accounts for free."
          body="If we find something worth fixing, we tell you directly in a written brief. If your account is already running at peak efficiency, we will tell you that too."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
        />
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
