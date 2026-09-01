import Head from "next/head";
import ProcessHeroSection from "@/components/process/ProcessHeroSection";
import TimelineSection from "@/components/process/TimelineSection";
import PhaseDetailSection from "@/components/process/PhaseDetailSection";
import WhyItWorksSection from "@/components/process/WhyItWorksSection";
import ToolsSection from "@/components/process/ToolsSection";
import GuaranteeSection from "@/components/process/GuaranteeSection";
import ProcessCTASection from "@/components/process/ProcessCTASection";

export default function Process() {
  return (
    <>
      <Head>
        <title>Our Process - Ergofect. | How We Automate</title>
        <meta
          name="description"
          content="See how Ergofect maps, builds, tests, and releases one measurable AI automation workflow in about six weeks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProcessHeroSection />
      <TimelineSection />
      <PhaseDetailSection />
      <WhyItWorksSection />
      <ToolsSection />
      <GuaranteeSection />
      <ProcessCTASection />
    </>
  );
}
