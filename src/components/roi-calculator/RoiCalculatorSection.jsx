import { useState, useMemo } from "react";
import FadeIn from "@/components/FadeIn";

const sliders = [
  {
    key: "hoursPerWeek",
    label: "Manual hours removed / week",
    min: 0,
    max: 200,
    step: 5,
    default: 60,
    format: (v) => `${v} hrs`,
  },
  {
    key: "loadedCost",
    label: "Loaded cost per hour",
    min: 15,
    max: 150,
    step: 5,
    default: 55,
    format: (v) => money(v),
  },
  {
    key: "softwareSpend",
    label: "Monthly SaaS spend on absorbed/killed tools",
    min: 0,
    max: 10000,
    step: 100,
    default: 2200,
    format: (v) => money(v),
  },
  {
    key: "aiSpend",
    label: "Monthly AI spend, pre-routing",
    min: 0,
    max: 10000,
    step: 100,
    default: 1500,
    format: (v) => money(v),
  },
  {
    key: "buildInvestment",
    label: "One-off build investment",
    min: 10000,
    max: 250000,
    step: 5000,
    default: 25000,
    format: (v) => money(v),
  },
  {
    key: "runCost",
    label: "Ongoing monthly delivery & support cost",
    min: 0,
    max: 20000,
    step: 500,
    default: 10000,
    format: (v) => money(v),
  },
];

function money(v) {
  return `$${Math.round(v).toLocaleString("en-US")}`;
}

export default function RoiCalculatorSection() {
  const [inputs, setInputs] = useState(
    Object.fromEntries(sliders.map((s) => [s.key, s.default]))
  );

  const results = useMemo(() => {
    const annualHoursRecovered = inputs.hoursPerWeek * 52;
    const valueOfRecoveredHours = annualHoursRecovered * inputs.loadedCost;
    const softwareSpendRemoved = inputs.softwareSpend * 12;
    const aiSpendAvoided = inputs.aiSpend * 12 * 0.8;
    const grossAnnualReturn =
      valueOfRecoveredHours + softwareSpendRemoved + aiSpendAvoided;
    const annualRunCost = inputs.runCost * 12;
    const netAnnualReturn = grossAnnualReturn - annualRunCost;
    const paybackMonths =
      netAnnualReturn > 0
        ? inputs.buildInvestment / (netAnnualReturn / 12)
        : null;
    const threeYearNet = netAnnualReturn * 3 - inputs.buildInvestment;

    return {
      annualHoursRecovered,
      valueOfRecoveredHours,
      softwareSpendRemoved,
      aiSpendAvoided,
      grossAnnualReturn,
      annualRunCost,
      netAnnualReturn,
      paybackMonths,
      threeYearNet,
    };
  }, [inputs]);

  return (
    <section className="bg-bone text-ink py-20 md:py-32 border-b border-ink/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Inputs */}
          <div className="lg:col-span-6">
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-8 opacity-60">
                [ YOUR NUMBERS ]
              </p>
            </FadeIn>
            <div className="space-y-8 md:space-y-10">
              {sliders.map((s, i) => (
                <FadeIn key={s.key} delay={i * 60}>
                  <div>
                    <div className="flex items-baseline justify-between mb-3">
                      <label
                        htmlFor={s.key}
                        className="text-sm md:text-base font-medium"
                      >
                        {s.label}
                      </label>
                      <span className="font-mono text-sm md:text-base font-bold text-cobalt shrink-0 ml-4">
                        {s.format(inputs[s.key])}
                      </span>
                    </div>
                    <input
                      id={s.key}
                      type="range"
                      min={s.min}
                      max={s.max}
                      step={s.step}
                      value={inputs[s.key]}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          [s.key]: Number(e.target.value),
                        }))
                      }
                      className="w-full h-1.5 bg-ink/10 rounded-full appearance-none cursor-pointer accent-cobalt"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Outputs */}
          <div className="lg:col-span-6">
            <FadeIn delay={100}>
              <div className="bg-ink text-bone p-6 md:p-10 h-full">
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-8 text-cobalt-light">
                  [ THE RETURN ]
                </p>

                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div>
                    <p className="text-2xl md:text-3xl font-semibold tracking-[0em] text-cobalt-light">
                      {Math.round(results.annualHoursRecovered).toLocaleString("en-US")}
                    </p>
                    <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                      Hours Recovered / Year
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-semibold tracking-[0em] text-cobalt-light">
                      {money(results.grossAnnualReturn)}
                    </p>
                    <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                      Gross Annual Return
                    </p>
                  </div>
                </div>

                <div className="border-t border-bone/10 pt-6 space-y-4 mb-8 md:mb-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="opacity-60">Value of recovered hours</span>
                    <span className="font-mono">{money(results.valueOfRecoveredHours)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="opacity-60">Software spend removed</span>
                    <span className="font-mono">{money(results.softwareSpendRemoved)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="opacity-60">AI spend avoided via routing</span>
                    <span className="font-mono">{money(results.aiSpendAvoided)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="opacity-60">Annual run &amp; support cost</span>
                    <span className="font-mono">-{money(results.annualRunCost)}</span>
                  </div>
                </div>

                <div className="border-t border-bone/10 pt-6 flex items-end justify-between">
                  <div>
                    <p className="text-3xl md:text-4xl font-semibold tracking-[0em]">
                      {money(results.netAnnualReturn)}
                    </p>
                    <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                      Net Annual Return
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl md:text-2xl font-semibold tracking-[0em]">
                      {results.paybackMonths
                        ? `${results.paybackMonths.toFixed(1)} mo`
                        : "-"}
                    </p>
                    <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mt-1">
                      Payback Period
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-8 pt-6 border-t border-bone/10 text-center py-3 font-mono text-xs uppercase tracking-widest ${
                    results.threeYearNet >= 0
                      ? "text-positive"
                      : "text-negative"
                  }`}
                >
                  3-Year Net Position: {money(results.threeYearNet)}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
