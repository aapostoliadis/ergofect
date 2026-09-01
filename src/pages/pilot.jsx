import Head from "next/head";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { pilotPhases } from "@/data/pilot";

const phaseDescriptions = {
  map: "Walk one workflow end to end, record the baseline, and agree where human review must stay.",
  design: "Define the data, integrations, exceptions, permissions, acceptance criteria, and fallback path.",
  build: "Connect the existing tools, test with real examples, and compare automated output with the current process.",
  launch: "Release the scoped workflow with monitoring, documentation, a named owner, and a review cadence.",
};

const phases = pilotPhases.map((phase) => ({
  ...phase,
  desc: phaseDescriptions[phase.id],
}));

const included = [
  "One named operational workflow and owner",
  "Up to three existing systems or data sources",
  "One human-review path and exception queue",
  "Baseline and acceptance criteria",
  "Initial production release, monitoring, and handover",
];

const excluded = [
  "A company-wide AI transformation",
  "Replacement of every core platform",
  "Broad historical-data migration by default",
  "A second workflow or fourth system connection",
  "Unsupervised decisions in high-risk workflows",
  "Guaranteed savings before a baseline exists",
];

const engagementOptions = [
  {
    label: "Focused advisory",
    price: "$5k+",
    cadence: "Fixed scope",
    desc: "A process audit, feasibility study, or focused UX/product review. A production release is not included by default.",
  },
  {
    label: "Initial production pilot",
    price: "$10k+",
    cadence: "Fixed scope",
    desc: "The starting point for the six-week pilot defined on this page. The audit confirms the final fixed proposal.",
  },
  {
    label: "Ongoing delivery",
    price: "~$10k/mo",
    cadence: "Typical starting level",
    desc: "Broader integration, optimization, and support after the pilot. Scope, capacity, and response commitments are agreed separately.",
  },
];

const measures = [
  "Handling time per item",
  "Items processed per week",
  "Exception and rework rate",
  "Human review minutes",
  "Time from intake to completion",
  "Adoption by the workflow owner",
];

export default function PilotPage() {
  return (
    <>
      <Head>
        <title>Six-Week AI Automation Pilot | Ergofect.</title>
        <meta
          name="description"
          content="Scope and launch one measurable AI automation workflow in about six weeks, using the systems your team already relies on."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-ink text-bone pt-32 pb-20 md:pt-40 md:pb-28 border-b border-bone/10">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-5 text-cobalt-light">
              [ THE INITIAL PILOT ]
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="lg:col-span-8">
              <FadeIn delay={100}>
                <h1 className="text-5xl md:text-[8vw] lg:text-[6.2vw] leading-[0.9] font-semibold text-balance">
                  Put one workflow live in <span className="text-cobalt-light">about six weeks.</span>
                </h1>
              </FadeIn>
            </div>
            <div className="lg:col-span-4">
              <FadeIn delay={180}>
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                  A bounded production pilot around your existing CRM, helpdesk, documents, and spreadsheets—with a measurable finish line.
                </p>
                <Link
                  href="/book-audit"
                  className="inline-flex items-center gap-3 bg-cobalt text-bone px-6 py-4 font-bold text-xs uppercase tracking-widest hover:bg-bone hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
                >
                  Scope my pilot <span aria-hidden="true">→</span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone text-ink py-20 md:py-32 border-b border-ink/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <div className="lg:col-span-4">
              <FadeIn>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
                  [ SCOPE LEDGER ]
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold leading-none text-balance">
                  Small enough to control. Real enough to measure.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 border border-ink/15">
              <FadeIn delay={100} className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-ink/15">
                <p className="font-mono text-xs uppercase text-positive mb-6">Included</p>
                <ul className="space-y-4">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <span className="text-positive" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={180} className="p-6 md:p-8 bg-paper">
                <p className="font-mono text-xs uppercase text-negative mb-6">Not assumed</p>
                <ul className="space-y-4">
                  {excluded.map((item) => (
                    <li key={item} className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <span className="text-negative" aria-hidden="true">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-20 md:py-32 border-b border-bone/10">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 text-cobalt-light">
              [ DELIVERY SEQUENCE ]
            </p>
            <h2 className="text-4xl md:text-7xl font-semibold leading-none mb-14 md:mb-20 max-w-4xl text-balance">
              Four gates. One initial go-live.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-bone/15">
            {phases.map((phase, index) => (
              <FadeIn
                key={phase.week}
                delay={index * 90}
                className={`p-6 md:p-8 border-r border-b border-bone/15 min-h-64 flex flex-col ${index === 2 ? "bg-cobalt/20" : ""}`}
              >
                <p className="font-mono text-xs uppercase text-cobalt-light mb-8">{phase.week}</p>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{phase.title}</h3>
                <p className="text-sm leading-relaxed opacity-65 mt-auto">{phase.desc}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400}>
            <p className="font-mono text-[10px] md:text-xs uppercase opacity-45 mt-6 max-w-3xl leading-relaxed">
              Timing depends on system access, data quality, stakeholder availability, and the agreed scope. Broader rollout follows only after the pilot is accepted.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-bone text-ink py-20 md:py-32 border-b border-ink/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
                  [ INVESTMENT ]
                </p>
                <div className="border-t border-ink/15">
                  {engagementOptions.map((option) => (
                    <div key={option.label} className="border-b border-ink/15 py-5">
                      <div className="flex items-end justify-between gap-4 mb-2">
                        <p className="font-semibold text-lg">{option.label}</p>
                        <p className="font-mono font-bold text-xl tabular-nums whitespace-nowrap">{option.price}</p>
                      </div>
                      <p className="font-mono text-[10px] uppercase opacity-45 mb-2">{option.cadence}</p>
                      <p className="text-sm leading-relaxed opacity-65">{option.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-relaxed opacity-55 mt-5 max-w-md">
                  These are commercial guideposts, not quotes. Data sensitivity, integrations, and delivery risk determine the proposal.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:pl-10">
              <FadeIn delay={120}>
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8 text-balance">
                  The pilot succeeds when the workflow passes its agreed checks—not when a demo looks impressive.
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink/15">
                {measures.map((measure, index) => (
                  <FadeIn key={measure} delay={180 + index * 50} className="border-r border-b border-ink/15 p-5 md:p-6">
                    <p className="font-mono text-[10px] uppercase opacity-40 mb-3">Measure {String(index + 1).padStart(2, "0")}</p>
                    <p className="font-medium">{measure}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cobalt text-bone py-20 md:py-28">
        <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-70">[ START WITH THE WORKFLOW ]</p>
            <h2 className="text-4xl md:text-7xl font-semibold leading-none max-w-4xl text-balance">
              Bring us the bottleneck. Leave with a scoped next step.
            </h2>
          </FadeIn>
          <FadeIn delay={140}>
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-3 bg-bone text-ink px-6 py-4 font-bold text-xs uppercase tracking-widest hover:bg-ink hover:text-bone transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
            >
              Book the free audit <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
