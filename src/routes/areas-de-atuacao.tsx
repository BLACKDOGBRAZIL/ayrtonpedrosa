import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { Contact } from "@/components/site/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { Wheat, TreePine, Building2, ScrollText, Gavel, ArrowRight } from "lucide-react";
import areasHeroImg from "@/assets/areas_hero_law.png";

export const Route = createFileRoute("/areas-de-atuacao")({
  component: AreasPage,
});

const practiceAreas = [
  {
    id: "agrario",
    title: "Agrário & Agronegócio",
    shortTitle: "Direito Agrário",
    icon: Wheat,
    content: "Atuação técnica especializada na regularização de propriedades rurais, abrangendo análise minuciosa de CCIR, CAR, georreferenciamento e processos complexos de desmembramento. Nossa assessoria estende-se à elaboração e revisão de Contratos Agrícolas, Direito de Posse e estruturação jurídica para Cooperativas Agrícolas, garantindo segurança jurídica no campo.",
  },
  {
    id: "ambiental",
    title: "Direito Ambiental",
    shortTitle: "Direito Ambiental",
    icon: TreePine,
    content: "Consultoria preventiva e defesa contenciosa especializada em questões ambientais. Atuamos ativamente na gestão estratégica de passivos ambientais, desembaraço de licenciamentos complexos e resposta técnica a autuações de órgãos reguladores. Nosso foco é proteger a operação do seu negócio contra riscos de interrupção e penalidades severas.",
  },
  {
    id: "imobiliario",
    title: "Direito Imobiliário",
    shortTitle: "Direito Imobiliário",
    icon: Building2,
    content: "Proteção jurídica para negócios imobiliários de alta complexidade. Oferecemos Due Diligence rigorosa, regularização de imóveis urbanos, e condução de processos de Usucapião judicial e extrajudicial. Nossa expertise inclui análise de riscos para aquisição e locação, gestão de contratos Build to Suit e assessoria estratégica para Imobiliárias e Administradoras de Imóveis.",
  },
  {
    id: "sucessoes",
    title: "Sucessões & Inventários",
    shortTitle: "Sucessões",
    icon: ScrollText,
    content: "Planejamento estratégico para a proteção do legado familiar e otimização fiscal. Gestão especializada de inventários e desenvolvimento de estruturas sucessórias focadas na mitigação dos impactos do ITCMD. Nosso compromisso é assegurar uma transição pacífica, rentável e juridicamente blindada dos ativos para as próximas gerações.",
  },
  {
    id: "defesa",
    title: "Defesa Patrimonial e Contencioso",
    shortTitle: "Defesa Patrimonial",
    icon: Gavel,
    content: "Blindagem e proteção ativa do patrimônio contra execuções fiscais e abusos sistêmicos do mercado financeiro. Atuamos com contestações bancárias robustas, embargos à execução e estratégias de defesa processual de alto impacto, garantindo a solvência e a continuidade operacional do seu negócio em cenários de litígio.",
  },
];

function AreasPage() {
  const [activeArea, setActiveArea] = useState(practiceAreas[0]);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section - Reverted to previous version */}
        <section className="relative min-h-[60vh] flex items-center bg-velvet pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5 }}
            src={areasHeroImg}
            alt="Áreas de Atuação - Background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Gradients to blend - Lightened versions */}
          <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-velvet via-velvet/20 to-transparent" />

          <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-[10px] uppercase tracking-widest text-gold">— Expertise —</p>
              <h1 className="font-serif text-5xl font-medium leading-[1.1] text-white md:text-8xl">
                Excelência Jurídica <br className="hidden md:block" />
                em <span className="text-gold italic">Múltiplas Frentes</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-white/70">
                Oferecemos soluções jurídicas de alta complexidade, com foco em resultados sólidos e proteção estratégica de ativos para empresas e patrimônios familiares.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sidebar Navigation Layout */}
        <section className="relative z-20 bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">

              {/* Sidebar Menu */}
              <div className="lg:col-span-4 sticky top-32">
                <div className="space-y-4">
                  {practiceAreas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => setActiveArea(area)}
                      className={`group relative flex w-full items-center justify-between border-b border-gold/10 p-6 text-left transition-all duration-500 md:p-8 ${activeArea.id === area.id
                        ? "bg-cream/50 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]"
                        : "bg-transparent hover:bg-cream/30"
                        }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <p className={`font-serif text-xl md:text-2xl transition-colors duration-500 ${activeArea.id === area.id ? "text-velvet" : "text-velvet/30 group-hover:text-velvet/60"
                            }`}>
                            {area.shortTitle}
                          </p>
                          {activeArea.id === area.id && (
                            <motion.div
                              layoutId="active-indicator"
                              className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </div>
                      </div>
                      <ArrowRight className={`h-5 w-5 transition-all duration-500 ${activeArea.id === area.id ? "translate-x-0 opacity-100 text-gold" : "-translate-x-4 opacity-0 text-gold/40"
                        }`} />
                    </button>
                  ))}
                </div>

                <div className="mt-12 rounded-none bg-velvet p-8 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-gold/80">— Suporte Jurídico —</p>
                  <h3 className="mt-4 font-serif text-xl">Precisa de uma análise específica?</h3>
                  <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-white transition-colors">
                    Fale com o especialista
                  </a>
                </div>
              </div>

              {/* Dynamic Content Area */}
              <div className="lg:col-span-8 min-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeArea.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-none bg-cream border border-gold/20 text-gold mb-10">
                      <activeArea.icon className="h-8 w-8" strokeWidth={1.2} />
                    </div>

                    <h2 className="font-serif text-4xl text-velvet md:text-6xl mb-8 leading-tight">
                      {activeArea.title}
                    </h2>

                    <div className="prose prose-stone prose-lg max-w-none">
                      <p className="text-xl leading-relaxed text-velvet/70 first-letter:text-6xl first-letter:font-serif first-letter:text-gold first-letter:mr-4 first-letter:float-left first-letter:mt-1">
                        {activeArea.content}
                      </p>
                    </div>

                    {/* Placeholder for more detailed sub-items if needed */}
                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                      <div className="p-8 border border-gold/10 bg-cream/30">
                        <h4 className="font-serif text-lg text-velvet mb-3">Consultoria Estratégica</h4>
                        <p className="text-sm text-velvet/60 leading-relaxed">Focada em prevenção de riscos e estruturação de negócios sólidos.</p>
                      </div>
                      <div className="p-8 border border-gold/10 bg-cream/30">
                        <h4 className="font-serif text-lg text-velvet mb-3">Defesa Contenciosa</h4>
                        <p className="text-sm text-velvet/60 leading-relaxed">Atuação técnica em tribunais para proteger ativos e interesses operacionais.</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer year={currentYear} />
      <ScrollToTop />
    </div>
  );
}
