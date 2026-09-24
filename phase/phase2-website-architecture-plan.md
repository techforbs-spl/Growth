# Phase 2 Website Architecture Plan
## The Growth Inc. (AU) — Multi-Page Build

**Prepared for:** Developer handover
**Brand:** The Growth Inc.
**Market:** Australia
**Current live site:** growth-eight-olive.vercel.app
**Homepage content doc:** vanguard-growth3-king-kong-inspired-content-rewrite.md
**Homepage change brief:** vanguard-website-change-brief.md

> **Replication note:** Veeran Digital (US market) uses the exact same page structure, URL architecture, and section templates. Differences are listed at the end of this document under "Veeran Digital — US Variant Changes."

---

## Purpose of This Website

This is a pitch support and credibility website. Prospects arrive after receiving a personalised outreach report. The site does not need to rank in Google. It needs to pass a credibility check in under 10 seconds and give a prospect a reason to reply to the outreach email.

Every page decision flows from that purpose.

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Keep existing Vanguard/Vercel setup | Do not rebuild from scratch |
| Hosting | Vercel | Already deployed |
| Fonts | Bricolage Grotesque + DM Sans | Google Fonts — import line in change brief |
| Icons | Lucide Icons or Phosphor Icons | Pick one set, use across all pages |
| Forms | Existing form handler | Keep current form. No third-party tools. |
| Analytics | Add Google Tag Manager + GA4 | Tag manager wraps everything |
| CMS | None | All content is static. Developer edits files directly. |

---

## Full Site Architecture

```
/                           Homepage (existing — Phase 1)
/services/                  Services hub page
  /services/ai-seo/         AI SEO service page
  /services/google-ads/     Google Ads service page
  /services/meta-ads/       Meta Ads service page
  /services/chatgpt-ads/    ChatGPT Ads service page
  /services/web-development/  Web Development service page
/work/                      Case studies hub page
  /work/ai-citation-case-study/        Case study 1
  /work/ecommerce-revenue-case-study/  Case study 2
  /work/healthcare-seo-case-study/     Case study 3
/about/                     About page
/contact/                   Contact page
/thank-you/                 Post-form submission page
/404                        Error page
/privacy-policy/            Legal
/terms-of-service/          Legal
```

**Total new pages to build:** 16

---

## Navigation Structure

### Primary Nav (Desktop)

```
Logo | Services ▾ | Work | About | Contact [CTA Button: Start a Conversation]
```

### Services Dropdown

```
Services ▾
--------------
  AI SEO
  Google Ads
  Meta Ads
  ChatGPT Ads
  Web Development
```

### Mobile Nav

Hamburger menu. All nav items visible. CTA button pinned to bottom of mobile menu.

### Footer Nav

```
Column 1: Services
  AI SEO
  Google Ads
  Meta Ads
  ChatGPT Ads
  Web Development

Column 2: Company
  About
  Work
  Contact

Column 3: Legal
  Privacy Policy
  Terms of Service

Bottom bar: [Logo] [Tagline] [Copyright line]
```

---

## Page Briefs

---

### Services Hub — /services/

**Purpose:** Give visitors a single page that explains all five services. Each service card links to its own dedicated page.

**Sections:**

1. **Hero**
   - Eyebrow: "What We Do"
   - Headline: Five things. One team. No retainers that explain nothing.
   - Body: A 2-line sentence establishing that The Growth Inc. does not offer generic packages.
   - No CTA button in hero.

2. **Services Grid**
   - 5 cards in a 2+2+1 grid layout.
   - Each card: Icon, Service Name, 1-line description, "Learn more" link.
   - AI SEO card should visually stand out (primary service).

3. **Differentiator Strip**
   - 3 short lines side by side explaining how the team operates.
   - Example: "We work with one account per industry vertical per city." / "Every engagement starts with a written brief." / "We do not offer packages without context."

4. **CTA Section**
   - Headline: "Not sure which is right for you?"
   - Body: "Send us your site and we will tell you where the biggest gap is."
   - Button: Start a Conversation (links to /contact/)

