import { useState, type FormEvent } from "react";
import { Mail, Phone, Instagram, MapPin, Send } from "lucide-react";
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
      toast.success("Mensagem enviada com sucesso!");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <section id="contato" className="relative bg-[#FDFCFB] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4">— Contato —</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-velvet md:text-5xl">
            Atendimento Jurídico <span className="italic text-gold">Estratégico</span>.
          </h2>
          <div className="mt-6 h-px w-20 bg-gold/40" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Form Side */}
          <div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Nome">
                  <Input 
                    id="name" 
                    required 
                    placeholder="Seu nome" 
                    className="h-12 border border-stone-200 bg-white px-4 text-stone-900 placeholder:text-stone-300 focus-visible:ring-1 focus-visible:ring-gold focus-visible:border-gold transition-all rounded-none shadow-sm" 
                  />
                </FormField>
                <FormField label="E-mail">
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="seu@email.com" 
                    className="h-12 border border-stone-200 bg-white px-4 text-stone-900 placeholder:text-stone-300 focus-visible:ring-1 focus-visible:ring-gold focus-visible:border-gold transition-all rounded-none shadow-sm" 
                  />
                </FormField>
              </div>
              
              <FormField label="Assunto">
                <Input 
                  id="subject" 
                  placeholder="Ex: Consultoria Agrária" 
                  className="h-12 border border-stone-200 bg-white px-4 text-stone-900 placeholder:text-stone-300 focus-visible:ring-1 focus-visible:ring-gold focus-visible:border-gold transition-all rounded-none shadow-sm" 
                />
              </FormField>

              <FormField label="Mensagem">
                <Textarea 
                  id="message" 
                  required 
                  rows={4} 
                  placeholder="Como podemos lhe ajudar?" 
                  className="border border-stone-200 bg-white p-4 text-stone-900 placeholder:text-stone-300 focus-visible:ring-1 focus-visible:ring-gold focus-visible:border-gold transition-all rounded-none shadow-sm resize-none" 
                />
              </FormField>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-12 bg-velvet hover:brightness-110 text-white rounded-none uppercase tracking-[0.2em] text-[11px] font-bold transition-all flex items-center justify-center gap-3 group shadow-lg"
              >
                {loading ? "Enviando..." : (
                  <>
                    Enviar Mensagem
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div className="space-y-10">
              <section>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Canais Diretos</h4>
                <div className="space-y-12">
                  <ContactItem 
                    icon={Mail} 
                    label="E-mail" 
                    value="contato@ayrtonpedrosa.adv.br" 
                    href="mailto:contato@ayrtonpedrosa.adv.br" 
                  />
                  <ContactItem 
                    icon={Phone} 
                    label="WhatsApp Direto" 
                    value="+55 (81) 00000-0000" 
                    href="tel:+5581000000000" 
                  />
                  <ContactItem 
                    icon={MapPin} 
                    label="Escritório" 
                    value="Recife - Pernambuco" 
                  />
                </div>
              </section>

              <div className="pt-12 border-t border-stone-100">
                <a
                  href="https://www.instagram.com/ayrtonpedrosa.adv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-stone-200 text-stone-400 transition-all group-hover:border-gold group-hover:text-gold group-hover:bg-gold/5">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Siga no Instagram</p>
                    <p className="font-serif text-xl text-stone-900 group-hover:text-gold transition-colors">@ayrtonpedrosa.adv</p>
                  </div>
                </a>
              </div>
            </div>
            
            <p className="mt-16 text-[11px] text-stone-400 uppercase tracking-[0.2em] italic">
              Compromisso com a ética e a excelência jurídica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] uppercase tracking-[0.3em] text-gold font-bold">{label}</label>
      {children}
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Content = (
    <div className="group flex items-start gap-6 py-1">
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded border border-stone-100 bg-white text-velvet group-hover:bg-velvet group-hover:text-white transition-all">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">{label}</p>
        <p className="font-serif text-lg text-velvet group-hover:text-gold transition-colors leading-tight">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{Content}</a> : Content;
}
