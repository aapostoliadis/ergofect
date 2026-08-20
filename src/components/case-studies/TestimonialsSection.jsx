import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    quote: "KAIRO didn't just automate our support — they fundamentally changed how we think about operations. The ROI was visible within the first month.",
    name: "James Mitchell",
    role: "CEO, Boltshift",
    seed: "James",
  },
  {
    quote: "We went from processing 200 invoices a day manually to handling 2,000+ automatically with near-zero errors. Game changer.",
    name: "Rachel Kim",
    role: "CFO, Initech",
    seed: "Rachel",
  },
  {
    quote: "The team at KAIRO understood our logistics challenges better than vendors who'd been in the space for decades. Truly impressive.",
    name: "Carlos Mendez",
    role: "VP Operations, Umbrella",
    seed: "Carlos",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F3F3EF] border-b border-black/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
            [ CLIENT TESTIMONIALS ]
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12 md:mb-16">
            What They Say.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 150}
              className="border border-black/10 p-6 md:p-8 flex flex-col justify-between"
            >
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20 mb-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="text-base md:text-lg leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-black/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/avatars/${item.seed.toLowerCase()}.webp`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs md:text-sm">
                    {item.name}
                  </p>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50">
                    {item.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
