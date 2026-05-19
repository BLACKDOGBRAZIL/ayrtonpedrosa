import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreVertical,
  Clock,
  MapPin,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/agenda")({
  component: DashboardAgenda,
});

function DashboardAgenda() {
  const [currentMonth, setCurrentMonth] = useState("Outubro 2026");
  const [isSyncing, setIsSyncing] = useState(false);

  const syncCalendars = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  const events = [
    {
      id: 1,
      title: "Audiência de Instrução - Caso Rural",
      time: "14:30",
      date: "25",
      type: "Judicial",
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Reunião com Perito Agrônomo",
      time: "10:00",
      date: "26",
      type: "Reunião",
      color: "bg-gold",
    },
    {
      id: 3,
      title: "Prazo: Contestação Fazenda S. José",
      time: "18:00",
      date: "28",
      type: "Prazo",
      color: "bg-blue-500",
    },
  ];

  const integrations = [
    {
      name: "Google Calendar",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
      connected: true,
    },
    {
      name: "Outlook / Microsoft",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg",
      connected: false,
    },
    {
      name: "Apple Calendar",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Ios-calendar-icon.png",
      connected: false,
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8 pb-24 lg:pb-10">
      <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xs md:max-w-none">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-velvet leading-tight">
            Agenda & <span className="italic text-gold">Prazos</span>
          </h1>
          <p className="text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70">
            Sincronização centralizada
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
          <Button
            onClick={syncCalendars}
            variant="outline"
            className="w-full sm:w-auto border-stone-200 text-stone-600 rounded-lg px-3 h-10 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[8px] sm:text-[9px] font-black hover:bg-stone-50 shrink-0"
          >
            <RefreshCw className={`h-3 w-3 ${isSyncing ? "animate-spin" : ""}`} />
            Sincronizar Tudo
          </Button>
          <Button className="w-full sm:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-3 h-10 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[8px] sm:text-[9px] font-black shadow-lg shadow-velvet/10 shrink-0">
            <Plus className="h-3.5 w-3.5" />
            Novo Evento
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Main Calendar View */}
        <div className="xl:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
            {/* Calendar Header */}
            <div className="p-3 md:p-8 border-b border-stone-50 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center justify-between sm:justify-start gap-4">
                <h2 className="text-base md:text-xl font-serif text-velvet">{currentMonth}</h2>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 hover:bg-stone-50 rounded-lg transition-colors">
                    <ChevronLeft className="h-4 w-4 text-stone-400" />
                  </button>
                  <button className="p-1.5 hover:bg-stone-50 rounded-lg transition-colors">
                    <ChevronRight className="h-4 w-4 text-stone-400" />
                  </button>
                </div>
              </div>
              <div className="flex bg-stone-50 p-1 rounded-xl w-full sm:w-fit overflow-hidden">
                <button className="flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-white text-velvet shadow-sm">
                  Mês
                </button>
                <button className="flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-velvet">
                  Semana
                </button>
                <button className="flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-velvet">
                  Dia
                </button>
              </div>
            </div>

            {/* Calendar Grid Container */}
            <div className="overflow-x-auto">
              <div className="min-w-[320px]">
                <div className="grid grid-cols-7 border-b border-stone-50">
                  {["D", "S", "T", "Q", "Q", "S", "S"].map((day) => (
                    <div
                      key={day}
                      className="py-3 text-center text-[9px] font-black uppercase tracking-widest text-stone-400"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 grid-rows-5 min-h-[400px] md:h-[600px]">
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 2;
                    const isToday = day === 24;
                    const hasEvent = [25, 26, 28].includes(day);

                    return (
                      <div
                        key={i}
                        className={`border-r border-b border-stone-50 p-1.5 md:p-3 group hover:bg-stone-50/50 transition-colors cursor-pointer relative ${i % 7 === 6 ? "border-r-0" : ""}`}
                      >
                        <div className="flex flex-col h-full">
                          <span
                            className={`text-[10px] md:text-xs font-bold mb-1 ${day > 0 && day <= 31 ? (isToday ? "text-white bg-gold h-5 w-5 md:h-6 md:w-6 flex items-center justify-center rounded-full" : "text-stone-400 group-hover:text-velvet") : "text-stone-100"}`}
                          >
                            {day > 0 && day <= 31 ? day : ""}
                          </span>
                          {day > 0 && day <= 31 && hasEvent && (
                            <div className="flex-1 flex flex-col justify-end">
                              {events
                                .filter((e) => e.date === String(day))
                                .map((event) => (
                                  <div key={event.id} className="group/event relative">
                                    <div
                                      className={`h-1 md:h-1.5 w-full rounded-full ${event.color} mb-0.5 opacity-60 group-hover:opacity-100 transition-opacity`}
                                    />
                                    <div className="hidden md:block text-[8px] font-bold text-stone-600 truncate uppercase tracking-tighter mb-1">
                                      {event.title}
                                    </div>
                                    {/* Mobile Tooltip/Indicator */}
                                    <div className="md:hidden absolute -top-1 right-0 h-1.5 w-1.5 rounded-full bg-white border border-stone-200" />
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Calendar Legend - Mobile Reference */}
            <div className="p-4 border-t border-stone-50 bg-stone-50/20 flex flex-wrap gap-4 items-center justify-center">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-[9px] font-black text-stone-500 uppercase tracking-widest">
                  Judicial
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-[9px] font-black text-stone-500 uppercase tracking-widest">
                  Reunião
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-[9px] font-black text-stone-500 uppercase tracking-widest">
                  Prazo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Sync & Details */}
        <div className="xl:col-span-4 space-y-8">
          {/* Calendar Sync Card */}
          <div className="bg-velvet rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-velvet/20">
            <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl mb-2">
                Sincronizar <span className="italic text-gold">Calendários</span>
              </h3>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-8">
                Centralize sua agenda externa
              </p>

              <div className="space-y-4">
                {integrations.map((app) => (
                  <div
                    key={app.name}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={app.icon} alt={app.name} className="h-6 w-6" />
                      <span className="text-xs font-bold uppercase tracking-wider">{app.name}</span>
                    </div>
                    {app.connected ? (
                      <span className="text-[8px] bg-green-500/20 text-green-400 font-black uppercase tracking-widest px-2 py-1 rounded-md">
                        Ativo
                      </span>
                    ) : (
                      <span className="text-[8px] text-white/40 group-hover:text-gold transition-colors font-black uppercase tracking-widest">
                        Conectar
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gold/10 rounded-2xl border border-gold/20 flex items-start gap-3">
                <AlertCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <p className="text-[10px] text-gold/80 leading-relaxed font-bold uppercase tracking-tight">
                  Seus prazos processuais são automaticamente sincronizados com o PJe e bases
                  tribunais.
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Events List */}
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-stone-50">
              <h3 className="font-serif text-lg text-velvet">
                Próximos <span className="italic text-gold">Compromissos</span>
              </h3>
            </div>
            <div className="p-4 space-y-2">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-4 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100 group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div
                        className={`h-10 w-10 shrink-0 rounded-xl ${event.color} flex flex-col items-center justify-center text-white`}
                      >
                        <span className="text-[10px] font-bold uppercase leading-none opacity-60">
                          Out
                        </span>
                        <span className="text-sm font-black leading-none mt-1">{event.date}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-velvet group-hover:text-gold transition-colors">
                          {event.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5">
                          <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-stone-500">
                            <Clock className="h-3 w-3 text-gold/60" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-stone-500">
                            <MapPin className="h-3 w-3 text-gold/60" />
                            Virtual / Fórum
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="text-stone-300 hover:text-velvet transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
