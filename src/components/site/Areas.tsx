import { Scale, Wheat, TreePine, Building2, ScrollText, MapPin, Gavel, Tractor, ArrowUpRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

type Area = {
  number: string;
  title: string;
  description: string;
  icons: LucideIcon[];
};

const areas: Area[] = [
  {
    number: "01",
    title: "Agrário & Agronegócio",
    description: "Regularização de propriedades rurais (análise de CCIR, CAR, georreferenciamento e processos de desmembramento). Contratos Agrícolas. Direito de Posse. Cooperativas Agrícolas.",
    icons: [Wheat],
  },
  {
    number: "02",
    title: "Direito Ambiental",
    description: "Consultoria preventiva e defesa contenciosa especializada. Atuamos ativamente na gestão de passivos ambientais, desembaraço de licenciamentos e resposta a autuações, protegendo a operação do seu negócio.",
    icons: [TreePine],
  },
  {
    number: "03",
    title: "Direito Imobiliário",
    description: "Proteção jurídica para negócios imobiliários: Due diligence. Regularização de imóveis urbanos. Usucapição judicial e Extrajudicial. Análise de riscos para aquisição de e locação de imóveis. Atuação judicial em demandas imobiliárias. Gestão em contratos de locação. Assessoria para Imobiliárias e Administradoras de Imóveis. Assessoria em Contratos Build to Suit",
    icons: [Building2],
  },
  {
    number: "04",
    title: "Sucessões & Inventários",
    description: "Proteção do legado familiar e eficiência fiscal. Gestão estratégica de inventários e planejamento sucessório focado na mitigação dos impactos do ITCMD, assegurando a transição pacífica e rentável dos bens.",
    icons: [ScrollText],
  },
  {
    number: "05",
    title: "Defesa Patrimonial e Contencioso",
    description: "Proteção ativa do seu patrimônio contra execuções fiscais e abusos do sistema financeiro. Atuamos com contestações bancárias robustas e embargos à execução, garantindo a continuidade do seu negócio.",
    icons: [Gavel],
  },
];

export function Areas() {
  return (
    <section id="areas" className="relative bg-white py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid gap-12 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-widest text-gold">— Áreas de Atuação —</p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.05] text-velvet md:text-6xl">
              Soluções jurídicas <span className="text-gold">integradas e estratégicas</span>.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-velvet/70 md:col-span-5 md:text-lg">
            Compreendemos a complexidade do seu negócio. Oferecemos suporte legal completo para proteger seu patrimônio e viabilizar resultados.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-px bg-gold/10 md:grid-cols-2 lg:grid-cols-3 border border-gold/10">
          {areas.map((a, idx) => {
            const Icon = a.icons[0];
            return (
              <Link
                key={a.title}
                to="/areas-de-atuacao"
                className="group relative flex flex-col bg-white p-10 transition-all duration-500 hover:bg-cream"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-sm text-gold/30">{a.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-velvet group-hover:scale-110 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/20">
                      {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                    </div>
                  </div>

                  <h3 className="mt-10 font-serif text-2xl font-medium leading-tight text-velvet md:text-3xl">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-velvet/60">{a.description}</p>

                  <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold transition-all duration-500">
                    Saiba mais <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              </Link>
            );
          })}

          {/* CTA tile */}
          <Link
            to="/"
            hash="contato"
            className="group relative flex flex-col justify-between bg-velvet p-10 text-white shadow-2xl transition-all duration-500 hover:brightness-110"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold/80">— Consultoria —</p>
                <h3 className="mt-8 font-serif text-2xl font-medium leading-tight md:text-3xl text-white">
                  Cada caso merece uma <span className="text-gold">solução</span> única.
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-white/70">
                  Agende uma análise de viabilidade e descubra o plano de ação exato para a proteção dos seus ativos.
                </p>
              </div>
              <div
                className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-gold group-hover:text-white transition-all"
              >
                Fale com o escritório <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
