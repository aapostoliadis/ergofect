import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="bg-[#111111] text-[#F3F3EF] py-20 md:py-32 border-t border-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 opacity-60">
                [ SUCCESS STORY ]
              </p>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 md:mb-12">
                How Boltshift Cut Support Costs By{" "}
                <span className="text-[#D6FF00]">62%</span> And Sped Up Response{" "}
                <span className="text-[#D6FF00]">3X</span>.
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-8 mt-8 md:mt-12">
              <FadeIn delay={100}>
                <p className="text-5xl md:text-6xl font-black">87%</p>
                <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-2">
                  Time Saved
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-5xl md:text-6xl font-black">3X</p>
                <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-2">
                  Ticket Resolution
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="flex justify-end mt-8 lg:mt-0">
            <FadeIn direction="left" delay={300} className="w-full h-full relative min-h-[300px] md:min-h-[400px]">
              <div className="absolute inset-0 border border-white/10 flex items-center justify-center overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/case-study-boltshift.webp"
                  alt="Boltshift Case Study"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="w-48 h-48 md:w-64 md:h-64 bg-[#D6FF00] rounded-full blur-[80px] md:blur-[100px] opacity-15 absolute top-0 -right-10"></div>
                <div className="text-center z-10">
                  <p className="font-bold text-xl md:text-2xl uppercase tracking-widest mb-4">
                    Boltshift
                  </p>
                  <Link href="/case-studies" className="border border-white/30 px-4 md:px-6 py-2 uppercase text-[10px] md:text-xs font-mono hover:bg-white hover:text-black transition-colors">
                    Read Case Study
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
