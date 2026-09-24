"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import Reveal from "@/components/Reveal";
import CalendlyModal from "@/components/CalendlyModal";
import { siteConfig } from "@/config/site";
import { Clock, ShieldCheck, MessageSquareQuote, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    whatToGrow: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send inquiry.");
      }

      // Redirect to dedicated thank you page per Phase 2 architecture
      router.push("/thank-you");
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(
        err?.message || "Something went wrong. Please try again or email us directly."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        {/* Header Section */}
        <SubpageHero
          eyebrow="Contact"
          title="Tell us what you are working on."
          description="We reply within 1 business day. If the fit makes sense, we will set up a call. If it does not, we will tell you that too."
          showCTA={false}
        />

        {/* Contact Form Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[860px] px-6 lg:px-10">
            <Reveal>
              <div className="rounded-3xl border border-dark/10 bg-paper p-8 sm:p-12 lg:p-14 shadow-xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="eyebrow text-dark/70 font-semibold text-[0.75rem]">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-dark/15 bg-paper-deep/50 px-4 py-3.5 font-body text-[0.95rem] text-dark placeholder-dark/30 outline-none transition-all focus:border-green focus:bg-paper focus:ring-2 focus:ring-green/20"
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="eyebrow text-dark/70 font-semibold text-[0.75rem]">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-dark/15 bg-paper-deep/50 px-4 py-3.5 font-body text-[0.95rem] text-dark placeholder-dark/30 outline-none transition-all focus:border-green focus:bg-paper focus:ring-2 focus:ring-green/20"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="website" className="eyebrow text-dark/70 font-semibold text-[0.75rem]">
                      Website / Company URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-dark/15 bg-paper-deep/50 px-4 py-3.5 font-body text-[0.95rem] text-dark placeholder-dark/30 outline-none transition-all focus:border-green focus:bg-paper focus:ring-2 focus:ring-green/20"
                      placeholder="https://company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="whatToGrow" className="eyebrow text-dark/70 font-semibold text-[0.75rem]">
                      Message / What do you want to grow? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="whatToGrow"
                      name="whatToGrow"
                      rows={5}
                      required
                      value={formData.whatToGrow}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-dark/15 bg-paper-deep/50 px-4 py-3.5 font-body text-[0.95rem] text-dark placeholder-dark/30 outline-none transition-all focus:border-green focus:bg-paper focus:ring-2 focus:ring-green/20 resize-y"
                      placeholder="Tell us about your current channels, AI visibility goals, pipeline bottlenecks, or project brief..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center font-body text-[0.88rem] text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="focus-ring w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-dark px-8 py-4 font-body text-[0.95rem] font-semibold text-paper cursor-pointer transition-all duration-200 hover:bg-green hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>

            {/* Below Form (3 expectation lines in plain text) */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-dark/10 pt-8">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-green-deep shrink-0 mt-0.5" />
                <p className="font-body text-[0.85rem] text-dark/70 leading-snug">
                  You will hear back within 1 business day.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquareQuote size={18} className="text-green-deep shrink-0 mt-0.5" />
                <p className="font-body text-[0.85rem] text-dark/70 leading-snug">
                  First call is a discovery conversation, not a sales call.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-green-deep shrink-0 mt-0.5" />
                <p className="font-body text-[0.85rem] text-dark/70 leading-snug">
                  We will tell you honestly if we are not the right fit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
