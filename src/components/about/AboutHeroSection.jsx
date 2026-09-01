import FadeIn from "@/components/FadeIn";

export default function AboutHeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center border-b border-black/10">
      <div className="container relative">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 opacity-60">
            [ ABOUT Ergofect. ]
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-[8vw] lg:text-[6vw] leading-[0.9] font-semibold tracking-[0em]">
                We Build AI Systems That{" "}
                <span className="bg-ink text-bone px-2 md:px-4 inline-block mt-2">
                  Replace
                </span>{" "}
                Busywork.
              </h1>
            </FadeIn>
          </div>
          <div className="flex flex-col justify-end">
            <FadeIn delay={200}>
              <p className="text-lg md:text-2xl font-medium max-w-lg">
                Founded in 2026, Ergofect is an AI automation studio that helps
                scaling companies eliminate operational bottlenecks - without
                adding headcount.
              </p>
            </FadeIn>
            <FadeIn delay={300} className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-black/20 pt-6">
                <div>
                  <p className="text-3xl md:text-4xl font-semibold">1</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Workflow First
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold">≈6</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Weeks To Initial Go-Live
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold">4</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Delivery Gates
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold">1</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Named Human Owner
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
