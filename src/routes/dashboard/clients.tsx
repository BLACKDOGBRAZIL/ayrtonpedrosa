import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  Users,
  Search,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  ArrowUpRight,
  Filter
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/dashboard/clients')({
  component: DashboardClients,
})

function DashboardClients() {
  const clients = [
    { name: 'João Batista da Silva', type: 'Pessoa Física', status: 'Ativo', cases: 3, lastContact: '2 dias atrás', avatar: 'JB' },
    { name: 'Fazenda Boa Esperança Ltda', type: 'Pessoa Jurídica', status: 'Ativo', cases: 1, lastContact: '5 dias atrás', avatar: 'FB' },
    { name: 'Maria do Carmo Santos', type: 'Pessoa Física', status: 'Inativo', cases: 0, lastContact: '1 mês atrás', avatar: 'MS' },
    { name: 'Cooperativa Agro Rural', type: 'Pessoa Jurídica', status: 'Ativo', cases: 5, lastContact: 'Hoje', avatar: 'CA' },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      <header className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xs md:max-w-none">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-velvet leading-tight">
            Gestão de <span className="italic text-gold">Clientes</span>
          </h1>
          <p className="text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70">Base de relacionamentos estratégica</p>
        </div>
        <Button className="w-full md:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-6 h-11 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[9px] font-black shadow-lg shadow-velvet/10">
          <Plus className="h-3.5 w-3.5" />
          Novo Cliente
        </Button>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-2xl border border-stone-100 shadow-sm gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 flex-1">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
            <input
              type="text"
              placeholder="Buscar por nome, CPF/CNPJ..."
              className="w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-11 text-xs text-velvet placeholder:text-stone-500 focus:bg-white outline-none"
            />
          </div>
          <button className="flex w-full md:w-auto items-center justify-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-stone-500 hover:text-velvet transition-colors md:border-r md:border-stone-100 md:pr-6">
            <Filter className="h-4 w-4" />
            Filtros
          </button>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <p className="text-[10px] text-stone-500 font-bold uppercase mr-4">Total: 124 Clientes</p>
        </div>
      </div>

      {/* Mobile Cards List - Mobile/Tablet Only */}
      <div className="xl:hidden space-y-4">
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-5 rounded-3xl border border-stone-100 shadow-sm flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-velvet/5 border border-velvet/10 flex items-center justify-center text-velvet font-bold text-xs">
                  {client.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-velvet">{client.name}</p>
                  <p className="text-[10px] text-stone-500 font-bold uppercase tracking-tight">{client.type}</p>
                </div>
              </div>
              <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-stone-50 text-stone-400">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-50">
              <div className="flex flex-col gap-1">
                <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Processos</p>
                <p className="text-xs font-bold text-velvet">{client.cases} ativos</p>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Status</p>
                <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full ${client.status === 'Ativo' ? 'bg-green-50 text-green-600' : 'bg-stone-100 text-stone-500'
                  }`}>
                  {client.status}
                </span>
              </div>
            </div>

            <Button variant="ghost" className="w-full mt-2 h-10 text-[9px] uppercase tracking-widest font-black text-gold bg-gold/5 hover:bg-gold/10">
              Ver Perfil Completo <ArrowUpRight className="ml-2 h-3 w-3" />
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Clients Table - Desktop Only */}
      <div className="hidden xl:block bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-stone-50/50 border-b border-stone-100">
            <tr>
              <th className="px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest">Cliente</th>
              <th className="px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest">Tipo</th>
              <th className="px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest">Processos</th>
              <th className="px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest">Status</th>
              <th className="px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {clients.map((client, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="group hover:bg-stone-50/50 transition-colors cursor-pointer"
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-velvet/5 border border-velvet/10 flex items-center justify-center text-velvet font-bold text-xs">
                      {client.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-velvet">{client.name}</p>
                      <p className="text-[10px] text-stone-500 font-bold uppercase tracking-tight mt-0.5">Visto em: {client.lastContact}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">{client.type}</span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-velvet">{client.cases}</span>
                    <span className="text-[10px] text-stone-400 uppercase font-bold">Processos</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-full ${client.status === 'Ativo' ? 'bg-green-50 text-green-600' : 'bg-stone-100 text-stone-500'
                    }`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-400 hover:text-gold transition-all" title="Ver Perfil">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-400 hover:text-velvet transition-all">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination placeholder */}
      <div className="p-6 border-t border-stone-50 flex items-center justify-center">
        <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Carregar mais clientes</p>
      </div>
    </div>
  )
}
