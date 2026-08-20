import FadeIn from "@/components/FadeIn";

const guarantees = [
  {
    title: "6-Week Delivery Guarantee",
    desc: "If we don't deploy within 6 weeks, the first month of optimization is on us.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Zero Downtime Migration",
    desc: "Your existing operations continue running without interruption during the entire deployment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    title: "90-Day Optimization",
    desc: "Post-launch, we run weekly optimization sprints for 90 days to maximize performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function GuaranteeSection() {
  return (
    <section className="py-20 md:py-32 bg-bone border-b border-ink/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
            [ OUR GUARANTEE ]
          </p>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] leading-none mb-16 md:mb-20 max-w-3xl">
            We Put Our Money Where Our Code Is.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {guarantees.map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 150}
              className="bg-ink text-bone p-6 md:p-8 flex flex-col"
            >
              <div className="text-cobalt-light mb-6">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.04em] mb-3">
                {item.title}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed mt-auto">
                {item.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
