import { useState } from "react";
import { useRouter } from "next/router";
import FadeIn from "@/components/FadeIn";

const spendOptions = ["Under $10k", "$10k-$50k", "$50k-$100k", "$100k+"];

export default function ContactSection() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit() {
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!company.trim()) nextErrors.company = "Please enter your company name.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    router.push("/book-audit");
  }

  return (
    <section id="contact" className="bg-ink text-bone pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <FadeIn>
              <h2 className="text-5xl md:text-8xl font-semibold tracking-[-0.04em] leading-none mb-6 md:mb-8">
                Ready to Automate{" "}
                <span className="text-cobalt-light">Your Biggest Bottleneck?</span>
              </h2>
              <p className="font-mono opacity-60 uppercase text-[10px] md:text-sm mb-8 md:mb-12 max-w-md">
                I personally review every automation audit to ensure we can
                deliver real value to your operations.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-full overflow-hidden shrink-0">
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
                    Founder &amp; CEO
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt-light transition-colors rounded-none ${
                        errors.name ? "border-negative" : "border-bone/20"
                      }`}
                      placeholder="Jane Doe"
                      required
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-2 normal-case tracking-normal text-negative">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 opacity-50">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt-light transition-colors rounded-none ${
                        errors.email ? "border-negative" : "border-bone/20"
                      }`}
                      placeholder="jane@company.com"
                      required
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-2 normal-case tracking-normal text-negative">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block mb-2 opacity-50">Company</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={`w-full bg-transparent border-b pb-2 focus:outline-none focus:border-cobalt-light transition-colors rounded-none ${
                      errors.company ? "border-negative" : "border-bone/20"
                    }`}
                    placeholder="Your Company Name"
                    required
                    aria-invalid={Boolean(errors.company)}
                  />
                  {errors.company && (
                    <p className="mt-2 normal-case tracking-normal text-negative">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-4 opacity-50">
                    Monthly Operational Spend
                  </label>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                    {spendOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer border border-bone/20 px-3 md:px-4 py-2 hover:border-cobalt-light transition-colors w-full sm:w-auto"
                      >
                        <input type="radio" name="spend" className="hidden" />
                        <span className="w-3 h-3 border border-bone rounded-full block shrink-0"></span>
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-cobalt-light text-ink w-full py-4 font-bold text-base md:text-lg hover:bg-bone transition-colors mt-6 md:mt-8 block text-center"
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
