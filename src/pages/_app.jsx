import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import CookieConsent from "@/components/CookieConsent";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <CookieConsent />
    </MainLayout>
  );
}
