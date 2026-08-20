import FadeIn from "@/components/FadeIn";

const milestones = [
  {
    year: "2022",
    title: "The Spark",
    desc: "Founded by John Doe after witnessing teams waste 60% of their time on manual processes. Started with a single automation for a logistics startup.",
    highlight: true,
  },
  {
    year: "2023",
    title: "First 50 Clients",
    desc: "Expanded the team to 12 specialists. Launched our proprietary automation framework that cut deployment time from months to weeks.",
    highlight: false,
  },
  {
    year: "2024",
    title: "Global Expansion",
    desc: "Opened operations across 3 continents. Partnered with leading cloud platforms. Crossed 150+ automations deployed worldwide.",
    highlight: false,
  },
  {
    year: "2025",
    title: "AI-Native Platform",
    desc: "Launched our AI-native orchestration platform. Achieved 98% client retention rate. Named one of the fastest-growing AI startups.",
    highlight: true,
  },
];

export default function StorySection() {
  return (
    <section className="py-20 md:py-32 bg-[#F3F3EF] border-b border-black/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-1">
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
                [ OUR STORY ]
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Built From
                <br /> Experience.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-2">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-2xl">
                KAIRO didn&apos;t start in a lab. It started in the trenches —
                watching talented people burn out on tasks that should have been
                automated years ago.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black/10 md:-translate-x-px hidden sm:block"></div>

          <div className="space-y-8 md:space-y-0">
            {milestones.map((item, i) => (
              <FadeIn key={i} delay={i * 150} className="relative">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ${
                    i % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  <div
                    className={`${
                      i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"
                    } pb-8 md:pb-16`}
                  >
                    <div
                      className={`inline-block px-3 py-1 font-mono text-xs uppercase tracking-widest mb-3 ${
                        item.highlight
                          ? "bg-[#D6FF00] text-black font-bold"
                          : "bg-black/5"
                      }`}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className={`hidden md:block ${
                      i % 2 === 0 ? "md:order-2" : ""
                    }`}
                  ></div>
                </div>

                <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full border-2 border-black bg-[#F3F3EF] -translate-x-1/2 hidden sm:block"></div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
