"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "./LogoMark";
import { PrimaryCTA } from "./CTA";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const SERVICES_MENU = [
  { title: "AI SEO", href: "/services/ai-seo" },
  { title: "Google Ads", href: "/services/google-ads" },
  { title: "Meta Ads", href: "/services/meta-ads" },
  { title: "ChatGPT Ads", href: "/services/chatgpt-ads" },
  { title: "Web Development", href: "/services/web-development" },
];

export default function SubpageHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="subpage-top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1180px] items-center justify-between rounded-full px-6 py-3 transition-all duration-500 lg:px-8 ${
          scrolled
            ? "border border-dark/10 bg-paper/90 shadow-[0_12px_36px_-15px_rgba(32,32,32,0.18)] backdrop-blur-md"
            : "border border-dark/8 bg-paper/70 backdrop-blur-sm shadow-xs"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="focus-ring flex items-center gap-2.5 font-display text-[1.05rem] font-bold tracking-tight text-dark transition-opacity hover:opacity-85"
        >
          <LogoMark size={28} />
          <span>The Growth Inc.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={`focus-ring inline-flex items-center gap-1.5 font-body text-[0.92rem] font-medium transition-colors cursor-pointer ${
                pathname.startsWith("/services")
                  ? "text-green-deep font-semibold"
                  : "text-dark/75 hover:text-dark"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-250 ${
                  servicesOpen ? "rotate-180 text-green" : "text-dark/40"
                }`}
              />
            </button>

            {/* Dropdown Card */}
            {servicesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-6 w-64 animate-in fade-in zoom-in-95 duration-150">
                <div className="rounded-2xl border border-dark/12 bg-white p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25),0_4px_12px_rgba(0,0,0,0.06)]">
                  <div className="flex flex-col gap-1">
                    {SERVICES_MENU.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className={`flex items-center justify-between rounded-xl px-4 py-2.5 font-body text-[0.9rem] transition-all duration-150 ${
                            isActive
                              ? "bg-green-tint font-semibold text-green-deep"
                              : "text-dark/80 hover:bg-paper-deep hover:text-dark hover:translate-x-0.5"
                          }`}
                        >
                          <span>{item.title}</span>
                          {isActive ? (
                            <span className="h-2 w-2 rounded-full bg-green shrink-0" />
                          ) : (
                            <span className="text-dark/20 text-xs transition-transform group-hover:translate-x-0.5">
                              →
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-1.5 border-t border-dark/8 pt-1.5">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-2 font-body text-[0.82rem] font-semibold text-dark/55 hover:bg-paper-deep hover:text-green-deep transition-colors"
                    >
                      <span>All Services Overview</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Work / Case Studies */}
          <Link
            href="/work"
            className={`focus-ring relative font-body text-[0.92rem] font-medium transition-colors ${
              pathname.startsWith("/work")
                ? "text-green-deep font-semibold"
                : "text-dark/75 hover:text-dark"
            }`}
          >
            <span>Work</span>
            {pathname.startsWith("/work") && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-green rounded-full" />
            )}
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`focus-ring relative font-body text-[0.92rem] font-medium transition-colors ${
              pathname === "/about"
                ? "text-green-deep font-semibold"
                : "text-dark/75 hover:text-dark"
            }`}
          >
            <span>About</span>
            {pathname === "/about" && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-green rounded-full" />
            )}
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`focus-ring relative font-body text-[0.92rem] font-medium transition-colors ${
              pathname === "/contact"
                ? "text-green-deep font-semibold"
                : "text-dark/75 hover:text-dark"
            }`}
          >
            <span>Contact</span>
            {pathname === "/contact" && (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-green rounded-full" />
            )}
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <PrimaryCTA href="#book" className="!px-5 !py-2 text-[0.84rem]">
            Start a Conversation
          </PrimaryCTA>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="focus-ring flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-dark/10 lg:hidden cursor-pointer"
        >
          <span
            className={`h-[1.5px] w-5 bg-dark transition-transform ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-dark transition-transform ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mx-4 mt-2 rounded-2xl border border-dark/10 bg-paper px-6 py-6 shadow-2xl lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-5">
            <div>
              <p className="eyebrow text-green-deep text-[0.7rem]">Services</p>
              <div className="mt-2 flex flex-col gap-2 pl-1 border-l-2 border-green/20">
                {SERVICES_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-[0.9rem] font-medium text-dark/80 hover:text-green-deep"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-dark/8 pt-4 flex flex-col gap-3">
              <Link
                href="/work"
                onClick={() => setMobileOpen(false)}
                className="font-body text-base font-semibold text-dark hover:text-green-deep"
              >
                Our Work
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="font-body text-base font-semibold text-dark hover:text-green-deep"
              >
                About The Growth Inc.
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="font-body text-base font-semibold text-dark hover:text-green-deep"
              >
                Contact
              </Link>
            </div>

            <div className="pt-2">
              <PrimaryCTA
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center"
              >
                Start a Conversation
              </PrimaryCTA>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
