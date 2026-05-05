import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink, Loader2 } from "lucide-react";

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption: string;
  mediaType: string;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeed() {
      try {
        // Tentando buscar o feed real
        const response = await fetch("https://feeds.behold.so/GwvfrRGLkEySIzaNRQOf");
        const data = await response.json();

        // A estrutura correta é data.posts
        if (data && data.posts) {
          setPosts(data.posts.slice(0, 3)); // Pegar apenas as 3 fotos mais recentes para o Grid de 3
        }
      } catch (error) {
        console.error("Erro ao carregar feed do Instagram:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return (
    <section className="bg-cream py-24 md:py-32 border-t border-stone-100">
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
            className="flex items-center gap-2 text-velvet/60 hover:text-gold transition-colors font-medium tracking-wide group"
          >
            <Instagram className="h-5 w-5" />
            <span className="border-b border-transparent group-hover:border-gold transition-all">@ayrtonpedrosa.adv</span>
          </motion.a>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-gold" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-square overflow-hidden bg-stone-200 shadow-lg border border-gold/10"
              >
                <img
                  src={post.mediaUrl}
                  alt={post.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay Luxo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-velvet/60 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100 p-6 text-center">
                  <div className="mb-4 rounded-full bg-gold/20 p-3 ring-1 ring-gold/30">
                    <ExternalLink className="h-6 w-6 text-gold" />
                  </div>
                  <p className="line-clamp-3 text-xs font-light leading-relaxed text-white/90">
                    {post.caption}
                  </p>
                  <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    Ver Publicação
                  </span>
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
            className="inline-flex items-center gap-3 bg-velvet text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl hover:bg-gold hover:text-velvet transition-all duration-300 border border-white/5"
          >
            Seguir Perfil Oficial
          </motion.a>
        </div>
      </div>
    </section>
  );
}
