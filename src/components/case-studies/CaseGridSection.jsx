import FadeIn from "@/components/FadeIn";

const cases = [
  {
    company: "Globex Corp",
    industry: "E-Commerce",
    headline: "Automated Order Processing Across 3 Warehouses",
    stat: "74%",
    statLabel: "Faster Fulfillment",
    color: "from-blue-900/40 to-black/80",
  },
  {
    company: "Initech",
    industry: "Finance",
    headline: "AI-Driven Invoice Reconciliation at Scale",
    stat: "$1.2M",
    statLabel: "Annual Savings",
    color: "from-purple-900/40 to-black/80",
  },
  {
    company: "Acme Corp",
    industry: "Healthcare",
    headline: "Patient Intake Automated From 45 Min to 5 Min",
    stat: "89%",
    statLabel: "Time Reduction",
    color: "from-green-900/40 to-black/80",
  },
  {
    company: "Umbrella",
    industry: "Logistics",
    headline: "Real-Time Fleet Tracking With Predictive Routing",
    stat: "32%",
    statLabel: "Fuel Cost Saved",
    color: "from-red-900/40 to-black/80",
  },
  {
    company: "Cyberdyne",
    industry: "Manufacturing",
    headline: "Quality Control Defect Detection Using Computer Vision",
    stat: "99.2%",
    statLabel: "Accuracy Rate",
    color: "from-yellow-900/40 to-black/80",
  },
  {
    company: "Nexora",
    industry: "Real Estate",
    headline: "Lead Qualification Pipeline Fully Automated",
    stat: "5X",
    statLabel: "More Qualified Leads",
    color: "from-teal-900/40 to-black/80",
  },
];

export default function CaseGridSection() {
  return (
    <section className="bg-[#111111] text-[#F3F3EF] py-20 md:py-32">
      <div className="container">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              More Success Stories.
            </h2>
            <p className="font-mono text-[10px] md:text-xs uppercase opacity-50">
              {cases.length} Projects Showcased
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cases.map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 100}
              className="group cursor-pointer"
            >
              <div className="relative min-h-[280px] md:min-h-[340px] border border-white/10 overflow-hidden flex flex-col justify-end p-6 md:p-8 hover:border-[#D6FF00]/30 transition-colors">
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color}`}></div>
                <div className="w-32 h-32 bg-[#D6FF00] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-50 mb-1">
                    {item.industry}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-4">
                    {item.company}
                  </h3>
                  <p className="text-sm md:text-base opacity-70 mb-6 leading-relaxed">
                    {item.headline}
                  </p>
                  <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                    <div>
                      <p className="text-2xl md:text-3xl font-black text-[#D6FF00]">
                        {item.stat}
                      </p>
                      <p className="font-mono text-[10px] uppercase opacity-50 mt-1">
                        {item.statLabel}
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
