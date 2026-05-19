import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login
    if (email && password) {
      navigate({ to: "/dashboard" });
    }
  };

  return (
    <div className="min-h-screen bg-[#051a14] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-green-900/10 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 mb-6 shadow-xl">
            <ShieldCheck className="h-8 w-8 text-gold" />
          </div>
          <h1 className="font-serif text-3xl text-white mb-2 tracking-tight">
            Portal do <span className="italic text-gold">Advogado</span>
          </h1>
          <p className="text-zinc-400 text-sm">Escritório Digital Ayrton Pedrosa</p>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">
                E-mail Profissional
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <Input
                  type="email"
                  placeholder="exemplo@adv.br"
                  className="bg-white/5 border-white/10 h-14 pl-12 text-white focus:bg-white/10 focus:border-gold/50 transition-all rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/5 border-white/10 h-14 pl-12 text-white focus:bg-white/10 focus:border-gold/50 transition-all rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/10 bg-white/5 accent-gold"
                />
                <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  Lembrar acesso
                </span>
              </label>
              <button
                type="button"
                className="text-xs text-gold/80 hover:text-gold transition-colors"
              >
                Esqueceu a senha?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full h-14 bg-gold hover:bg-white text-velvet font-bold uppercase tracking-[0.2em] text-xs rounded-xl shadow-lg shadow-gold/10 transition-all group"
            >
              Entrar no Escritório
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>

        <p className="mt-8 text-center text-zinc-600 text-xs uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} Ayrton Pedrosa Advocacia. Todos os direitos reservados.
        </p>
      </motion.div>
    </div>
  );
}
