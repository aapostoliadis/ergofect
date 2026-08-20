import FadeIn from "@/components/FadeIn";

const reasons = [
  {
    number: "01",
    title: "Parallel, Not Sequential",
    desc: "We run discovery, design, and initial development in overlapping sprints — not waterfall.",
  },
  {
    number: "02",
    title: "Pre-Built Modules",
    desc: "80% of our automations use battle-tested modules. We customize the remaining 20% for your specific needs.",
  },
  {
    number: "03",
    title: "Your Team Stays Involved",
    desc: "No handoff surprises. Your operators are part of testing from Day 1, ensuring adoption on launch.",
  },
  {
    number: "04",
    title: "Zero-Downtime Migration",
    desc: "We run new automations in parallel with existing workflows. Switchover happens only when accuracy is proven.",
  },
  {
    number: "05",
    title: "Iterative Optimization",
    desc: "Post-launch isn't the end. Every automation gets weekly optimization sprints for 90 days.",
  },
  {
    number: "06",
    title: "Full Documentation",
    desc: "Every system we build comes with complete documentation and runbooks for your team.",
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
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">
                Speed Without Sacrifice.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-2xl">
                Fast doesn&apos;t mean sloppy. Here&apos;s how we deliver
                enterprise-grade automation in startup-speed timelines.
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
              <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.04em] mb-3">
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