---

### AI SEO Service Page — /services/ai-seo/

**Purpose:** Explain what AI SEO is, who it is for, how The Growth Inc. delivers it, and what results look like.

**This is the most important service page. It should be the most detailed.**

**Sections:**

1. **Hero**
   - Eyebrow: "AI SEO"
   - Headline: Your business, cited by ChatGPT, Gemini and Google AI Overviews.
   - Body (2 paragraphs):
     - Buyers are skipping Google entirely. They ask AI systems directly. The AI system either mentions you or it does not.
     - We build the entity signals, content structure and authority markers that tell AI systems to trust and cite your business.
   - CTA: Start a Conversation

2. **What Is AI SEO**
   - 3 short paragraphs explaining the concept in plain language.
   - No jargon. Write for a business owner, not an SEO.
   - Cover: how AI systems decide who to cite, why traditional SEO alone is not enough, what needs to change.

3. **What We Do — Deliverables**
   - A list or grid of the actual work the engagement includes.
   - Examples: Entity schema setup, Knowledge panel optimisation, AI Overview monitoring, Content authority mapping, Citation tracking.
   - Keep descriptions at 1 sentence each.

4. **Proof**
   - Pull the 3 case study cards from the homepage work section.
   - Same card format. Link each to /work/ case study page.

5. **Engagement Terms**
   - Minimum engagement: 4 months (no exceptions).
   - Why: AI citation signals take time to build. A 4-month minimum is not policy — it is the minimum time before results appear.
   - Format: 2-column info block. Plain language.

6. **CTA Section**
   - Headline: "Want to see if your category has AI citation gaps?"
   - Body: "We run a free audit before any engagement starts. No cost, no commitment."
   - Button: Start a Conversation

---

### Google Ads Service Page — /services/google-ads/

**Sections:**

1. **Hero**
   - Eyebrow: "Google Ads"
   - Headline: Ad spend that converts. Not just traffic that costs.
   - Body: One paragraph on the problem (wasted budget, no attribution clarity, campaigns that run but do not grow).
   - CTA: Start a Conversation

2. **What We Focus On**
   - 4 bullet-style blocks: Campaign structure, Keyword intent mapping, Conversion tracking, Account hygiene.
   - 1 sentence each.

3. **Engagement Terms**
   - Minimum engagement: 3 months.
   - Reason stated clearly: "The first month is baseline. The second is test and learn. The third is scale."

4. **CTA Section**
   - "We review ad accounts for free. If we find something worth fixing, we tell you directly."
   - Button: Start a Conversation

---

### Meta Ads Service Page — /services/meta-ads/

**Sections:**

1. **Hero**
   - Eyebrow: "Meta Ads"
   - Headline: The algorithm does not care about your creative. Your audience does.
   - Body: 1 paragraph on how most Meta ad accounts waste spend on creative testing without a proper funnel structure.
   - CTA: Start a Conversation

2. **What We Focus On**
   - 4 bullet-style blocks: Funnel architecture, Audience segmentation, Creative strategy, Reporting that makes sense.
   - 1 sentence each.

3. **Engagement Terms**
   - Minimum engagement: 3 months.

4. **CTA Section**
   - Same pattern as Google Ads page.

---

### ChatGPT Ads Service Page — /services/chatgpt-ads/

**Note:** This is an emerging channel. The page should position The Growth Inc. as ahead of the market, not oversell what is still early-stage.

**Sections:**

1. **Hero**
   - Eyebrow: "ChatGPT Ads"
   - Headline: The newest ad channel in the market. Most businesses are not in it yet.
   - Body: 2 short paragraphs.
     - Para 1: ChatGPT now runs ads inside AI responses. As of 2025, it is available for select categories and geographies. The inventory is small. The audience is high-intent.
     - Para 2: We are building early capability in this channel so clients who move now own the positioning before competition arrives.
   - CTA: Start a Conversation

