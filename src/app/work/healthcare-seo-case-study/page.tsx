import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { CASE_STUDIES } from "@/data/caseStudies";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Healthcare Provider Google AI Overview Case Study — The Growth Inc.",
  description:
    "How structured MedicalBusiness schema and answer-first content achieved #1 Google AI Overview ranking for a Dubai healthcare provider.",
};

export default function HealthcareSeoCaseStudyPage() {
  const study = CASE_STUDIES["healthcare-seo-case-study"];
  if (!study) return notFound();

  return <CaseStudyLayout study={study} />;
}
