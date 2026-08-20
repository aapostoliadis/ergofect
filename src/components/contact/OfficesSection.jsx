import FadeIn from "@/components/FadeIn";

const offices = [
  {
    city: "New York",
    type: "Headquarters",
    address: "350 Fifth Avenue, Suite 4800\nNew York, NY 10118",
    timezone: "EST (UTC-5)",
  },
  {
    city: "London",
    type: "Europe Office",
    address: "1 Canada Square, Level 39\nCanary Wharf, London E14 5AB",
    timezone: "GMT (UTC+0)",
  },
  {
    city: "Singapore",
    type: "Asia-Pacific Office",
    address: "1 Raffles Place, Tower 2\nSingapore 048616",
    timezone: "SGT (UTC+8)",
  },
];

export default function OfficesSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F3F3EF] border-b border-black/10">
      <div className="container">
        <FadeIn>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 opacity-60">
            [ OUR OFFICES ]
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12 md:mb-16">
            Global Presence.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {offices.map((office, i) => (
            <FadeIn
              key={i}
              delay={i * 100}
              className="border border-black/10 p-6 md:p-8 group hover:bg-black hover:text-[#F3F3EF] transition-colors duration-500"
            >
              <p className="text-[#D6FF00] bg-black group-hover:bg-[#D6FF00] group-hover:text-black inline-block px-2 py-1 font-mono text-[10px] md:text-xs font-bold uppercase mb-4 transition-colors duration-500">
                {office.type}
              </p>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
                {office.city}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed whitespace-pre-line mb-4">
                {office.address}
              </p>
              <p className="font-mono text-[10px] md:text-xs uppercase opacity-40">
                {office.timezone}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