2. **What We Know Right Now**
   - 3 bullet-style blocks of honest, accurate information about the channel.
   - No fabricated claims. Only what is verifiable.

3. **Who This Is For**
   - 1 paragraph: Businesses that already have Google or Meta running well and want to test the next channel. Not a first-step service.

4. **CTA Section**
   - "Interested in being one of the first in your category? Let's talk."
   - Button: Start a Conversation

---

### Web Development Service Page — /services/web-development/

**Sections:**

1. **Hero**
   - Eyebrow: "Web Development"
   - Headline: A site that exists is not the same as a site that works.
   - Body: 1 paragraph. Most websites are built for a designer's portfolio, not a business's pipeline. We build for conversion, speed and AI crawlability from the start.
   - CTA: Start a Conversation

2. **What We Build**
   - 4 blocks:
     - Landing pages (campaign-specific, conversion-focused)
     - Full websites (service businesses, e-commerce, healthcare, professional services)
     - Website rebuilds (when the current site is actively hurting conversions or rankings)
     - AI-ready website architecture (schema, entity structure, structured content — built in from day one, not added later)

3. **How We Approach Builds**
   - 3 short points:
     - Fast: We do not use heavy frameworks where a clean static build will perform better.
     - SEO-ready: Technical SEO and AI SEO signals are built into the architecture, not bolted on.
     - No handcuff dependencies: You own the site. We document everything. You can take it anywhere.

4. **Engagement Format**
   - Project-based, not retainer.
   - Discovery call first. Written brief before any work starts.
   - Timeline is project-dependent. Discussed at scoping.

5. **CTA Section**
   - "Have an existing site that is not converting? Or starting from scratch? Either way, let's look at it."
   - Button: Start a Conversation

---

### Work / Case Studies Hub — /work/

**Purpose:** A landing page that introduces the approach to case studies and lists all three. Prospects sent here from outreach should immediately see evidence.

**Sections:**

1. **Hero**
   - Eyebrow: "Our Work"
   - Headline: Results we can talk about. Names we cannot.
   - Body: "All client engagements are covered by NDA. What we can show is the problem, the approach and the outcome. Judge us on that."
   - No CTA in hero.

2. **Case Study Cards Grid**
   - 3 cards, one per case study.
   - Each card: Industry label, Geography, 1-line problem statement, Key metric, Screenshot thumbnail, "Read the case study" link.

3. **How We Document Results**
   - 1 short paragraph: Every result shown comes from actual platform data. Screenshots are the source of truth. We do not extrapolate, round up, or project forward.

---

### Case Study 1 — /work/ai-citation-case-study/
**Outsourced Accounting, Australia / Canada**

**Sections:**

1. **Header**
   - Industry: Outsourced Accounting
   - Geography: Australia and Canada
   - Service: AI SEO

2. **The Problem**
   - The business was invisible in AI search results for every relevant query in both markets.
   - Competitors with less domain authority were being cited by ChatGPT and Gemini ahead of them.

3. **What We Did**
   - Bullet list, verb-led, max 8 words each.
   - Examples:
     - Built full Organisation schema with service entities
     - Mapped 40+ AI search queries across both markets
     - Created authority content targeting each query cluster
     - Established brand mentions on relevant third-party platforms
     - Monitored citations weekly and adjusted on signal

4. **The Outcome**
   - Screenshot: ChatGPT listing the client alongside Deloitte, PwC, EY, KPMG (Australia)
   - Screenshot: Gemini recommending the client in the Canada market
   - Outcome description: First AI citations appeared in both markets within 5 months of engagement start.

5. **Bottom CTA**
   - "Want to see if your category has citation gaps in AI search?"
   - Button: Start a Conversation

---

### Case Study 2 — /work/ecommerce-revenue-case-study/
**Home and Housing E-commerce, Australia**

**Sections:**

1. **Header**
   - Industry: Home and Housing E-commerce
   - Geography: Australia
   - Service: AI SEO + Technical SEO

2. **The Problem**
   - Revenue had plateaued. Organic traffic was not converting. Collection pages were not ranking for category-level keywords.

