import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const deliverySteps = [
  { label: "Map", status: "complete" },
  { label: "Audit", status: "complete" },
  { label: "Data model", status: "complete" },
  { label: "Build and migrate", status: "complete" },
  { label: "Agents", status: "in-progress" },
  { label: "Automate", status: "not-started" },
];

const completedStageCount = deliverySteps.filter(({ status }) => status === "complete").length;

const metrics = [
  {
    value: "27.6",
    label: "Hours recovered per week",
    note: "Recorded at the dashboard status point shown; 37% of the 74.3-hour model.",
  },
  {
    value: `${completedStageCount} of ${deliverySteps.length}`,
    label: "Delivery stages complete",
    note: "The agents stage is shown in progress; automation remains ahead.",
  },
  {
    value: "$1,260",
    label: "Monthly software removed",
    note: "Eleven subscriptions are shown as cancelled or reduced.",
  },
  {
    value: "2",
    label: "Open client decisions",
    note: "One is shown as overdue in the delivery record.",
  },
];

const evidenceBoundaries = [
  {
    label: "Supported",
    symbol: "✓",
    toneClass: "text-positive",
    title: "What the record supports",
    items: [
      "A dated operational snapshot of delivery progress",
      "Measured recovery split by consolidation and agents",
      "Visible decisions, risks, exceptions, and owners",
      "A traceable distinction between observed and projected values",
    ],
  },
  {
    label: "Not claimed",
    symbol: "—",
    toneClass: "text-negative",
    title: "What it does not claim",
    items: [
      "That the 74.3 modelled hours have been achieved",
      "That future projected bars are production results",
      "That every workstream had a complete before-state baseline",
      "That this client-specific migration is the default delivery model",
    ],
  },
];

function CaseStudyFigure({ src, width, height, alt, caption, label }) {
  return (
    <figure>
      <div className="border border-ink/15 bg-white overflow-x-auto">
        <div className="min-w-[860px]">
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className="w-full h-auto"
            sizes="(max-width: 768px) 860px, 100vw"
            quality={90}
            unoptimized
          />
        </div>
      </div>
      <figcaption className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-2 md:gap-6 mt-4 font-mono text-[10px] md:text-xs uppercase leading-relaxed">
        <span className="text-cobalt">{label}</span>
        <span className="opacity-55">{caption}</span>
      </figcaption>
    </figure>
  );
}

