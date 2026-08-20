import FadeIn from "@/components/FadeIn";

export default function ContactHeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center bg-[#111111] text-[#F3F3EF]">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-[#D6FF00]">
            [ GET IN TOUCH ]
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-[8vw] lg:text-[5.5vw] leading-[0.9] font-black uppercase tracking-tighter">
                Let&apos;s Build Something{" "}
                <span className="text-[#D6FF00]">Together</span>.
              </h1>
            </FadeIn>
          </div>
          <div className="flex flex-col justify-end">
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl font-medium max-w-lg">
                Whether you have a specific automation in mind or just want to
                explore what&apos;s possible, we&apos;re here to help. Every
                conversation starts with listening.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