3. **What We Did**
   - Audited and rebuilt collection page SEO structure
   - Fixed faceted navigation and canonical tag issues
   - Resolved keyword cannibalization across product and collection pages
   - Improved internal linking from high-authority pages to collection pages
   - Aligned page intent with buyer journey stage

4. **The Outcome**
   - Screenshot: Shopify revenue dashboard showing the growth period (client name cropped)
   - Result: $2.22M USD in attributed Shopify revenue across the engagement period.
   - ~25% increase in inbound enquiries from organic and AI search combined.

5. **Bottom CTA**
   - Same as Case Study 1.

---

### Case Study 3 — /work/healthcare-seo-case-study/
**Healthcare Provider, Dubai**

**Sections:**

1. **Header**
   - Industry: Healthcare
   - Geography: Dubai, UAE
   - Service: SEO + AI SEO

2. **The Problem**
   - A healthcare provider launching in the Dubai market had zero organic visibility and no presence in AI search results for high-intent medical queries.

3. **What We Did**
   - Implemented MedicalBusiness and Physician schema across all practitioner pages
   - Rebuilt URL structure for treatment and specialty pages
   - Built E-E-A-T content targeting high-intent treatment queries
   - Established entity authority through structured data and off-site citations
   - Monitored and optimised for Google AI Overview inclusion

4. **The Outcome**
   - Screenshot: GSC graph showing organic growth (with annotation marker at engagement start)
   - Screenshot: Google AI Overview featuring the clinic as a top recommendation in Dubai
   - Organic impressions grew from baseline to measurable visibility within the engagement.

5. **Bottom CTA**
   - Same as Case Study 1.

---

### About — /about/

**Purpose:** Give a prospect just enough context to believe this is a real team, not a template agency.

**What NOT to include:**
- No team section (no headshots, no staff names, no bios)
- No fake awards or certifications not actually held
- No fabricated history or case statistics

**Sections:**

1. **Hero**
   - Eyebrow: "About"
   - Headline: We are a small team. That is not a weakness.
   - Body: 2 paragraphs.
     - Para 1: The Growth Inc. is an Australian-based digital marketing agency focused on AI SEO, paid media and web development. We work with a small number of clients at a time. That is intentional.
     - Para 2: We do not take on accounts we cannot service properly. If we say we will get you cited in AI search, we have a plan for how. If we cannot deliver something, we say so before the brief is signed.

2. **How We Work**
   - 3 blocks. Icon + heading + 2-line description.
   - Block 1: Small client roster. We limit the number of active engagements so every account gets attention, not a junior account manager.
   - Block 2: Written briefs. Every engagement starts with a documented plan. No grey areas on what we are delivering.
   - Block 3: Transparent reporting. Monthly reports show what moved, what did not, and why. We do not hide negative data.

3. **Markets We Work In**
   - Australia (primary)
   - New Zealand
   - United Arab Emirates
   - Canada
   - This is where current client evidence exists. New markets considered case by case.

4. **CTA Section**
   - "If you want to talk to someone before deciding, we are happy to do that first."
   - Button: Start a Conversation

---

### Contact — /contact/

**Purpose:** A clean, low-friction page. The form already exists on the homepage. This page mirrors it.

**Sections:**

1. **Header**
   - Eyebrow: "Contact"
   - Headline: Tell us what you are working on.
   - Body: We reply within 1 business day. If the fit makes sense, we will set up a call. If it does not, we will tell you that too.

2. **Form**
   - Identical to the form on the homepage.
   - Fields: Name, Email, Website URL, Message (free text).
   - No budget dropdown.
   - Submit button: Send Message

3. **Below Form (No section header)**
   - 3 expectation lines in plain text:
     - You will hear back within 1 business day.
     - First call is a discovery conversation, not a sales call.
     - We will tell you honestly if we are not the right fit.

---

### Thank You — /thank-you/

**Purpose:** Confirm submission, set expectations, reduce anxiety.

**Sections:**

