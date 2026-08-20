import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F3F3EF] pb-8 md:pb-12 overflow-hidden">
      <div className="container">
        <div className="border-t border-white/10 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
          <Link href="/">
            <h1 className="text-[25vw] md:text-[8vw] lg:text-[12vw] xl:text-[15vw] font-black uppercase tracking-tighter leading-none opacity-20 hover:opacity-40 transition-opacity">
              KAIRO®
            </h1>
          </Link>

          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-20 font-mono text-[10px] md:text-xs uppercase mb-4 w-full md:w-auto">
            <div>
              <p className="opacity-50 mb-4">[ Navigation ]</p>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[#D6FF00]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#D6FF00]">About Us</Link></li>
                <li><Link href="/services" className="hover:text-[#D6FF00]">Services</Link></li>
                <li><Link href="/case-studies" className="hover:text-[#D6FF00]">Case Studies</Link></li>
                <li><Link href="/process" className="hover:text-[#D6FF00]">Process</Link></li>
                <li><Link href="/contact" className="hover:text-[#D6FF00]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="opacity-50 mb-4">[ Legal ]</p>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:text-[#D6FF00]">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-[#D6FF00]">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <p className="opacity-50 mb-4">[ Socials ]</p>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#D6FF00]">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#D6FF00]">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center sm:text-left justify-center sm:flex-row sm:justify-between items-start sm:items-center font-mono text-[8px] md:text-[10px] uppercase opacity-40 mt-8 gap-2">
          <p className="w-full sm:w-auto">© 2026 KAIRO AI, Inc. All Rights Reserved.</p>
          <p className="w-full sm:w-auto">Designed for Scale.</p>
        </div>
      </div>
    </footer>
  );
}
