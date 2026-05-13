import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Areas } from "@/components/site/Areas";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { Contact } from "@/components/site/Contact";
import { motion } from "framer-motion";
import areasHeroImg from "@/assets/areas_hero_law.png";

export const Route = createFileRoute("/areas-de-atuacao")({
  component: AreasPage,
});

function AreasPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Cinematic Header Section */}
        <section className="relative min-h-[70vh] flex items-center bg-velvet pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          {/* Background Image with Parallax-like scale */}
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={areasHeroImg}
            alt="Áreas de Atuação - Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          {/* Sophisticated Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-velvet via-velvet/40 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl"
            >
              {/* Breadcrumbs / Path */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center gap-3 mb-10"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Início</span>
                <div className="h-px w-4 bg-gold/30" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Áreas de Atuação</span>
              </motion.div>

              <h1 className="font-serif text-5xl font-medium leading-[1.1] text-white md:text-8xl">
                Excelência Jurídica <br className="hidden md:block" />
                em <span className="text-gold italic">Múltiplas Frentes</span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-12 grid gap-8 md:grid-cols-2 md:items-start"
              >
                <p className="text-lg leading-relaxed text-white/70 border-l border-gold/30 pl-8">
                  Oferecemos soluções jurídicas de alta complexidade, com foco em resultados sólidos e proteção estratégica de ativos para empresas e patrimônios familiares.
                </p>
                <div className="hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gold/60 leading-loose">
                      Atuação Técnica <br />
                      Compromisso Ético <br />
                      Segurança Patrimonial
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative floating vertical line */}
          <div className="absolute left-1/2 bottom-0 hidden lg:block -translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "15vh" }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="w-px bg-gradient-to-b from-transparent to-gold/40"
            />
          </div>
        </section>

        {/* Content Section with a clean transition */}
        <div className="relative z-20 -mt-12 bg-white">
          <Areas />
        </div>
        
        <Contact />
      </main>
      <Footer year={currentYear} />
      <ScrollToTop />
    </div>
  );
}
