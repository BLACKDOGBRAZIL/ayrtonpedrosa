import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Plus,
  Folder,
  ArrowUpRight,
  MoreVertical,
  Paperclip,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/cases")({
  component: DashboardCases,
});

function DashboardCases() {
  const cases = [
    {
      id: "0012345-67.2026.8.17.0001",
      client: "Fazenda Boa Esperança",
      subject: "Reintegração de Posse",
      status: "Em Instrução",
      date: "12 Out 2026",
      files: 12,
    },
    {
      id: "0098765-43.2026.8.17.0001",
      client: "João Batista da Silva",
      subject: "Inventário e Partilha",
      status: "Aguardando Sentença",
      date: "05 Out 2026",
      files: 24,
    },
    {
      id: "0044556-89.2026.8.17.0001",
      client: "Cooperativa Agro Rural",
      subject: "Defesa Ambiental / CPR",
      status: "Petição Inicial",
      date: "20 Out 2026",
      files: 5,
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xs md:max-w-none">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-velvet leading-tight">
            Gestão de <span className="italic text-gold">Processos</span>
          </h1>
          <p className="text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70">
            Controle de ativos jurídicos digitais
          </p>
        </div>
        <Button className="w-full md:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-6 h-11 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[9px] font-black shadow-lg shadow-velvet/10">
          <Plus className="h-3.5 w-3.5" />
          Novo Processo
        </Button>
      </header>

      {/* Stats Mini Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
            Total de Processos
          </p>
          <p className="text-2xl font-sans font-black text-velvet mt-1">128</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
            Petições Pendentes
          </p>
          <p className="text-2xl font-sans font-black text-gold mt-1">14</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm sm:col-span-2 lg:col-span-1">
          <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
            Documentos Armazenados
          </p>
          <p className="text-2xl font-sans font-black text-velvet mt-1">1.2k</p>
        </div>
      </div>

      {/* Cases List */}
      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-stone-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
            <input
              type="text"
              placeholder="Número, Cliente ou Assunto..."
              className="w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-12 text-sm text-velvet placeholder:text-stone-500 focus:bg-white outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex-1 md:flex-none p-2.5 hover:bg-stone-50 rounded-xl text-stone-400 transition-colors border border-stone-100 flex justify-center">
              <Folder className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="divide-y divide-stone-50">
          {cases.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-8 hover:bg-stone-50/50 transition-colors cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-sans font-bold bg-stone-100 text-stone-500 px-3 py-1 rounded-full uppercase tracking-wider">
                    {c.id}
                  </span>
                  <span className="text-[9px] font-sans font-bold bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider">
                    {c.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-auto md:ml-0">
                  <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-stone-100 shadow-sm text-stone-400 hover:text-gold transition-all">
                    <Paperclip className="h-4 w-4" />
                  </button>
                  <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-stone-100 shadow-sm text-stone-400 hover:text-velvet transition-all">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="text-lg md:text-xl font-serif text-velvet group-hover:text-gold transition-colors leading-tight">
                    {c.subject}
                  </h4>
                  <p className="text-xs font-bold text-stone-500 mt-2 uppercase tracking-widest">
                    {c.client}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 md:gap-12">
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                    <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">
                      Movimentação
                    </p>
                    <div className="flex items-center gap-2 text-stone-600">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="text-xs font-bold">{c.date}</span>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                    <p className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">
                      Arquivos
                    </p>
                    <div className="flex items-center gap-2 text-stone-600">
                      <Paperclip className="h-3.5 w-3.5" />
                      <span className="text-xs font-bold">{c.files} docs</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-velvet text-white items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-velvet/20">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
