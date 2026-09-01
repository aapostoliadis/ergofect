import Head from "next/head";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const evidenceGates = [
  {
    number: "01",
    title: "Baseline recorded",
    desc: "The original process, volume, effort, errors, and measurement method are documented before the change.",
  },
  {
    number: "02",
    title: "Scope identified",
    desc: "The case names the workflow, systems, exceptions, human decisions, and what remained outside the project.",
  },
  {
    number: "03",
    title: "Production observed",
    desc: "Results come from an agreed live measurement window, not a prototype, projection, or best-case test.",
  },
  {
    number: "04",
    title: "Client approved",
    desc: "The client approves the wording, attribution, and any result published under its name or description.",
  },
];

const caseAnatomy = [
  "Business context and workflow owner",
  "Before-state map and baseline",
  "Systems, data, and constraints",
  "Pilot scope and acceptance criteria",
  "Observed result and measurement window",
  "Exceptions, trade-offs, and next step",
];

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Evidence & Case Studies | Ergofect.</title>
        <meta
          name="description"
          content="See how Ergofect verifies AI automation results and what evidence is required before a client outcome becomes a published case study."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-bone text-ink pt-32 pb-20 md:pt-40 md:pb-28 border-b border-ink/10">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-5 opacity-60">
              [ EVIDENCE & CASE STUDIES ]
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="lg:col-span-8">
              <FadeIn delay={100}>
                <h1 className="text-6xl md:text-[9vw] lg:text-[7vw] leading-[0.86] font-semibold text-balance">
                  Proof before <span className="bg-ink text-bone px-3 inline-block">promises.</span>
                </h1>
              </FadeIn>
            </div>
            <div className="lg:col-span-4">
              <FadeIn delay={180}>
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  We publish a client result only when the baseline, scope, live measurement window, and permission are documented.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone py-20 md:py-32 border-b border-bone/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <div className="lg:col-span-4">
              <FadeIn>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 text-cobalt-light">[ PUBLICATION STATUS ]</p>
                <h2 className="text-4xl md:text-6xl font-semibold leading-none text-balance">
                  No fictional client stories. No anonymous numbers without context.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-8 lg:pt-8">
              <FadeIn delay={100}>
                <div className="border border-bone/15 p-6 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 font-mono text-[9rem] md:text-[13rem] leading-none opacity-[0.035] select-none" aria-hidden="true">01</div>
                  <p className="font-mono text-xs uppercase text-cobalt-light mb-5">Verified public case study</p>
                  <p className="text-2xl md:text-4xl font-semibold leading-tight max-w-3xl mb-6">
                    Awaiting an approved client record that passes all four evidence gates.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed opacity-65 max-w-2xl">
                    Until then, Ergofect will show how results are measured and share approved private references during qualification where agreements allow. This page will not manufacture social proof to fill the space.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone text-ink py-20 md:py-32 border-b border-ink/10">
        <div className="container">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">[ THE EVIDENCE GATES ]</p>
            <h2 className="text-4xl md:text-7xl font-semibold leading-none mb-14 md:mb-20 max-w-4xl text-balance">
              What every published result must show.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-ink/15">
            {evidenceGates.map((gate, index) => (
              <FadeIn key={gate.number} delay={index * 80} className="border-r border-b border-ink/15 p-6 md:p-9 min-h-56 flex flex-col">
                <p className="font-mono text-xs text-cobalt mb-8">{gate.number}</p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{gate.title}</h3>
                <p className="text-sm md:text-base leading-relaxed opacity-65 mt-auto max-w-xl">{gate.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink py-20 md:py-32 border-b border-ink/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">[ WORKED BASELINE ]</p>
                <p className="inline-block bg-cobalt text-bone px-2 py-1 font-mono text-[10px] uppercase mb-5">Illustrative math—not a client result</p>
                <p className="text-6xl md:text-8xl font-semibold tabular-nums mb-5">$624k</p>
                <p className="text-base md:text-lg leading-relaxed opacity-70 max-w-md">
                  Forty people × five hours of manual work per week × a $60 loaded hourly cost × 52 weeks.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8 text-balance">
                  A case study replaces assumptions with observed values.
                </h2>
              </FadeIn>
              <div className="border-t border-ink/15">
                {caseAnatomy.map((item, index) => (
                  <FadeIn key={item} delay={160 + index * 45} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-ink/15 py-4 md:py-5">
                    <span className="font-mono text-[10px] opacity-40">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-medium">{item}</span>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={460} className="mt-8">
                <Link href="/roi-calculator" className="inline-flex items-center gap-3 border-b-2 border-ink pb-2 font-bold text-xs uppercase tracking-widest hover:gap-5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                  Test your own baseline <span aria-hidden="true">→</span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cobalt text-bone py-20 md:py-28">
        <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <FadeIn>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-70">[ CREATE THE FIRST RECORD ]</p>
            <h2 className="text-4xl md:text-7xl font-semibold leading-none max-w-4xl text-balance">
              Start with a workflow we can measure together.
            </h2>
          </FadeIn>
          <FadeIn delay={140}>
            <Link href="/book-audit" className="inline-flex items-center gap-3 bg-bone text-ink px-6 py-4 font-bold text-xs uppercase tracking-widest hover:bg-ink hover:text-bone transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone">
              Book the process audit <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
