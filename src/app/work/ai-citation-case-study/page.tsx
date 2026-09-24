import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { CASE_STUDIES } from "@/data/caseStudies";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Outsourced Accounting AI Citation Case Study — The Growth Inc.",
  description:
    "How an outsourced accounting firm serving Australia and Canada achieved first-page AI citations across ChatGPT and Gemini in under 5 months.",
};

export default function AiCitationCaseStudyPage() {
  const study = CASE_STUDIES["ai-citation-case-study"];
  if (!study) return notFound();

  return <CaseStudyLayout study={study} />;
}
