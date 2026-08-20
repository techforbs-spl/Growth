"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    budget: "$15,000 - $50,000",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API form submission
    setFormSubmitted(true);
  };

  return (
    <section id="book" className="relative overflow-hidden bg-dark py-20 text-paper lg:py-28">
      {/* Ambient glow decoration */}
      <div
        className="glow-orb slow"
        style={{
          width: 420,
          height: 420,
          top: "10%",
          left: "50%",
          marginLeft: -210,
          background: "var(--green)",
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[850px] px-6 lg:px-10">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow text-green-soft">30 minutes, no deck</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.15] lg:text-[2.8rem]">
              Let's talk about your pipeline.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-[500px] font-body text-[0.95rem] leading-relaxed text-paper/65">
              One call with a senior strategist — not a salesperson. Drop us a line directly.
            </p>
          </Reveal>
        </div>

        {/* Message Form */}
        <Reveal delay={0.18}>
          <div className="mt-10 min-h-[500px] rounded-2xl border border-paper/10 bg-dark-soft/40 p-1.5 backdrop-blur-md">
            <div className="px-6 py-8 sm:px-10">
              {formSubmitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green/10 text-green">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-display text-[1.4rem] font-semibold text-paper">
                    Inquiry Received
                  </h3>
                  <p className="mt-2 max-w-[320px] font-body text-[0.88rem] text-paper/60 leading-relaxed">
                    Thanks for reaching out! A partner from our Austin office will review your growth goals and reply within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="eyebrow text-paper/50">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper placeholder-paper/20 outline-none transition-colors focus:border-green focus:bg-paper/10"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="eyebrow text-paper/50">Business Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper placeholder-paper/20 outline-none transition-colors focus:border-green focus:bg-paper/10"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="website" className="eyebrow text-paper/50">Website URL</label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        required
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper placeholder-paper/20 outline-none transition-colors focus:border-green focus:bg-paper/10"
                        placeholder="https://company.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="eyebrow text-paper/50">Monthly Marketing Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper outline-none transition-colors focus:border-green focus:bg-paper/10 [&>option]:bg-dark [&>option]:text-paper"
                      >
                        <option value="<$5,000">&lt; $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="eyebrow text-paper/50">Growth Goals & Context</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-paper/10 bg-paper/5 px-4 py-3 font-body text-[0.95rem] text-paper placeholder-paper/20 outline-none transition-colors focus:border-green focus:bg-paper/10 resize-y"
                      placeholder="Tell us about your pipeline, current CAC challenges, or core growth initiatives..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="focus-ring mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-green px-6 py-4 font-body text-[0.95rem] font-semibold text-paper cursor-pointer transition-[background-color] duration-200 ease-out hover:bg-green-deep active:scale-[0.99]"
                  >
                    Submit Inquiry
                    <span aria-hidden="true">↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-center font-body text-[0.78rem] text-paper/45">
            Austin, TX · hello@thegrowthinc.com · Reply within one business day
          </p>
        </Reveal>
      </div>
    </section>
  );
}