export default function CrystalClearWaterCaseStudy() {
  return (
    <>
      <Head>
        <title>CrystalClearWater Operational Case Study | Ergofect.</title>
        <meta
          name="description"
          content="An inspectable Ergofect delivery record showing observed progress, projected capacity, open decisions, risks, and accepted exceptions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-bone text-ink pt-32 pb-20 md:pt-40 md:pb-28 border-b border-ink/10">
        <div className="container">
          <FadeIn>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity mb-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              <span aria-hidden="true">←</span> Evidence & case studies
            </Link>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="lg:col-span-8">
              <FadeIn delay={80}>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-cobalt mb-5">
                  [ OPERATIONAL CASE STUDY ]
                </p>
                <h1 className="text-5xl md:text-[8vw] lg:text-[6.2vw] leading-[0.88] font-semibold text-balance">
                  A delivery record you can <span className="bg-ink text-bone px-3 inline-block">inspect.</span>
                </h1>
              </FadeIn>
            </div>
            <div className="lg:col-span-4">
              <FadeIn delay={160}>
                <p className="font-mono text-[10px] uppercase text-cobalt mb-3">CrystalClearWater Environmental</p>
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  A delivery record showing what is complete, what is observed, what remains projected, and which decisions are still open.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-16 md:py-24 border-b border-bone/10">
        <div className="container">
          <FadeIn>
            <div className="border border-cobalt-light/35 bg-cobalt/10 p-5 md:p-6 mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-3 md:gap-8">
              <p className="font-mono text-[10px] md:text-xs uppercase text-cobalt-light">Evidence note</p>
              <p className="text-sm md:text-base leading-relaxed opacity-80 max-w-4xl">
                This record contains both observed and projected values. Projections are planning assumptions—not achieved results—and one workstream explicitly records a missing baseline.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-bone/15">
            {metrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={80 + index * 70} className="border-r border-b border-bone/15 p-6 md:p-8 min-h-64 flex flex-col">
                <p className="font-mono text-[10px] uppercase text-cobalt-light mb-8">Snapshot {String(index + 1).padStart(2, "0")}</p>
                <p className="text-4xl md:text-5xl font-semibold tabular-nums mb-3">{metric.value}</p>
                <h2 className="text-lg font-semibold mb-5">{metric.label}</h2>
                <p className="text-sm leading-relaxed opacity-55 mt-auto">{metric.note}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="record" className="bg-paper text-ink py-20 md:py-32 border-b border-ink/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-4">[ THE DELIVERY RECORD ]</p>
                <h2 className="text-4xl md:text-6xl font-semibold leading-none text-balance">
                  One view of progress, value, and what the client still needs to decide.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <FadeIn delay={100}>
                <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  The dashboard combines delivery gates with operating measures. It makes incomplete work and client dependencies visible instead of hiding them behind a status summary.
                </p>
              </FadeIn>
            </div>
          </div>
          <FadeIn delay={160}>
            <CaseStudyFigure
              src="/images/case-studies/crystal-clear-water/project-overview.png"
              width={1864}
              height={985}
              alt="CrystalClearWater delivery dashboard showing current phase, recorded hours recovered, steps complete, client decisions, software removed, and six delivery stages."
              label="Figure 01 · Delivery overview"
              caption="The dashboard snapshot shows four of six steps complete, 27.6 hours per week recorded, and the agents stage in progress. On smaller screens, swipe horizontally to inspect the full record."
            />
          </FadeIn>
          <FadeIn delay={220} className="mt-10 md:mt-14">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-ink/15">
              {deliverySteps.map((step, index) => (
                <div
                  key={step.label}
                  className={`border-r border-b border-ink/15 p-4 md:p-5 ${step.status === "complete" ? "bg-positive/5" : step.status === "in-progress" ? "bg-cobalt/10" : ""}`}
                >
                  <p className="font-mono text-[10px] opacity-40 mb-3">0{index + 1}</p>
                  <p className="font-semibold">{step.label}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-4 max-w-4xl leading-relaxed">
              “Build and migrate” was specific to this engagement after the audit identified a required data move. Migration is not assumed for every Ergofect pilot.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-bone text-ink py-20 md:py-32 border-b border-ink/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-4">[ MEASURED VS PROJECTED ]</p>
                <h2 className="text-4xl md:text-6xl font-semibold leading-none text-balance">
                  The chart does not turn a forecast into a result.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <FadeIn delay={100}>
                <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  At the status point shown, the record contains 18.4 hours from consolidation and 9.2 from agents. Automation is still zero. Later bars remain visibly projected.
                </p>
              </FadeIn>
            </div>
          </div>
          <FadeIn delay={160}>
            <CaseStudyFigure
              src="/images/case-studies/crystal-clear-water/measured-progress.png"
              width={1841}
              height={1164}
              alt="Stacked bar chart and evidence table separating recorded hours recovered from projected consolidation, agent, and automation capacity."
              label="Figure 02 · Measured progress"
              caption="The dotted 74.3-hour line is the modelled opportunity. The visible future months and automation contribution are projections, not published production outcomes."
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-ink text-bone py-20 md:py-32 border-b border-bone/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-cobalt-light mb-4">[ GOVERNANCE ]</p>
                <h2 className="text-4xl md:text-6xl font-semibold leading-none text-balance">
                  Decisions, risks, and exceptions stay in the record.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <FadeIn delay={100}>
                <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  The team can see where client input is blocking scope, where measurement is incomplete, and which imperfect records were accepted with a named decision.
                </p>
              </FadeIn>
            </div>
          </div>
          <FadeIn delay={160}>
            <CaseStudyFigure
              src="/images/case-studies/crystal-clear-water/decisions-risks.png"
              width={1852}
              height={1044}
              alt="Delivery dashboard showing open decisions, carried risks, and accepted data exceptions with owners and dates."
              label="Figure 03 · Decisions and risks"
              caption="The record explicitly says report drafting had no measured baseline, so no improvement claim is made for that workstream until instrumentation produces a comparison."
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-paper text-ink py-20 md:py-32 border-b border-ink/10">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-4">[ EVIDENCE BOUNDARY ]</p>
            <h2 className="text-4xl md:text-7xl font-semibold leading-none max-w-4xl mb-14 md:mb-20 text-balance">
              Useful proof says where it stops.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-ink/15">
            {evidenceBoundaries.map((group, index) => (
              <FadeIn key={group.title} delay={80 + index * 90} className="border-r border-b border-ink/15 p-6 md:p-9">
                <p className={`font-mono text-[10px] uppercase mb-6 ${group.toneClass}`}>
                  {group.label}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-7">{group.title}</h3>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <span className={group.toneClass} aria-hidden="true">
                        {group.symbol}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobalt text-bone py-20 md:py-28">
        <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-70 mb-4">[ BUILD YOUR OWN RECORD ]</p>
            <h2 className="text-4xl md:text-7xl font-semibold leading-none max-w-4xl text-balance">
              Start with a workflow whose progress you can inspect.
            </h2>
          </FadeIn>
          <FadeIn delay={140}>
            <Link
              href="/book-audit"
              className="inline-flex items-center gap-3 bg-bone text-ink px-6 py-4 font-bold text-xs uppercase tracking-widest hover:bg-ink hover:text-bone transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
            >
              Scope a measurable pilot <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
