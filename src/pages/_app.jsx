import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import CookieConsent from "@/components/CookieConsent";
import SiteLayout from "@/layouts/SiteLayout";

export default function App({ Component, pageProps }) {
  if (Component.siteV2) return <SiteLayout><Component {...pageProps} /></SiteLayout>;
  return (
    <MainLayout>
      <Component {...pageProps} />
      <CookieConsent />
    </MainLayout>
  );
}
