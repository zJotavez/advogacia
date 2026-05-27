import { motion } from "motion/react";
import { Award, Briefcase, ChevronRight, Scale, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export function Sobre() {
  return (
    <div className="pt-36 pb-24 min-h-screen bg-brand-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Nossa História</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extralight text-white max-w-5xl leading-[1.1] text-balance">
            Compromisso inabalável com a <br/>
            <span className="font-serif italic font-light text-gold-500">verdade e a excelência.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-[15px] text-cashmere-500/80 leading-relaxed font-light font-sans"
          >
            <p>
              Sob a liderança da advogada sócia-fundadora <strong className="text-white font-medium">Dra. Wellem Dias</strong>, a Dias Advocacia consolidou-se como uma banca jurídica boutique de alta performance, pautada por uma ética intransigente, rigor metodológico e acompanhamento próximo de cada caso.
            </p>
            <p>
              Com sede em Campina Grande/PB, nossa condução jurídica é pautada por quatro passos fundamentais: primeiro, compreendemos a complexidade do problema; segundo, desenhamos a estratégia processual ou consultiva sob medida; terceiro, executamos com registro minucioso; e, por fim, mantemos uma comunicação totalmente clara e transparente em tempo real com nossos clientes.
            </p>
            <p>
              Operamos em regime de alta especialização nas áreas de Direito Empresarial, Planejamento Patrimonial, Direito de Família, Previdenciário, Trabalhista e Direito Bancário. Nosso compromisso é entregar eficiência, precisão e soluções jurídicas altamente responsáveis para preservar e defender os interesses de nossos representados.
            </p>
            
            <div className="pt-8 border-t border-white/5 mt-8 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                <p className="text-xs text-cashmere-400 font-sans"><strong className="text-white font-medium">Método e Organização:</strong> Estratégias processuais baseadas em profundo domínio jurisprudencial e análise criteriosa de riscos.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                <p className="text-xs text-cashmere-400 font-sans"><strong className="text-white font-medium">Transparência Total:</strong> Relatórios detalhados de andamentos e acompanhamento acessível direto com os sócios.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[480px] w-full max-w-md mx-auto lg:mx-0 select-none"
          >
            {/* Imagem 1: Sala de Reunião Corporativa Luxuosa (Fundo) */}
            <div className="absolute inset-y-6 right-6 left-12 overflow-hidden border border-white/[0.04] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" 
                alt="Dias Advocacia - Sala de Conferências" 
                className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-750"
              />
            </div>

            {/* Imagem 2: Balança da Justiça e Livros Clássicos (Sobreposta na Frente) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 left-0 w-2/3 aspect-[4/3] border-[6px] border-brand-900 shadow-2xl overflow-hidden z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600" 
                alt="Dias Advocacia - Balança da Justiça" 
                className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-750"
              />
            </motion.div>

            {/* Moldura Decorativa */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-[1px] border-gold-500/20 z-0 pointer-events-none" />
          </motion.div>
        </div>

        {/* Pilares (Grid Arquitetônico) */}
        <div className="py-24 border-t border-b border-white/[0.06]">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-light text-white text-center">Nossos Pilares</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { icon: ShieldCheck, title: "Integridade Absoluta", desc: "Transparência total em todas as estratégias e comunicações com o cliente, sem falsas promessas." },
              { icon: Scale, title: "Justiça Estratégica", desc: "Abordagem focada na mitigação de riscos práticos e obtenção de ganho de causa efetivo." },
              { icon: Award, title: "Excelência Prática", desc: "Domínio jurisprudencial absoluto e atualização contínua nos mais altos tribunais do país." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 text-center flex flex-col items-center group hover:bg-white/[0.01] transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:scale-110 group-hover:border-gold-500 transition-all duration-500 mb-6">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-medium text-white mb-4">{item.title}</h3>
                <p className="text-cashmere-500/70 leading-relaxed text-sm font-light max-w-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
