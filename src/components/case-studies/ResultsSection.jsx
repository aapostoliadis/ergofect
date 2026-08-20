import FadeIn from "@/components/FadeIn";

const metrics = [
  { before: "45 min", after: "8 min", label: "Avg. Response Time", delay: 0 },
  { before: "$42", after: "$16", label: "Cost Per Ticket", delay: 100 },
  { before: "62%", after: "94%", label: "Customer Satisfaction", delay: 200 },
  { before: "340", after: "12", label: "Daily Manual Tasks", delay: 300 },
];

export default function ResultsSection() {
  return (
    <section className="bg-[#111111] text-[#F3F3EF] py-20 md:py-32 border-t border-white/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-[#D6FF00]">
            [ MEASURABLE IMPACT ]
          </p>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-16 md:mb-20 max-w-4xl">
            Before vs. <span className="text-[#D6FF00]">After</span> Automation.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((item, i) => (
            <FadeIn key={i} delay={item.delay} className="border border-white/10 p-6 md:p-8">
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-6">
                {item.label}
              </p>
              <div className="flex items-center gap-4 mb-2">
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase opacity-40 mb-1">Before</p>
                  <p className="text-2xl md:text-3xl font-black opacity-40 line-through decoration-red-500/60 decoration-2">
                    {item.before}
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D6FF00] shrink-0">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
                <div className="flex-1 text-right">
                  <p className="font-mono text-[10px] uppercase text-[#D6FF00] mb-1">After</p>
                  <p className="text-2xl md:text-3xl font-black text-[#D6FF00]">
                    {item.after}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} className="mt-16 md:mt-20">
          <div className="border border-white/10 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-3xl md:text-5xl font-black mb-2">
                $1.8M <span className="text-[#D6FF00]">Saved</span>
              </p>
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-50">
                Total Annual Savings for Boltshift After Full Deployment
              </p>
            </div>
            <div className="font-mono text-[10px] md:text-xs uppercase opacity-50 text-right">
              <p>ROI Achieved in</p>
              <p className="text-2xl md:text-3xl font-black text-[#F3F3EF] mt-1">6 Weeks</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
