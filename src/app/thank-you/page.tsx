import { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";
import { CheckCircle2, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Message Received — The Growth Inc.",
  description: "Thank you for reaching out. We reply within one business day.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-[85vh] flex items-center justify-center py-36">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <Reveal>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-tint border border-green/30 text-green-deep shadow-sm">
              <CheckCircle2 size={38} />
            </div>

            <span className="mt-8 inline-block eyebrow text-green-deep">Submission Confirmed</span>

            <h1 className="mt-3 font-display text-[2.6rem] font-bold tracking-tight text-dark sm:text-[3.2rem]">
              Message received.
            </h1>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-6 space-y-3 font-body text-[1.1rem] leading-relaxed text-dark/75">
              <p>
                We will review what you sent and reply within <strong>1 business day</strong>.
              </p>
              <p className="text-[0.98rem] text-dark/65">
                No automated email nurture sequence will follow. A real person reads and assesses every brief.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-dark px-7 py-3.5 font-body text-[0.92rem] font-semibold text-paper transition-all hover:bg-green"
              >
                <span>While you wait, read a case study</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/"
                className="font-body text-[0.9rem] font-medium text-dark/60 hover:text-dark transition-colors"
              >
                Back to homepage
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <SubpageFooter />
    </>
  );
}
