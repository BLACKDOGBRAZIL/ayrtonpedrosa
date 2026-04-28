import { useState, type FormEvent } from "react";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <section id="contato" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">— Fale Conosco —</p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-foreground md:text-6xl">
            Vamos conversar sobre sua <span className="italic text-gold">estratégia jurídica</span>.
          </h2>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-12 md:gap-20">
          <form onSubmit={onSubmit} className="space-y-8 md:col-span-7">
            <FormField label="Nome">
              <Input id="name" required placeholder="Seu nome completo" className="border-0 border-b border-border bg-transparent rounded-none px-0 py-3 text-foreground placeholder:text-foreground/30 focus-visible:ring-0 focus-visible:border-gold transition-colors" />
            </FormField>
            <FormField label="E-mail">
              <Input id="email" type="email" required placeholder="seu@email.com" className="border-0 border-b border-border bg-transparent rounded-none px-0 py-3 text-foreground placeholder:text-foreground/30 focus-visible:ring-0 focus-visible:border-gold transition-colors" />
            </FormField>
            <FormField label="Mensagem">
              <Textarea id="message" required rows={5} placeholder="Como podemos ajudar?" className="border-0 border-b border-border bg-transparent rounded-none px-0 py-3 text-foreground placeholder:text-foreground/30 focus-visible:ring-0 focus-visible:border-gold transition-colors resize-none" />
            </FormField>
            <Button type="submit" variant="hero" size="lg" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>

          <aside className="space-y-10 md:col-span-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Contato Direto</p>
              <div className="mt-8 space-y-7">
                <ContactRow icon={Mail} label="E-mail" value="contato@ayrtonpedrosa.adv.br" href="mailto:contato@ayrtonpedrosa.adv.br" />
                <ContactRow icon={Phone} label="Telefone" value="+55 (00) 00000-0000" href="tel:+5500000000000" />
                <ContactRow icon={MapPin} label="Atendimento" value="Presencial e online em todo o Brasil" />
              </div>
            </div>

            <a
              href="https://www.instagram.com/ayrtonpedrosa.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 border-t border-border pt-8 transition-all hover:border-gold"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-gold/60 text-gold transition-all group-hover:bg-gold group-hover:text-[var(--gold-foreground)]">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">Siga no Instagram</div>
                <div className="mt-1 font-serif text-lg text-foreground group-hover:text-gold">@ayrtonpedrosa.adv</div>
              </div>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-gold">{label}</label>
      {children}
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap {...(href ? { href } : {})} className="group flex items-start gap-5">
      <Icon className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">{label}</div>
        <div className="mt-1 font-serif text-lg text-foreground transition-colors group-hover:text-gold">{value}</div>
      </div>
    </Wrap>
  );
}
