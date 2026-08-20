import Head from "next/head";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import MissionSection from "@/components/about/MissionSection";
import StorySection from "@/components/about/StorySection";
import TeamSection from "@/components/about/TeamSection";
import ValuesSection from "@/components/about/ValuesSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - KAIRO® | AI Automation Specialists</title>
        <meta
          name="description"
          content="Learn about KAIRO — the AI automation studio helping scaling companies eliminate operational bottlenecks without adding headcount."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutHeroSection />
      <MissionSection />
      <StorySection />
      <TeamSection />
      <ValuesSection />
      <AchievementsSection />
      <AboutCTASection />
    </>
  );
}
