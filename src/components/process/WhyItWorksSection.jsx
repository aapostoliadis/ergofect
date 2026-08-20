import FadeIn from "@/components/FadeIn";

const reasons = [
  {
    number: "01",
    title: "We Never Skip The Map",
    desc: "Automating before you've mapped the workflow is the single most common way these projects fail. We map first, every time — no exceptions.",
  },
  {
    number: "02",
    title: "Nothing Gets Automated Mid-Migration",
    desc: "Automating a process while its data model is still moving just automates the mess. We hold off until the core system is stable.",
  },
  {
    number: "03",
    title: "We Model For 2x, Not 50x",
    desc: "Designing for a hypothetical future scale burns weeks on fields you'll never use. We build for where you're actually headed.",
  },
  {
    number: "04",
    title: "One Home For Every Fact",
    desc: "The same client sitting in two disconnected tools is how data quietly drifts out of sync. Every fact gets exactly one canonical source.",
  },
  {
    number: "05",
    title: "No Big-Bang Migrations",
    desc: "We migrate department by department, old tool running read-only in parallel, until accuracy is proven — not a single risky cutover weekend.",
  },
  {
    number: "06",
    title: "Routing, Not One Model For Everything",
    desc: "Every request gets routed to the cheapest model that can handle it, escalating to a frontier model only when it's actually needed.",
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
                How These Projects Usually Fail.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-2xl">
                Across hundreds of builds, projects don&apos;t fail on effort
                — they fail on sequence. Here&apos;s what we do differently.
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
