import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BG0L3Q3QBB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BG0L3Q3QBB');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
                o.onload=function(){window.trackingFunctions.onLoad({appId:"6a9194244fedf0000c31ff6b"})},
                document.head.appendChild(o)}initApollo();
            `,
          }}
        />
      </Head>
      <body className="min-h-screen font-sans bg-bone text-ink selection:bg-cobalt/[0.16] selection:text-ink overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
