import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-paper lg:py-32">
      <div
        className="glow-orb slow reverse"
        style={{ width: 260, height: 260, top: -60, right: "10%", background: "var(--green-soft)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[800px] px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-green-soft">In their words</p>
        </Reveal>

        <div className="mt-8">
          <Reveal delay={0.06}>
            <blockquote>
              <p className="font-display text-[1.6rem] font-normal leading-[1.35] text-paper lg:text-[1.9rem]">
                &ldquo;Add approved client quote here before launch. One sentence describing the before, one sentence describing what changed.&rdquo;
              </p>
              <footer className="mt-8 flex flex-col items-center justify-center gap-3">
                <span className="h-11 w-11 rounded-full" style={{ background: "var(--green-soft)" }} aria-hidden="true" />
                <div>
                  <p className="font-body text-[0.95rem] font-medium text-paper">Client Testimonial</p>
                  <p className="font-body text-[0.82rem] text-paper/55">Pending Approval</p>
                </div>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
