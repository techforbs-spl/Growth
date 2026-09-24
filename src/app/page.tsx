import SubpageHeader from "@/components/SubpageHeader";
import Hero from "@/components/Hero";
import ResultsSnapshot from "@/components/ResultsSnapshot";
import CaseStudies from "@/components/CaseStudies";
import ServicePathways from "@/components/ServicePathways";
import OperatingModel from "@/components/OperatingModel";
import ProcessJourney from "@/components/ProcessJourney";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import SubpageFooter from "@/components/SubpageFooter";
import CalendlyModal from "@/components/CalendlyModal";

export default function Home() {
  return (
    <>
      <SubpageHeader />
      <main>
        <Hero />
        <ResultsSnapshot />
        <CaseStudies />
        <ServicePathways />
        <OperatingModel />
        <ProcessJourney />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <SubpageFooter />
      <CalendlyModal />
    </>
  );
}
