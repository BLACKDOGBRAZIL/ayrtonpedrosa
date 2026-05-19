import { createFileRoute, Outlet, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  LogOut,
  Search,
  Bell,
  PlusCircle,
  Globe,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const sidebarItems = [
    { id: "overview", name: "Painel", icon: LayoutDashboard, path: "/dashboard" },
    { id: "clients", name: "Clientes", icon: Users, path: "/dashboard/clients" },
    { id: "agenda", name: "Agenda", icon: Calendar, path: "/dashboard/agenda" },
    { id: "cases", name: "Processos", icon: FileText, path: "/dashboard/cases" },
  ];

  return (
    <div className="flex h-screen bg-[#fcfaf7] overflow-hidden">
      {/* Sidebar - Desktop Only */}
      <aside className="hidden xl:flex w-72 bg-velvet text-white flex-col border-r border-white/5">
        <div className="p-8">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-widest text-white">
              Ayrton <span className="text-gold">Pedrosa</span>
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-white/40">
              Escritório Digital
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all group ${
                  activeTab === item.id
                    ? "bg-gold text-velvet shadow-lg shadow-gold/20"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon
                  className={`h-5 w-5 ${activeTab === item.id ? "text-velvet" : "text-white/30 group-hover:text-white"}`}
                />
                <span className="text-[13px] font-bold uppercase tracking-wider">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5 space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 w-full text-white/60 hover:text-gold transition-colors group border border-white/5 rounded-xl hover:bg-white/5"
          >
            <Globe className="h-5 w-5 opacity-40 group-hover:opacity-100" />
            <span className="text-xs uppercase tracking-widest font-bold">Voltar ao Site</span>
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 w-full text-white/40 hover:text-white transition-colors group">
            <Settings className="h-5 w-5 opacity-40 group-hover:opacity-100" />
            <span className="text-xs uppercase tracking-widest font-bold">Configurações</span>
          </button>
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 w-full text-red-400/60 hover:text-red-400 transition-colors group"
          >
            <LogOut className="h-5 w-5 opacity-40 group-hover:opacity-100" />
            <span className="text-xs uppercase tracking-widest font-bold">Sair</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden pb-16 xl:pb-0">
        {/* Topbar */}
        <header className="h-16 xl:h-20 bg-white border-b border-stone-100 flex items-center justify-between px-4 xl:px-10 shrink-0 z-20">
          <div className="flex items-center gap-3 xl:gap-4 flex-1 min-w-0">
            <div className="xl:hidden shrink-0">
              <Link
                to="/"
                className="flex items-center gap-1.5 bg-gold/10 px-2 py-1.5 rounded-lg border border-gold/20"
              >
                <Globe className="h-3.5 w-3.5 text-gold" />
                <span className="font-sans text-[9px] font-black text-velvet uppercase tracking-widest hidden sm:block">
                  Site
                </span>
              </Link>
            </div>
            <div className="relative flex-1 max-w-[200px] xl:max-w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-1.5 pl-9 text-xs text-velvet placeholder:text-stone-400 focus:bg-white focus:ring-1 focus:ring-gold/30 transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 xl:gap-6 ml-3 shrink-0">
            <button className="h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center rounded-lg hover:bg-stone-50 transition-colors relative">
              <Bell className="h-4 w-4 xl:h-5 xl:w-5 text-stone-400" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-gold rounded-full border border-white" />
            </button>
            <div className="hidden xl:block h-8 w-px bg-stone-100 mx-2" />
            <div className="flex items-center gap-2 xl:gap-3">
              <div className="hidden xl:block text-right">
                <p className="text-xs font-bold text-velvet uppercase tracking-wider">
                  Dr. Ayrton Pedrosa
                </p>
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-tight">
                  OAB/PE 35.952
                </p>
              </div>
              <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-[10px] xl:text-xs">AP</span>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-stone-50/50 p-4 sm:p-6 xl:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto pb-10">
            <Outlet />
          </div>
        </div>

        {/* Bottom Navigation - Mobile Only */}
        <nav className="xl:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-stone-100 px-2 py-2.5 flex items-center justify-around z-50 shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.05)]">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex flex-col items-center gap-1.5 px-2 py-1 min-w-[70px] transition-all ${
                  isActive ? "text-gold" : "text-stone-400"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <div
                  className={`p-1.5 rounded-xl transition-all duration-300 ${isActive ? "bg-gold/10 scale-110" : ""}`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
                </div>
                <span
                  className={`text-[9px] font-black uppercase tracking-widest text-center transition-all ${isActive ? "opacity-100" : "opacity-60"}`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </main>
    </div>
  );
}
