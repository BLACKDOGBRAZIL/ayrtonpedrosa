import portrait from "@/assets/portrait-ayrton.jpg";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] uppercase tracking-widest text-gold">— O Escritório —</p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-6xl">
            Advocacia <span className="text-gold">sob medida</span> para <span className="text-gold">decisões complexas</span>.
          </h2>
          <div className="mx-auto mt-8 h-px w-24 bg-gold/50" />
        </motion.div>

        <div className="mt-20 grid items-center gap-16 md:grid-cols-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold/60" />
              <img
                src={portrait}
                alt="Ayrton Pedrosa, advogado especialista"
                width={896}
                height={1152}
                loading="lazy"
                className="relative aspect-[4/5] w-full object-cover object-top shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-8 border-t border-gold/20">
                <p className="font-serif text-2xl font-medium text-velvet">Dr. Ayrton Pedrosa</p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-gold">Advogado · OAB/PE 35.952</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:col-span-7"
          >
            <h3 className="font-serif text-2xl font-medium text-velvet md:text-4xl leading-tight">
              Atuação Estratégica e Exclusiva.
            </h3>
            <p className="mt-8 text-base leading-[2] text-velvet/80 md:text-xl font-light">
              O escritório Ayrton Pedrosa Advocacia fundamenta sua prática no rigor técnico e na discrição absoluta. Nossa missão é prover segurança jurídica por meio da antecipação de riscos, consolidando estratégias robustas que protegem o patrimônio e viabilizam os negócios de nossos clientes.
            </p>
            <p className="mt-6 text-base leading-[2] text-velvet/70 md:text-lg">
              Em um cenário corporativo dinâmico, entregamos uma advocacia consultiva e contenciosa de alta performance. Tratamos cada caso com profunda dedicação institucional, garantindo a agilidade e o direcionamento preciso que a complexidade do mercado moderno exige.
            </p>

            <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="h-px flex-1 bg-gold/20" />
              <div className="flex flex-col">
                <span className="font-serif text-xl italic text-gold">Ayrton Pedrosa</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-velvet/40 mt-1">Sócio Fundador</span>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
