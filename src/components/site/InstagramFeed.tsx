import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink, Loader2 } from "lucide-react";

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  mediaType: string;
  thumbnailUrl?: string;
  caption?: string;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const response = await fetch("https://feeds.behold.so/GwvfrRGLkEySIzaNRQOf");
        const data = await response.json();
        setPosts(data.slice(0, 6)); // Pegar as 6 fotos mais recentes
      } catch (error) {
        console.error("Erro ao carregar feed do Instagram:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return (
    <section className="bg-cream py-24 md:py-32 overflow-hidden border-t border-stone-100">
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
            className="flex items-center gap-2 text-velvet/60 hover:text-gold transition-colors font-medium tracking-wide group"
          >
            <Instagram className="h-5 w-5" />
            <span className="border-b border-transparent group-hover:border-gold transition-all">@ayrtonpedrosa.adv</span>
          </motion.a>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-8 w-8 text-gold animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {posts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-100 shadow-lg"
              >
                <img 
                  src={post.mediaType === "VIDEO" ? post.thumbnailUrl : post.mediaUrl} 
                  alt={post.caption || "Instagram Post"} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-velvet/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-6 text-center">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <ExternalLink className="h-8 w-8 text-gold mx-auto mb-3" />
                    <p className="text-white/90 text-xs font-sans line-clamp-3 leading-relaxed uppercase tracking-widest italic">
                      Ver publicação completa
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <motion.a
            href="https://www.instagram.com/ayrtonpedrosa.adv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-velvet text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold shadow-xl hover:bg-gold hover:text-velvet transition-all duration-300 border border-white/5"
          >
            Seguir Perfil Oficial
          </motion.a>
        </div>
      </div>
    </section>
  );
}
