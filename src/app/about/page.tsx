import { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import SubpageCTA from "@/components/SubpageCTA";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import { Users, FileText, BarChart3, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — The Growth Inc.",
  description:
    "We are a small team. That is not a weakness. AI SEO, paid media and web development for mid-market businesses.",
};

const HOW_WE_WORK = [
  {
    icon: Users,
    title: "Small Client Roster",
    desc: "We strictly limit the number of active engagements so every account receives direct attention from senior strategists—never an inexperienced junior account manager.",
  },
  {
    icon: FileText,
    title: "Written Briefs First",
    desc: "Every engagement starts with a documented, transparent plan. There are zero grey areas or hidden assumptions on what we are delivering.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    desc: "Monthly reports show what moved, what did not, and why. We do not hide behind vanity metrics or suppress negative performance data.",
  },
];

const MARKETS = [
  {
    name: "Australia",
    role: "Primary Market",
    desc: "Headquartered in Australia with proven AI citation benchmarks across professional B2B services and national retail.",
  },
  {
    name: "New Zealand",
    role: "Regional Coverage",
    desc: "Cross-Tasman commercial campaigns and local search authority signals.",
  },
  {
    name: "United Arab Emirates",
    role: "Active Engagements",
    desc: "Healthcare, clinic services, and specialized commercial operations in Dubai and the GCC region.",
  },
  {
    name: "Canada",
    role: "Active Engagements",
    desc: "Cross-border financial services, accounting, and North American professional services.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <SubpageHero
          eyebrow="About"
          title="We are a small team. That is not a weakness."
          description="The Growth Inc. is an Australian-based digital marketing agency focused on AI SEO, paid media and web development. We work with a small number of clients at a time. That is intentional."
          secondaryText="We do not take on accounts we cannot service properly. If we say we will get you cited in AI search, we have a plan for how. If we cannot deliver something, we say so before the brief is signed."
          showCTA={false}
        />

        {/* Section 1: How We Work */}
        <section className="py-20 lg:py-28 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="max-w-[760px]">
              <Reveal>
                <span className="eyebrow text-green-deep">Operating Philosophy</span>
                <h2 className="mt-4 font-display text-[2rem] font-bold text-dark sm:text-[2.6rem]">
                  How We Work
                </h2>
                <p className="mt-3 font-body text-[1.05rem] text-dark/75">
                  We built our operating model to counter the typical agency churn cycle.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {HOW_WE_WORK.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={idx} delay={0.06 * idx}>
                    <div className="h-full rounded-2xl border border-dark/10 bg-paper p-8 shadow-xs hover:border-green/40 transition-colors">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-tint text-green-deep">
                        <Icon size={22} />
                      </div>
                      <h3 className="mt-6 font-display text-[1.25rem] font-bold text-dark">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-body text-[0.92rem] leading-relaxed text-dark/70">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Markets We Work In */}
        <section className="py-20 lg:py-28 bg-paper-deep/50 border-b border-dark/8">
          <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
            <div className="max-w-[760px]">
              <Reveal>
                <span className="eyebrow text-green-deep">Territories</span>
                <h2 className="mt-4 font-display text-[2rem] font-bold text-dark sm:text-[2.6rem]">
                  Markets We Work In
                </h2>
                <p className="mt-3 font-body text-[1.05rem] text-dark/75">
                  This is where verified client evidence and operational track records exist. New international markets are considered case by case.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MARKETS.map((market, idx) => (
                <Reveal key={market.name} delay={0.06 * idx}>
                  <div className="h-full rounded-2xl border border-dark/10 bg-paper p-7 shadow-xs">
                    <div className="flex items-center gap-2">
                      <Globe2 size={18} className="text-green-deep" />
                      <span className="eyebrow text-green-deep text-[0.7rem]">{market.role}</span>
                    </div>
                    <h3 className="mt-3 font-display text-[1.3rem] font-bold text-dark">
                      {market.name}
                    </h3>
                    <p className="mt-2.5 font-body text-[0.88rem] leading-relaxed text-dark/70">
                      {market.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SubpageCTA
          eyebrow="Direct Consultation"
          headline="If you want to talk to someone before deciding, we are happy to do that first."
          body="Tell us what you are working on. We will review your site and give you honest, actionable feedback in writing."
          primaryButtonText="Start a Conversation"
          primaryButtonHref="/contact"
        />
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
