import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone pb-8 md:pb-12 overflow-hidden">
      <div className="container">
        <div className="border-t border-white/10 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
          <Link href="/">
            <h1 className="text-[25vw] md:text-[8vw] lg:text-[12vw] xl:text-[15vw] font-semibold tracking-[-0.045em] leading-none opacity-20 hover:opacity-40 transition-opacity">
              Ergofect<span className="text-cobalt-light">.</span>
            </h1>
          </Link>

          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-20 font-mono text-[10px] md:text-xs uppercase mb-4 w-full md:w-auto">
            <div>
              <p className="opacity-50 mb-4 tracking-[0.14em]">[ Navigation ]</p>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-cobalt-light">Home</Link></li>
                <li><Link href="/about" className="hover:text-cobalt-light">About Us</Link></li>
                <li><Link href="/services" className="hover:text-cobalt-light">Services</Link></li>
                <li><Link href="/process" className="hover:text-cobalt-light">Process</Link></li>
                <li><Link href="/roi-calculator" className="hover:text-cobalt-light">ROI Calculator</Link></li>
                <li><Link href="/contact" className="hover:text-cobalt-light">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="opacity-50 mb-4 tracking-[0.14em]">[ Legal ]</p>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:text-cobalt-light">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-cobalt-light">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <p className="opacity-50 mb-4 tracking-[0.14em]">[ Socials ]</p>
              <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/company/ergofect" className="hover:text-cobalt-light">LinkedIn</a></li>
                <li><a href="https://x.com/ergofect" className="hover:text-cobalt-light">Twitter</a></li>
                <li><a href="https://www.youtube.com/@ergofect" className="hover:text-cobalt-light">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center sm:text-left justify-center sm:flex-row sm:justify-between items-start sm:items-center font-mono text-[8px] md:text-[10px] uppercase opacity-40 mt-8 gap-2">
          <p className="w-full sm:w-auto">© 2026 Ergofect, All Rights Reserved.</p>
          <p className="w-full sm:w-auto">Designed for Scale.</p>
        </div>
      </div>
    </footer>
  );
}
