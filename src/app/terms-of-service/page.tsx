import { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service — The Growth Inc.",
  description: "Terms of service and commercial operating standards for The Growth Inc.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        <SubpageHero
          eyebrow="Legal"
          title="Terms of Service"
          description={`Last updated: ${new Date().getFullYear()}. Standard commercial terms governing engagements with The Growth Inc.`}
          showCTA={false}
        />

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-[840px] px-6 lg:px-10 font-body text-[1rem] leading-relaxed text-dark/80 space-y-10">
            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                1. Engagement & Agreement
              </h2>
              <p>
                By accessing this website, requesting a diagnostic audit, or entering into a commercial marketing engagement with The Growth Inc. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service. Individual client projects are further governed by specific written Statements of Work (SOW) or briefs.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                2. Scope of Services
              </h2>
              <p>
                The Growth Inc. provides specialized advisory and execution services across AI SEO, Google Ads, Meta Ads, conversational AI ad strategies, and Web Development. All deliverables, timelines, and reporting cadence are defined in writing prior to project kickoff. We do not provide generic or un-scoped retainers.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                3. Engagement Terms & Minimum Durations
              </h2>
              <p>
                Certain services require a mandatory minimum engagement duration (e.g., 4 months for AI SEO entity building; 3 months for paid media baseline and scale). These durations reflect the technical time required for search engines, LLM knowledge graphs, and advertising algorithms to evaluate new signals and deliver verifiable commercial impact.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                4. Payment & Billing Terms
              </h2>
              <p>
                Fees are billed in accordance with the signed SOW. Unless otherwise agreed in writing, invoices are payable within 14 days of receipt. Media budgets for third-party advertising platforms (e.g., Google, Meta) are funded directly by the client via their respective billing profiles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                5. Intellectual Property & Confidentiality
              </h2>
              <p>
                Upon settlement of all associated invoices, you own 100% of the custom code, copy, schema, and web assets created specifically for your business. Both parties agree to maintain strict confidentiality regarding proprietary business data, financial metrics, and customer information under mutual NDA standards.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                While we utilize proven, data-driven methodologies, we do not guarantee specific organic algorithm changes or third-party platform policy shifts beyond our direct control. To the maximum extent permitted under Australian law, our aggregate liability for any claim arising out of an engagement shall not exceed the total service fees paid by the client in the three (3) months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                7. Governing Law
              </h2>
              <p>
                These Terms of Service and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of Australia.
              </p>
              <div className="mt-4 rounded-xl border border-dark/10 bg-paper-deep/60 p-5 font-mono text-[0.88rem]">
                <p className="font-bold text-dark">The Growth Inc.</p>
                <p className="text-dark/70 mt-1">Inquiries: {siteConfig.email}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SubpageFooter />
    </>
  );
}
