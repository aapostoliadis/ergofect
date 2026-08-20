import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function ServicesCTASection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <div className="bg-ink border border-bone/10 p-8 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-cobalt rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-cobalt rounded-full blur-[100px] opacity-5"></div>

          <div className="relative z-10">
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
                [ GET STARTED ]
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-none mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-sm md:text-base opacity-60 max-w-lg leading-relaxed mb-10 md:mb-14">
                Start with a free automation audit. We&apos;ll analyze your
                operations and recommend the exact services that will deliver
                the highest ROI.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-audit"
                  className="bg-cobalt text-bone py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-bone hover:text-ink transition-colors"
                >
                  Request Free Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="border border-bone/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-bone hover:text-ink transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
