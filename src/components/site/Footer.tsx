import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl font-bold">Ayrton Pedrosa <span className="font-light">Advocacia</span></div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Estratégia jurídica especializada para produtores rurais, cooperativas e empresários do agronegócio.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">Contato</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> contato@ayrtonpedrosa.adv.br</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> +55 (00) 00000-0000</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">Redes</h4>
          <a
            href="https://www.instagram.com/ayrtonpedrosa.adv"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
          >
            <Instagram className="h-5 w-5" /> @ayrtonpedrosa.adv
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-primary-foreground/65">
          Ayrton Pedrosa Advocacia, {year}, Todos os Direitos Reservados.
        </div>
      </div>
    </footer>
  );
}