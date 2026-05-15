import { Instagram, Mail, Phone } from "lucide-react";
import footerBg from "@/assets/footer_classic_law.png";
import { motion } from "framer-motion";

export function Footer({ year }: { year: number }) {
  return (
    <footer className="relative border-t border-white/5 bg-stone-950 overflow-hidden">
      {/* Background Image */}
      <img
        src={footerBg}
        alt="Legal Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      {/* Dark Overlay with sophisticated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-velvet/80 via-velvet/95 to-velvet" />
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12"
      >
        <div className="md:col-span-5">
          <div className="flex group items-center -ml-4">
            <svg width="400" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-24 w-auto">
              {/* AP Monogram */}
              <g transform="translate(30, 30)">
                <line x1="0" y1="60" x2="25" y2="0" stroke="white" strokeWidth="2.5" className="group-hover:stroke-gold transition-colors" />
                <line x1="25" y1="0" x2="25" y2="60" stroke="white" strokeWidth="2.5" className="group-hover:stroke-gold transition-colors" />
                <line x1="12.5" y1="30" x2="25" y2="30" stroke="white" strokeWidth="2.5" className="group-hover:stroke-gold transition-colors" />
                <path d="M25 0H50V30H25" stroke="white" strokeWidth="2.5" fill="none" className="group-hover:stroke-gold transition-colors" />
              </g>
              {/* Typography */}
              <text x="110" y="65" fill="white" style={{ fontFamily: "'Inter', sans-serif", fontSize: "28px", fontWeight: 300, letterSpacing: "0.25em" }} className="group-hover:fill-gold transition-colors">AYRTON PEDROSA</text>
              <text x="210" y="95" fill="white" style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 300, letterSpacing: "0.8em", opacity: 0.8 }} className="group-hover:fill-gold transition-colors">ADVOCACIA</text>
            </svg>
          </div>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-white/60 font-light">
            Estratégia jurídica especializada para empresas e pessoas que buscam segurança, inovação e resultados.
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[10px] uppercase tracking-widest text-gold font-medium mb-8">Contato Direto</h4>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="space-y-6 text-sm text-white/80"
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0 }
              }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-velvet">
                <Mail className="h-4 w-4" />
              </div>
              <span className="group-hover:text-white transition-colors text-base font-sans break-words leading-tight">contato@ayrtonpedrosa.com</span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0 }
              }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-velvet">
                <Phone className="h-4 w-4" />
              </div>
              <a href="https://wa.me/5581997586830" target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-colors text-base font-sans">+55 (81) 99758-6830</a>
            </motion.li>
          </motion.ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-widest text-gold font-medium mb-8">Presença Digital</h4>
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
              <p className="text-[10px] uppercase tracking-widest text-white/40">Instagram</p>
              <p className="text-lg font-sans text-white group-hover:text-gold transition-colors">@ayrtonpedrosa.adv</p>
            </div>
          </a>
        </div>
      </motion.div>

      <div className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-[10px] uppercase tracking-widest text-white/30">
          Ayrton Pedrosa Advocacia · OAB/PE 35.952 · {year} · Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  );
}
