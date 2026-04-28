import { Instagram, Mail, Phone } from "lucide-react";
import footerBg from "@/assets/footeragro.jpg";
import { motion } from "framer-motion";

export function Footer({ year }: { year: number }) {
  return (
    <footer className="relative border-t border-white/5 bg-stone-950 overflow-hidden">
      {/* Background Image */}
      <img
        src={footerBg}
        alt="Agro Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      {/* Dark Velvet Glass Overlay */}
      <div className="absolute inset-0 bg-velvet/55 backdrop-blur-sm" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12"
      >
        <div className="md:col-span-5">
          <div className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Ayrton <span className="italic text-gold">Pedrosa</span>
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.5em] text-gold">Advocacia Estratégica</p>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-white/60 font-light">
            Estratégia jurídica especializada para produtores rurais, cooperativas e empresários do agronegócio brasileiro.
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Contato Direto</h4>
          <ul className="space-y-6 text-sm text-white/80">
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-velvet">
                <Mail className="h-4 w-4" />
              </div>
              <span className="group-hover:text-white transition-colors text-base font-serif italic break-words leading-tight">contato@ayrtonpedrosa.com</span>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-velvet">
                <Phone className="h-4 w-4" />
              </div>
              <a href="https://wa.me/5581997586830" target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-colors text-base font-serif italic">+55 (81) 99758-6830</a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Presença Digital</h4>
          <a
            href="https://www.instagram.com/ayrtonpedrosa.adv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 -m-4 rounded-xl hover:bg-white/5 transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold rounded-lg transition-all group-hover:bg-gold group-hover:text-velvet group-hover:shadow-lg group-hover:shadow-gold/20">
              <Instagram className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Instagram</p>
              <p className="text-lg font-serif text-white group-hover:text-gold transition-colors">@ayrtonpedrosa.adv</p>
            </div>
          </a>
        </div>
      </motion.div>

      <div className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-[10px] uppercase tracking-[0.4em] text-white/30">
          Ayrton Pedrosa Advocacia · OAB/PE 35.952 · {year} · Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  );
}
