import FadeIn from "@/components/FadeIn";

const features = [
  {
    title: "Intelligent Routing",
    desc: "AI classifies tickets by intent, urgency, and sentiment - then routes to the right agent or auto-resolves.",
  },
  {
    title: "Context-Aware Responses",
    desc: "Our models understand conversation history, account data, and product context for accurate replies.",
  },
  {
    title: "Seamless Escalation",
    desc: "When AI can't solve it, tickets are escalated with full context so agents never start from scratch.",
  },
  {
    title: "Continuous Learning",
    desc: "Every resolution feeds back into the model. Accuracy improves automatically over time.",
  },
];

export default function ServiceDetailSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
                [ DEEP DIVE ]
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">
                Customer Support{" "}
                <span className="text-cobalt-light">Reimagined</span>.
              </h2>
            </FadeIn>
          </div>
          <div className="flex items-end">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-lg">
                Our most deployed service. See how we turn support from a cost
                center into a competitive advantage.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feat, i) => (
            <FadeIn
              key={i}
              delay={i * 100}
              className="border border-bone/10 p-6 md:p-8 group hover:border-cobalt-light/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-cobalt-light rounded-full mt-2 shrink-0"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.04em] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} className="mt-12 md:mt-16">
          <div className="border border-bone/10 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-2xl md:text-4xl font-semibold mb-1">
                Avg. <span className="text-cobalt-light">62%</span> Cost Reduction
              </p>
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-50">
                Across All Support Automation Deployments
              </p>
            </div>
            <p className="text-5xl md:text-6xl font-semibold opacity-10">24/7</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
