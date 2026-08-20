import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function RoiCTASection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
              [ NEXT STEP ]
            </p>
            <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] leading-none mb-6">
              Turn The Estimate Into A Plan.
            </h2>
            <p className="text-sm md:text-base opacity-60 leading-relaxed mb-10 md:mb-14 max-w-xl mx-auto">
              A free process audit turns these estimates into a real number —
              mapped against your actual workflows, tools, and team.
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
                href="/process"
                className="border border-bone/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-bone hover:text-ink transition-colors"
              >
                See Our Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
