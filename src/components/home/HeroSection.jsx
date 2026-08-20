import FadeIn from "@/components/FadeIn";

export default function HeroSection() {

  return (
    <section
      id="home"
      className="pt-32 pb-16 md:pt-32 md:pb-20 min-h-[90vh] md:min-h-screen flex flex-col justify-center border-b border-black/10"
    >
      <div className="container relative">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 opacity-60">
            [ BEAT YOUR BOTTLENECK ]
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="w-full lg:w-2/3">
            <FadeIn delay={100}>
              <h1 className="text-6xl md:text-[10vw] lg:text-[9vw] leading-[0.9] font-black uppercase tracking-tighter">
                Scale Operations <br /> Without Hiring <br />
                <span className="text-[#D6FF00] bg-black px-2 md:px-4 inline-block mt-2">
                  [100]
                </span>{" "}
                People.
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-2xl mt-6 md:mt-8 max-w-xl font-medium">
                Build custom AI systems that handle your repetitive work, so you
                can focus on growth, not grunt work.
              </p>
            </FadeIn>
            <FadeIn delay={300} className="mt-8 md:mt-12">
              <a
                href="#how"
                className="flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-2 w-fit hover:pr-4 transition-all group"
              >
                See How It Works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-2 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/3 relative mt-12 lg:mt-0">
            <FadeIn direction="right" delay={400}>
              <div className="bg-black aspect-video md:aspect-[4/5] p-6 flex flex-col justify-between text-white relative overflow-hidden group">
                {/* Background Video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  src="/videos/hero-automation.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-[#D6FF00] mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity"></div>

                <div className="relative z-10 flex justify-between items-start">
                  <p className="font-mono text-[8px] md:text-[10px] uppercase w-2/3 md:w-1/2">
                    What used to take hours now runs automatically without human
                    oversight.
                  </p>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] md:text-xs font-bold uppercase flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#D6FF00]"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    Live Automation
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
