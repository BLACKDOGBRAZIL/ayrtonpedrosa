import portrait from "@/assets/portrait-ayrton.jpg";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-md bg-primary/5" />
          <img
            src={portrait}
            alt="Ayrton Pedrosa, advogado especialista em agronegócio"
            width={896}
            height={1152}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70">Sobre Nós</span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-primary md:text-5xl">
            Advocacia Estratégica para o Campo.
          </h2>
          <div className="mt-6 h-px w-16 bg-primary/40" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Ayrton Pedrosa Advocacia atua com compromisso e visão de futuro, oferecendo soluções jurídicas pensadas para a realidade do agronegócio brasileiro. Nosso trabalho é guiar produtores, cooperativas e empresários através das complexas legislações fundiárias e ambientais.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Combinamos profundo conhecimento técnico com uma abordagem estratégica e personalizada, sempre com foco no crescimento sustentável e na proteção patrimonial dos nossos clientes.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "+15", l: "Anos de experiência" },
              { n: "+200", l: "Clientes atendidos" },
              { n: "100%", l: "Foco no agronegócio" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-2xl font-bold text-primary md:text-3xl">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}