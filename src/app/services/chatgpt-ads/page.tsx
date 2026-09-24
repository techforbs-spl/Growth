import { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import SubpageCTA from "@/components/SubpageCTA";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Bot, Sparkles, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "ChatGPT Ads Service — The Growth Inc.",
  description:
    "The newest ad channel in the market. Early positioning and conversational placement capability for category first-movers.",
};

const CHANNEL_FACTS = [
  {
    title: "Conversational Intent Integration",
    desc: "Ads appear natively inside generative responses when users search for commercial tools, software, or professional service recommendations.",
  },
  {
    title: "Early-Stage Inventory & Select Categories",
    desc: "Currently rolling out across specific vertical categories and regions. Inventory is curated and highly targeted to commercial prompts.",
  },
  {
    title: "First-Mover Positioning Advantage",
    desc: "Brands establishing early presence capture top-of-mind AI placement and historical prompt affinity before broad market saturation occurs.",
  },
];

export default function ChatgptAdsServicePage() {
  return (
    <>
      <ServiceJsonLd
        name="ChatGPT Ads Strategy"
        description="Conversational ad placement and early-mover positioning strategy inside emerging generative AI platforms."
      />
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <SubpageHero
          eyebrow="ChatGPT Ads"
          badge="Emerging Channel"
          title="The newest ad channel in the market. Most businesses are not in it yet."
          description="ChatGPT now runs ads inside AI responses. As of 2026, it is available for select categories and geographies. The inventory is small. The audience is exceptionally high-intent."
          secondaryText="We are building early capability in this channel so clients who move now own the positioning before competition arrives."
          ctaText="Start a Conversation"
          ctaHref="/contact"
        />

        {/* Section 1: What We Know Right Now */}
        <section className="py-20 lg:py-28 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="max-w-[760px]">
              <Reveal>
                <span className="eyebrow text-green-deep">Verified Facts</span>
                <h2 className="mt-4 font-display text-[2rem] font-bold text-dark sm:text-[2.6rem]">
                  What We Know Right Now
                </h2>
                <p className="mt-3 font-body text-[1.05rem] text-dark/75">
                  No fabricated claims. Only verified insights on how commercial monetization is emerging inside conversational AI.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {CHANNEL_FACTS.map((fact, idx) => (
                <Reveal key={idx} delay={0.06 * idx}>
                  <div className="h-full rounded-2xl border border-dark/10 bg-paper p-8 shadow-xs hover:border-green/40 transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-tint text-green-deep">
                      <Cpu size={20} />
                    </div>
                    <h3 className="mt-5 font-display text-[1.2rem] font-bold text-dark">
                      {fact.title}
                    </h3>
                    <p className="mt-2.5 font-body text-[0.92rem] leading-relaxed text-dark/70">
                      {fact.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Who This Is For */}
        <section className="py-20 lg:py-28 bg-paper-deep/50 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="rounded-3xl border border-dark/10 bg-paper p-8 sm:p-12 lg:p-16">
              <div className="max-w-[780px]">
                <span className="eyebrow text-green-deep">Channel Fit</span>
                <h2 className="mt-3 font-display text-[2rem] font-bold text-dark sm:text-[2.4rem]">
                  Who This Is For
                </h2>
                <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-dark/80">
                  ChatGPT Ads is designed for mature businesses that already have foundational channels like Google Search and Meta Ads performing reliably and want to pioneer the next wave of high-intent acquisition. This is an advanced diversification initiative, not a first-step replacement for existing core channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SubpageCTA
          eyebrow="First Mover Briefing"
          headline="Interested in being one of the first in your category?"
          body="Let's review your market category to see if conversational ad inventory is available and whether early testing aligns with your growth targets."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
        />
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
