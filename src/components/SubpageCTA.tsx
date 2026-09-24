import Reveal from "./Reveal";
import { PrimaryCTA, SecondaryCTA } from "./CTA";
import { ArrowRight, ShieldCheck, Clock, MessageSquareQuote } from "lucide-react";

interface SubpageCTAProps {
  eyebrow?: string;
  headline?: string;
  body?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showPillars?: boolean;
}

export default function SubpageCTA({
  eyebrow = "Next Step",
  headline = "Not sure which pathway is right for you?",
  body = "Send us your website URL and we will tell you where the biggest visibility or conversion gap is. No retainers that explain nothing.",
  primaryButtonText = "Start a Conversation",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Explore Our Work",
  secondaryButtonHref = "/work",
  showPillars = true,
}: SubpageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-paper-deep/70 py-24 lg:py-32 border-t border-dark/8">
      {/* Background radial accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#708238_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10">
        <div className="rounded-3xl border border-dark/10 bg-dark p-10 text-paper sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle glow inside card */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-green/20 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-[820px] text-center">
            <Reveal>
              <span className="eyebrow text-green-soft">{eyebrow}</span>
              <h2 className="mt-4 font-display text-[2.2rem] font-bold leading-[1.15] text-paper sm:text-[2.8rem] lg:text-[3.2rem]">
                {headline}
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mx-auto mt-5 max-w-[640px] font-body text-[1.05rem] leading-relaxed text-paper/75">
                {body}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <PrimaryCTA
                  href={primaryButtonHref}
                  className="!bg-green !text-paper hover:!bg-green-soft hover:!text-dark font-semibold !px-7 !py-3.5"
                >
                  {primaryButtonText}
                </PrimaryCTA>
                {secondaryButtonText && (
                  <SecondaryCTA
                    href={secondaryButtonHref}
                    className="!border-paper/20 !text-paper hover:!bg-paper/10 !px-6 !py-3.5"
                  >
                    {secondaryButtonText}
                  </SecondaryCTA>
                )}
              </div>
            </Reveal>

            {showPillars && (
              <Reveal delay={0.18}>
                <div className="mt-14 grid grid-cols-1 gap-6 border-t border-paper/10 pt-8 sm:grid-cols-3 text-left">
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-green-soft shrink-0 mt-0.5" />
                    <p className="font-body text-[0.82rem] text-paper/60 leading-snug">
                      1 business day response directly from senior strategists.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-green-soft shrink-0 mt-0.5" />
                    <p className="font-body text-[0.82rem] text-paper/60 leading-snug">
                      Strict NDA compliance on all audit data and proprietary metrics.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquareQuote size={18} className="text-green-soft shrink-0 mt-0.5" />
                    <p className="font-body text-[0.82rem] text-paper/60 leading-snug">
                      Zero generic retainers. Discovery conversation, not a high-pressure sales pitch.
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
