import FadeIn from "@/components/FadeIn";
import { pilotPhases } from "@/data/pilot";

const stepDescriptions = {
  map: "We choose one workflow, record its baseline, and agree where human review stays.",
  design: "We define the integrations, exceptions, controls, owner, and acceptance criteria.",
  build: "We connect the existing tools and compare automated output with the current process.",
  launch: "The scoped workflow goes live with monitoring, documentation, and a named owner.",
};

const steps = pilotPhases.map((phase, index) => ({
  ...phase,
  desc: stepDescriptions[phase.id],
  highlight: phase.id === "build",
  delay: index * 100,
}));

export default function ProcessSection() {
  return (
    <section id="how" className="py-20 md:py-32 bg-bone">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-[0em] leading-none">
              One Workflow. <br /> A Measurable Finish Line.
            </h2>
          </FadeIn>
          <FadeIn delay={100} className="flex items-end">
            <p className="text-xl md:text-2xl font-medium max-w-md">
              The target is an initial production workflow in about six weeks—not a company-wide transformation.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <FadeIn
              key={i}
              delay={step.delay}
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
              <p className="opacity-70 mt-auto text-sm">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
