import FadeIn from "@/components/FadeIn";
import { pilotPhases } from "@/data/pilot";

const stepDescriptions = {
  map: "We choose one workflow with its owner, map the handoffs and exceptions, then record the current volume, effort, and failure points.",
  design: "We define the minimum data model, system connections, permissions, human review, fallback path, and acceptance criteria.",
  build: "We connect the existing tools and test on real examples beside the current process. Only pilot data moves when the agreed design requires it.",
  launch: "The scoped workflow enters production with monitoring, documentation, a kill switch, a named owner, and an agreed review window.",
};

const steps = pilotPhases.map((phase) => ({
  ...phase,
  desc: stepDescriptions[phase.id],
  highlight: phase.id === "build",
}));

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-32 bg-bone border-b border-ink/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
              [ THE TIMELINE ]
            </p>
            <h2 className="text-4xl md:text-7xl font-semibold tracking-[0em] leading-none">
              A Bounded <br /> First Release.
            </h2>
          </FadeIn>
          <FadeIn delay={100} className="flex items-end">
            <p className="text-xl md:text-2xl font-medium max-w-md">
              The target is one useful workflow in production—not a rushed
              replacement of the systems that already run the business.
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
