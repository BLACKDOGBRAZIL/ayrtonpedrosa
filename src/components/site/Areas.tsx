import { Scale, Wheat, TreePine, Building2, ScrollText, MapPin, Gavel, Tractor, type LucideIcon } from "lucide-react";

type Area = {
  title: string;
  description: string;
  icons: LucideIcon[];
};

const areas: Area[] = [
  {
    title: "Agrário & Agronegócio",
    description: "Gestão e regularização de propriedades rurais, contratos agrários e estruturação de operações no campo.",
    icons: [Scale, Wheat],
  },
  {
    title: "Ambiental",
    description: "Consultoria e defesa em licenças ambientais, autuações, multas e adequação à legislação vigente.",
    icons: [TreePine],
  },
  {
    title: "Imobiliário",
    description: "Assessoria completa em transações imobiliárias rurais e urbanas, due diligence e regularização registral.",
    icons: [Building2],
  },
  {
    title: "Inventários & Herança",
    description: "Planejamento sucessório, inventários e proteção patrimonial para famílias do agronegócio.",
    icons: [ScrollText],
  },
  {
    title: "Regularização, Multas & Cooperativas",
    description: "Regularização fundiária, defesa administrativa e suporte jurídico estratégico a cooperativas.",
    icons: [MapPin, Gavel, Tractor],
  },
];

export function Areas() {
  return (
    <section id="areas" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70">Expertise</span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-primary md:text-5xl">
            Áreas de Atuação
          </h2>
          <p className="mt-5 text-muted-foreground">
            Atuação especializada em todas as frentes jurídicas que impactam o agronegócio moderno.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <article
              key={a.title}
              className="group relative flex flex-col rounded-md border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-center gap-3">
                {a.icons.map((Icon, i) => (
                  <Icon key={i} className="h-7 w-7 text-primary" strokeWidth={1.6} />
                ))}
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-primary">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              <div className="mt-6 h-px w-10 bg-primary/30 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}