import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-paper lg:py-32">
      <div
        className="glow-orb slow reverse"
        style={{ width: 260, height: 260, top: -60, right: "10%", background: "var(--green-soft)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1160px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-soft">In their words</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.06}>
            <blockquote>
              <p className="font-display text-[1.6rem] font-normal leading-[1.35] text-paper lg:text-[1.9rem]">
                &ldquo;They didn't pitch us a bigger budget in month two. They
                told us our sales team wasn't following up on the leads we
                already had, and helped us fix that first.&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="h-11 w-11 rounded-full" style={{ background: "var(--green-soft)" }} aria-hidden="true" />
                <div>
                  <p className="font-body text-[0.95rem] font-medium text-paper">Renata Solis</p>
                  <p className="font-body text-[0.82rem] text-paper/55">CMO, Vantage Fluid</p>
                </div>
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-paper/15 p-7">
              <p className="font-body text-[1.1rem] font-semibold leading-snug text-paper/90">
                &ldquo;Reporting is the first thing I've trusted enough to
                forward to our board without editing it.&rdquo;
              </p>
              <p className="mt-5 font-body text-[0.85rem] text-paper/55">
                Aaron Fitch, Founder — Harrow Systems
              </p>
              <a href="#" className="mt-6 inline-block font-body text-[0.85rem] text-green-soft underline decoration-green-soft/40">
                Read more verified reviews ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
