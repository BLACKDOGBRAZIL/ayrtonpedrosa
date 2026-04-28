import { Instagram, Mail, Phone } from "lucide-react";

export function Footer({ year }: { year: number }) {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            Ayrton <span className="italic text-gold">Pedrosa</span>
          </div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-gold/80">Advocacia Estratégica</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/70">
            Estratégia jurídica especializada para produtores rurais, cooperativas e empresários do agronegócio brasileiro.
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold">Contato</h4>
          <ul className="mt-6 space-y-4 text-sm text-foreground/80">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" />contato@ayrtonpedrosa.adv.br</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" />+55 (00) 00000-0000</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold">Redes</h4>
          <a
            href="https://www.instagram.com/ayrtonpedrosa.adv"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-gold"
          >
            <Instagram className="h-5 w-5" />@ayrtonpedrosa.adv
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          Ayrton Pedrosa Advocacia · {year} · Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  );
}
