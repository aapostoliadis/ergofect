import FadeIn from "@/components/FadeIn";

export default function CaseStudiesHeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center bg-[#111111] text-[#F3F3EF]">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-[#D6FF00]">
            [ CASE STUDIES ]
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-[8vw] lg:text-[5.5vw] leading-[0.9] font-black uppercase tracking-tighter">
                Real Results From{" "}
                <span className="text-[#D6FF00]">Real</span> Companies.
              </h1>
            </FadeIn>
          </div>
          <div className="flex flex-col justify-end">
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl font-medium max-w-lg mb-8">
                Every case study represents a business that was drowning in
                manual work. See how we helped them automate, scale, and thrive.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
                <div>
                  <p className="text-3xl md:text-4xl font-black">12</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Industries
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">45+</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">$8.2M</p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                    Saved for Clients
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
