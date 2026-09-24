import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-[80vh] flex items-center justify-center py-36">
        <div className="mx-auto max-w-[620px] px-6 text-center">
          <Reveal>
            <span className="eyebrow text-dark/40">Error 404</span>
            <h1 className="mt-3 font-display text-[2.8rem] font-bold tracking-tight text-dark sm:text-[3.4rem]">
              That page does not exist.
            </h1>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-4 font-body text-[1.1rem] text-dark/70">
              But this one does. Start here:
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="rounded-full bg-dark px-6 py-3 font-body text-[0.88rem] font-semibold text-paper hover:bg-green transition-colors"
              >
                Homepage
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-dark/15 bg-paper-deep/70 px-6 py-3 font-body text-[0.88rem] font-medium text-dark hover:bg-paper-deep transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-dark/15 bg-paper-deep/70 px-6 py-3 font-body text-[0.88rem] font-medium text-dark hover:bg-paper-deep transition-colors"
              >
                Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <SubpageFooter />
    </>
  );
}
