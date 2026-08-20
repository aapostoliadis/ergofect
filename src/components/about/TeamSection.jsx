import FadeIn from "@/components/FadeIn";

const team = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    seed: "Felix",
    desc: "Former ops lead at a Fortune 500. Built Ergsum to solve the problem he saw every day.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    seed: "Sarah",
    desc: "Ex-Google engineer. Architected the AI orchestration platform from the ground up.",
  },
  {
    name: "Marcus Rivera",
    role: "Head of Automation",
    seed: "Marcus",
    desc: "15 years in workflow optimization. Leads every major deployment personally.",
  },
  {
    name: "Emily Nakamura",
    role: "Head of Client Success",
    seed: "Emily",
    desc: "Ensures every client achieves measurable ROI within the first 30 days.",
  },
  {
    name: "David Okafor",
    role: "Lead AI Engineer",
    seed: "David",
    desc: "Specialist in NLP and computer vision. Builds the smart layer behind every automation.",
  },
  {
    name: "Lisa Andersson",
    role: "Head of Design",
    seed: "Lisa",
    desc: "Creates intuitive dashboards that make complex automations feel simple.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
            [ THE TEAM ]
          </p>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] leading-none mb-12 md:mb-16 max-w-3xl">
            Small Team. <span className="text-cobalt-light">Big Impact.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
      </div>
    </section>
  );
}
