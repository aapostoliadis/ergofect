import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    question: "Do you require long-term contracts?",
    answer: "The initial pilot is defined in a fixed proposal with clear scope, acceptance criteria, and commercial terms. Any ongoing support or expansion is priced and agreed separately.",
    delay: 0,
  },
  {
    question: "Can we make changes to the automated workflows ourselves?",
    answer: "We identify which rules, templates, and controls your team should manage during pilot design. Changes that affect integrations, security, or the agreed workflow are handled through a scoped change request.",
    delay: 100,
  },
  {
    question: "How involved do we need to be during implementation?",
    answer: "We need a workflow owner, access to representative examples, and regular review points. Your team helps define the rules and exceptions; we handle the mapping, build, testing, and release work.",
    delay: 200,
  },
  {
    question: "Do you work with companies outside the US?",
    answer: "Yes. Ergofect is based in Europe and works with UK, European, and international teams when the data, regulatory, and time-zone requirements fit the engagement.",
    delay: 300,
  },
  {
    question: "What happens if the automation breaks?",
    answer: "The pilot defines monitoring, alerts, a safe fallback, and a named workflow owner before release. Response commitments for ongoing support are documented separately, so your team knows exactly what happens when an exception occurs.",
    delay: 400,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="py-20 md:py-32 bg-bone">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <FadeIn>
              <h2 className="text-4xl md:text-7xl font-semibold tracking-[0em] leading-none mb-4 md:mb-6">
                Frequently <br /> Asked Questions
              </h2>
              <p className="opacity-60 text-sm md:text-base">
                Didn&apos;t find the answer you were looking for? Contact our team.
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-7">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={faq.delay}>
                <div className="border-b border-ink/10">
                  <div
                    className="py-4 md:py-6 cursor-pointer flex justify-between items-center gap-4"
                    onClick={() => toggle(i)}
                  >
                    <h4 className="text-lg md:text-xl font-bold">{faq.question}</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transform transition-transform duration-300 opacity-50 shrink-0 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: openIndex === i ? "200px" : "0px",
                      opacity: openIndex === i ? 1 : 0,
                    }}
                  >
                    <p className="pb-4 md:pb-6 text-sm md:text-base opacity-70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
