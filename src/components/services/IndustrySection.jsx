import FadeIn from "@/components/FadeIn";

const industries = [
  {
    number: "01",
    industry: "Freight brokerage & 3PL",
    process:
      "Load tracking and proof of delivery, matched to a load number without a person checking three portals and a phone call.",
  },
  {
    number: "02",
    industry: "Insurance MGAs & reinsurance intermediaries",
    process:
      "Policy binding and endorsement processing, built from the same underwriting rules already in use.",
  },
  {
    number: "03",
    industry: "Multi-location healthcare groups",
    process:
      "Insurance verification and intake, run once instead of separately at every location.",
  },
  {
    number: "04",
    industry: "Professional services firms",
    process:
      "Client onboarding and time reconciliation, across the CRM, project tool, and time tracker that currently don't talk to each other.",
  },
];

export default function IndustrySection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32 border-b border-ink/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
            [ BY INDUSTRY ]
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[0em] leading-none mb-12 md:mb-16 max-w-3xl">
            The manual process we usually automate first.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {industries.map((item, i) => (
            <FadeIn
              key={item.number}
              delay={i * 100}
              className="border border-bone/10 p-6 md:p-8 hover:border-cobalt-light/30 transition-colors"
            >
              <p className="text-cobalt-light font-mono text-xs uppercase mb-4">
                {item.number}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold tracking-[0em] mb-3">
                {item.industry}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed">
                {item.process}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
