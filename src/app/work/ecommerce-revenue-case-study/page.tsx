import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { CASE_STUDIES } from "@/data/caseStudies";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Home & Housing E-Commerce Revenue Case Study — The Growth Inc.",
  description:
    "How resolving faceted canonical duplication and rebuilding collection pages generated $2.22M USD in attributed Shopify revenue.",
};

export default function EcommerceRevenueCaseStudyPage() {
  const study = CASE_STUDIES["ecommerce-revenue-case-study"];
  if (!study) return notFound();

  return <CaseStudyLayout study={study} />;
}
