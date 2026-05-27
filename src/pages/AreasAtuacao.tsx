import { motion } from "motion/react";
import { ArrowRight, Briefcase, Landmark, Scale, FileText, HeartHandshake, Building2, ShieldAlert, Coins } from "lucide-react";

export function AreasAtuacao() {
  const areas = [
    { 
      id: 1, 
      icon: Building2, 
      title: "Direito Empresarial", 
      desc: "Consultoria corporativa preventiva, estruturação societária, compliance, governança e contratos estratégicos.",
      bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5583998442989?text=Ol%C3%A1%2C%20Dr.%20Erick%20Hato.%20Gostaria%20de%20um%20atendimento%20jur%C3%ADdico%20especializado%20em%20Direito%20Empresarial."
    },
    { 
      id: 2, 
      icon: Landmark, 
      title: "Regularização Imobiliária", 
      desc: "Regularizações de imóveis urbanos e rurais, auditoria de riscos documentais e segurança nas transações imobiliárias.",
      bg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5583998442989?text=Ol%C3%A1%2C%20Dr.%20Erick%20Hato.%20Gostaria%20de%20um%20atendimento%20jur%C3%ADdico%20especializado%20em%20Regulariza%C3%A7%C3%A3o%20Imobili%C3%A1ria."
    },
    { 
      id: 3, 
      icon: Coins, 
      title: "Direito Bancário & Juros Abusivos", 
      desc: "Revisão judicial de contratos bancários abusivos, suspensão de leilões e repactuação de dívidas de alta complexidade.",
      bg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5583998442989?text=Ol%C3%A1%2C%20Dr.%20Vinicius%20Oliveira.%20Gostaria%20de%20uma%20consulta%20sobre%20Direito%20Banc%C3%A1rio%20e%20Revis%C3%A3o%20de%20Juros%20Abusivos."
    },
    { 
      id: 4, 
      icon: HeartHandshake, 
      title: "Direito de Família", 
      desc: "Sucessões, partilha patrimonial, inventários rápidos, divórcios consensuais e litígios com máximo sigilo e respeito.",
      bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5583998442989?text=Ol%C3%A1%2C%20Dra.%20Caroliny%20Alves.%20Gostaria%20de%20agendar%20um%20atendimento%20sobre%20Direito%20de%20Fam%C3%ADlia."
    },
    { 
      id: 5, 
      icon: FileText, 
      title: "Previdenciário & Aposentadorias", 
      desc: "Planejamento previdenciário, concessão de aposentadorias de regimes diversos e benefícios assistenciais no INSS.",
      bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5583998442989?text=Ol%C3%A1%2C%20Dra.%20Caroliny%20Alves.%20Gostaria%20de%20agendar%20um%20atendimento%20sobre%20Aposentadoria%20e%20Benef%C3%ADcios%20Previdenci%C3%A1rios."
    },
    { 
      id: 6, 
      icon: Scale, 
      title: "Defesa Criminal Especializada", 
      desc: "Atuação criminal contundente nos tribunais estaduais e federais, e assistência especializada completa a vítimas.",
      bg: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5583998442989?text=Ol%C3%A1%2C%20Dr.%20Erick%20Hato.%20Gostaria%20de%20uma%20consulta%20estrat%C3%A9gica%20em%20Defesa%20Criminal."
    },
  ];

  return (
    <div className="pt-36 pb-24 min-h-screen bg-brand-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Especialidades</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white max-w-4xl leading-[1.1] text-balance">
            Soluções jurídicas <span className="font-serif italic text-gold-500 font-light">precisas & robustas.</span>
          </h1>
        </motion.div>

        {/* Architectural Outline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/[0.06]">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 border-b border-r border-white/[0.06] bg-transparent hover:bg-white/[0.01] transition-all duration-700 block h-full flex flex-col justify-between min-h-[320px] overflow-hidden"
            >
              {/* Background Image of the Card */}
              <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                <img 
                  src={area.bg} 
                  alt={area.title} 
                  className="w-full h-full object-cover grayscale opacity-[0.03] group-hover:opacity-[0.16] transition-opacity duration-700" 
                />
              </div>
              {/* Dark safety gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 via-brand-900/95 to-brand-900 z-10" />

              <div className="relative z-20 mb-8">
                <div className="w-12 h-12 bg-transparent flex items-center mb-6 text-gold-500">
                  <area.icon size={26} strokeWidth={1} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-gold-500 transition-colors duration-500">
                  {area.title}
                </h3>
                <p className="text-cashmere-500/70 text-[13px] leading-relaxed font-light text-justify">
                  {area.desc}
                </p>
              </div>

              <div className="relative z-20 flex items-center justify-between mt-auto pt-6 border-t border-white/[0.03]">
                <a 
                  href={area.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cashmere-400 group-hover:text-gold-500 transition-colors duration-500"
                >
                  Agendar Consulta
                </a>
                <a 
                  href={area.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-brand-900 transition-all duration-500"
                >
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
