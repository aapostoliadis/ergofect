import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function ProcessCTASection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
              [ START YOUR PROJECT ]
            </p>
            <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] leading-none mb-6">
              Ready To Automate?
            </h2>
            <p className="text-sm md:text-base opacity-60 leading-relaxed mb-10 md:mb-14 max-w-xl mx-auto">
              Every engagement starts with a free process audit. We&apos;ll map
              your workflows, identify the biggest ROI opportunities, and give
              you a clear plan - no commitment required.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit"
                className="bg-cobalt text-bone py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-cobalt-light transition-colors"
              >
                Book Free Audit
              </Link>
              <Link
                href="/roi-calculator"
                className="border border-bone/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-bone hover:text-ink transition-colors"
              >
                Calculate Your ROI
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
