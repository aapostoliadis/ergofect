import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <script
          type="text/javascript"
          async
          src="https://a.usbrowserspeed.com/cs?pid=ddae2e0bce828a30a7b24f94f87290780f71120eaf9f11353f234c3bd86512d3&puid=%7B%22userId%22%3A%226ac739d4d70a33d17959d9e4%22%2C%22env%22%3A%22prod%22%7D"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen font-sans bg-bone text-ink selection:bg-cobalt/[0.16] selection:text-ink overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
