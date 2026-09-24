export function ProfessionalServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Growth Inc.",
    "url": "https://thegrowthinc.com.au",
    "description": "AI SEO and digital marketing agency based in Australia.",
    "areaServed": ["Australia", "New Zealand", "United Arab Emirates", "Canada"],
    "serviceType": [
      "AI SEO",
      "Google Ads",
      "Meta Ads",
      "ChatGPT Ads",
      "Web Development",
    ],
    "knowsAbout": [
      "AI search optimisation",
      "Google AI Overviews",
      "ChatGPT citations",
      "Paid media management",
      "Conversion rate optimisation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "provider": {
      "@type": "ProfessionalService",
      "name": "The Growth Inc.",
    },
    "description": description,
    "areaServed": "Australia",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
