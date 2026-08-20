import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    number: "01",
    slug: "custom-ai",
    title: "Custom AI Solutions",
    headline: "Bespoke systems for unique operational challenges.",
    desc: "When off-the-shelf won't cut it, we build custom AI models and integrations designed specifically for your business.",
    tags: ["Computer Vision", "NLP Models", "Custom APIs", "Edge Deployment"],
    delay: 0,
  },
  {
    number: "02",
    slug: "workflow-automation",
    title: "Workflow Automation",
    headline: "Connect your tools and eliminate manual handoffs.",
    desc: "Seamlessly integrate your CRM, ERP, and SaaS tools into unified automated workflows that run without human intervention.",
    tags: ["CRM Automation", "Lead Qualification", "Approval Workflows", "Multi-Tool Sync"],
    delay: 100,
  },
  {
    number: "03",
    slug: "customer-support",
    title: "Customer Support Automation",
    headline: "Handle inquiries 24/7 with human-like accuracy.",
    desc: "Deploy AI agents that understand context, resolve tickets, route complex cases, and learn from every interaction.",
    tags: ["Chatbots w/ Escalation", "Auto-Email Replies", "Ticket Routing", "Sentiment Analysis"],
    delay: 200,
  },
  {
    number: "04",
    slug: "data-processing",
    title: "Data Processing & Analytics",
    headline: "Transform raw data into insights automatically.",
    desc: "Automate data extraction, cleaning, transformation, and reporting - from spreadsheets to dashboards in minutes.",
    tags: ["Report Generation", "Data Cleansing", "Predictive Analytics", "ETL Pipelines"],
    delay: 300,
  },
  {
    number: "05",
    slug: "document-intelligence",
    title: "Document Intelligence",
    headline: "Extract, classify, and process documents at scale.",
    desc: "AI-powered document processing for invoices, contracts, forms, and compliance documents - with 99%+ accuracy.",
    tags: ["OCR Processing", "Contract Analysis", "Invoice Matching", "Compliance Checks"],
    delay: 400,
  },
  {
    number: "06",
    slug: "sales-marketing",
    title: "Sales & Marketing Automation",
    headline: "Accelerate pipeline without growing your team.",
    desc: "Automate lead scoring, email sequences, content personalization, and campaign optimization with intelligent AI agents.",
    tags: ["Lead Scoring", "Email Sequences", "A/B Testing", "Funnel Optimization"],
    delay: 500,
  },
];

export default function ServiceListSection() {
  return (
    <section className="bg-bone py-20 md:py-32 border-b border-ink/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-12 md:mb-16 opacity-60">
            [ WHAT WE DO ]
          </p>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <Link href={`/services/${service.slug}`}>
              <FadeIn
                key={i}
                delay={service.delay}
                className="border-t border-ink/10 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 group hover:bg-ink hover:text-bone transition-colors duration-500 cursor-pointer md:px-4 md:-mx-4"
              >
              <div className="lg:col-span-1 flex items-start">
                <p className="text-bone bg-ink group-hover:bg-cobalt-light group-hover:text-ink inline-block px-2 py-1 font-mono text-xs font-bold transition-colors duration-500">
                  {service.number}
                </p>
              </div>
              <div className="lg:col-span-3 flex items-start pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cobalt-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                  <h3 className="text-base md:text-lg font-mono uppercase tracking-widest">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h4 className="text-2xl md:text-4xl font-semibold tracking-[0em] mb-3 group-hover:text-cobalt-light transition-colors duration-500">
                  {service.headline}
                </h4>
                <p className="text-sm opacity-60 group-hover:opacity-80 mb-4 max-w-2xl leading-relaxed transition-opacity">
                  {service.desc}
                </p>
                <div className="font-mono text-[10px] md:text-xs uppercase opacity-50 flex gap-2 md:gap-3 flex-wrap">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-ink/5 group-hover:bg-bone/10 px-2 py-1 transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </FadeIn>
            </Link>
          ))}
          <div className="border-t border-ink/10"></div>
        </div>
      </div>
    </section>
  );
}
