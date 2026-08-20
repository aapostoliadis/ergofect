import FadeIn from "@/components/FadeIn";

const values = [
  {
    number: "01",
    title: "Speed Over Perfection",
    desc: "We ship fast and iterate faster. A working automation today beats a perfect one next quarter.",
    delay: 0,
  },
  {
    number: "02",
    title: "Radical Transparency",
    desc: "No black boxes. Every automation is documented, measurable, and fully visible to your team.",
    delay: 100,
  },
  {
    number: "03",
    title: "Client-First Engineering",
    desc: "We don't build what's cool - we build what moves the needle for your operations.",
    delay: 200,
  },
  {
    number: "04",
    title: "Relentless Reliability",
    desc: "Our automations run 24/7/365. Downtime isn't acceptable. Period.",
    delay: 300,
  },
  {
    number: "05",
    title: "Continuous Optimization",
    desc: "Every system we build gets smarter over time. We audit, refine, and improve - always.",
    delay: 400,
  },
  {
    number: "06",
    title: "People Over Process",
    desc: "Automation should empower your team, not replace their judgment. We augment humans, not eliminate them.",
    delay: 500,
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 md:py-32 bg-bone border-b border-black/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
                [ WHAT WE STAND FOR ]
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none">
                Our Core Values.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-2 flex items-end">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-2xl">
                These aren&apos;t wall posters - they&apos;re the principles we
                hire against, build with, and hold ourselves accountable to.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {values.map((val, i) => (
            <FadeIn
              key={i}
              delay={val.delay}
              className="border border-black/10 p-6 md:p-8 group hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              <p className="bg-ink text-bone group-hover:bg-cobalt-light group-hover:text-ink inline-block px-2 py-1 font-mono text-xs font-bold mb-4 transition-colors duration-500">
                {val.number}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.04em] mb-3">
                {val.title}
              </h3>
              <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed transition-opacity">
                {val.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