1. **Full-screen or near-full-screen single block**
   - Icon: Checkmark or envelope
   - Headline: Message received.
   - Body:
     - We will review what you sent and reply within 1 business day.
     - No automated email sequence will follow. A real person reads this.
   - Secondary link: "While you wait, read a case study" — links to /work/

---

### 404 Error Page — /404

**Purpose:** Keep the visitor in the site. Do not dead-end them.

**Sections:**

1. **Single centred block**
   - Headline: That page does not exist.
   - Body: 1 line — "But this one does. Start here."
   - 3 navigation links: Homepage, Our Work, Contact
   - Keep it simple. No character illustrations, no excessive copy.

---

### Privacy Policy — /privacy-policy/

**Content:** Standard Australian-compliant privacy policy.

**Minimum required sections:**
- What data is collected (form submissions, analytics)
- How it is stored and for how long
- Whether it is shared with third parties
- Contact for data requests

**Note:** Use a legally reviewed template. Do not write legal copy from scratch.

---

### Terms of Service — /terms-of-service/

**Content:** Standard service terms.

**Minimum required sections:**
- Scope of services
- Payment terms
- Limitation of liability
- Governing law (Australia)

**Note:** Same as Privacy Policy — use a legally reviewed template.

---

## AI SEO Technical Implementation Checklist

**This section is for the developer. These are technical requirements for the site itself, not the services offered.**

The site needs these signals so that AI systems and Google can correctly understand and cite The Growth Inc. as a trusted entity.

### Schema Markup (JSON-LD)

Add to every page:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "The Growth Inc.",
  "url": "[DOMAIN]",
  "description": "AI SEO and digital marketing agency based in Australia.",
  "areaServed": ["Australia", "New Zealand", "United Arab Emirates", "Canada"],
  "serviceType": ["AI SEO", "Google Ads", "Meta Ads", "ChatGPT Ads", "Web Development"],
  "knowsAbout": ["AI search optimisation", "Google AI Overviews", "ChatGPT citations", "Paid media management"],
  "sameAs": [
    "[LinkedIn URL]",
    "[Google Business Profile URL if applicable]"
  ]
}
```

Add to each service page:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "provider": {
    "@type": "ProfessionalService",
    "name": "The Growth Inc."
  },
  "description": "[Service description]",
  "areaServed": "Australia"
}
```

### On-Page Technical Requirements

| Requirement | Detail |
|---|---|
| Meta title format | [Page Name] — The Growth Inc. |
| Meta description | Unique per page. Max 155 characters. |
| H1 | One per page. Matches the page's primary intent. |
| Canonical tags | Self-referencing canonical on every page. |
| OG tags | Title, description, image on every page. |
| Sitemap | XML sitemap covering all pages. Submit to Google Search Console. |
| Robots.txt | Allow all except /thank-you/ and /admin/ (if applicable). Disallow /thank-you/ from indexing. |
| Page speed | Aim for under 2.5s LCP. No render-blocking scripts. |
| Mobile | All pages fully responsive. Test on 375px viewport. |
| HTTPS | Already on Vercel. Confirm certificate. |
| No-index | /thank-you/ page should carry `<meta name="robots" content="noindex">`. |

### Entity Authority Signals

These are off-site but the developer needs to know they exist when implementing schema:

| Platform | Action |
|---|---|
| Google Business Profile | Claim and verify if not already done. |
| LinkedIn Company Page | Create if not already done. Set description matching homepage positioning. |
| ABN lookup / ASIC register | Business listed correctly. Agency type matches schema. |

### Internal Linking Rules

| From | To | Anchor text style |
|---|---|---|
| Every service page | /contact/ | "Start a Conversation" (CTA button, not inline link) |
| Every case study page | /work/ | "Back to all work" |
| Case studies on /work/ | Individual case study pages | "Read the case study" |
| Homepage | /services/ | "See all services" |
| Homepage | /work/ | "See all case studies" |
| About page | /contact/ | "Start a Conversation" |
| Services hub | Each /services/[name]/ | "Learn more" per card |

