import FadeIn from "@/components/FadeIn";

const industries = [
  { name: "SaaS & Technology", stat: "35%", statLabel: "of clients", delay: 0 },
  { name: "E-Commerce & Retail", stat: "20%", statLabel: "of clients", delay: 50 },
  { name: "Finance & Banking", stat: "15%", statLabel: "of clients", delay: 100 },
  { name: "Healthcare", stat: "10%", statLabel: "of clients", delay: 150 },
  { name: "Logistics & Supply Chain", stat: "8%", statLabel: "of clients", delay: 200 },
  { name: "Real Estate", stat: "5%", statLabel: "of clients", delay: 250 },
  { name: "Manufacturing", stat: "4%", statLabel: "of clients", delay: 300 },
  { name: "Education", stat: "3%", statLabel: "of clients", delay: 350 },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#111111] text-[#F3F3EF] py-20 md:py-32 border-t border-white/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 text-[#D6FF00]">
            [ INDUSTRIES ]
          </p>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12 md:mb-16 max-w-3xl">
            We Serve Companies{" "}
            <span className="text-[#D6FF00]">Across</span> Sectors.
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {industries.map((item, i) => (
            <FadeIn
              key={i}
              delay={item.delay}
              className="border-t border-white/10 py-4 md:py-6 flex justify-between items-center group hover:bg-[#1a1a1a] transition-colors md:px-4 md:-mx-4 cursor-pointer"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-2 h-2 bg-[#D6FF00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-lg md:text-2xl font-bold uppercase tracking-tighter group-hover:text-[#D6FF00] transition-colors">
                  {item.name}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-xl md:text-2xl font-black">{item.stat}</p>
                <p className="font-mono text-[8px] md:text-[10px] uppercase opacity-40">
                  {item.statLabel}
                </p>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  );
}
