"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIframeLoading(true);
    };
    window.addEventListener("open-calendly", handleOpen);
    return () => window.removeEventListener("open-calendly", handleOpen);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative z-10 flex h-[90vh] w-full max-w-[900px] flex-col overflow-hidden rounded-2xl border border-paper/10 bg-dark-soft shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-paper/10 px-6 py-4">
              <div className="flex flex-col">
                <span className="eyebrow text-green-soft">30 Minutes, No Deck</span>
                <h3 className="font-display text-[1.2rem] font-semibold text-paper mt-0.5">
                  Schedule Your Pipeline Audit
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="focus-ring rounded-full p-2 text-paper/60 transition-colors hover:bg-paper/5 hover:text-paper cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Iframe Area */}
            <div className="relative flex-1 bg-white">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark text-paper/60">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-green border-t-transparent" />
                  <p className="mt-4 text-[0.8rem] font-body tracking-wider uppercase text-green-soft">
                    Loading Scheduler...
                  </p>
                </div>
              )}
              <iframe
                src="https://calendly.com/beastbhavu/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                onLoad={() => setIframeLoading(false)}
                className="border-0"
                title="Calendly Scheduler"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
