import FadeIn from "@/components/FadeIn";

const steps = [
  {
    phase: "01",
    title: "Discovery & Audit",
    desc: "We mapped Boltshift's entire support workflow — from ticket creation to resolution. Identified 14 repetitive tasks consuming 68% of agent time.",
  },
  {
    phase: "02",
    title: "AI Design & Build",
    desc: "Built a custom NLP model trained on 50,000+ historical tickets. Designed intelligent routing rules and auto-response templates for top 80% of queries.",
  },
  {
    phase: "03",
    title: "Deploy & Integrate",
    desc: "Integrated with Zendesk, Slack, and internal CRM. Deployed in staging for 1 week of parallel testing before going live with zero downtime.",
  },
  {
    phase: "04",
    title: "Optimize & Scale",
    desc: "Continuous monitoring and weekly optimization sprints. Model accuracy improved from 91% to 97% within the first 60 days of operation.",
  },
];

export default function CaseDetailSection() {
  return (
    <section className="py-20 md:py-32 bg-bone border-b border-ink/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
                [ HOW WE DID IT ]
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">
                The Boltshift Process.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-2xl">
                From audit to live automation in 4 weeks. Here&apos;s exactly
                how we transformed Boltshift&apos;s support operations.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <FadeIn
              key={i}
              delay={i * 150}
              className="border border-ink/10 p-6 md:p-8 group hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              <p className="text-cobalt-light bg-ink group-hover:bg-cobalt-light group-hover:text-ink inline-block px-2 py-1 font-mono text-xs font-bold mb-4 transition-colors duration-500">
                {step.phase}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.04em] mb-3">
                {step.title}
              </h3>
              <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed transition-opacity">
                {step.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
