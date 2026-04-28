import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const rssUrl = "https://news.google.com/rss/search?q=agroneg%C3%B3cio+Pernambuco+OR+Nordeste&hl=pt-BR&gl=BR&ceid=BR:pt-419";
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();
        if (data.status === 'ok') {
          const parsedItems = data.items.slice(0, 3).map((item: any) => {
            const titleParts = item.title.split(' - ');
            const source = titleParts.length > 1 ? titleParts.pop() : '';
            return {
              ...item,
              title: titleParts.join(' - '),
              source: source
            };
          });
          setNews(parsedItems);
        }
      } catch (error) {
        console.error("Error fetching news", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  return (
    <section id="blog" className="relative bg-cream py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">— Notícias —</p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-5xl">
            Atualizações em <span className="italic text-gold">Tempo Real</span>.
          </h2>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
          <p className="mt-8 text-base leading-relaxed text-velvet/60 md:text-lg max-w-2xl mx-auto">
            Acompanhe as últimas notícias do agronegócio do Brasil e do Nordeste.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group block h-full"
              >
                <Card className="h-full relative border-none hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden min-h-[400px]">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={`/images/news_${(i % 3) + 1}.png`} 
                      alt="" 
                      className="w-full h-full object-cover opacity-80 blur-[1px] saturate-[0.7] group-hover:scale-110 group-hover:blur-0 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/60 to-transparent transition-opacity group-hover:opacity-90 duration-500" />
                  </div>

                  <CardHeader className="relative z-10 flex-1 justify-end pt-20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                        {new Date(item.pubDate).toLocaleDateString('pt-BR')}
                      </div>
                      {(item as any).source && (
                        <div className="text-[10px] text-white/60 uppercase tracking-wider font-bold">
                          {(item as any).source}
                        </div>
                      )}
                    </div>
                    <CardTitle className="font-serif text-2xl text-white group-hover:text-gold transition-colors line-clamp-3 leading-tight mb-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 pb-8 pt-0">
                    <CardDescription className="line-clamp-3 text-white/70 text-xs font-medium leading-relaxed mb-6">
                      {item.description.replace(/<[^>]+>/g, '')}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                      Ler notícia completa 
                      <span className="h-px w-8 bg-gold" />
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
