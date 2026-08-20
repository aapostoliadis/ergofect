import Head from "next/head";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import OfficesSection from "@/components/contact/OfficesSection";
import ContactFaqSection from "@/components/contact/ContactFaqSection";
import SocialSection from "@/components/contact/SocialSection";
import MapSection from "@/components/contact/MapSection";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Ergsum. | Get Your Free Automation Audit</title>
        <meta
          name="description"
          content="Get in touch with Ergsum. Request a free automation audit and discover how AI can transform your operations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <OfficesSection />
      <ContactFaqSection />
      <SocialSection />
      <MapSection />
    </>
  );
}
