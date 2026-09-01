import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import EvidenceSection from "@/components/home/EvidenceSection";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ergofect. - AI Automation Specialists</title>
        <meta name="description" content="Put one measurable operational workflow live in about six weeks, using the CRM, helpdesk, documents, and spreadsheets your team already relies on." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <MarqueeSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <EvidenceSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
