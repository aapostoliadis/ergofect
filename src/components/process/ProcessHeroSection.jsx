import FadeIn from "@/components/FadeIn";

export default function ProcessHeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center bg-ink text-bone">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
            [ OUR PROCESS ]
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-[8vw] lg:text-[5.5vw] leading-[0.9] font-semibold tracking-[-0.04em]">
                From First Call To{" "}
                <span className="text-cobalt-light">Live</span> In 6 Weeks.
              </h1>
            </FadeIn>
          </div>
          <div className="flex flex-col justify-end">
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl font-medium max-w-lg mb-8">
                We don&apos;t believe in 6-month rollouts — or in automating
                first and mapping later. Same sequence every time: map,
                model, build, then automate. That order is why it works.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                <div>
                  <p className="text-3xl md:text-4xl font-semibold">6</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Weeks Avg.
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold">4</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Clear Phases
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold">0</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Downtime
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
