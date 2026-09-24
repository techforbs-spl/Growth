import Reveal from "./Reveal";
import { PrimaryCTA, SecondaryCTA } from "./CTA";

interface SubpageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  secondaryText?: string;
  badge?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function SubpageHero({
  eyebrow,
  title,
  description,
  secondaryText,
  badge,
  showCTA = true,
  ctaText = "Start a Conversation",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
}: SubpageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-dark/8 bg-paper">
      {/* Ambient background glows */}
      <div className="glow-orb top-[-80px] left-[15%] h-[320px] w-[320px] bg-green-tint/80" />
      <div className="glow-orb slow reverse top-[20%] right-[10%] h-[360px] w-[360px] bg-paper-deep/90" />

      <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10">


        <div className="max-w-[880px]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow text-green-deep">{eyebrow}</span>
              {badge && (
                <span className="rounded-full bg-green/10 border border-green/20 px-2.5 py-0.5 font-body text-[0.72rem] font-semibold text-green-deep">
                  {badge}
                </span>
              )}
            </div>
            <h1 className="mt-4 font-display text-[2.4rem] font-bold leading-[1.12] tracking-tight text-dark sm:text-[3.2rem] lg:text-[3.8rem] lg:font-extrabold">
              {title}
            </h1>
          </Reveal>

          {description && (
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[720px] font-body text-[1.1rem] leading-relaxed text-dark/75 sm:text-[1.2rem]">
                {description}
              </p>
            </Reveal>
          )}

          {secondaryText && (
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-[720px] font-body text-[0.98rem] leading-relaxed text-dark/65">
                {secondaryText}
              </p>
            </Reveal>
          )}

          {showCTA && (
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PrimaryCTA href={ctaHref}>{ctaText}</PrimaryCTA>
                {secondaryCtaText && secondaryCtaHref && (
                  <SecondaryCTA href={secondaryCtaHref}>
                    {secondaryCtaText}
                  </SecondaryCTA>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
