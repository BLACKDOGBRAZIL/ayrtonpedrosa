import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-agro.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Campos agrícolas e silos modernos ao pôr do sol"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-vignette)" }} />

      <div className="mx-auto w-full max-w-7xl px-6 py-32 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Framed logo block — Alfonsin-style */}
          <div className="mx-auto mb-10 inline-block border border-gold/60 px-12 py-8 backdrop-blur-sm">
            <h1 className="font-serif text-5xl font-semibold tracking-wide text-foreground md:text-7xl lg:text-8xl">
              Ayrton <span className="italic text-gold">Pedrosa</span>
            </h1>
            <div className="mx-auto mt-3 h-px w-24 gold-divider" />
            <p className="mt-3 text-xs uppercase tracking-[0.5em] text-foreground/85 md:text-sm">
              Advocacia Estratégica
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/90 md:text-2xl">
            Estratégia jurídica no agronegócio. Soluções legais inovadoras e personalizadas para produtores rurais, cooperativas e empresários do campo.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <a href="#contato">Agendar Consulta</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-foreground/80 hover:text-gold hover:bg-transparent text-xs uppercase tracking-[0.2em]">
              <a href="#sobre">Conheça o Escritório →</a>
            </Button>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
