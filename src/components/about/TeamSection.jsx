import FadeIn from "@/components/FadeIn";

const team = [
  {
    name: "Akis Apostoliadis",
    role: "Founder",
    seed: "Felix",
    desc: "26 years in product design and AI consulting. Built Ergofect to eliminate operational bottlenecks.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
            [ THE FOUNDER ]
          </p>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-[0em] leading-none mb-12 md:mb-16 max-w-3xl">
            Experience That <span className="text-cobalt-light">Creates Impact.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="max-w-md w-full">
            {team.map((member, i) => (
              <FadeIn
                key={i}
                delay={i * 100}
                className="border border-white/10 p-6 md:p-8 group hover:border-cobalt-light/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-700 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/avatars/${member.seed.toLowerCase()}.webp`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm">
                      {member.name}
                    </p>
                    <p className="font-mono text-[10px] md:text-xs uppercase opacity-50">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm opacity-60 leading-relaxed">{member.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <p className="text-base md:text-lg opacity-70 leading-relaxed">
              Akis has spent 26 years in product design and AI consulting,
              across fintech, healthtech, and SaaS. Before founding Ergofect,
              that work took him inside teams at Harvard, Kraft Heinz, Sony
              Pictures, WeWork, Pfizer, and Colgate-Palmolive. Ergofect is
              where that experience supports scoped automation pilots and the
              human-review tools around them. He reviews every engagement
              personally.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
