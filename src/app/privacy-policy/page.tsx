import { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SubpageHero from "@/components/SubpageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — The Growth Inc.",
  description: "Privacy policy and data handling standards for The Growth Inc.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SubpageHeader />

      <main className="bg-paper min-h-screen">
        <SubpageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description={`Last updated: ${new Date().getFullYear()}. Compliance with the Australian Privacy Principles (APPs) and the Privacy Act 1988 (Cth).`}
          showCTA={false}
        />

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-[840px] px-6 lg:px-10 font-body text-[1rem] leading-relaxed text-dark/80 space-y-10">
            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                1. Overview & Commitment
              </h2>
              <p>
                The Growth Inc. (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy of individuals who interact with our website and services. This Privacy Policy outlines how we collect, use, disclose, and manage personal data in accordance with Australian privacy legislation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We only collect personal information that is reasonably necessary to respond to your commercial inquiries or deliver requested marketing services:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-dark/75">
                <li>
                  <strong>Contact & Business Data:</strong> Name, business email address, company name, website URL, and details you provide regarding your growth objectives.
                </li>
                <li>
                  <strong>Technical & Analytics Data:</strong> IP addresses, browser types, device information, and engagement patterns captured through privacy-focused analytics tools (e.g., Google Analytics 4).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                3. Purpose of Data Collection & Use
              </h2>
              <p className="mb-3">We use your information exclusively for:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-dark/75">
                <li>Reviewing growth briefs and preparing personalized diagnostic audits.</li>
                <li>Communicating directly regarding consultation requests and project scoping.</li>
                <li>Maintaining website security, performance, and uptime monitoring.</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal data to third parties for commercial marketing lists under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                4. Data Storage, Security & Retention
              </h2>
              <p>
                All form transmissions are encrypted via SSL/TLS during transit. Data is processed securely through established enterprise cloud infrastructure (e.g., Vercel, Resend, Hostinger SMTP). We retain inquiry data only for as long as necessary to fulfill commercial obligations or satisfy statutory record-keeping requirements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                5. Third-Party Service Providers
              </h2>
              <p>
                We may share minimal data with trusted technical service providers solely to operate our website and communicate with you (e.g., hosting infrastructure and email dispatch gateways). These providers are contractually bound to confidentiality and cannot use your data for any independent purpose.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                6. Your Rights & Contact Details
              </h2>
              <p>
                You may request access to, correction of, or deletion of the personal data we hold about you at any time. For privacy inquiries, please contact our data officer directly:
              </p>
              <div className="mt-4 rounded-xl border border-dark/10 bg-paper-deep/60 p-5 font-mono text-[0.88rem]">
                <p className="font-bold text-dark">The Growth Inc.</p>
                <p className="text-dark/70 mt-1">Email: {siteConfig.email}</p>
                <p className="text-dark/70">Jurisdiction: New South Wales / Victoria, Australia</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SubpageFooter />
    </>
  );
}
