import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const evidenceSteps = [
  {
    number: "01",
    title: "Record the baseline",
    desc: "We agree the current volume, handling time, error rate, and human effort before anything changes.",
  },
  {
    number: "02",
    title: "Define the finish line",
    desc: "Every pilot has acceptance criteria, an owner, a human fallback, and a production measurement window.",
  },
  {
    number: "03",
    title: "Publish only verified results",
    desc: "A result becomes a case study only after the measurement method and client permission are clear.",
  },
];

export default function EvidenceSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32 border-b border-bone/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 text-cobalt-light">
                [ EVIDENCE, NOT HYPE ]
              </p>
              <h2 className="text-4xl md:text-7xl font-semibold leading-none text-balance">
                Proof starts before the build.
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 lg:pt-16">
            <div className="border-t border-bone/20">
              {evidenceSteps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 90}>
                  <article className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-4 border-b border-bone/20 py-6 md:py-8">
                    <p className="font-mono text-xs text-cobalt-light">{step.number}</p>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed opacity-65 max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={320} className="mt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-3 border-b-2 border-cobalt-light pb-2 font-bold text-xs md:text-sm uppercase tracking-widest hover:gap-5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt-light"
              >
                See our evidence standard
                <span aria-hidden="true">→</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
