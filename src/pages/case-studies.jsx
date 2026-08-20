import Head from "next/head";
import CaseStudiesHeroSection from "@/components/case-studies/CaseStudiesHeroSection";
import FeaturedCaseSection from "@/components/case-studies/FeaturedCaseSection";
import CaseGridSection from "@/components/case-studies/CaseGridSection";
import CaseDetailSection from "@/components/case-studies/CaseDetailSection";
import ResultsSection from "@/components/case-studies/ResultsSection";
import TestimonialsSection from "@/components/case-studies/TestimonialsSection";
import CaseStudiesCTASection from "@/components/case-studies/CaseStudiesCTASection";

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Ergsum. | AI Automation Results</title>
        <meta
          name="description"
          content="See how Ergsum helped real companies automate operations, cut costs, and scale without adding headcount."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CaseStudiesHeroSection />
      <FeaturedCaseSection />
      <CaseGridSection />
      <CaseDetailSection />
      <ResultsSection />
      <TestimonialsSection />
      <CaseStudiesCTASection />
    </>
  );
}
