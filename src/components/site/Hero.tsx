import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-agro.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Campos agrícolas e silo moderno ao pôr do sol"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24 text-primary-foreground">
        <span className="mb-6 inline-block w-fit border-l-2 border-primary-foreground/70 pl-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/85">
          Advocacia Estratégica · Agronegócio
        </span>
        <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
          Ayrton Pedrosa Advocacia: Estratégia Jurídica no Agronegócio
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
          Soluções legais inovadoras e personalizadas para produtores rurais, cooperativas e empresários do campo.
        </p>
        <div className="mt-10">
          <Button asChild variant="hero" size="xl">
            <a href="#contato">Agendar Consulta</a>
          </Button>
        </div>
      </div>
    </section>
  );
}