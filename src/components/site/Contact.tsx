import { useState, type FormEvent } from "react";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
    <section id="contato" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary/70">Contato</span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-primary md:text-5xl">
            Vamos conversar sobre sua estratégia jurídica
          </h2>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-5">
          <form onSubmit={onSubmit} className="md:col-span-3 space-y-5 rounded-md border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" required placeholder="Seu nome completo" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required placeholder="seu@email.com" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" required rows={5} placeholder="Como podemos ajudar?" className="mt-2" />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full">
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
          <div className="md:col-span-2 space-y-6">
            <ContactItem icon={Mail} label="E-mail" value="contato@ayrtonpedrosa.adv.br" href="mailto:contato@ayrtonpedrosa.adv.br" />
            <ContactItem icon={Phone} label="Telefone" value="+55 (00) 00000-0000" href="tel:+5500000000000" />
            <ContactItem icon={MapPin} label="Atendimento" value="Presencial e online em todo o Brasil" />
            <a
              href="https://www.instagram.com/ayrtonpedrosa.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-md border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</div>
                <div className="font-medium text-primary">@ayrtonpedrosa.adv</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href } : {})}
      className="flex items-start gap-4 rounded-md border border-border bg-card p-5 transition-all hover:border-primary/50"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-medium text-foreground">{value}</div>
      </div>
    </Wrap>
  );
}