import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

const SERVICE_LINKS = [
  { label: "AI SEO", href: "/services/ai-seo" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "ChatGPT Ads", href: "/services/chatgpt-ads" },
  { label: "Web Development", href: "/services/web-development" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function SubpageFooter() {
  return (
    <footer className="bg-dark-deep pt-20 pb-12 text-paper border-t border-paper/10">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 border-b border-paper/10 pb-16 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand Col */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-display text-[1.1rem] font-bold text-paper transition-opacity hover:opacity-85"
            >
              <LogoMark size={28} variant="light" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="mt-5 max-w-[340px] font-body text-[0.88rem] leading-relaxed text-paper/60">
              Pitch credibility, AI SEO citations and high-intent performance marketing for high-growth businesses. We reply within one business day.
            </p>
            <div className="mt-6 flex flex-col gap-1">
              <span className="eyebrow text-paper/40 text-[0.7rem]">Direct Inquiries</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-body text-[0.9rem] font-medium text-green-soft hover:underline inline-flex items-center gap-1"
              >
                {siteConfig.email}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Services */}
            <div>
              <p className="eyebrow text-paper/40">Services</p>
              <ul className="mt-4 flex flex-col gap-3">
                {SERVICE_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-[0.88rem] text-paper/70 transition-colors hover:text-green-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="eyebrow text-paper/40">Company</p>
              <ul className="mt-4 flex flex-col gap-3">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-[0.88rem] text-paper/70 transition-colors hover:text-green-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="eyebrow text-paper/40">Legal</p>
              <ul className="mt-4 flex flex-col gap-3">
                {LEGAL_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-[0.88rem] text-paper/70 transition-colors hover:text-green-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-8 font-body text-[0.8rem] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
            <span>© {new Date().getFullYear()} The Growth Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-paper/80">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-paper/80">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-paper/80">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
