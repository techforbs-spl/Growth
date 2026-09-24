export interface CaseStudyItem {
  slug: string;
  title: string;
  clientCategory: string;
  industry: string;
  geography: string;
  service: string;
  categoryFilter: "ai-seo" | "ecommerce" | "healthcare";
  metricPrimary: string;
  metricPrimaryLabel: string;
  metricSecondary: string;
  metricSecondaryLabel: string;
  summary: string;
  problem: string;
  problemDetails: string[];
  deliverables: { title: string; desc: string }[];
  outcome: string;
  outcomeStats: { label: string; value: string; desc: string }[];
  imageSrc: string;
  imageAlt: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  evidenceType: string;
  timeline: string;
  nextSlug: string;
  nextTitle: string;
}

export const CASE_STUDIES: Record<string, CaseStudyItem> = {
  "ai-citation-case-study": {
    slug: "ai-citation-case-study",
    title: "AI Search Citation Authority in Australia & Canada",
    clientCategory: "Outsourced Accounting & Bookkeeping",
    industry: "Outsourced Accounting",
    geography: "Australia and Canada",
    service: "AI SEO & Technical Entity Engineering",
    categoryFilter: "ai-seo",
    metricPrimary: "Under 5 Mo",
    metricPrimaryLabel: "To First Multi-Market AI Citations",
    metricSecondary: "+25%",
    metricSecondaryLabel: "Increase in Inbound Commercial Enquiries",
    summary:
      "How an international outsourced accounting firm went from zero presence across generative search engines to ranking alongside Big Four firms in ChatGPT, Gemini and Google AI Overviews.",
    problem:
      "The business was completely invisible in AI search results for high-intent queries across both Australia and Canada. Competitors with less domain authority were being cited by ChatGPT and Gemini ahead of them because the firm lacked structured entity signals, crawlable service hierarchies, and AI-citable proof architectures.",
    problemDetails: [
      "Zero entity representation in AI knowledge graphs — search engines couldn't identify the firm as an authoritative commercial service provider.",
      "Indexation and crawl budget gaps across 30+ regional service landing pages.",
      "No internal linking matrix connecting specialized service pages to high-intent comparison queries.",
      "Lack of citable third-party co-occurrence signals in key professional directories and trade references.",
    ],
    deliverables: [
      {
        title: "Comprehensive Schema Architecture",
        desc: "Engineered complete Organisation, ProfessionalService, and Service schema with precise sameAs entity alignments across Australian and Canadian registries.",
      },
      {
        title: "40+ High-Intent Query Mapping",
        desc: "Mapped the specific multi-step prompt structures buyers type into ChatGPT, Gemini, and Claude when searching for outsourced accounting partners.",
      },
      {
        title: "Answer-First Comparison & Authority Hubs",
        desc: "Authored structured entity content designed explicitly for AI summarization engines, highlighting fee models, compliance certifications, and scope benchmarks.",
      },
      {
        title: "Third-Party Brand Co-Occurrence",
        desc: "Established contextual entity mentions across recognized regional accounting and financial publications to reinforce training corpus trust.",
      },
      {
        title: "Weekly Citation Tracking & Prompt Auditing",
        desc: "Monitored 120+ prompt variations weekly across ChatGPT-4o, Gemini Advanced, and Google AI Overviews to detect and reinforce citation momentum.",
      },
    ],
    outcome:
      "First verified AI citations appeared in both Australia and Canada within 5 months. ChatGPT now cites the firm alongside established global players (Deloitte, PwC, EY, KPMG) for regional queries, driving a 25% surge in high-ticket inbound consultations.",
    outcomeStats: [
      {
        value: "Under 5 Months",
        label: "Time to First AI Citation",
        desc: "First cited organically by both ChatGPT and Gemini across multi-country queries.",
      },
      {
        value: "~25%",
        label: "Inbound Pipeline Growth",
        desc: "Measurable rise in qualified inbound consultations from prospects citing AI recommendations.",
      },
      {
        value: "40+",
        label: "Target Queries Dominated",
        desc: "Active recommendation coverage across B2B accounting and offshore payroll queries.",
      },
      {
        value: "100%",
        label: "NDA Compliant Execution",
        desc: "Platform verified screenshots extracted directly from live conversational AI sessions.",
      },
    ],
    imageSrc: "/case-studies/accounting-canada.png",
    imageAlt: "ChatGPT and Gemini AI search recommendation showing Outsourced Accounting client in Canada",
    evidenceType: "Live Conversational AI Sessions (ChatGPT & Gemini)",
    timeline: "5 Months Engagement Baseline",
    nextSlug: "ecommerce-revenue-case-study",
    nextTitle: "Home & Housing E-Commerce Revenue Overhaul",
  },

  "ecommerce-revenue-case-study": {
    slug: "ecommerce-revenue-case-study",
    title: "Collection Page Overhaul & $2.22M USD Attributed Revenue",
    clientCategory: "Home & Housing Products E-Commerce",
    industry: "Home and Housing E-Commerce",
    geography: "Australia and United States",
    service: "AI SEO + Technical Collection Architecture",
    categoryFilter: "ecommerce",
    metricPrimary: "+18%",
    metricPrimaryLabel: "Year-on-Year Revenue Growth",
    metricSecondary: "57k/mo",
    metricSecondaryLabel: "Monthly Sessions (from 28k baseline)",
    summary:
      "A high-volume home and housing brand unlocked $2.22M USD in attributed revenue after resolving faceted canonical duplicate loops and rebuilding collection pages for commercial search intent.",
    problem:
      "Revenue had plateaued despite massive inventory. Collection pages had been live for years but contributed almost nothing to organic search traffic. Faceted navigation generated tens of thousands of duplicate parameter URLs without canonical handling, keyword cannibalization was suppressing high-margin categories, and internal links were completely disconnected from editorial guides.",
    problemDetails: [
      "Faceted filter navigation was spawning thousands of un-canonicalized indexable URLs, severely diluting page authority.",
      "Severe keyword cannibalization between individual product PDPs and parent category collection pages.",
      "High-traffic editorial blog content failed to pass link equity to core commercial collection hubs.",
      "Thin collection descriptions with zero schema markup, resulting in low relevance scores from modern search crawlers.",
    ],
    deliverables: [
      {
        title: "Collection Page Semantic Rebuild",
        desc: "Re-architected all major category and sub-category collection layouts with commercial buyer intent hierarchy and rich contextual product summaries.",
      },
      {
        title: "Canonical & Faceted Filter Optimization",
        desc: "Implemented strict canonical tag rules across all multi-select filter parameters, consolidating link equity to primary category endpoints.",
      },
      {
        title: "Internal Linking Matrix & Editorial Hubs",
        desc: "Constructed direct contextual linking pathways from top-performing editorial guides to corresponding transactional collection pages.",
      },
      {
        title: "Cannibalization Audit & Consolidation",
        desc: "Merged overlapping sub-collections, resolved keyword competition against product pages, and deployed targeted 301 redirect clusters.",
      },
      {
        title: "Structured Breadcrumb & Product Schema",
        desc: "Deployed ProductCollection and ItemList JSON-LD schema with price range, in-stock status, and aggregated rating attributes.",
      },
    ],
    outcome:
      "Delivered an 18% year-on-year revenue increase, attributing $2.22M USD in verified Shopify sales during the engagement window. Monthly organic traffic surged from 28,000 to over 57,000 highly qualified sessions.",
    outcomeStats: [
      {
        value: "$2.22M USD",
        label: "Attributed Revenue",
        desc: "Verified Shopify revenue tracked during the 12-month optimization cycle.",
      },
      {
        value: "+18%",
        label: "YoY Revenue Increase",
        desc: "Consistent year-over-year revenue expansion against category benchmarks.",
      },
      {
        value: "57,000+",
        label: "Monthly Organic Sessions",
        desc: "Traffic scaled from 28k baseline with double-digit conversion efficiency.",
      },
      {
        value: "0 Cannibalization",
        label: "Clean Search Architecture",
        desc: "Every collection page cleanly owns its primary high-intent commercial keyword cluster.",
      },
    ],
    imageSrc: "/case-studies/shopify-revenue.png",
    imageAlt: "Shopify verified revenue dashboard demonstrating $2.22M USD growth trajectory",
    evidenceType: "Shopify Merchant Analytics & Search Console",
    timeline: "12 Months Scale Period",
    nextSlug: "healthcare-seo-case-study",
    nextTitle: "On-Demand Healthcare Google AI Overview Domination",
  },

  "healthcare-seo-case-study": {
    slug: "healthcare-seo-case-study",
    title: "Google AI Overview Domination for On-Demand Healthcare",
    clientCategory: "On-Demand Home Healthcare & Medical Services",
    industry: "Healthcare & Clinic Services",
    geography: "Dubai, United Arab Emirates",
    service: "Technical SEO + Medical Entity Schema + AI SEO",
    categoryFilter: "healthcare",
    metricPrimary: "#1 Rank",
    metricPrimaryLabel: "Google AI Overview Featured Recommendation",
    metricSecondary: "726k",
    metricSecondaryLabel: "Impressions in 6 Months (0.5% to High CTR)",
    summary:
      "A Dubai medical provider transformed from page two invisibility to becoming Google AI Overview's #1 recommended home healthcare clinic across high-value treatment queries.",
    problem:
      "A premier home healthcare provider launching in Dubai had zero organic visibility and was stuck at an average ranking position of 13.1 for critical medical terms. Despite 726,000 baseline impressions over six months, the click-through rate was just 0.5% because the site lacked medical entity schema, DHA physician credentialing markers, and answer-first structuring.",
    problemDetails: [
      "Stuck on Google Page Two (average position 13.1) for high-ticket home doctor and nursing queries.",
      "Zero MedicalBusiness, Physician, or HealthTopic structured data on physician and treatment pages.",
      "Doctor credentials and DHA licensing numbers were hidden in PDF attachments rather than machine-readable HTML.",
      "Mobile performance bottlenecks and slow Core Web Vitals in a mobile-dominant GCC market.",
    ],
    deliverables: [
      {
        title: "MedicalBusiness & Physician Schema",
        desc: "Structured complete schema markup for all doctors, DHA licenses, treatment specialties, and on-demand operating zones across Dubai.",
      },
      {
        title: "Answer-First AI Overview Content",
        desc: "Restructured treatment pages into concise, high-credibility answer clusters formatted for Google's Gemini retrieval algorithms.",
      },
      {
        title: "Local UAE Citation & Entity Verification",
        desc: "Built verified entity citations across UAE healthcare registers, Google Maps Business profiles, and local medical directories.",
      },
      {
        title: "Core Web Vitals & Mobile-First Optimization",
        desc: "Streamlined script execution and server response times, achieving sub-1.2s LCP on mobile devices across Dubai.",
      },
      {
        title: "Parallel High-Intent Google Ads Architecture",
        desc: "Deployed targeted search campaigns to capture immediate demand while organic and AI search rankings took hold.",
      },
    ],
    outcome:
      "Captured the #1 featured recommendation inside Google AI Overviews for high-value medical terms in Dubai. The site achieved sustained upward impression growth with high-intent patient inquiries doubling within the engagement.",
    outcomeStats: [
      {
        value: "Rank #1",
        label: "Google AI Overview",
        desc: "Featured as the primary verified medical provider for on-demand home healthcare in Dubai.",
      },
      {
        value: "726k+",
        label: "Targeted Impressions",
        desc: "Search visibility scaled continuously with dramatic improvements in click-through rate.",
      },
      {
        value: "Sub-1.2s",
        label: "Mobile Page Speed",
        desc: "Optimized mobile performance tailored for high-speed GCC mobile user habits.",
      },
      {
        value: "100% DHA",
        label: "Structured Licensing",
        desc: "Fully machine-readable credentials recognized by search and AI knowledge panels.",
      },
    ],
    imageSrc: "/case-studies/healthcare-dubai.png",
    imageAlt: "Google Search Console impression surge and Google AI Overview rank evidence",
    evidenceType: "Google Search Console & Google AI Overview Live Results",
    timeline: "6 Months Engagement Phase",
    nextSlug: "ai-citation-case-study",
    nextTitle: "AI Search Citation Authority in Australia & Canada",
  },
};
