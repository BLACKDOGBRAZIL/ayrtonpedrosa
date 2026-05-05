import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero_classic_law.png";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Background Image with Parallax-like scale */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={heroImg}
        alt="Interior clássico de escritório de advocacia"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      
      {/* Sophisticated Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-velvet via-velvet/80 to-transparent md:from-velvet md:via-velvet/40" />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <div className="mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold font-medium">
              Excelência Jurídica
            </span>
          </motion.div>

          {/* New Impactful Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white font-medium"
          >
            <span className="whitespace-nowrap">Segurança jurídica</span> <br />
            para o seu negócio.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Soluções jurídicas especializadas para proteger seu patrimônio e garantir a tranquilidade das suas operações e negócios.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col items-center sm:flex-row gap-6"
          >
            <Button asChild variant="hero" className="h-12 px-8 text-xs group">
              <a href="#contato" className="flex items-center gap-3">
                Saiba mais
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
            
            <a 
              href="#sobre" 
              className="group flex items-center gap-3 text-white/80 hover:text-white transition-all text-[11px] uppercase tracking-[0.2em] font-medium"
            >
              Conheça o Escritório
              <div className="h-px w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-gold" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 hidden lg:block">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "30vh" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="w-px bg-gradient-to-b from-transparent via-gold/40 to-gold"
        />
      </div>

      {/* Scroll indicator - refined */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Descer</span>
          <div className="h-12 w-px bg-white/10 overflow-hidden">
            <div className="h-full w-full bg-gold/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
