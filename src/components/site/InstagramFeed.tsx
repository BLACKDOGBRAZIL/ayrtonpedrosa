import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">Social Media</span>
            <div className="h-px w-8 bg-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-velvet mb-6"
          >
            Acompanhe no <span className="italic text-gold">Instagram</span>
          </motion.h2>
          
          <motion.a
            href="https://www.instagram.com/ayrtonpedrosa.adv"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-velvet/60 hover:text-gold transition-colors font-medium tracking-wide"
          >
            <Instagram className="h-5 w-5" />
            @ayrtonpedrosa.adv
          </motion.a>
        </div>

        {/* Instagram Widget Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden"
        >
          {/* Elfsight Widget Implementation */}
          <div className="elfsight-app-YOUR_WIDGET_ID_HERE" data-elfsight-app-lazy></div>
          
          {/* Script loader can be added to index.html or here via useEffect */}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://www.instagram.com/ayrtonpedrosa.adv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-velvet text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold shadow-xl hover:bg-gold hover:text-velvet transition-all duration-300"
          >
            Seguir Perfil Oficial
          </motion.a>
        </div>
      </div>
    </section>
  );
}
