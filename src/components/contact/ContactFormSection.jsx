import FadeIn from "@/components/FadeIn";

const spendOptions = ["Under $10k", "$10k-$50k", "$50k-$100k", "$100k+"];
const serviceOptions = [
  "Customer Support Automation",
  "Data Processing",
  "Workflow Automation",
  "Document Intelligence",
  "Sales & Marketing",
  "Custom AI Solution",
];

export default function ContactFormSection() {
  return (
    <section className="bg-bone py-20 md:py-32 border-b border-black/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-none mb-6 md:mb-8">
                Request Your Free{" "}
                <span className="bg-ink text-bone px-2 inline-block">
                  Audit
                </span>
                .
              </h2>
              <p className="text-sm md:text-base opacity-70 leading-relaxed mb-8 max-w-md">
                Fill out the form and we&apos;ll get back to you within 24 hours
                with a preliminary analysis of your automation opportunities.
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/avatars/felix.webp"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs md:text-sm">
                    John Doe
                  </p>
                  <p className="font-mono text-[10px] md:text-xs opacity-50 uppercase">
                    Founder &amp; CEO - Reviews Every Audit
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={200}>
              <form className="space-y-6 md:space-y-8 font-mono text-[10px] md:text-sm uppercase">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block mb-2 opacity-50">Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-cobalt focus:ring-cobalt/20 transition-colors rounded-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 opacity-50">Email</label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-cobalt focus:ring-cobalt/20 transition-colors rounded-none"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block mb-2 opacity-50">Company</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-cobalt focus:ring-cobalt/20 transition-colors rounded-none"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 opacity-50">Role</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-cobalt focus:ring-cobalt/20 transition-colors rounded-none"
                      placeholder="Your Role"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-4 opacity-50">
                    Service Interested In
                  </label>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {serviceOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer border border-black/20 px-3 py-2 hover:border-black transition-colors"
                      >
                        <input type="checkbox" className="hidden" />
                        <span className="w-3 h-3 border border-black/40 block shrink-0"></span>
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-4 opacity-50">
                    Monthly Operational Spend
                  </label>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {spendOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer border border-black/20 px-3 md:px-4 py-2 hover:border-black transition-colors"
                      >
                        <input type="radio" name="spend" className="hidden" />
                        <span className="w-3 h-3 border border-black/40 rounded-full block shrink-0"></span>
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 opacity-50">
                    Tell Us About Your Challenge
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-black/20 pb-2 focus:outline-none focus:border-cobalt focus:ring-cobalt/20 transition-colors rounded-none resize-none"
                    placeholder="Describe the workflows you'd like to automate..."
                  />
                </div>

                <button
                  type="button"
                  className="bg-ink text-bone w-full py-4 font-bold text-base md:text-lg hover:bg-cobalt transition-colors"
                >
                  Request Free Audit
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
