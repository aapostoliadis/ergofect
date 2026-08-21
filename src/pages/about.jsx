import Head from "next/head";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";
import ValuesSection from "@/components/about/ValuesSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Ergofect. | AI Automation Specialists</title>
        <meta
          name="description"
          content="Learn about Ergofect - the AI automation studio helping scaling companies eliminate operational bottlenecks without adding headcount."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <AboutCTASection />
    </>
  );
}