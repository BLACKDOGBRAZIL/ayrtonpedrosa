import { Scale, Wheat, TreePine, Building2, ScrollText, MapPin, Gavel, Tractor, ArrowUpRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    description: "Gestão estratégica e regularização de propriedades rurais, contratos complexos e estruturação de operações no campo.",
    icons: [Wheat],
  },
  {
    number: "02",
    title: "Direito Ambiental",
    description: "Consultoria preventiva e defesa especializada em licenciamentos, autuações e adequação à legislação vigente.",
    icons: [TreePine],
  },
  {
    number: "03",
    title: "Negócios Imobiliários",
    description: "Assessoria em transações de alto valor, due diligence rigorosa e regularização de ativos imobiliários.",
    icons: [Building2],
  },
  {
    number: "04",
    title: "Sucessões & Patrimônio",
    description: "Planejamento sucessório sofisticado, inventários e blindagem patrimonial para famílias e holdings.",
    icons: [ScrollText],
  },
  {
    number: "05",
    title: "Estratégia Empresarial",
    description: "Regularização fundiária, compliance administrativo, contencioso cível e suporte jurídico corporativo.",
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
              Expertise jurídica em <span className="text-gold">diversas frentes</span> de atuação.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-velvet/70 md:col-span-5 md:text-lg">
            Atuação técnica e especializada nas áreas cruciais para o seu negócio e patrimônio.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-px bg-stone-100/50 md:grid-cols-2 lg:grid-cols-3 border border-stone-100/50">
          {areas.map((a, idx) => {
            const Icon = a.icons[0];
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative flex flex-col bg-white p-10 transition-all duration-500 hover:bg-cream"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-sm text-stone-300">{a.number}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-velvet">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={1.2} />}
                  </div>
                </div>

              <h3 className="mt-10 font-serif text-2xl font-medium leading-tight text-velvet md:text-3xl">
                {a.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-velvet/60">{a.description}</p>

              <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Saiba mais <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
              </motion.article>
            );
          })}

          {/* CTA tile */}
          <motion.article 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex flex-col justify-between bg-velvet p-10 text-white shadow-2xl"
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold/80">— Consultoria —</p>
              <h3 className="mt-8 font-serif text-2xl font-medium leading-tight md:text-3xl text-white">
                Cada caso merece uma <span className="text-gold">solução</span> única.
              </h3>
            </div>
            <a
              href="#contato"
              className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-gold hover:text-white transition-all"
            >
              Fale com o escritório <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
