import FadeIn from "@/components/FadeIn";

const contactMethods = [
  {
    label: "Email",
    value: "hello@kairo.ai",
    href: "mailto:hello@kairo.ai",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+1 (555) 000-1234",
    href: "tel:+15550001234",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "New York, NY",
    href: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactInfoSection() {
  return (
    <section className="bg-[#111111] text-[#F3F3EF] py-20 md:py-32">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-[#D6FF00]">
            [ CONTACT DETAILS ]
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12 md:mb-16 max-w-3xl">
            Or Reach Us <span className="text-[#D6FF00]">Directly</span>.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {contactMethods.map((method, i) => (
            <FadeIn key={i} delay={i * 100}>
              {method.href ? (
                <a
                  href={method.href}
                  className="border border-white/10 p-6 md:p-8 flex flex-col group hover:border-[#D6FF00]/30 transition-colors"
                >
                  <div className="text-[#D6FF00] mb-4">{method.icon}</div>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-2">
                    {method.label}
                  </p>
                  <p className="text-lg md:text-xl font-bold uppercase tracking-wider group-hover:text-[#D6FF00] transition-colors">
                    {method.value}
                  </p>
                </a>
              ) : (
                <div className="border border-white/10 p-6 md:p-8 flex flex-col">
                  <div className="text-[#D6FF00] mb-4">{method.icon}</div>
                  <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-2">
                    {method.label}
                  </p>
                  <p className="text-lg md:text-xl font-bold uppercase tracking-wider">
                    {method.value}
                  </p>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
