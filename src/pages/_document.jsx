import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id" className="scroll-smooth">
      <Head />
      <body className="min-h-screen font-sans bg-[#F3F3EF] text-[#111111] selection:bg-[#D6FF00] selection:text-black overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
