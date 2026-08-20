import FadeIn from "@/components/FadeIn";

const categories = [
  {
    label: "AI & Machine Learning",
    tools: ["OpenAI GPT-5.6", "Claude", "LangChain", "TensorFlow", "Hugging Face", "Custom Models"],
  },
  {
    label: "Integrations",
    tools: ["Salesforce", "HubSpot", "Zendesk", "Slack", "Zapier", "Make"],
  },
  {
    label: "Cloud & Infrastructure",
    tools: ["AWS", "Google Cloud", "Vercel", "Docker", "Kubernetes"],
  },
  {
    label: "Data & Analytics",
    tools: ["PostgreSQL", "BigQuery", "Snowflake", "Metabase", "dbt"],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-20 md:py-32 bg-bone border-b border-ink/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
                [ TECH STACK ]
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">
                Tools We Use.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-2xl">
                We use best-in-class tools - but we&apos;re never locked into one
                stack. Every solution is built around what works best for your
                existing infrastructure.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <FadeIn
              key={i}
              delay={i * 100}
              className="border border-ink/10 p-6 md:p-8"
            >
              <p className="text-bone bg-ink inline-block px-2 py-1 font-mono text-[10px] md:text-xs font-bold uppercase mb-6">
                {cat.label}
              </p>
              <ul className="space-y-3 font-mono text-xs md:text-sm uppercase">
                {cat.tools.map((tool, j) => (
                  <li key={j} className="flex items-center gap-2 opacity-70">
                    <span className="w-1.5 h-1.5 bg-ink/30 rounded-full shrink-0"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
