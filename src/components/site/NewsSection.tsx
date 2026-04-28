import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
        // Using Google News RSS for agribusiness in Pernambuco/Northeast
        const rssUrl = "https://news.google.com/rss/search?q=agroneg%C3%B3cio+Pernambuco+OR+Nordeste&hl=pt-BR&gl=BR&ceid=BR:pt-419";
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();
        if (data.status === 'ok') {
          // Google News sometimes includes source in title like "Title - Source"
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
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">— Notícias —</p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-5xl">
            Atualizações em <span className="italic text-gold">Tempo Real</span>.
          </h2>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
          <p className="mt-8 text-base leading-relaxed text-velvet/60 md:text-lg max-w-2xl mx-auto">
            Acompanhe as últimas notícias do agronegócio do Brasil e do Nordeste.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <Card className="h-full bg-white border-border/50 hover:border-gold transition-colors duration-300 shadow-lg flex flex-col">
                  {item.thumbnail && (
                    <div className="w-full h-48 overflow-hidden rounded-t-xl">
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[10px] text-gold uppercase tracking-wider font-medium">
                        {new Date(item.pubDate).toLocaleDateString('pt-BR')}
                      </div>
                      {(item as any).source && (
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
                          {(item as any).source}
                        </div>
                      )}
                    </div>
                    <CardTitle className="font-serif text-xl group-hover:text-gold transition-colors line-clamp-3 text-velvet">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-4 text-velvet/60">
                      {item.description.replace(/<[^>]+>/g, '')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
