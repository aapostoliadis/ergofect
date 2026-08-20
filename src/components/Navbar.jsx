import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (router.pathname === "/about") {
      setActiveLink("/about");
      return;
    }

    if (router.pathname === "/services") {
      setActiveLink("/services");
      return;
    }

    if (router.pathname === "/process") {
      setActiveLink("/process");
      return;
    }

    if (router.pathname === "/contact") {
      setActiveLink("/contact");
      return;
    }

    const sectionMap = {
      home: "/",
      services: "/#services",
      how: "/#how",
      contact: "/#contact",
    };

    const observers = [];

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveLink(sectionMap[id]);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [router.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      window.lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const navClass = scrolled
    ? "bg-bone/95 backdrop-blur-md border-b border-ink/10 text-ink"
    : "bg-transparent mix-blend-difference text-bone";

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 md:py-6 ${navClass}`}
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center w-1/2 md:w-1/3">
            <Link href="/" className="text-2xl md:text-3xl font-semibold tracking-[-0.045em] relative z-50">
              Ergsum<span className="text-cobalt">.</span>
            </Link>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center text-[10px] tracking-widest uppercase font-mono opacity-70 w-1/3 text-center">
            <span>AI Automation Specialists</span>
          </div>
          <div className="flex justify-end w-1/2 md:w-1/3 relative z-50">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity uppercase text-sm font-bold tracking-widest"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        data-lenis-prevent
        className={`fixed inset-0 z-40 bg-bone text-ink transition-transform duration-700 ease-in-out overflow-y-auto ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container min-h-full flex flex-col md:flex-row pt-28 pb-12">
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`menu-link text-5xl sm:text-6xl md:text-8xl font-semibold tracking-[-0.045em] transition-all hover:translate-x-4 transform duration-300 w-fit mb-4 md:mb-2 ${
                  activeLink === link.href
                    ? "bg-ink text-bone px-3 md:px-4"
                    : "hover:bg-ink hover:text-bone hover:px-3 md:hover:px-4"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-end md:justify-center mt-12 md:mt-0 font-mono text-sm uppercase">
            <div className="mb-8">
              <p className="opacity-50 mb-2 tracking-[0.14em]">[ Contact us ]</p>
              <a
                href="mailto:hello@ergsum.ai"
                className="text-cobalt border-b border-cobalt/35 pb-1 text-xl font-medium inline-block hover:text-ink hover:border-ink/50 transition-colors normal-case"
              >
                hello@ergsum.ai
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="opacity-50 mb-2 tracking-[0.14em]">[ Socials ]</p>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-cobalt">1.0 X / Twitter</a></li>
                  <li><a href="#" className="hover:text-cobalt">1.1 LinkedIn</a></li>
                  <li><a href="#" className="hover:text-cobalt">1.2 Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
