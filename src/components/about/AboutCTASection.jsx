import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function AboutCTASection() {
  return (
    <section className="py-20 md:py-32 bg-bone">
      <div className="container">
        <div className="bg-ink text-bone p-8 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-cobalt-light rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-cobalt-light rounded-full blur-[100px] opacity-5"></div>

          <div className="relative z-10">
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
                [ LET&apos;S TALK ]
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[0em] leading-none mb-6">
                Ready To Work With Us?
              </h2>
              <p className="text-sm md:text-base opacity-60 max-w-lg leading-relaxed mb-10 md:mb-14">
                Whether you need a single workflow automated or an
                enterprise-wide transformation, we&apos;re ready to help.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-audit"
                  className="bg-cobalt text-bone py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-cobalt-light transition-colors"
                >
                  Request Free Audit
                </Link>
                <a
                  href="mailto:hello@ergofect.ai"
                  className="border border-white/20 py-3 md:py-4 px-6 md:px-8 font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-bone hover:text-ink transition-colors"
                >
                  Email Us Directly
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
