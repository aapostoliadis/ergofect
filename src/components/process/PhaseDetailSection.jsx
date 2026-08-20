import FadeIn from "@/components/FadeIn";

const phases = [
  {
    number: "01",
    title: "Process Audit",
    week: "Week 1",
    activities: [
      "Map all existing workflows end-to-end",
      "Interview key stakeholders and operators",
      "Identify repetitive, high-volume tasks",
      "Calculate ROI potential for each automation",
      "Prioritize by impact and feasibility",
    ],
    deliverable: "Automation Opportunity Report with ROI projections",
  },
  {
    number: "02",
    title: "Solution Design",
    week: "Week 2-3",
    activities: [
      "Design custom AI architecture",
      "Select optimal models and tools",
      "Map integration points with existing systems",
      "Define success metrics and KPIs",
      "Create detailed technical specification",
    ],
    deliverable: "Technical Blueprint and Integration Plan",
  },
  {
    number: "03",
    title: "Build & Test",
    week: "Week 4-5",
    activities: [
      "Develop automation modules",
      "Integrate with your CRM, ERP, and SaaS tools",
      "Train AI models on your historical data",
      "Run parallel testing alongside live operations",
      "Iterate based on accuracy and performance",
    ],
    deliverable: "Fully tested automation ready for deployment",
  },
  {
    number: "04",
    title: "Deploy & Optimize",
    week: "Week 6+",
    activities: [
      "Deploy with zero-downtime migration",
      "Conduct hands-on team training sessions",
      "Set up monitoring dashboards",
      "Run weekly optimization sprints",
      "Continuous model improvement from live data",
    ],
    deliverable: "Live automation with ongoing support and optimization",
  },
];

export default function PhaseDetailSection() {
  return (
    <section className="bg-[#111111] text-[#F3F3EF] py-20 md:py-32">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-[#D6FF00]">
            [ PHASE BY PHASE ]
          </p>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-16 md:mb-20 max-w-4xl">
            Every Step, <span className="text-[#D6FF00]">Explained</span>.
          </h2>
        </FadeIn>

        <div className="space-y-6 md:space-y-8">
          {phases.map((phase, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-4 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                  <p className="text-[#D6FF00] bg-[#D6FF00]/10 inline-block px-2 py-1 font-mono text-xs font-bold mb-4">
                    Phase {phase.number}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">
                    {phase.title}
                  </h3>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D6FF00] rounded-full"></span>
                    {phase.week}
                  </p>
                </div>
                <div className="lg:col-span-5 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-40 mb-4">
                    Key Activities
                  </p>
                  <ul className="space-y-2">
                    {phase.activities.map((act, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm opacity-70"
                      >
                        <span className="w-1.5 h-1.5 bg-white/30 rounded-full mt-1.5 shrink-0"></span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-40 mb-3">
                    Deliverable
                  </p>
                  <p className="text-sm md:text-base font-bold leading-relaxed">
                    {phase.deliverable}
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
