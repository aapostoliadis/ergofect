import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    question: "Do you require long-term contracts?",
    answer: "No, we don't require long-term contracts. All our plans are month-to-month with the flexibility to scale up or down as your needs change. We believe in earning your business every month through results, not lock-ins.",
    delay: 0,
  },
  {
    question: "Can we make changes to the automated workflows ourselves?",
    answer: "Absolutely. Every automation we build comes with an intuitive dashboard that lets your team tweak rules, update templates, and adjust triggers without any coding. For deeper changes, our support team is always available.",
    delay: 100,
  },
  {
    question: "How involved do we need to be during implementation?",
    answer: "We keep your involvement minimal. Typically, we need a few hours in Week 1 for the process audit and periodic check-ins during build phase. Your team won't need to stop their daily work - we handle the heavy lifting.",
    delay: 200,
  },
  {
    question: "Do you work with companies outside the US?",
    answer: "Yes, we work with companies worldwide. Our team operates across multiple time zones, and our AI solutions are designed to support multi-language and multi-region deployments out of the box.",
    delay: 300,
  },
  {
    question: "What happens if the automation breaks?",
    answer: "Every automation includes built-in monitoring and alerts. If something fails, our system automatically flags the issue and falls back to a safe state. Our engineering team is notified instantly and typically resolves issues within minutes, not hours.",
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
