import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Clock,
  TrendingUp,
  Plus,
  PlusCircle,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardOverview,
});

function DashboardOverview() {
  const stats = [
    {
      name: "Clientes Ativos",
      value: "5",
      icon: Users,
      change: "+2 este mês",
      color: "bg-blue-500",
    },
    {
      name: "Processos em Curso",
      value: "128",
      icon: FileText,
      change: "+12 este mês",
      color: "bg-gold",
    },
    {
      name: "Prazos Próximos",
      value: "7",
      icon: Clock,
      change: "Próximos 7 dias",
      color: "bg-red-500",
    },
    {
      name: "Taxa de Êxito",
      value: "92%",
      icon: TrendingUp,
      change: "Últimos 12 meses",
      color: "bg-green-500",
    },
  ];

  const upcomingDeadlines = [
    {
      title: "Contestação - Caso Silva vs. União",
      date: "Amanhã, 14:00",
      type: "Prazo Judicial",
      priority: "High",
    },
    {
      title: "Audiência de Conciliação - Fazenda Boa Vista",
      date: "25 Out, 09:30",
      type: "Audiência",
      priority: "Medium",
    },
    {
      title: "Entrega de Laudo Pericial - Inventário Santos",
      date: "27 Out, 18:00",
      type: "Prazo",
      priority: "Medium",
    },
  ];

  return (
    <div className="space-y-6 md:space-y-10">
      <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xs md:max-w-none">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-velvet leading-tight">
            Bem-vindo, <span className="italic text-gold">Dr. Ayrton</span>
          </h1>
          <p className="text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70">
            Resumo da sua banca hoje
          </p>
        </div>
        <Button className="w-full md:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-6 h-11 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[9px] font-black shadow-lg shadow-velvet/10">
          <Plus className="h-3.5 w-3.5" />
          Novo Processo
        </Button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`h-12 w-12 rounded-2xl ${stat.color}/10 flex items-center justify-center`}
                >
                  <Icon className={`h-6 w-6 ${stat.color.replace("bg-", "text-")}`} />
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                {stat.name}
              </p>
              <p className="text-3xl font-sans font-black text-velvet mt-1">{stat.value}</p>
              <p className="text-[10px] text-stone-500 mt-2 font-bold uppercase tracking-tight">
                {stat.change}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Deadlines */}
        <div className="xl:col-span-2 bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-stone-50 flex items-center justify-between">
            <h3 className="font-serif text-xl text-velvet">
              Prazos & <span className="italic text-gold">Audiências</span>
            </h3>
            <button className="text-[10px] uppercase tracking-widest text-gold font-bold hover:underline">
              Ver Agenda Completa
            </button>
          </div>
          <div className="p-2">
            {upcomingDeadlines.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-6 hover:bg-stone-50 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center ${item.priority === "High" ? "bg-red-50" : "bg-stone-100"}`}
                  >
                    <CalendarIcon
                      className={`h-5 w-5 ${item.priority === "High" ? "text-red-500" : "text-stone-400"}`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-velvet">{item.title}</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mt-1">
                      {item.type} • {item.date}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-stone-200 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Clients */}
        <div className="bg-velvet rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-velvet/20">
          <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <h3 className="font-serif text-2xl mb-6">
            Atalhos <span className="italic text-gold">Rápidos</span>
          </h3>
          <div className="space-y-4 relative z-10">
            <button className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group">
              <Users className="h-5 w-5 opacity-60 group-hover:opacity-100" />
              <span className="text-xs uppercase tracking-widest font-bold">
                Cadastrar Novo Cliente
              </span>
            </button>
            <button className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group">
              <PlusCircle className="h-5 w-5 opacity-40 group-hover:opacity-100" />
              <span className="text-xs uppercase tracking-widest font-bold">
                Enviar Assets do Processo
              </span>
            </button>
            <button className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group">
              <FileText className="h-5 w-5 opacity-40 group-hover:opacity-100" />
              <span className="text-xs uppercase tracking-widest font-bold">
                Gerar Relatório de Status
              </span>
            </button>
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4">
              Acesso Rápido
            </p>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-velvet bg-stone-700 flex items-center justify-center text-[10px] font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="h-8 w-8 rounded-full border-2 border-velvet bg-gold flex items-center justify-center text-[10px] font-bold text-velvet">
                +12
              </div>
            </div>
            <p className="text-[10px] text-white/60 mt-4 uppercase tracking-widest font-bold">
              Clientes visualizados recentemente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
