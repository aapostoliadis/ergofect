import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function FeaturedCaseSection() {
  return (
    <section className="bg-[#F3F3EF] py-20 md:py-32 border-b border-black/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-12 md:mb-16 opacity-60">
            [ FEATURED CASE STUDY ]
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <FadeIn delay={100}>
            <div className="relative min-h-[300px] md:min-h-[500px] border border-black/10 overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/case-study-boltshift.webp"
                alt="Boltshift Case Study"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="w-48 h-48 md:w-64 md:h-64 bg-[#D6FF00] rounded-full blur-[80px] md:blur-[100px] opacity-15 absolute top-0 -right-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-2">
                  SaaS / Customer Support
                </p>
                <p className="font-bold text-2xl md:text-3xl uppercase tracking-widest">
                  Boltshift
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col justify-between">
            <div>
              <FadeIn delay={200}>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                  Cut Support Costs By{" "}
                  <span className="text-[#D6FF00] bg-black px-2 inline-block">62%</span>{" "}
                  And Sped Up Response{" "}
                  <span className="text-[#D6FF00] bg-black px-2 inline-block">3X</span>.
                </h2>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-sm md:text-base opacity-70 leading-relaxed mb-8 max-w-md">
                  Boltshift was scaling fast but their support team couldn&apos;t
                  keep up. Manual ticket routing, repetitive responses, and
                  growing backlog were killing customer satisfaction. We deployed
                  an AI-powered triage and response system in just 4 weeks.
                </p>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={400}>
                <div className="grid grid-cols-3 gap-6 border-t border-black/20 pt-6 mb-8">
                  <div>
                    <p className="text-3xl md:text-4xl font-black">87%</p>
                    <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                      Time Saved
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-black">3X</p>
                    <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                      Resolution Speed
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-black">62%</p>
                    <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                      Cost Reduction
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={500}>
                <Link
                  href="/book-audit"
                  className="flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-2 w-fit hover:pr-4 transition-all group"
                >
                  Start Your Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
