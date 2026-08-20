import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function CaseStudiesCTASection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
              [ YOUR TURN ]
            </p>
            <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] leading-none mb-6">
              Be The Next Success Story.
            </h2>
            <p className="text-sm md:text-base opacity-60 leading-relaxed mb-10 md:mb-14 max-w-xl mx-auto">
              Every project starts with a free automation audit. We&apos;ll
              identify your biggest bottleneck and show you exactly how to
              eliminate it.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit"
                className="bg-cobalt text-bone py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-cobalt-light transition-colors"
              >
                Request Free Audit
              </Link>
              <Link
                href="/about"
                className="border border-bone/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-bone hover:text-ink transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
