import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logoayrton.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "O Escritório" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#blog", label: "Blog" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-velvet/95 backdrop-blur-lg py-3 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-3 leading-none">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold tracking-wide text-white transition-colors group-hover:text-gold md:text-3xl">
              Ayrton Pedrosa
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.4em] text-gold">
              Advocacia Estratégica
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs font-medium uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mt-4 flex flex-col gap-1 border-t border-white/10 bg-velvet px-6 py-6 backdrop-blur-lg lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-xs uppercase tracking-[0.2em] text-white/90 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
