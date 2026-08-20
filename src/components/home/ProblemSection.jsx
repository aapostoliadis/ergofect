import FadeIn from "@/components/FadeIn";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-bone border-b border-ink/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.04em] leading-none mb-6 md:mb-8">
                Your team is drowning in work that{" "}
                <span className="text-red-600 line-through decoration-4">
                  shouldn&apos;t exist
                </span>
                .
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t border-ink/20 pt-6 md:pt-8 mt-8 md:mt-12 font-mono text-xs md:text-sm uppercase">
                <div>
                  <p className="text-bone bg-ink inline-block px-2 py-1 mb-2">
                    Problem 01
                  </p>
                  <p className="font-bold">Support Ticket Backlog Growing Daily.</p>
                </div>
                <div>
                  <p className="text-bone bg-ink inline-block px-2 py-1 mb-2">
                    Problem 02
                  </p>
                  <p className="font-bold">Scaling Requires Expensive Headcount.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="flex items-end justify-between h-48 md:h-64 border-b-2 border-ink pb-4 relative mt-12 md:mt-0">
            <FadeIn delay={200} className="w-[15%] bg-ink/10 h-[20%] transition-all duration-1000" />
            <FadeIn delay={300} className="w-[15%] bg-ink/30 h-[40%] transition-all duration-1000" />
            <FadeIn delay={400} className="w-[15%] bg-ink/60 h-[70%] transition-all duration-1000" />
            <FadeIn delay={500} className="w-[15%] bg-ink h-[100%] transition-all duration-1000 relative">
              <span className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 font-bold text-lg md:text-xl">
                $12.4M
              </span>
            </FadeIn>
            <p className="absolute -bottom-8 md:-bottom-10 right-0 font-mono text-[10px] md:text-xs uppercase opacity-50">
              Hidden Labor Costs per Year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
