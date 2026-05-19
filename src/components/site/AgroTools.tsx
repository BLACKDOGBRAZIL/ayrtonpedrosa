import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Landmark, ShieldCheck, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AgroTools() {
  return (
    <section id="ferramentas" className="bg-white py-28 md:py-40 overflow-hidden scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold">— Inteligência Agro —</p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-6xl">
            Ferramentas <span className="italic text-gold">Estratégicas</span> para o Campo.
          </h2>
          <div className="mx-auto mt-8 h-px w-32 gold-divider" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <ITCMDCalculator />
          <CreditSimulator />
        </div>
      </div>
    </section>
  );
}

function ITCMDCalculator() {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<{ amount: number; rate: number } | null>(null);

  const formatCurrency = (val: string) => {
    const digits = val.replace(/\D/g, "");
    const amount = parseFloat(digits) / 100;
    if (isNaN(amount)) return "";
    return amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setValue(formatCurrency(rawValue));
  };

  const calculate = () => {
    const numValue = parseFloat(value.replace(/\./g, "").replace(",", ".")) || 0;

    // Alíquotas Progressivas PE (Exemplo Pernambuco)
    let rate = 0;
    if (numValue <= 200000) rate = 0.02;
    else if (numValue <= 400000) rate = 0.04;
    else if (numValue <= 800000) rate = 0.06;
    else rate = 0.08;

    setResult({ amount: numValue * rate, rate: rate * 100 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-cream p-8 md:p-12 shadow-xl border border-stone-100 flex flex-col"
    >
      <div className="flex-1">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-velvet text-gold mb-8 shadow-lg shadow-velvet/20">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h3 className="font-serif text-3xl font-medium text-velvet">Simulador de ITCMD</h3>
        <p className="mt-4 text-velvet/60 text-sm leading-relaxed">
          Estime o custo tributário da sucessão patrimonial rural com base nas alíquotas
          progressivas estaduais.
        </p>

        <div className="mt-10 space-y-6">
          <div className="space-y-3">
            <Label className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
              Valor Total do Patrimônio (R$)
            </Label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-velvet/40 font-sans font-bold">
                R$
              </span>
              <Input
                type="text"
                placeholder="0,00"
                className="bg-white border-stone-200 h-16 pl-12 text-2xl font-sans font-bold text-velvet focus:border-gold focus:ring-gold transition-all"
                value={value}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <Button
            onClick={calculate}
            className="w-full bg-velvet hover:bg-velvet/90 text-white h-14 text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-velvet/10"
          >
            Calcular Imposto Estimado
          </Button>
        </div>
      </div>

      {result !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 p-8 rounded-2xl bg-white border-l-4 border-gold shadow-md"
        >
          <div className="flex justify-between items-center">
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
              Imposto Estimado ({result.rate}%)
            </p>
            <span className="text-[9px] bg-gold/10 text-gold px-2 py-0.5 rounded-full font-bold">
              Alíquota Progressiva
            </span>
          </div>
          <p className="text-4xl font-sans font-black text-velvet mt-2 tracking-tight">
            {result.amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
          <div className="mt-6 flex items-start gap-3 p-4 bg-gold/5 rounded-xl border border-gold/10">
            <Info className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <p className="text-xs text-velvet/80 leading-relaxed">
              Com uma <span className="font-bold text-velvet">Holding Rural</span>, esse valor pode
              ser reduzido em até <span className="text-gold font-bold">90%</span> através de
              planejamento sucessório estratégico.
            </p>
          </div>
        </motion.div>
      )}

      <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-2 text-[9px] text-stone-400 uppercase tracking-widest font-bold">
        <Landmark className="h-3 w-3 opacity-50" />
        Fonte: Lei Estadual nº 13.974 (PE) / SEFAZ-PE
      </div>
    </motion.div>
  );
}

function CreditSimulator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("8.5");
  const [years, setYears] = useState("5");
  const [total, setTotal] = useState<number | null>(null);

  const formatCurrency = (val: string) => {
    const digits = val.replace(/\D/g, "");
    const amount = parseFloat(digits) / 100;
    if (isNaN(amount)) return "";
    return amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(formatCurrency(e.target.value));
  };

  const calculate = () => {
    const p = parseFloat(amount.replace(/\./g, "").replace(",", ".")) || 0;
    const i = parseFloat(rate) / 100;
    const n = parseInt(years);

    // Cálculo Simples de Viabilidade (Montante Final)
    const m = p * Math.pow(1 + i, n);
    setTotal(m);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-velvet p-8 md:p-12 shadow-2xl border border-white/5 text-white flex flex-col"
    >
      <div className="flex-1">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-velvet mb-8 shadow-xl shadow-gold/10">
          <Landmark className="h-7 w-7" />
        </div>
        <h3 className="font-serif text-3xl font-medium text-white">Simulador de Crédito Rural</h3>
        <p className="mt-4 text-white/60 text-sm leading-relaxed">
          Simule as condições de financiamento e impacto de juros para sua safra ou investimento.
        </p>

        <div className="mt-10 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label className="text-[10px] uppercase tracking-widest text-gold/80 font-bold">
                Taxa Anual (%)
              </Label>
              <Input
                className="bg-white/10 border-white/20 text-white h-12 font-sans font-bold focus:bg-white/20"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <Label className="text-[10px] uppercase tracking-widest text-gold/80 font-bold">
                Prazo (Anos)
              </Label>
              <Input
                className="bg-white/10 border-white/20 text-white h-12 font-sans font-bold focus:bg-white/20"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-3">
            <Label className="text-[10px] uppercase tracking-widest text-gold/80 font-bold">
              Valor do Crédito (R$)
            </Label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-sans font-bold">
                R$
              </span>
              <Input
                placeholder="0,00"
                className="bg-white/10 border-white/20 text-white h-16 pl-12 text-2xl font-sans font-bold focus:bg-white/20 focus:border-gold transition-all"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>

          <Button
            onClick={calculate}
            className="w-full bg-gold hover:bg-white text-velvet h-14 text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg shadow-gold/10"
          >
            Simular Viabilidade
          </Button>
        </div>
      </div>

      {total !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
            Montante Total Final
          </p>
          <p className="text-4xl font-sans font-black text-gold mt-2 tracking-tight">
            {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
          <div className="mt-6 flex items-center justify-between text-[10px] text-white/60 border-t border-white/10 pt-4 uppercase tracking-widest">
            <span>Custo Total do Juro:</span>
            <span className="font-sans font-bold text-white text-sm">
              {(
                total - (parseFloat(amount.replace(/\./g, "").replace(",", ".")) || 0)
              ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          </div>
        </motion.div>
      )}

      <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-[9px] text-white/30 uppercase tracking-widest font-bold">
        <Calculator className="h-3 w-3 opacity-50" />
        Fonte: Plano Safra / Banco Central do Brasil
      </div>
    </motion.div>
  );
}
