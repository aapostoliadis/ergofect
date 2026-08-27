import Head from "next/head";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const highlights = [
  ["Effective Date", "August 20, 2026"],
  ["Data Sold", "Never"],
  ["Privacy Contact", "info@ergofect.com"],
];

const rights = [
  "Access your personal data",
  "Correct inaccurate information",
  "Request deletion where legally available",
  "Object to certain processing",
  "Request data portability",
  "Withdraw consent where processing relies on consent",
];

const sections = [
  {
    id: "overview",
    title: "Privacy Overview",
    body: [
      "This Privacy Policy explains how Ergofect collects, uses, shares, stores, and protects information when you visit our website, request an audit, contact us, or engage our AI automation services.",
      "We design our data practices around operational necessity, security, transparency, and respect for client confidentiality.",
    ],
  },
  {
    id: "collect",
    title: "Information We Collect",
    body: [
      "We may collect contact information such as name, work email, phone number, company name, role, project interest, budget range, and messages you submit through forms.",
      "During audits or service delivery, we may collect workflow details, system diagrams, sample documents, operational metrics, integration requirements, and technical configuration data.",
      "We may automatically collect limited technical information such as browser type, device data, pages viewed, referral source, approximate location, and usage analytics.",
    ],
  },
  {
    id: "use",
    title: "How We Use Information",
    body: [
      "We use information to respond to inquiries, evaluate automation opportunities, prepare proposals, deliver services, manage client relationships, provide support, and improve our website and offerings.",
      "We may use aggregated or de-identified information to analyze service performance, benchmark workflows, improve automation patterns, and develop internal best practices.",
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    body: [
      "Where applicable, we process personal data based on your consent, contract performance, legitimate business interests, compliance with legal obligations, or protection of rights and security.",
      "For marketing communications, you may opt out at any time using the unsubscribe mechanism or by contacting us directly.",
    ],
  },
  {
    id: "sharing",
    title: "How We Share Information",
    body: [
      "We do not sell personal information. We may share information with trusted vendors who help us provide hosting, analytics, CRM, communication, security, cloud, project management, or automation services.",
      "We may disclose information if required by law, legal process, government request, security investigation, business transfer, or to protect rights, safety, and property.",
    ],
  },
  {
    id: "ai",
    title: "AI Systems and Client Data",
    body: [
      "AI automation projects may require sample prompts, documents, tickets, workflows, transcripts, or structured data to design and test solutions.",
      "We aim to use the minimum data needed for the project and recommend redaction, anonymization, or synthetic data where practical.",
      "Use of third-party AI providers is governed by the relevant project agreement and the provider's own terms and security practices.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    body: [
      "We retain information only as long as needed for the purposes described in this Policy, including service delivery, legal compliance, dispute resolution, security, and business records.",
      "Retention periods may vary based on contract terms, data type, regulatory requirements, and operational needs.",
    ],
  },
  {
    id: "security",
    title: "Security Measures",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards designed to protect information against unauthorized access, loss, misuse, alteration, or disclosure.",
      "Security measures may include access controls, least-privilege permissions, secure credential handling, encrypted services where available, monitoring, vendor review, and internal confidentiality practices.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Analytics",
    body: [
      "We may use cookies, pixels, tags, and similar technologies to operate the website, understand traffic, measure performance, remember preferences, and improve user experience.",
      "You can control cookies through browser settings, though disabling cookies may affect some website functionality.",
    ],
  },
  {
    id: "rights",
    title: "Your Privacy Rights",
    body: [
      "Depending on your location, you may have rights to access, correct, delete, restrict, object to, or receive a copy of personal data we hold about you.",
      "We may need to verify your identity before processing a privacy request. Some requests may be limited by legal, security, or contractual obligations.",
    ],
  },
  {
    id: "international",
    title: "International Transfers",
    body: [
      "Ergofect and its service providers may process information in countries other than your own. Where required, we use appropriate safeguards for cross-border transfers.",
      "By using our website or services, you understand that information may be processed where we or our vendors operate.",
    ],
  },
  {
    id: "updates",
    title: "Policy Updates",
    body: [
      "We may update this Privacy Policy to reflect operational, legal, or technology changes. The latest version will always be posted on this page with an updated effective date.",
      "Material changes may be communicated through the website or direct notice where appropriate.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Ergofect.</title>
        <meta
          name="description"
          content="Ergofect Privacy Policy explaining data collection, AI data handling, security, retention, cookies, and privacy rights."
        />
      </Head>

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-ink text-bone">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.14em] mb-4 text-cobalt-light">
              [ LEGAL / PRIVACY ]
            </p>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-[0em] leading-none mb-6 max-w-5xl">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-lg opacity-70 leading-relaxed max-w-2xl">
              We handle business and project data with care. This policy explains what
              we collect, why we collect it, how we protect it, and what rights you have.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {highlights.map(([label, value], index) => (
              <FadeIn
                key={label}
                delay={index * 100}
                className="border border-white/10 p-5 md:p-6"
              >
                <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-2">
                  {label}
                </p>
                <p className="text-lg md:text-xl font-semibold tracking-[0em]">
                  {value}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone text-ink py-16 md:py-24 border-b border-black/10">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-4">
              [ Your Rights ]
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[0em] mb-10">
              Control Over Your Data.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rights.map((right, index) => (
              <FadeIn
                key={right}
                delay={index * 80}
                className="border border-black/10 p-5 hover:bg-ink hover:text-bone transition-colors"
              >
                <p className="font-mono text-[10px] uppercase opacity-40 mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-sm md:text-base font-bold uppercase tracking-wider">
                  {right}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone text-ink py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <aside className="lg:col-span-4 lg:block">
              <div className="lg:sticky lg:top-32">
                <FadeIn className="border border-black/10 p-6 md:p-8">
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-5">
                    [ Table of Contents ]
                  </p>
                  <div className="space-y-3">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex gap-3 text-xs md:text-sm uppercase font-bold tracking-wider hover:text-cobalt transition-colors"
                      >
                        <span className="font-mono opacity-40">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </aside>

            <div className="lg:col-span-8 space-y-5 md:space-y-6">
              {sections.map((section, index) => (
                <FadeIn
                  key={section.id}
                  delay={index * 50}
                  id={section.id}
                  className="border border-black/10 p-6 md:p-8 bg-bone scroll-mt-28"
                >
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-40 mb-3">
                    Section {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-semibold tracking-[0em] mb-5">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm md:text-base leading-relaxed opacity-75"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </FadeIn>
              ))}

              <FadeIn className="bg-ink text-bone p-6 md:p-8">
                <p className="font-mono text-[10px] md:text-xs uppercase text-cobalt-light mb-4">
                  [ Privacy Request ]
                </p>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-[0em] mb-4">
                  Need To Exercise Your Rights?
                </h2>
                <p className="text-sm md:text-base opacity-70 leading-relaxed mb-6 max-w-2xl">
                  Send us a request and include enough information to verify your
                  identity and locate the relevant data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@ergofect.com"
                    className="bg-cobalt text-bone py-3 px-6 font-bold text-xs uppercase tracking-widest text-center hover:bg-white hover:text-ink transition-colors"
                  >
                    Submit Privacy Request
                  </a>
                  <Link
                    href="/terms"
                    className="border border-white/20 py-3 px-6 font-bold text-xs uppercase tracking-widest text-center hover:bg-white hover:text-ink transition-colors"
                  >
                    View Terms
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
