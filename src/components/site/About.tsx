import portrait from "@/assets/portrait-ayrton.jpg";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">— O Escritório —</p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-cream-foreground md:text-6xl">
            Tradição, ética e <span className="italic text-gold">estratégia</span> a serviço do agronegócio.
          </h2>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </div>

        <div className="mt-20 grid items-center gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold/60" />
              <img
                src={portrait}
                alt="Ayrton Pedrosa, advogado especialista em agronegócio"
                width={896}
                height={1152}
                loading="lazy"
                className="relative aspect-[4/5] w-full object-cover shadow-[0_30px_80px_-30px_rgba(62,39,35,0.35)]"
              />
              <div className="absolute -bottom-6 left-6 right-6 border-l-2 border-gold bg-cream/95 px-6 py-4 backdrop-blur">
                <p className="font-serif text-lg font-semibold text-cream-foreground">Dr. Ayrton Pedrosa</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold">Advogado · Sócio Fundador</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <h3 className="font-serif text-2xl font-medium text-primary md:text-3xl">
              Advocacia pensada para o campo.
            </h3>
            <p className="mt-6 text-base leading-[1.9] text-cream-foreground/85 md:text-lg">
              Ayrton Pedrosa Advocacia atua com compromisso e visão de futuro, oferecendo soluções jurídicas pensadas para a realidade do agronegócio brasileiro. Nosso trabalho é guiar produtores, cooperativas e empresários através das complexas legislações fundiárias e ambientais.
            </p>
            <p className="mt-5 text-base leading-[1.9] text-cream-muted md:text-lg">
              Combinamos profundo conhecimento técnico com uma abordagem estratégica e personalizada, sempre com foco no <span className="font-medium text-primary">crescimento sustentável</span> e na <span className="font-medium text-primary">proteção patrimonial</span> dos nossos clientes.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-cream pt-10">
              {[
                { n: "+15", l: "Anos de experiência" },
                { n: "+200", l: "Clientes atendidos" },
                { n: "100%", l: "Foco no agronegócio" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl font-semibold text-primary md:text-5xl">{s.n}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cream-muted md:text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
