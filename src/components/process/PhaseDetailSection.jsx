import FadeIn from "@/components/FadeIn";
import { pilotPhases } from "@/data/pilot";

const phaseDetails = {
  map: {
    activities: [
      "Walk the selected workflow end-to-end with the person who owns it",
      "Mark every handoff between people, tools, and systems",
      "Flag duplicate data entry - the same fact typed twice",
      "Time the manual work to size the real opportunity",
      "Record volume, handling time, errors, exceptions, and review effort",
      "Choose the smallest workflow with a meaningful production outcome",
    ],
    deliverable: "Current-state map, measured baseline, pilot scope, and owner",
  },
  design: {
    activities: [
      "Define the minimum records, fields, and relationships the pilot needs",
      "Name the source system for every fact used in the workflow",
      "Document permissions, retention, and sensitive-data boundaries",
      "Design human review, exception queues, and a safe fallback",
      "Agree acceptance criteria and the production measurement window",
      "Confirm which existing systems stay unchanged",
    ],
    deliverable: "Approved pilot design, controls, acceptance criteria, and test set",
  },
  build: {
    activities: [
      "Connect only the systems and data required by the pilot",
      "Keep the current workflow available while output is compared",
      "Test normal examples, edge cases, failures, and permission boundaries",
      "Move pilot data only where the agreed architecture requires it",
      "Give reviewers a clear queue for approvals and corrections",
      "Reconcile output against the baseline before production release",
    ],
    deliverable: "Shadow-tested workflow, reconciled output, and go-live decision",
  },
  launch: {
    activities: [
      "Release the agreed workflow to its first production users",
      "Monitor exceptions, failures, response quality, and human overrides",
      "Keep a kill switch, fallback path, and named operational owner",
      "Train the people who review or correct the workflow",
      "Measure observed results against the recorded baseline",
      "Choose whether to optimize, expand, or stop after the review window",
    ],
    deliverable: "Initial production workflow, evidence report, and next-step decision",
  },
};

const phases = pilotPhases.map((phase) => ({
  ...phase,
  ...phaseDetails[phase.id],
}));

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
