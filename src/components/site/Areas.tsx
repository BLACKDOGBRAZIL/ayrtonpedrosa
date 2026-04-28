import { Scale, Wheat, TreePine, Building2, ScrollText, MapPin, Gavel, Tractor, ArrowUpRight, type LucideIcon } from "lucide-react";

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
    description: "Gestão e regularização de propriedades rurais, contratos agrários e estruturação de operações no campo.",
    icons: [Scale, Wheat],
  },
  {
    number: "02",
    title: "Ambiental",
    description: "Consultoria e defesa em licenças ambientais, autuações, multas e adequação à legislação vigente.",
    icons: [TreePine],
  },
  {
    number: "03",
    title: "Imobiliário",
    description: "Assessoria completa em transações imobiliárias rurais e urbanas, due diligence e regularização registral.",
    icons: [Building2],
  },
  {
    number: "04",
    title: "Inventários & Herança",
    description: "Planejamento sucessório, inventários e proteção patrimonial para famílias do agronegócio.",
    icons: [ScrollText],
  },
  {
    number: "05",
    title: "Regularização, Multas & Cooperativas",
    description: "Regularização fundiária, defesa administrativa e suporte jurídico estratégico a cooperativas.",
    icons: [MapPin, Gavel, Tractor],
  },
];

export function Areas() {
  return (
    <section id="areas" className="relative bg-card py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold">— Áreas de Atuação —</p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Expertise jurídica em <span className="italic text-gold">cada frente</span> do agronegócio.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-foreground/70 md:col-span-5 md:text-lg">
            Atuação especializada e estratégica em todas as áreas que impactam o produtor rural, a cooperativa e o empresário do campo.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <article
              key={a.title}
              className="group relative flex flex-col bg-card p-10 transition-all duration-500 hover:bg-background"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {a.icons.map((Icon, i) => (
                    <Icon key={i} className="h-8 w-8 text-gold transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.4} />
                  ))}
                </div>
                <span className="font-serif text-sm text-foreground/40">{a.number}</span>
              </div>

              <h3 className="mt-10 font-serif text-2xl font-medium leading-tight text-foreground md:text-3xl">
                {a.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{a.description}</p>

              <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Saiba mais <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}

          {/* CTA tile */}
          <article className="relative flex flex-col justify-between bg-gradient-gold p-10 text-[var(--gold-foreground)]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-70">— Consultoria —</p>
              <h3 className="mt-8 font-serif text-2xl font-medium leading-tight md:text-3xl">
                Cada caso merece uma estratégia única.
              </h3>
            </div>
            <a
              href="#contato"
              className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] hover:gap-4 transition-all"
            >
              Fale com o escritório <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
