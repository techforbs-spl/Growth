import { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import SubpageCTA from "@/components/SubpageCTA";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import {
  Sparkles,
  Target,
  Layers,
  Bot,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — The Growth Inc.",
  description:
    "Five core capabilities. One team. AI SEO, Google Ads, Meta Ads, ChatGPT Ads, and Web Development with no generic retainers.",
};

const SERVICES_DATA = [
  {
    title: "AI SEO",
    href: "/services/ai-seo",
    desc: "Entity schema, knowledge graph positioning, and answer-first content that gets your business cited by ChatGPT, Gemini and Google AI Overviews.",
    icon: Sparkles,
    featured: true,
    badge: "Primary Service",
    stat: "Under 5 Months to Citations",
  },
  {
    title: "Google Ads",
    href: "/services/google-ads",
    desc: "Clean campaign architectures and CRM-integrated offline conversion tracking designed to capture high-intent buyers ready to transact.",
    icon: Target,
    stat: "Pipeline First Attribution",
  },
  {
    title: "Meta Ads",
    href: "/services/meta-ads",
    desc: "Structured demand generation funnels with systematic creative testing across video, carousel, and static angle assets.",
    icon: Layers,
    stat: "Full-Funnel Testing",
  },
  {
    title: "ChatGPT Ads",
    href: "/services/chatgpt-ads",
    desc: "Conversational ad placement and early-mover positioning strategy inside emerging generative AI platforms.",
    icon: Bot,
    badge: "New Channel",
    stat: "First Mover Positioning",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    desc: "Speed-first, AI-crawlable website architecture and high-converting landing pages built with zero bloat or dependencies.",
    icon: Globe,
    stat: "Sub-Second LCP Performance",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <SubpageHero
          eyebrow="What We Do"
          title="Five things. One team. No retainers that explain nothing."
          description="The Growth Inc. does not offer generic marketing packages or off-the-shelf retainers."
          secondaryText="Every engagement is scoped around a defined growth bottleneck—whether that is search invisibility, wasted ad spend, or a website that fails to convert."
          showCTA={false}
        />

        {/* Services Grid (2 + 2 + 1 layout) */}
        <section className="py-20 lg:py-28 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Card 1: AI SEO (Featured, Spanning full width on mobile/tablet or prominent card) */}
              <div className="md:col-span-2">
                <Reveal>
                  <div className="group rounded-3xl border-2 border-green/30 bg-gradient-to-br from-paper via-green-tint/30 to-paper-deep/60 p-8 sm:p-12 shadow-sm transition-all hover:border-green hover:shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-green/15 blur-2xl pointer-events-none" />
                    
                    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] items-center">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-green px-3 py-1 font-body text-[0.75rem] font-bold text-paper">
                            Primary Capability
                          </span>
                          <span className="font-body text-[0.8rem] font-semibold text-green-deep">
                            {SERVICES_DATA[0].stat}
                          </span>
                        </div>

                        <h2 className="mt-4 font-display text-[2rem] font-bold text-dark sm:text-[2.5rem]">
                          <Link href="/services/ai-seo" className="hover:text-green-deep transition-colors">
                            AI SEO & Citations
                          </Link>
                        </h2>

                        <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-dark/80">
                          {SERVICES_DATA[0].desc}
                        </p>

                        <div className="mt-8">
                          <Link
                            href="/services/ai-seo"
                            className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3 font-body text-[0.88rem] font-semibold text-paper transition-all group-hover:bg-green"
                          >
                            <span>Explore AI SEO Service</span>
                            <ArrowUpRight size={16} />
                          </Link>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-dark/10 bg-paper p-6 shadow-xs font-body text-[0.85rem] text-dark/75 space-y-3">
                        <p className="font-display font-bold text-dark text-[0.95rem]">
                          What AI SEO Solves:
                        </p>
                        <div className="flex items-start gap-2">
                          <span className="text-green font-bold">✓</span>
                          <span>Invisibility in ChatGPT, Gemini and Google AI Overviews</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green font-bold">✓</span>
                          <span>Competitors being cited ahead of your brand</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green font-bold">✓</span>
                          <span>Absence of structured machine-readable entity schema</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Cards 2-5 in 2x2 grid */}
              {SERVICES_DATA.slice(1).map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.href} delay={0.06 * idx}>
                    <div className="group flex h-full flex-col justify-between rounded-3xl border border-dark/10 bg-paper p-8 shadow-xs transition-all hover:border-green/40 hover:shadow-lg">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-tint text-green-deep">
                            <Icon size={22} />
                          </div>
                          {service.badge && (
                            <span className="rounded-full bg-green/10 border border-green/20 px-2.5 py-0.5 font-body text-[0.72rem] font-semibold text-green-deep">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-6 font-display text-[1.4rem] font-bold text-dark group-hover:text-green-deep transition-colors">
                          <Link href={service.href}>{service.title}</Link>
                        </h3>

                        <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-dark/70">
                          {service.desc}
                        </p>
                      </div>

                      <div className="mt-8 border-t border-dark/8 pt-5 flex items-center justify-between">
                        <span className="font-body text-[0.78rem] font-semibold text-dark/50">
                          {service.stat}
                        </span>
                        <Link
                          href={service.href}
                          className="font-body text-[0.85rem] font-semibold text-dark hover:text-green-deep inline-flex items-center gap-1 transition-colors"
                        >
                          Learn more <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Differentiator Strip */}
            <div className="mt-20 rounded-3xl border border-dark/10 bg-paper-deep/60 p-8 sm:p-12">
              <span className="eyebrow text-green-deep">How The Team Operates</span>
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-tint text-green-deep font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-display text-[1.05rem] font-bold text-dark">
                      Vertical Exclusivity
                    </h4>
                    <p className="mt-1 font-body text-[0.88rem] leading-relaxed text-dark/70">
                      We work with one account per industry vertical per city. We do not represent your direct local competitors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-tint text-green-deep font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-display text-[1.05rem] font-bold text-dark">
                      Written Briefs First
                    </h4>
                    <p className="mt-1 font-body text-[0.88rem] leading-relaxed text-dark/70">
                      Every engagement starts with a documented technical plan before any billing or execution begins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-tint text-green-deep font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-display text-[1.05rem] font-bold text-dark">
                      Zero Generic Packages
                    </h4>
                    <p className="mt-1 font-body text-[0.88rem] leading-relaxed text-dark/70">
                      We do not offer generic packages without context. We only recommend services that directly impact your commercial pipeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SubpageCTA
          eyebrow="Advisory & Gap Analysis"
          headline="Not sure which service is right for you?"
          body="Send us your site and we will tell you where the biggest gap is. No retainers that explain nothing."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
        />
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
