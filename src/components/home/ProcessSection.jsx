import FadeIn from "@/components/FadeIn";

const steps = [
  {
    week: "Week 1",
    title: "Process Audit",
    desc: "We map your workflows, identify opportunities, and calculate potential ROI.",
    highlight: false,
    delay: 0,
  },
  {
    week: "Week 2-3",
    title: "Solution Design",
    desc: "Custom AI architecture tailored to your company's systems and needs.",
    highlight: false,
    delay: 100,
  },
  {
    week: "Week 4-5",
    title: "Build & Test",
    desc: "Development, integration, and rigorous testing with your team.",
    highlight: true,
    delay: 200,
  },
  {
    week: "Week 6",
    title: "Deployment",
    desc: "Deployed with full team training and handover support.",
    highlight: false,
    delay: 300,
  },
];

export default function ProcessSection() {
  return (
    <section id="how" className="py-20 md:py-32 bg-[#F3F3EF]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Lightning-Fast <br /> Deployment.
            </h2>
          </FadeIn>
          <FadeIn delay={100} className="flex items-end">
            <p className="text-xl md:text-2xl font-medium max-w-md">
              From first call to live automation in just 6 weeks.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <FadeIn
              key={i}
              delay={step.delay}
              className={`p-6 md:p-8 border flex flex-col h-full ${
                step.highlight
                  ? "border-[#D6FF00] bg-[#D6FF00]"
                  : "border-black/10 bg-white"
              }`}
            >
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-6 md:mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> {step.week}
              </p>
              <h3 className="text-lg md:text-xl font-bold uppercase mb-4">{step.title}</h3>
              <p className="opacity-70 mt-auto text-sm">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
