import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thegrowthinc.com.au";

  const routes = [
    "",
    "/services",
    "/services/ai-seo",
    "/services/google-ads",
    "/services/meta-ads",
    "/services/chatgpt-ads",
    "/services/web-development",
    "/work",
    "/work/ai-citation-case-study",
    "/work/ecommerce-revenue-case-study",
    "/work/healthcare-seo-case-study",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route.startsWith("/work") ? 0.9 : 0.7,
  }));
}
