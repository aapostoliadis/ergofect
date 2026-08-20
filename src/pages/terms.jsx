import Head from "next/head";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const highlights = [
  ["Effective Date", "April 28, 2026"],
  ["Applies To", "Website, audits, proposals, and automation services"],
  ["Response Time", "Legal requests reviewed within 5 business days"],
];

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: [
      "By accessing the Ergsum website, submitting a form, booking an audit, reviewing a proposal, or engaging our services, you agree to these Terms of Service.",
      "If you are using Ergsum on behalf of a company or organization, you confirm that you have authority to accept these Terms on that entity's behalf.",
    ],
  },
  {
    id: "services",
    title: "Services and Scope",
    body: [
      "Ergsum provides AI automation strategy, workflow audits, solution design, development, integration, deployment, and optimization services.",
      "Specific deliverables, timelines, milestones, fees, access requirements, and acceptance criteria are defined in a written proposal, statement of work, or service agreement.",
      "Any free audit, diagnostic, estimate, or recommendation is provided for evaluation purposes and does not guarantee a specific commercial outcome unless separately agreed in writing.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    body: [
      "You are responsible for providing accurate business information, timely feedback, system access, data samples, stakeholder availability, and internal approvals required for delivery.",
      "You must ensure that any data, credentials, materials, or third-party systems shared with Ergsum may lawfully be used for the project.",
      "Project timelines may shift if access, feedback, data, approvals, or dependencies are delayed.",
    ],
  },
  {
    id: "payments",
    title: "Fees, Payments, and Taxes",
    body: [
      "Fees, billing schedules, payment due dates, accepted payment methods, refund rules, and late payment terms are stated in the applicable proposal or agreement.",
      "Unless otherwise stated, fees are exclusive of taxes, duties, bank charges, platform fees, and third-party subscription costs.",
      "Ergsum may pause work, access, support, or delivery if invoices remain unpaid after the agreed payment period.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual Property",
    body: [
      "Each party retains ownership of intellectual property, tools, templates, frameworks, processes, models, documentation, and know-how it owned before the project.",
      "Project-specific deliverables may be assigned or licensed to you according to the applicable agreement after full payment is received.",
      "Ergsum may reuse general knowledge, non-confidential methods, reusable components, automation patterns, and technical expertise developed during service delivery.",
    ],
  },
  {
    id: "data",
    title: "Data, Access, and Security",
    body: [
      "You may provide business data, system access, documents, credentials, API keys, or workflow information so Ergsum can perform the services.",
      "Ergsum uses reasonable administrative, technical, and organizational safeguards to protect client materials, but no internet-connected service can be guaranteed completely secure.",
      "You should not send unnecessary sensitive data unless it is required for the project and covered by an appropriate agreement.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: [
      "Both parties agree to protect confidential information using reasonable care and to use it only for evaluating, delivering, or receiving the services.",
      "Confidentiality obligations do not apply to information that is publicly available, independently developed, lawfully received from a third party, or required to be disclosed by law.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Tools",
    body: [
      "Projects may involve third-party tools such as CRMs, help desks, analytics platforms, cloud providers, AI providers, automation platforms, or communication tools.",
      "Your use of third-party tools remains subject to those providers' own terms, pricing, availability, security practices, and data policies.",
      "Ergsum is not responsible for downtime, pricing changes, data loss, feature changes, or service limitations caused by third-party platforms.",
    ],
  },
  {
    id: "warranties",
    title: "Warranties and Disclaimers",
    body: [
      "Ergsum will provide services in a professional and commercially reasonable manner.",
      "Except as expressly stated in a written agreement, services, recommendations, audits, prototypes, integrations, and materials are provided without warranties of merchantability, fitness for a particular purpose, uninterrupted operation, or guaranteed business results.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Ergsum is not liable for indirect, incidental, special, consequential, punitive, or lost-profit damages.",
      "Ergsum's total liability for claims related to the services is limited to the amount paid by you for the specific services giving rise to the claim during the three months before the claim.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    body: [
      "Either party may terminate a project according to the terms stated in the applicable agreement.",
      "Upon termination, you remain responsible for fees due for completed work, committed resources, third-party costs, and non-cancellable obligations.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time to reflect changes in services, operations, laws, or business practices.",
      "The updated version will be posted on this page with a revised effective date. Continued use of the website or services after updates means you accept the revised Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service - Ergsum®</title>
        <meta
          name="description"
          content="Ergsum Terms of Service for AI automation audits, consulting, implementation, and managed optimization services."
        />
      </Head>

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-[#111111] text-[#F3F3EF]">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 text-[#D6FF00]">
              [ LEGAL / TERMS ]
            </p>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 max-w-5xl">
              Terms of Service
            </h1>
            <p className="text-sm md:text-lg opacity-70 leading-relaxed max-w-2xl">
              These terms explain how Ergsum works with clients, handles project scope,
              protects confidential information, and defines responsibilities for AI
              automation services.
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
                <p className="text-lg md:text-xl font-black uppercase tracking-tighter">
                  {value}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3EF] text-[#111111] py-16 md:py-24">
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
                        className="flex gap-3 text-xs md:text-sm uppercase font-bold tracking-wider hover:text-[#D6FF00] transition-colors"
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
                  className="border border-black/10 p-6 md:p-8 bg-[#F3F3EF] scroll-mt-28"
                >
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-40 mb-3">
                    Section {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-5">
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

              <FadeIn className="bg-black text-[#F3F3EF] p-6 md:p-8">
                <p className="font-mono text-[10px] md:text-xs uppercase text-[#D6FF00] mb-4">
                  [ Questions? ]
                </p>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                  Contact Ergsum Legal
                </h2>
                <p className="text-sm md:text-base opacity-70 leading-relaxed mb-6 max-w-2xl">
                  If you have questions about these Terms or need contract-specific
                  clarification, contact our team before using the services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:hello@ergsum.ai"
                    className="bg-[#D6FF00] text-black py-3 px-6 font-bold text-xs uppercase tracking-widest text-center hover:bg-white transition-colors"
                  >
                    Email Legal Team
                  </a>
                  <Link
                    href="/privacy"
                    className="border border-white/20 py-3 px-6 font-bold text-xs uppercase tracking-widest text-center hover:bg-white hover:text-black transition-colors"
                  >
                    View Privacy Policy
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
