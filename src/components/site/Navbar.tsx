import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
          ? "bg-background/90 backdrop-blur-lg border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-wide text-foreground transition-colors group-hover:text-gold md:text-3xl">
            Ayrton Pedrosa
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.4em] text-gold/80">
            Advocacia Estratégica
          </span>
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs font-medium uppercase tracking-[0.2em] text-foreground/85 transition-colors hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground lg:hidden"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mt-4 flex flex-col gap-1 border-t border-border bg-background/95 px-6 py-6 backdrop-blur-lg lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-xs uppercase tracking-[0.2em] text-foreground/85 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
