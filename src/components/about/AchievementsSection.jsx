import FadeIn from "@/components/FadeIn";

const stats = [
  { value: "200+", label: "Automations Deployed", delay: 0 },
  { value: "3.2M", label: "Tasks Automated Monthly", delay: 100 },
  { value: "45+", label: "Countries Served", delay: 200 },
  { value: "98%", label: "Client Retention", delay: 300 },
  { value: "87%", label: "Average Cost Reduction", delay: 400 },
  { value: "6 Weeks", label: "Avg. Deployment Time", delay: 500 },
];

const logos = [
  "Boltshift", "Acme Corp", "Globex", "Initech", "Umbrella", "Cyberdyne",
];

export default function AchievementsSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32 border-t border-white/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
            [ BY THE NUMBERS ]
          </p>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] leading-none mb-16 md:mb-20">
            Results Speak <span className="text-cobalt-light">Louder</span>.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 mb-20 md:mb-28">
          {stats.map((stat, i) => (
            <FadeIn
              key={i}
              delay={stat.delay}
              className="bg-ink p-6 md:p-10 text-center"
            >
              <p className="text-4xl md:text-6xl font-semibold mb-2">{stat.value}</p>
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-50">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-8 md:mb-10 text-center opacity-50">
            [ TRUSTED BY LEADING COMPANIES ]
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="border border-white/10 py-6 flex items-center justify-center font-bold text-sm md:text-base uppercase tracking-widest opacity-30 hover:opacity-100 hover:border-cobalt-light/30 transition-all"
              >
                {logo}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
