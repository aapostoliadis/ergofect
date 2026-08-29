import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "ergofect-cookie-consent";

function loadTrackingScripts() {
  if (document.querySelector('script[data-ergofect-google-tag]')) return;

  const googleScript = document.createElement("script");
  googleScript.async = true;
  googleScript.src = "https://www.googletagmanager.com/gtag/js?id=G-BG0L3Q3QBB";
  googleScript.dataset.ergofectGoogleTag = "true";
  document.head.appendChild(googleScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", "G-BG0L3Q3QBB");

  const apolloScript = document.createElement("script");
  const cacheKey = Math.random().toString(36).substring(7);
  apolloScript.async = true;
  apolloScript.defer = true;
  apolloScript.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${cacheKey}`;
  apolloScript.onload = () => {
    window.trackingFunctions?.onLoad({ appId: "6a9194244fedf0000c31ff6b" });
  };
  document.head.appendChild(apolloScript);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_KEY);
    setConsent(storedConsent);

    if (storedConsent === "accepted") loadTrackingScripts();
  }, []);

  function chooseConsent(value) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);

    if (value === "accepted") loadTrackingScripts();
  }

  if (consent) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[60] border border-ink bg-bone p-5 shadow-lg md:bottom-6 md:left-auto md:right-6 md:max-w-md"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">
        [ COOKIE SETTINGS ]
      </p>
      <p className="mt-3 text-sm leading-relaxed">
        We use analytics and tracking cookies to understand website usage and improve
        our services. You can accept or reject optional cookies. Read our{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => chooseConsent("accepted")}
          className="bg-ink px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-bone transition-opacity hover:opacity-80"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => chooseConsent("rejected")}
          className="border border-ink px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors hover:bg-ink hover:text-bone"
        >
          Reject
        </button>
      </div>
    </aside>
  );
}