import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ergsum. - AI Automation Specialists</title>
        <meta name="description" content="Build custom AI systems that handle your repetitive work, so you can focus on growth, not grunt work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <MarqueeSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
