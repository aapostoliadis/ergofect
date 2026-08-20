import { useState, useEffect, useRef } from "react";
import FadeIn from "@/components/FadeIn";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#D6FF00] shrink-0"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const tiers = [
  {
    name: "Quick Win",
    desc: "Perfect for small teams automating a single workflow.",
    monthlyPrice: 499,
    annualPrice: 399,
    popular: false,
    features: [
      "1 Workflow Automation",
      "Up to 3 Integrations",
      "2-Week Implementation Guarantee",
    ],
    btnLabel: "Get Started",
    delay: 200,
  },
  {
    name: "Scale",
    desc: "For companies ready to automate multiple processes.",
    monthlyPrice: 2500,
    annualPrice: 2000,
    popular: true,
    features: [
      "Up to 5 Automations",
      "Unlimited Integrations",
      "Advanced Analytics & Reporting",
      "Priority Email Support",
    ],
    btnLabel: "Get Started",
    delay: 300,
  },
  {
    name: "Full Stack",
    desc: "Comprehensive automation strategy for large organizations.",
    monthlyPrice: 6750,
    annualPrice: 5400,
    popular: false,
    features: [
      "Unlimited Automations",
      "Dedicated Automation Strategist",
      "Weekly Audit & Optimization",
      "SLA Response Time",
    ],
    btnLabel: "Contact Sales",
    delay: 400,
  },
];

function AnimatedPrice({ value, popular }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);
  const frameRef = useRef(null);

  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    if (from === to) return;

    const duration = 600;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (to - from) * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        prevRef.current = to;
      }
    }

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value]);

  return (
    <span className={`text-4xl md:text-5xl font-black transition-colors duration-300 ${popular ? "text-[#D6FF00]" : ""}`}>
      ${display.toLocaleString()}
    </span>
  );
}

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-[#111111] text-[#F3F3EF] py-20 md:py-32 border-t border-white/10">
      <div className="container text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-12">
            Flexible Pricing <br /> For Any Scale.
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20 font-mono text-[10px] md:text-sm uppercase">
            <span className={`transition-opacity duration-300 ${isAnnual ? "opacity-50" : "opacity-100"}`}>
              Monthly
            </span>
            <div
              className="w-16 h-8 bg-white/10 rounded-full p-1 cursor-pointer"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div
                className={`w-6 h-6 bg-[#D6FF00] rounded-full transition-transform duration-300 ease-in-out ${
                  isAnnual ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </div>
            <span className={`transition-opacity duration-300 ${isAnnual ? "opacity-100" : "opacity-50"}`}>
              Annual <span className="text-[#D6FF00] ml-2 font-bold">Save 20%</span>
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {tiers.map((tier, i) => (
            <FadeIn
              key={i}
              delay={tier.delay}
              className={`p-6 md:p-8 flex flex-col ${
                tier.popular
                  ? "bg-[#1a1a1a] border border-[#D6FF00] relative transform md:-translate-y-4 shadow-2xl shadow-[#D6FF00]/5 mt-4 md:mt-0"
                  : "border border-white/10 hover:border-white/30 transition-colors mt-4 md:mt-0"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-[#D6FF00] text-black text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-widest">
                  Popular
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-2">{tier.name}</h3>
              <p className="font-mono text-[10px] md:text-xs opacity-50 h-auto md:h-10 mb-4 md:mb-0">
                {tier.desc}
              </p>
              <div className="my-6 md:my-8">
                <AnimatedPrice
                  value={isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  popular={tier.popular}
                />
                <span className="opacity-50 text-xs md:text-sm">/mo</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 flex-1 font-mono text-[10px] md:text-xs uppercase opacity-80">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckIcon /> {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 md:py-4 uppercase font-bold text-xs md:text-sm transition-colors ${
                  tier.popular
                    ? "bg-[#D6FF00] text-black hover:bg-white"
                    : "border border-white/20 hover:bg-white hover:text-black"
                }`}
              >
                {tier.btnLabel}
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
