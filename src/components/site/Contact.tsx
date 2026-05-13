import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // CRM Integration Simulation (HubSpot / Pipedrive / Linear)
    try {
      // Simulate API call to CRM Webhook
      await new Promise(resolve => setTimeout(resolve, 1800));
      setSuccess(true);
      toast.success("Mensagem enviada! Sua solicitação foi registrada em nosso CRM.");
    } catch (error) {
      toast.error("Erro ao enviar. Por favor, tente pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative bg-white py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Text Content & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-gold">— Contato —</p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-6xl">
              Pronto para <span className="text-gold">proteger</span> o seu legado?
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-velvet/70 max-w-lg">
              Agende uma consulta especializada. Nossa equipe está pronta para oferecer a segurança jurídica que seus negócios exigem.
            </p>

            <div className="mt-12 space-y-10">
              <ContactItem
                icon={Phone}
                title="WhatsApp e Telefone"
                content="+55 (81) 99758-6830"
                link="https://wa.me/5581997586830"
                delay={0.2}
              />
              <ContactItem
                icon={Mail}
                title="E-mail Institucional"
                content="contato@ayrtonpedrosa.com"
                link="mailto:contato@ayrtonpedrosa.com"
                delay={0.3}
              />
              <ContactItem
                icon={MapPin}
                title="Sede do Escritório"
                content="Recife/PE · Atendimento Nacional"
                delay={0.4}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 pt-10 border-t border-stone-100"
            >
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
                  <p className="font-sans text-xl text-velvet group-hover:text-gold transition-colors">@ayrtonpedrosa.adv</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl bg-cream p-12 text-center shadow-inner"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-velvet">Solicitação Enviada</h3>
                  <p className="mt-4 text-velvet/60">
                    Sua mensagem foi registrada em nosso sistema. Um consultor entrará em contato em breve.
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setSuccess(false)}
                    className="mt-8 text-gold hover:text-velvet hover:bg-gold/5"
                  >
                    Enviar nova mensagem
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-2xl bg-cream p-8 md:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)] border border-stone-200/50"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Nome Completo</label>
                      <Input placeholder="Seu nome" className="bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">WhatsApp</label>
                      <Input placeholder="(00) 00000-0000" className="bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Assunto</label>
                    <Input placeholder="Ex: Regularização Fundiária" className="bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Mensagem</label>
                    <Textarea
                      placeholder="Como podemos ajudar?"
                      className="min-h-[120px] bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 resize-none p-4 transition-all"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-velvet hover:bg-velvet/90 text-white h-14 text-xs uppercase tracking-widest font-medium transition-all shadow-lg active:shadow-inner"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <span className="flex items-center gap-3">Enviar Solicitação <Send className="h-4 w-4" /></span>
                    )}
                  </Button>
                  <p className="text-[10px] text-center text-velvet/40 uppercase tracking-widest font-medium">
                    Comunicação Segura · Protocolo SSL
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, content, link, delay = 0 }: { icon: any, title: string, content: string, link?: string, delay?: number }) {
  const Wrapper = link ? "a" : "div";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex items-start gap-4 md:gap-6"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gold">
        <Icon className="h-6 w-6" strokeWidth={1} />
      </div>
      <div>
        <h4 className="text-[10px] uppercase tracking-widest text-gold font-medium">{title}</h4>
        <Wrapper
          href={link}
          target={link?.startsWith("http") ? "_blank" : undefined}
          className={`mt-1 block font-sans text-xl md:text-2xl text-velvet break-words leading-tight ${link ? 'hover:text-gold transition-colors' : ''}`}
        >
          {content}
        </Wrapper>
      </div>
    </motion.div>
  );
}
