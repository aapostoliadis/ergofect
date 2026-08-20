import FadeIn from "@/components/FadeIn";

export default function MissionSection() {
  return (
    <section className="bg-[#111111] text-[#F3F3EF] py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-8 md:mb-12 text-[#D6FF00]">
                [ OUR MISSION ]
              </p>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Automation Should Be{" "}
                <span className="text-[#D6FF00]">Accessible</span>, Not
                Exclusive.
              </h2>
            </FadeIn>
          </div>
          <div className="flex flex-col justify-center">
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed">
                We believe every growing business deserves enterprise-grade
                automation. Our mission is to democratize AI operations — making
                it fast to deploy, easy to manage, and impossible to outgrow.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="border border-white/10 p-6 md:p-8">
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-50 mb-4">
                  [ OUR VISION ]
                </p>
                <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">
                  A world where no team wastes time on work a machine could
                  handle better.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
