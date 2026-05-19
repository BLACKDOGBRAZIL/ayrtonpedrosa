import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ChevronDown, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", to: "/" },
    { name: "O Escritório", to: "/", hash: "sobre" },
    { name: "Áreas de Atuação", to: "/areas-de-atuacao" },
    { name: "Notícias", to: "/", hash: "blog" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed z-50 w-full transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "top-0 bg-velvet/60 backdrop-blur-lg py-3 shadow-xl"
          : "top-0 bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex group items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <svg
            width="400"
            height="80"
            viewBox="0 0 600 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 md:h-16 w-auto"
          >
            {/* AP Monogram */}
            <g transform="translate(30, 30)">
              <line
                x1="0"
                y1="60"
                x2="25"
                y2="0"
                stroke="white"
                strokeWidth="2.5"
                className="group-hover:stroke-gold transition-colors"
              />
              <line
                x1="25"
                y1="0"
                x2="25"
                y2="60"
                stroke="white"
                strokeWidth="2.5"
                className="group-hover:stroke-gold transition-colors"
              />
              <line
                x1="12.5"
                y1="30"
                x2="25"
                y2="30"
                stroke="white"
                strokeWidth="2.5"
                className="group-hover:stroke-gold transition-colors"
              />
              <path
                d="M25 0H50V30H25"
                stroke="white"
                strokeWidth="2.5"
                fill="none"
                className="group-hover:stroke-gold transition-colors"
              />
            </g>
            {/* Typography */}
            <text
              x="110"
              y="65"
              fill="white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "28px",
                fontWeight: 300,
                letterSpacing: "0.25em",
              }}
              className="group-hover:fill-gold transition-colors"
            >
              AYRTON PEDROSA
            </text>
            <text
              x="210"
              y="95"
              fill="white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                letterSpacing: "0.8em",
                opacity: 0.8,
              }}
              className="group-hover:fill-gold transition-colors"
            >
              ADVOCACIA
            </text>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                hash={link.hash}
                className="group relative text-[13px] font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-gold"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* FALE CONOSCO Dropdown — Refined Version */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-white outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-velvet rounded-sm px-2 py-1 -mx-2">
              <span className="relative pb-1">
                FALE CONOSCO
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gold"
                  initial={{ width: "100%" }}
                  whileHover={{ width: "120%", left: "-10%" }}
                />
              </span>
              <ChevronDown className="h-3 w-3 text-gold transition-transform duration-500 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={20}
              className="w-64 rounded-2xl border-white/10 bg-white/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300"
            >
              <DropdownMenuItem className="rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group">
                <Link to="/" hash="contato" className="flex w-full items-center justify-between">
                  Agendar Reunião
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group">
                <Link to="/" hash="contato" className="flex w-full items-center justify-between">
                  Contato
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all" />
                </Link>
              </DropdownMenuItem>
              <div className="my-2 h-px bg-gold/10" />
              <DropdownMenuItem className="rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group">
                <a
                  href="mailto:rh@ayrtonpedrosa.com"
                  className="flex w-full items-center justify-between"
                >
                  Trabalhe Conosco
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-white/10 bg-velvet md:hidden shadow-2xl overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    hash={link.hash}
                    className="flex items-center justify-between border-b border-white/5 pb-5 text-[14px] font-bold uppercase tracking-[0.2em] text-white/90 active:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight className="h-4 w-4 text-gold/50" />
                  </Link>
                ))}
              </div>

              <div className="mt-4 pt-8 border-t border-white/10 space-y-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold opacity-70">
                  Fale Conosco
                </p>
                <div className="grid gap-6">
                  <Link
                    to="/"
                    hash="contato"
                    className="text-white font-serif text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Agendar Reunião
                  </Link>
                  <Link
                    to="/"
                    hash="contato"
                    className="text-white font-serif text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contato
                  </Link>
                  <a
                    href="mailto:rh@ayrtonpedrosa.com"
                    className="text-white font-serif text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Trabalhe Conosco
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
