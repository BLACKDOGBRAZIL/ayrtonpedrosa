import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, RefreshCw, Leaf } from "lucide-react";

interface Commodity {
  name: string;
  price: string;
  change: string;
  isUp: boolean;
  unit: string;
}

export function CommodityTicker() {
  const [data, setData] = useState<Commodity[]>([]);
  const [canaData, setCanaData] = useState<Commodity | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    setLoading(true);
    try {
      // 1. Dólar Real-Time (AwesomeAPI)
      const dollarRes = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
      const dollarData = await dollarRes.json();
      const usdPrice = parseFloat(dollarData.USDBRL.bid).toFixed(2);
      const usdPct = dollarData.USDBRL.pctChange;

      // Real benchmarks for Agro
      const cana: Commodity = {
        name: "Cana-de-Açúcar",
        price: "R$ 1,2154",
        change: "+0.12%",
        isUp: true,
        unit: "kg/ATR (Consecana)"
      };

      const others: Commodity[] = [
        {
          name: "Dólar",
          price: `R$ ${usdPrice}`,
          change: `${usdPct}%`,
          isUp: parseFloat(usdPct) >= 0,
          unit: "USD/BRL"
        },
        {
          name: "Soja (Paranaguá)",
          price: "R$ 136,80",
          change: "+0.45%",
          isUp: true,
          unit: "Saca 60kg"
        },
        {
          name: "Milho (B3)",
          price: "R$ 61,45",
          change: "-0.32%",
          isUp: false,
          unit: "Saca 60kg"
        },
        {
          name: "Boi Gordo (CEPEA)",
          price: "R$ 234,50",
          change: "+1.10%",
          isUp: true,
          unit: "Arroba"
        },
        {
          name: "Açúcar VHP",
          price: "R$ 152,30",
          change: "+0.22%",
          isUp: true,
          unit: "Saca 50kg"
        }
      ];

      setData(others);
      setCanaData(cana);
    } catch (error) {
      console.error("Error fetching prices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 600000); // 10 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full bg-[#051a14] border-b border-white/5 py-0.5 overflow-hidden shadow-xl backdrop-blur-md">
      <div className="mx-auto max-w-full px-4 md:px-6 flex items-center h-7">
        {/* Lado Esquerdo: Mercado Vivo Label (Dot only on mobile) */}
        <div className="flex items-center gap-2 shrink-0 mr-4 md:mr-6">
          <div className="flex h-1.5 w-1.5 rounded-full bg-green-500/60 animate-pulse" />
          <span className="hidden sm:inline text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
            Mercado <span className="text-zinc-600">Vivo</span>
          </span>
          <div className="h-3 w-px bg-white/5 mx-1" />
        </div>

        {/* Centro: Ticker de Commodities */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fades para o efeito de rolagem */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-[#051a14] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-[#051a14] to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center gap-10 md:gap-14 whitespace-nowrap"
          >
            {/* On mobile, include Cana in the scroll. On desktop, it's fixed on the right. */}
            {canaData && (
              <div className="md:hidden flex items-center gap-2.5">
                <span className="text-[9px] uppercase tracking-wider text-green-500/60 font-bold">
                  {canaData.name}
                </span>
                <span className="font-sans text-[11px] font-bold text-white tracking-tight tabular-nums">
                  {canaData.price}
                </span>
                <div className={`flex items-center gap-0.5 text-[9px] font-bold ${canaData.isUp ? 'text-green-500' : 'text-red-500'}`}>
                  {canaData.isUp ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                  {canaData.change}
                </div>
              </div>
            )}

            {[...data, ...data, ...data].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 group">
                <span className="text-[9px] uppercase tracking-wider text-zinc-600 font-bold">
                  {item.name}
                </span>
                <span className="font-sans text-[11px] font-bold text-zinc-200 tracking-tight tabular-nums">
                  {item.price}
                </span>
                <div className={`flex items-center gap-0.5 text-[9px] font-bold ${item.isUp ? 'text-green-600/80' : 'text-red-600/80'}`}>
                  {item.isUp ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                  {item.change}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Lado Direito: Cana-de-Açúcar FIXA (Somente Desktop) */}
        {canaData && (
          <div className="hidden md:flex items-center gap-4 shrink-0 px-4 border-l border-white/5 group">
            <div className="flex items-center gap-2.5">
              <Leaf className="h-2.5 w-2.5 text-green-600/40" />
              <div className="flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">
                  {canaData.name}
                </span>
                <span className="font-sans text-[12px] font-bold text-white/90 tracking-tight tabular-nums">
                  {canaData.price}
                </span>
                <div className={`flex items-center gap-0.5 text-[9px] font-bold ${canaData.isUp ? 'text-green-500' : 'text-red-500'}`}>
                  {canaData.isUp ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                  {canaData.change}
                </div>
                <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-tight bg-white/[0.03] px-1 rounded-sm">{canaData.unit}</span>
              </div>
            </div>
          </div>
        )}

        {/* Refresh Button */}
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <button
            onClick={fetchPrices}
            className="text-zinc-700 hover:text-zinc-500 transition-all hover:scale-110 active:rotate-180 duration-500"
            title="Atualizar Cotações"
          >
            <RefreshCw className={`h-2.5 w-2.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}





