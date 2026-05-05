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
    { name: "Início", href: "#home" },
    { name: "O Escritório", href: "#sobre" },
    { name: "Áreas de Atuação", href: "#areas" },
    { name: "Notícias", href: "#blog" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed z-50 w-full transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "top-0 bg-velvet py-3 shadow-xl" 
          : "top-8 bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex flex-col group">
          <span className="font-serif text-xl font-bold tracking-widest text-white md:text-2xl transition-colors group-hover:text-gold">
            Ayrton <span className="italic text-gold group-hover:text-white">Pedrosa</span>
          </span>
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/60">ADVOCACIA</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[13px] font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-gold"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          {/* FALE CONOSCO Dropdown — Refined Version */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-white outline-none focus:ring-0">
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
                <a href="#contato" className="flex w-full items-center justify-between">
                  Agendar Reunião
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group">
                <a href="#contato" className="flex w-full items-center justify-between">
                  Contato
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all" />
                </a>
              </DropdownMenuItem>
              <div className="my-2 h-px bg-stone-100" />
              <DropdownMenuItem className="rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group">
                <a href="mailto:rh@ayrtonpedrosa.com" className="flex w-full items-center justify-between">
                  Trabalhe Conosco
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/login"
            className="group flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:border-gold transition-all duration-500 shadow-lg shadow-black/20"
            title="Portal do Advogado"
          >
            <UserCircle className="h-5 w-5 text-white group-hover:text-velvet transition-colors" />
          </Link>
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
            className="border-t border-white/10 bg-velvet px-6 py-8 md:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between border-b border-white/5 pb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4 text-gold" />
                </a>
              ))}
              <div className="pt-4 space-y-4 border-t border-white/10 mt-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Acesso Restrito</p>
                <Link 
                  to="/login" 
                  className="flex items-center gap-3 text-white font-serif text-lg hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserCircle className="h-5 w-5 text-gold" />
                  Portal do Advogado
                </Link>
                
                <div className="pt-4 space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Fale Conosco</p>
                  <a href="#contato" className="block text-white font-serif text-lg" onClick={() => setIsMobileMenuOpen(false)}>Agendar Reunião</a>
                  <a href="#contato" className="block text-white font-serif text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
                  <a href="mailto:rh@ayrtonpedrosa.com" className="block text-white font-serif text-lg" onClick={() => setIsMobileMenuOpen(false)}>Trabalhe Conosco</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
