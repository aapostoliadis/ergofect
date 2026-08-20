import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    question: "What happens after I submit the form?",
    answer: "Our founder personally reviews every submission within 24 hours. You'll receive a preliminary assessment of your automation opportunities along with a proposed next step.",
  },
  {
    question: "How much does a typical automation project cost?",
    answer: "Projects range from $5k for simple workflow automations to $100k+ for enterprise-wide transformations. We'll provide a detailed quote after the initial audit.",
  },
  {
    question: "Do I need to commit before the audit?",
    answer: "No. The initial automation audit is completely free with no commitment required. We believe in proving value before asking for trust.",
  },
  {
    question: "How long does the initial audit take?",
    answer: "The audit takes 3-5 business days. We map your workflows, interview key stakeholders, and deliver a detailed report with ROI projections.",
  },
  {
    question: "Can you work with our existing tools?",
    answer: "Absolutely. We integrate with 50+ platforms including Salesforce, HubSpot, Zendesk, Slack, and custom APIs. No rip-and-replace required.",
  },
];

export default function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="bg-ink text-bone py-20 md:py-32 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          <div>
            <FadeIn>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.14em] mb-4 text-cobalt-light">
                [ FAQ ]
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[0em] leading-none">
                Common Questions.
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="border-t border-white/10">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full py-5 md:py-6 flex justify-between items-center text-left group"
                  >
                    <h3 className="text-sm md:text-base font-bold uppercase tracking-wider pr-4 group-hover:text-cobalt-light transition-colors">
                      {faq.question}
                    </h3>
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
                      className={`shrink-0 transition-transform duration-300 ${
                        openIndex === i ? "rotate-45 text-cobalt-light" : ""
                      }`}
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: openIndex === i ? "200px" : "0px",
                      opacity: openIndex === i ? 1 : 0,
                    }}
                  >
                    <p className="text-sm opacity-60 leading-relaxed pb-5 md:pb-6 max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
