import FadeIn from "@/components/FadeIn";

const phases = [
  {
    number: "01",
    title: "Map & Consolidate",
    week: "Week 1",
    activities: [
      "Walk every workflow end-to-end with the person who owns it",
      "Mark every handoff between people, tools, and systems",
      "Flag duplicate data entry - the same fact typed twice",
      "Time the manual work to size the real opportunity",
      "Pull your true tool stack from billing, not memory",
      "Classify every tool: absorb, keep, or kill",
    ],
    deliverable: "Workflow map, automation backlog, and target tool stack",
  },
  {
    number: "02",
    title: "Data Model",
    week: "Week 2-3",
    activities: [
      "Define entity groups - commercial, delivery, finance, people, knowledge",
      "Model relationships so every record connects to something",
      "Design for 2x current scale, not a hypothetical 50x",
      "Set standard conventions: source system, source ID, status events",
      "Write the schema - clients, projects, documents, constraints",
      "Confirm one canonical home for every fact in the business",
    ],
    deliverable: "Reviewed schema and data architecture ready to build against",
  },
  {
    number: "03",
    title: "Build & Migrate",
    week: "Week 4-5",
    activities: [
      "Migrate highest manual-hour departments first",
      "Rebuild views your team already knows - familiar on day one",
      "Run idempotent, re-runnable migrations with reconciliation checks",
      "Run old and new tools in parallel, old tool read-only",
      "Train each department as its data goes live",
      "Automate nothing yet - the model has to hold first",
    ],
    deliverable: "Live core system, fully migrated, adoption tracked department by department",
  },
  {
    number: "04",
    title: "Agents & Automation",
    week: "Week 6+",
    activities: [
      "Layer in agents in order: document intake, generation, answers, routing",
      "Route each request across model tiers to cut AI spend without losing accuracy",
      "Ship background automations in waves, shadow-tested before going live",
      "Give every automation a kill switch and an owner",
      "Report hours reclaimed against baseline, fortnightly",
      "Run continuous optimization sprints for 90 days post-launch",
    ],
    deliverable: "Live agents and automations with monitoring, kill switches, and a review cadence",
  },
];

export default function PhaseDetailSection() {
  return (
    <section className="bg-ink text-bone py-20 md:py-32">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-cobalt-light">
            [ PHASE BY PHASE ]
          </p>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-[0em] leading-none mb-16 md:mb-20 max-w-4xl">
            Every Step, <span className="text-cobalt-light">Explained</span>.
          </h2>
        </FadeIn>

        <div className="space-y-6 md:space-y-8">
          {phases.map((phase, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="border border-bone/10 grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-4 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-bone/10">
                  <p className="text-cobalt-light bg-cobalt-light/10 inline-block px-2 py-1 font-mono text-xs font-bold mb-4">
                    Phase {phase.number}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-[0em] mb-2">
                    {phase.title}
                  </h3>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cobalt-light rounded-full"></span>
                    {phase.week}
                  </p>
                </div>
                <div className="lg:col-span-5 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-bone/10">
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
