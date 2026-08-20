import Head from "next/head";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServiceListSection from "@/components/services/ServiceListSection";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import TechStackSection from "@/components/services/TechStackSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import ProcessOverviewSection from "@/components/services/ProcessOverviewSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Ergsum. | AI Automation Solutions</title>
        <meta
          name="description"
          content="Explore Ergsum's AI automation services — from customer support and data processing to custom AI solutions built for your operations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesHeroSection />
      <ServiceListSection />
      <ServiceDetailSection />
      <TechStackSection />
      <IndustriesSection />
      <ProcessOverviewSection />
      <ServicesCTASection />
    </>
  );
}
