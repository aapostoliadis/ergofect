import FadeIn from "@/components/FadeIn";

const features = [
  {
    title: "Classify and Route",
    desc: "Defined rules and model output can classify requests, suggest priority, and route work to the right queue.",
  },
  {
    title: "Grounded Drafts",
    desc: "Response drafts use the approved knowledge and customer context available to the scoped workflow.",
  },
  {
    title: "Escalation Context",
    desc: "Uncertain or sensitive requests move to a person with the source context and decision trail attached.",
  },
  {
    title: "Review and Measurement",
    desc: "Corrections and exceptions are recorded so performance can be reviewed against the agreed baseline.",
  },
];

export default function ServiceDetailSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
                [ DEEP DIVE ]
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[0em] leading-none">
                Human Review{" "}
                <span className="text-cobalt-light">Built In</span>.
              </h2>
            </FadeIn>
          </div>
          <div className="flex items-end">
            <FadeIn delay={100}>
              <p className="text-lg md:text-xl font-medium max-w-lg">
                Automation handles the repeatable route. People keep control of
                ambiguous, sensitive, or high-impact decisions.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feat, i) => (
            <FadeIn
              key={i}
              delay={i * 100}
              className="border border-bone/10 p-6 md:p-8 group hover:border-cobalt-light/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-cobalt-light rounded-full mt-2 shrink-0"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-[0em] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} className="mt-12 md:mt-16">
          <div className="border border-bone/10 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-2xl md:text-4xl font-semibold mb-1">
                Baseline. Acceptance Criteria. <span className="text-cobalt-light">Observed Result.</span>
              </p>
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-50">
                Every published outcome must show how it was measured
              </p>
            </div>
            <p className="text-5xl md:text-6xl font-semibold opacity-10">PROOF</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
