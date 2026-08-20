import Head from "next/head";
import RoiHeroSection from "@/components/roi-calculator/RoiHeroSection";
import RoiCalculatorSection from "@/components/roi-calculator/RoiCalculatorSection";
import RoiCTASection from "@/components/roi-calculator/RoiCTASection";

export default function RoiCalculator() {
  return (
    <>
      <Head>
        <title>ROI Calculator - Ergsum. | AI Automation Returns</title>
        <meta
          name="description"
          content="Estimate the return on automating your operations. Six inputs, instant payback period and 3-year net position."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RoiHeroSection />
      <RoiCalculatorSection />
      <RoiCTASection />
    </>
  );
}
