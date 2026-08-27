import FadeIn from "@/components/FadeIn";

export default function RoiHeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ink text-bone">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
            [ ROI CALCULATOR ]
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-[8vw] lg:text-[5.5vw] leading-[0.9] font-semibold tracking-[0em]">
              What Is Your{" "}
              <span className="text-cobalt-light">Automation</span> Actually Worth?
            </h1>
          </FadeIn>
          <FadeIn delay={200} className="flex items-end">
            <p className="text-lg md:text-xl font-medium max-w-lg">
              Six inputs. No sales call required. Engagements typically start
              around $10,000 a month, the sliders below default to a mid-size
              first build, move them to your real numbers and see the return
              before you talk to us.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