---

## What Not to Build

These pages are explicitly out of scope. Do not add them even if they seem logical.

| Page | Reason |
|---|---|
| Blog | Out of scope permanently. This is a pitch credibility site, not a content play. |
| Pricing page | Too early. Pricing is discussed on calls. |
| Team page | NDA and privacy. No staff profiles. |
| Careers page | Not a public-facing recruitment tool at this stage. |
| Partner / reseller page | Not applicable. |
| Resource centre / downloads | Out of scope. |
| Testimonials page | Reviews live on the homepage only. |

---

## Component Inventory

These components are used across multiple pages. Build them once, reuse everywhere.

| Component | Used On |
|---|---|
| Page hero (eyebrow + headline + body + CTA) | All main pages |
| Service card (icon + name + description + link) | Services hub, Homepage |
| Case study card (industry + stat + screenshot + link) | Work hub, Service pages, Homepage |
| CTA section (headline + body + button) | Bottom of every page except Legal, 404 |
| Process step (number + name + description) | Reusable if needed |
| Stat tile (icon + number + label) | Homepage stats bar |
| Footer | All pages |
| Navigation | All pages |
| Form | Homepage + /contact/ |

---

## Page Priority Order

Build in this order:

| Priority | Page | Reason |
|---|---|---|
| 1 | /work/ hub + 3 case study pages | Most important for pitch credibility |
| 2 | /services/ai-seo/ | Primary service. Most likely page a prospect checks. |
| 3 | /contact/ | Clean standalone contact page needed. |
| 4 | /thank-you/ | Needed when contact form goes live. |
| 5 | /about/ | Supporting credibility page. |
| 6 | Remaining 4 service pages | Google Ads, Meta Ads, ChatGPT Ads, Web Dev |
| 7 | /services/ hub | Navigation landing. Build after individual pages exist. |
| 8 | /privacy-policy/ + /terms-of-service/ | Legal. Required before any paid media runs. |
| 9 | /404 | Polish item. Do last. |

---

## Pending Items Before Build Starts

| Item | Owner | Status |
|---|---|---|
| Final domain name for The Growth Inc. | Jatin | Not confirmed |
| Contact email address for footer | Jatin | Not confirmed |
| Google Drive link for case study screenshots | Jatin | Not shared yet |
| Client review approvals for homepage (3 reviews) | Jatin | Written, awaiting client approval |
| LinkedIn Company Page URL | Jatin | Required for schema |
| Google Business Profile URL | Jatin | Required for schema |

---

## Veeran Digital — US Variant Changes

Veeran Digital uses the exact same page structure, URL architecture and section templates as The Growth Inc.

The following items change:

| Element | The Growth Inc. (AU) | Veeran Digital (US) |
|---|---|---|
| Company name | The Growth Inc. | Veeran Digital |
| Market | Australia | United States |
| Brand voice spelling | Australian English (Optimise, Specialise) | American English (Optimize, Specialize) |
| areaServed in schema | Australia, NZ, UAE, Canada | United States, and markets as applicable |
| Governing law in Terms | Australia | United States (state TBD) |
| Footer address / entity | Australian business details | US business details |
| About page — Markets We Work In | AU, NZ, UAE, Canada | US-focused, markets TBD |
| Case studies | Same evidence can be reused | Same evidence is valid. Client base is not US-specific. |
| Homepage stats | Same (40+, 7+, ~25%, Under 5 months) | Same data is accurate for both |
| Services | Same 5 services | Same 5 services |
| Domain | TBD (.com.au preferred for AU) | .com domain (veerandigital.com assumed) |

**No new content needs to be written from scratch for Veeran Digital.** Swap the name, adjust spelling, update schema, update footer, update legal — done.

---

*Document version: Phase 2 — September 2026*
*Synced to: /Users/admin/Documents/Codex/2026-08-01/also-in-each-of-them-do/outputs/*
*And to: /Users/admin/Jatinlokwani x Claude/Website-Development-POC/vanguard-growth3/*
