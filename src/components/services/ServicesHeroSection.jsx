import FadeIn from "@/components/FadeIn";

export default function ServicesHeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center bg-[#111111] text-[#F3F3EF]">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-[#D6FF00]">
            [ OUR SERVICES ]
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-[8vw] lg:text-[5.5vw] leading-[0.9] font-black uppercase tracking-tighter">
                AI-Powered Solutions For{" "}
                <span className="text-[#D6FF00]">Every</span> Operation.
              </h1>
            </FadeIn>
          </div>
          <div className="flex flex-col justify-end">
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl font-medium max-w-lg mb-8">
                We don&apos;t sell generic software. We build custom AI systems
                tailored to your workflows, tools, and team — deployed in weeks,
                not months.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                <div>
                  <p className="text-3xl md:text-4xl font-black">6</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Core Services
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">50+</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Integrations
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">24/7</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Monitoring
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
