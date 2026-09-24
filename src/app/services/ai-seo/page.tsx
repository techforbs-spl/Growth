import { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import SubpageCTA from "@/components/SubpageCTA";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import { ServiceJsonLd } from "@/components/JsonLd";
import { CASE_STUDIES } from "@/data/caseStudies";
import {
  Sparkles,
  Bot,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Search,
  Database,
  Cpu,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI SEO Service — The Growth Inc.",
  description:
    "Your business, cited by ChatGPT, Gemini and Google AI Overviews. We build the entity signals and content structures AI systems trust.",
};

const DELIVERABLES = [
  {
    icon: Database,
    title: "Entity Schema Architecture",
    desc: "We construct multi-layer Organisation, Service and ItemList JSON-LD structured data that maps your exact commercial capabilities directly into LLM knowledge graphs.",
  },
  {
    icon: Search,
    title: "Knowledge Panel & Entity Optimisation",
    desc: "We align brand signals, Wikipedia/Wikidata entities, and authoritative business registries to establish unmistakable entity disambiguation.",
  },
  {
    icon: Bot,
    title: "AI Overview & Generative Search Monitoring",
    desc: "We track weekly prompt clusters across ChatGPT-4o, Google AI Overviews, Gemini and Perplexity to benchmark your brand's citation frequency against competitors.",
  },
  {
    icon: Layers,
    title: "Content Authority & Answer-First Architecture",
    desc: "We restructure commercial and informational pages into structured answer hubs that generative search engines extract for direct query summaries.",
  },
  {
    icon: Cpu,
    title: "Citation & Co-Occurrence Tracking",
    desc: "We engineer third-party platform mentions and authoritative citations across industry-specific media that generative AI models use to verify trust.",
  },
];

export default function AiSeoServicePage() {
  const caseStudiesList = Object.values(CASE_STUDIES);

  return (
    <>
      <ServiceJsonLd
        name="AI SEO & Citation Optimization"
        description="Get your business cited by ChatGPT, Gemini, and Google AI Overviews through entity signals, structured data, and authoritative content architecture."
      />
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <SubpageHero
          eyebrow="AI SEO"
          badge="Flagship Capability"
          title="Your business, cited by ChatGPT, Gemini and Google AI Overviews."
          description="Buyers are skipping Google search entirely. They ask AI systems directly. The AI system either mentions you or it does not."
          secondaryText="We build the entity signals, content structure and authority markers that tell AI systems to trust and cite your business ahead of competitors."
          ctaText="Start a Conversation"
          ctaHref="/contact"
        />

        {/* Section 1: What is AI SEO? */}
        <section className="py-20 lg:py-28 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
              <div>
                <Reveal>
                  <span className="eyebrow text-green-deep">The Paradigm Shift</span>
                  <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.18] text-dark sm:text-[2.6rem]">
                    Why traditional SEO alone is no longer enough.
                  </h2>
                </Reveal>
              </div>

              <div className="space-y-6 font-body text-[1.05rem] leading-relaxed text-dark/80">
                <Reveal delay={0.06}>
                  <p>
                    When a decision-maker asks ChatGPT or Gemini, <em>&quot;Who are the top outsourced accounting firms for mid-market Australian businesses?&quot;</em>, the AI doesn&apos;t return ten blue links. It evaluates its internal knowledge graph and directly synthesizes a list of three to four trusted recommendations.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    Traditional SEO focuses on keywords, backlinks, and meta tags. But generative AI models do not read websites like search crawlers from 2015. They evaluate <strong>entity relationships</strong>, structured authority signals, and verified co-occurrences across reputable third-party datasets.
                  </p>
                </Reveal>
                <Reveal delay={0.14}>
                  <p>
                    If your digital presence lacks machine-readable schema, structured credential signals, and concise answer architectures, generative systems will simply cite your competitors—even if your business has superior products or decades more experience.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Comparison Grid: Traditional SEO vs AI SEO */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-dark/10 bg-paper-deep/50 p-8">
                <span className="eyebrow text-dark/50">Legacy Approach</span>
                <h3 className="mt-2 font-display text-[1.3rem] font-bold text-dark">
                  Traditional SEO
                </h3>
                <ul className="mt-5 space-y-3 font-body text-[0.92rem] text-dark/70">
                  <li className="flex items-start gap-2.5">
                    <span className="text-dark/40 font-bold">✕</span>
                    <span>Chasing arbitrary keyword search volume and keyword density</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-dark/40 font-bold">✕</span>
                    <span>Ranking for page clicks on ten blue links</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-dark/40 font-bold">✕</span>
                    <span>Fluff blog posts designed to satisfy search bots</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-green/40 bg-green-tint/40 p-8 shadow-sm">
                <span className="eyebrow text-green-deep">The Growth Inc. Standard</span>
                <h3 className="mt-2 font-display text-[1.3rem] font-bold text-dark">
                  AI SEO & Entity Engineering
                </h3>
                <ul className="mt-5 space-y-3 font-body text-[0.92rem] text-dark/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-green-deep shrink-0 mt-0.5" />
                    <span>Machine-readable schema mapping into LLM knowledge graphs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-green-deep shrink-0 mt-0.5" />
                    <span>Direct conversational citations inside ChatGPT, Gemini & AI Overviews</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-green-deep shrink-0 mt-0.5" />
                    <span>Answer-first content architecture built for immediate commercial trust</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Deliverables */}
        <section className="py-20 lg:py-28 bg-paper-deep/40 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="max-w-[760px]">
              <Reveal>
                <span className="eyebrow text-green-deep">What We Do</span>
                <h2 className="mt-4 font-display text-[2rem] font-bold text-dark sm:text-[2.6rem]">
                  The AI SEO Deliverables
                </h2>
                <p className="mt-3 font-body text-[1.05rem] text-dark/75">
                  Every deliverable is written, tested, and tracked against real conversational search queries.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={idx} delay={0.06 * idx}>
                    <div className="h-full rounded-2xl border border-dark/10 bg-paper p-7 shadow-xs hover:border-green/40 transition-colors">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-tint text-green-deep">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-5 font-display text-[1.15rem] font-bold text-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 font-body text-[0.9rem] leading-relaxed text-dark/70">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Proof / Case Studies */}
        <section className="py-20 lg:py-28 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow text-green-deep">Proof</span>
                <h2 className="mt-3 font-display text-[2rem] font-bold text-dark sm:text-[2.5rem]">
                  Evidence from live engagements
                </h2>
              </div>
              <div>
                <Link
                  href="/work"
                  className="font-body text-[0.9rem] font-medium text-dark/70 hover:text-green-deep inline-flex items-center gap-1.5"
                >
                  <span>See all case studies</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {caseStudiesList.map((study) => (
                <div
                  key={study.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-dark/10 bg-paper p-6 hover:border-green/40 hover:shadow-lg transition-all"
                >
                  <div>
                    <span className="eyebrow text-green-deep text-[0.7rem]">{study.industry}</span>
                    <h3 className="mt-3 font-display text-[1.2rem] font-bold text-dark group-hover:text-green-deep transition-colors">
                      <Link href={`/work/${study.slug}`}>{study.title}</Link>
                    </h3>
                    <div className="mt-4 overflow-hidden rounded-xl border border-dark/10 bg-paper-deep">
                      <img
                        src={study.imageSrc}
                        alt={study.imageAlt}
                        className="w-full h-36 object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-4 font-body text-[0.85rem] text-dark/70 line-clamp-2">
                      {study.outcome}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-dark/8 pt-4 flex items-center justify-between">
                    <span className="font-display font-extrabold text-green-deep text-[1.1rem]">
                      {study.metricPrimary}
                    </span>
                    <Link
                      href={`/work/${study.slug}`}
                      className="font-body text-[0.82rem] font-semibold text-dark hover:text-green-deep inline-flex items-center gap-1"
                    >
                      Read Study <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Engagement Terms */}
        <section className="py-20 lg:py-28 bg-paper-deep/60 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="rounded-3xl border border-dark/10 bg-paper p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
                <div>
                  <span className="eyebrow text-green-deep">Engagement Terms</span>
                  <h2 className="mt-3 font-display text-[2rem] font-bold text-dark sm:text-[2.4rem]">
                    Minimum Engagement: 4 Months.
                  </h2>
                  <p className="mt-2 font-display text-[1.15rem] font-semibold text-dark/60">
                    No exceptions.
                  </p>
                  <p className="mt-4 font-body text-[0.98rem] leading-relaxed text-dark/75">
                    AI citation signals take time to build, index, and propagate into model training datasets and retrieval caches. A 4-month minimum is not arbitrary agency policy—it is the factual minimum duration required for AI search models to detect entity updates and verify third-party consistency.
                  </p>
                </div>

                <div className="space-y-4 rounded-2xl bg-paper-deep/60 p-6 border border-dark/8">
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-green-deep shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-[0.95rem] font-bold text-dark">
                        Month 1: Entity Audit & Schema Build
                      </p>
                      <p className="font-body text-[0.84rem] text-dark/65 mt-0.5">
                        Clean crawl errors, map 40+ prompt clusters, deploy JSON-LD architecture.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers size={20} className="text-green-deep shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-[0.95rem] font-bold text-dark">
                        Month 2–3: Content Hubs & Co-Occurrence
                      </p>
                      <p className="font-body text-[0.84rem] text-dark/65 mt-0.5">
                        Deploy answer-first hubs, secure third-party verified mentions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp size={20} className="text-green-deep shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-[0.95rem] font-bold text-dark">
                        Month 4+: Citation Verification & Scale
                      </p>
                      <p className="font-body text-[0.84rem] text-dark/65 mt-0.5">
                        Audit live ChatGPT/Gemini prompt responses, expand citation footprint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: CTA Section */}
        <SubpageCTA
          eyebrow="Citation Audit"
          headline="Want to see if your category has AI citation gaps?"
          body="We run a free AI search and entity audit before any engagement starts. No cost, no commitment, verified in writing."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
        />
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
