import { motion } from "motion/react";
import { Linkedin, Mail, Phone } from "lucide-react";

export function Advogados() {
  const team = [
    {
      id: "wellem",
      name: "Dra. Wellem Dias",
      role: "Fundadora • Diretora Executiva",
      oab: "OAB/PB: 30.120",
      spec: "Direito Empresarial, Direito de Família e Planejamento Patrimonial",
      image: "/wellem_dias.jpg",
      bio: "Advogada fundadora e diretora da Dias Advocacia. Especialista em Direito Empresarial, Governança Corporativa e Planejamento Patrimonial e Sucessório. Lidera a banca com uma visão moderna e focada em resultados ágeis, seguros e transparentes, garantindo proteção jurídica completa aos clientes.",
      whatsapp: "https://wa.me/5583998765432?text=Ol%C3%A1%2C%20Dra.%20Wellem%20Dias.%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica%20estrat%C3%A9gica."
    },
    {
      id: "ana",
      name: "Dra. Ana Beatriz",
      role: "Advogada Associada Sênior",
      oab: "OAB/PB: 35.412",
      spec: "Direito de Família e Previdenciário (Aposentadorias & Benefícios)",
      image: "/ana_beatriz.jpg",
      bio: "Especialista em Direito de Família e Previdenciário. Dedicada a oferecer acompanhamento próximo, humanizado e extremamente técnico em divórcios, inventários ágeis, partilhas de bens e na concessão estratégica de benefícios previdenciários e assistenciais.",
      whatsapp: "https://wa.me/5583998765432?text=Ol%C3%A1%2C%20Dra.%20Ana%20Beatriz.%20Gostaria%20de%20conversar%20sobre%20Direito%20de%20Fam%C3%ADlia%20%2F%20Previdenci%C3%A1rio."
    },
    {
      id: "joao",
      name: "Dr. João Victor",
      role: "Advogado Associado Sênior",
      oab: "OAB/PB: 36.890",
      spec: "Direito Trabalhista, Propriedade Intelectual e Direito Bancário",
      image: "/joao_victor.jpg",
      bio: "Especialista em Direito Trabalhista, Propriedade Intelectual e Direito Bancário. Focando na mitigação de riscos contratuais, na repactuação inteligente de dívidas e na proteção de ativos intelectuais, marcas e patentes com agilidade e combatividade.",
      whatsapp: "https://wa.me/5583998765432?text=Ol%C3%A1%2C%20Dr.%20Jo%C3%A3o%20Victor.%20Gostaria%20de%20uma%20consulta%20estrat%C3%A9gica."
    }
  ];

  return (
    <div className="pt-36 pb-24 min-h-screen bg-brand-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header da Banca */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Nosso Corpo Jurídico</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white max-w-4xl leading-[1.1] text-balance">
            Corpo jurídico de elite focado em <span className="font-serif italic text-gold-500 font-light">soluções precisas.</span>
          </h1>
        </motion.div>

        {/* Liderança e Método de Trabalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 p-8 md:p-12 border border-gold-500/10 bg-brand-800 relative"
        >
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-brand-900 px-4 text-gold-500 font-display font-light tracking-[0.2em] text-xs uppercase">
            Nossa Condução e Método
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Foto dos 3 Advogados (Equipe) */}
            <div className="lg:col-span-4 aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden border border-white/5 relative group shrink-0">
              <img 
                src="/equipe.jpg" 
                alt="Equipe Dias Advocacia" 
                className="w-full h-full object-cover object-[center_15%] grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 select-none"
              />
              <div className="absolute inset-0 bg-brand-900/10 group-hover:opacity-0 transition-opacity duration-700" />
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-2xl font-display text-white">Método, Organização e Acompanhamento Próximo</h3>
              <p className="text-cashmere-500/80 text-[13px] leading-relaxed font-light font-sans text-justify">
                Sob a liderança da advogada <strong className="text-white font-medium">Dra. Wellem Dias</strong>, nosso escritório atua com absoluto rigor metodológico. A condução de cada caso é baseada na compreensão profunda da causa, definição estratégica assertiva, execução amplamente documentada e comunicação transparente.
              </p>
            </div>
            
            <div className="lg:col-span-4 p-6 border-l border-gold-500/20 space-y-4">
              <p className="text-cashmere-300 font-serif italic text-[13px] font-light leading-relaxed">
                "Trabalhamos com ética, transparência e método. Primeiro, compreendemos o problema; depois, definimos a estratégia; em seguida, executamos com registro, acompanhamento constante e comunicação em tempo real."
              </p>
              <span className="text-[9px] uppercase tracking-widest text-gold-500 block font-semibold">— Dra. Wellem Dias, Fundadora & Diretora Executiva</span>
            </div>
          </div>
        </motion.div>

        {/* Listagem de Advogados */}
        <div className="space-y-12">
          {team.map((person, index) => (
            <motion.div
              key={person.id}
              id={person.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-transparent border border-white/[0.04] scroll-mt-28 overflow-hidden flex flex-col md:flex-row hover:bg-white/[0.01] hover:border-gold-500/20 transition-all duration-700"
            >
              {/* Imagem do Advogado */}
              <div className="w-full md:w-1/3 aspect-[4/5] md:aspect-auto relative overflow-hidden shrink-0 min-h-[350px]">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-103 transition-all duration-1000 select-none"
                />
                <div className="absolute inset-0 bg-brand-900/10 group-hover:opacity-0 transition-opacity duration-700" />
              </div>

              {/* Informações detalhadas do Advogado */}
              <div className="p-8 md:p-12 flex flex-col justify-between w-full">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                    <div>
                      <span className="text-gold-500 text-[10px] font-semibold tracking-[0.25em] uppercase mb-1 block">
                        {person.role}
                      </span>
                      <h3 className="text-3xl font-display font-medium text-white">{person.name}</h3>
                    </div>
                    <span className="text-cashmere-500/50 text-[11px] font-semibold tracking-widest uppercase bg-white/5 py-1 px-3 border border-white/5 rounded-full inline-block sm:self-center font-sans">
                      {person.oab}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-gold-500/70 font-semibold block font-sans">Especialidades e Foco de Atuação</span>
                    <p className="text-white text-base font-display font-medium leading-relaxed">{person.spec}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-gold-500/70 font-semibold block font-sans">Trajetória e Perfil Profissional</span>
                    <p className="text-cashmere-500/70 text-sm leading-relaxed font-light font-sans text-justify">
                      {person.bio}
                    </p>
                  </div>
                </div>
                
                {/* Ações e links de contato direto */}
                <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/5 pt-6 mt-8">
                  <div className="flex items-center gap-3">
                    <a href="https://www.instagram.com/wellemdias_advocacia/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-cashmere-500/50 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-500">
                      <Instagram size={14} />
                    </a>
                    <a href="mailto:atendimento@diasadvocacia.adv.br" className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-cashmere-500/50 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-500">
                      <Mail size={14} />
                    </a>
                  </div>

                  <a 
                    href={person.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 border border-gold-500/50 text-gold-500 font-semibold uppercase tracking-[0.2em] text-[10px] hover:bg-gold-500 hover:text-brand-900 hover:border-gold-500 transition-all duration-500 flex items-center gap-2 group/btn"
                  >
                    Falar no WhatsApp
                    <Phone size={12} className="group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
