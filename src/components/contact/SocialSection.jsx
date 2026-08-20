import FadeIn from "@/components/FadeIn";

const socials = [
  {
    name: "LinkedIn",
    handle: "@ergsum-ai",
    href: "#",
    desc: "Company updates, case studies, and team insights.",
  },
  {
    name: "Twitter / X",
    handle: "@ergsum_ai",
    href: "#",
    desc: "Hot takes on AI automation and behind-the-scenes content.",
  },
  {
    name: "GitHub",
    handle: "@ergsum-ai",
    href: "#",
    desc: "Open-source tools and automation templates.",
  },
  {
    name: "YouTube",
    handle: "@ErgsumAI",
    href: "#",
    desc: "Tutorials, demos, and automation deep-dives.",
  },
];

export default function SocialSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F3F3EF]">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
            [ FOLLOW US ]
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12 md:mb-16">
            Stay Connected.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {socials.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <a
                href={item.href}
                className="border border-black/10 p-6 md:p-8 flex flex-col group hover:bg-black hover:text-[#F3F3EF] transition-colors duration-500"
              >
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-1 group-hover:text-[#D6FF00] transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="font-mono text-[10px] md:text-xs uppercase opacity-50 mb-4">
                  {item.handle}
                </p>
                <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed mt-auto transition-opacity">
                  {item.desc}
                </p>
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
                  className="mt-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                >
                  <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                </svg>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
