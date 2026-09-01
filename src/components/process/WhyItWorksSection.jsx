import FadeIn from "@/components/FadeIn";

const reasons = [
  {
    number: "01",
    title: "We Never Skip The Map",
    desc: "Mapping the current workflow exposes handoffs, exceptions, and missing ownership before they become build problems.",
  },
  {
    number: "02",
    title: "No Default Platform Replacement",
    desc: "The pilot works around the systems already in place. We move data or replace a tool only when the agreed scope requires it.",
  },
  {
    number: "03",
    title: "The Scope Has A Boundary",
    desc: "One workflow, a named set of systems, and explicit exclusions keep the first release useful and controllable.",
  },
  {
    number: "04",
    title: "One Source For Every Pilot Fact",
    desc: "Every record the pilot uses has a named source, owner, and reconciliation rule so conflicts are visible.",
  },
  {
    number: "05",
    title: "Human Review Is Designed In",
    desc: "Approvals, overrides, exception queues, and safe fallbacks are part of the workflow—not an afterthought.",
  },
  {
    number: "06",
    title: "Evidence Decides The Next Step",
    desc: "The observed production result determines whether to optimize, expand, or stop. A polished demo is not the finish line.",
  },
];

export default function WhyItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-bone border-b border-ink/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
                [ WHY IT WORKS ]
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[0em] leading-none">
                How These Projects Usually Fail.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-2xl">
                A useful pilot depends on the order of decisions: map the work,
                bound the scope, define controls, then build and measure.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 100}
              className="border border-ink/10 p-6 md:p-8 group hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              <p className="bg-ink text-bone group-hover:bg-bone group-hover:text-ink inline-block px-2 py-1 font-mono text-xs font-bold mb-4 transition-colors duration-500">
                {item.number}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-[0em] mb-3">
                {item.title}
              </h3>
              <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed transition-opacity">
                {item.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
