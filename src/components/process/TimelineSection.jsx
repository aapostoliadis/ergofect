import FadeIn from "@/components/FadeIn";

const steps = [
  {
    week: "Week 1",
    title: "Map & Consolidate",
    desc: "We walk every workflow with the people who run it, mark the handoffs and duplicate entries, then audit your tool stack — absorb, keep, or kill.",
    highlight: false,
  },
  {
    week: "Week 2-3",
    title: "Data Model",
    desc: "One schema, one source of truth. Every entity — clients, projects, invoices — gets a single canonical home instead of three disconnected tools.",
    highlight: false,
  },
  {
    week: "Week 4-5",
    title: "Build & Migrate",
    desc: "We rebuild the core system department by department, migrate historical data, and run old and new in parallel until accuracy is proven. No automation yet — that's deliberate.",
    highlight: true,
  },
  {
    week: "Week 6+",
    title: "Agents & Automation",
    desc: "Once the data model holds, we layer on AI agents and background automation — routed across model tiers to keep cost down without losing accuracy.",
    highlight: false,
  },
];

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-32 bg-bone border-b border-ink/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
              [ THE TIMELINE ]
            </p>
            <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] leading-none">
              Lightning-Fast <br /> Deployment.
            </h2>
          </FadeIn>
          <FadeIn delay={100} className="flex items-end">
            <p className="text-xl md:text-2xl font-medium max-w-md">
              Every project follows the same disciplined sequence: map, then
              model, then build, then automate. Skipping the order is the
              single biggest reason automation projects fail — so we don't.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <FadeIn
              key={i}
              delay={i * 100}
              className={`p-6 md:p-8 border flex flex-col h-full ${
                step.highlight
                  ? "border-cobalt bg-cobalt/10"
                  : "border-ink/10 bg-paper"
              }`}
            >
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-6 md:mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ink rounded-full"></span> {step.week}
              </p>
              <h3 className="text-lg md:text-xl font-bold uppercase mb-4">{step.title}</h3>
              <p className="opacity-70 mt-auto text-sm leading-relaxed">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
