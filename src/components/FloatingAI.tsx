import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, Sparkles, Phone } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  whatsappLink?: string;
  whatsappLabel?: string;
}

export function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState<"greet" | "case" | "chat">("greet");
  const [userName, setUserName] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializar o chat com uma mensagem de boas-vindas acolhedora
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: "Seja muito bem-vindo à **HATO Advogados**. Sou o **HATO AI**, seu assistente jurídico virtual. Para darmos início ao atendimento, com quem tenho a honra de falar?",
          timestamp: new Date()
        }
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const centralNumber = "5583998442989";

  // Mapeamento de Especialidades para Advogados do Escritório
  const specialtyTriage = (specialtyKey: string, customName?: string) => {
    setIsTyping(true);
    const activeName = customName || userName || "prezado(a)";

    setTimeout(() => {
      let botResponse = "";
      let waLink = "";
      let waLabel = "";

      switch (specialtyKey) {
        case "empresarial":
          botResponse = `Compreendo a importância estratégica, prezado(a) **${activeName}**. Suas demandas de **Direito Empresarial e Imobiliário** serão conduzidas pelo nosso CEO, **Dr. Erick Hato (OAB/PB: 32.272)**. Sob rigor metodológico absoluto, ele desenhará a melhor estratégia jurídica. Deseja iniciar um contato direto com ele via WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Erick Hato. Gostaria de agendar uma consulta jurídica estratégica sobre Direito Empresarial e Imobiliário com suporte da HATO AI.`)}`;
          waLabel = "Falar com Dr. Erick Hato";
          break;
        case "tributario":
          botResponse = `Entendo a sua necessidade, prezado(a) **${activeName}**. Suas demandas de **Direito Administrativo, Tributário ou Servidores Públicos** são geridas pelo nosso CEO, **Dr. Erick Hato (OAB/PB: 32.272)**, com sólida atuação combativa. Deseja iniciar uma conversa de agendamento no WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Erick Hato. Preciso de suporte especializado em Direito Administrativo / Servidor Público.`)}`;
          waLabel = "Falar com Dr. Erick Hato";
          break;
        case "bancario":
          botResponse = `Perfeitamente, prezado(a) **${activeName}**. Cobranças indevidas e **Revisão de Juros** exigem ação célere. O especialista sênior que lidera nossa divisão de **Direito Bancário** é o **Dr. Vinicius Oliveira (OAB/PB: 34.600)**. Ele atuará firmemente para reequilibrar seus contratos. Deseja contatá-lo via WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Vinicius Oliveira. Gostaria de uma análise estratégica do meu contrato bancário / revisão de juros.`)}`;
          waLabel = "Falar com Dr. Vinicius Oliveira";
          break;
        case "civil":
          botResponse = `Compreendido, prezado(a) **${activeName}**. A análise técnica de **Contratos e Direito do Consumidor** requer cuidados boutique. O **Dr. Vinicius Oliveira (OAB/PB: 34.600)** coordena essas frentes em nossa banca, assegurando a defesa de seus direitos. Vamos iniciar um contato com ele via WhatsApp agora?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Vinicius Oliveira. Gostaria de tirar dúvidas sobre Direito do Consumidor / Revisão Contratual.`)}`;
          waLabel = "Falar com Dr. Vinicius Oliveira";
          break;
        case "trabalhista":
          botResponse = `Compreendido, prezado(a) **${activeName}**. Para consultoria preventiva ou mitigação de passivos trabalhistas, nosso escritório atua com modelo focado em resultados eficientes. Gostaria de ser direcionado(a) ao canal central da nossa banca no WhatsApp para agendamento?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, HATO Advogados. Gostaria de suporte estratégico sobre demandas civis ou contratuais.`)}`;
          waLabel = "Falar com a Banca HATO";
          break;
        case "familia":
          botResponse = `Compreendo a sensibilidade do caso, prezado(a) **${activeName}**. Divórcios, partilhas e inventários exigem atendimento humanizado e **absoluto sigilo**. A especialista sênior coordenadora desta área é a **Dra. Caroliny Alves (OAB/RJ: 49.548)**. Deseja abrir um canal seguro de agendamento com ela no WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dra. Caroliny Alves. Gostaria de agendar um atendimento sigiloso sobre Direito de Família / Sucessões.`)}`;
          waLabel = "Falar com Dra. Caroliny Alves";
          break;
        case "previdenciario":
          botResponse = `Entendo a relevância, prezado(a) **${activeName}**. Concessões de **Aposentadorias e Benefícios (INSS)** requerem planejamento criterioso. Nossa especialista dedicada é a **Dra. Caroliny Alves (OAB/RJ: 49.548)**, que cuidará de toda a tramitação ágil. Gostaria de contatá-la via WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dra. Caroliny Alves. Gostaria de agendar uma consulta estratégica sobre Aposentadoria / Benefício Previdenciário.`)}`;
          waLabel = "Falar com Dra. Caroliny Alves";
          break;
        case "criminal":
          botResponse = `Urgência compreendida, prezado(a) **${activeName}**. A defesa em **Direito Penal** e **Assistência a Vítimas** exige combatividade rigorosa e sigilo absoluto. O nosso Sócio-Fundador, **Dr. Erick Hato (OAB/PB: 32.272)**, atua de forma proativa. Posso transferi-lo(a) agora para o canal urgente do Dr. Erick?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Erick Hato. Preciso de suporte estratégico e urgente sobre Defesa Criminal / Assistência a Vítimas.`)}`;
          waLabel = "Falar com Dr. Erick Hato";
          break;
        default:
          botResponse = `Compreendo, prezado(a) **${activeName}**. Como advocacia boutique, atuamos com absoluto rigor nas principais áreas cíveis e corporativas. Qual das especialidades melhor atende à sua necessidade jurídica atual?`;
          break;
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: botResponse,
          timestamp: new Date(),
          whatsappLink: waLink || undefined,
          whatsappLabel: waLabel || undefined
        }
      ]);
    }, 1000);
  };

  // Motor de palavras-chave NLP Conversacional
  const processInputText = (text: string) => {
    const query = text.toLowerCase();
    const activeName = userName || "prezado(a)";

    if (query.includes("banco") || query.includes("bancario") || query.includes("bancário") || query.includes("divida") || query.includes("dívida") || query.includes("juros") || query.includes("abusivo") || query.includes("abusivos") || query.includes("emprestimo") || query.includes("financiamento") || query.includes("carro") || query.includes("veiculo") || query.includes("leilao") || query.includes("leilão") || query.includes("apreensao") || query.includes("apreensão")) {
      specialtyTriage("bancario", activeName);
    } else if (query.includes("empresa") || query.includes("empresarial") || query.includes("societario") || query.includes("societário") || query.includes("compliance") || query.includes("governança") || query.includes("fusao") || query.includes("regularização") || query.includes("regularizacao") || query.includes("imovel") || query.includes("imóvel") || query.includes("imobiliário") || query.includes("imobiliaria") || query.includes("terreno") || query.includes("escritura") || query.includes("usucapiao")) {
      specialtyTriage("empresarial", activeName);
    } else if (query.includes("contrato") || query.includes("consumidor") || query.includes("revisão") || query.includes("revisao") || query.includes("civil") || query.includes("cdc") || query.includes("danos") || query.includes("indenizacao") || query.includes("processar")) {
      specialtyTriage("civil", activeName);
    } else if (query.includes("trabalho") || query.includes("trabalhista") || query.includes("emprego") || query.includes("demissao") || query.includes("clt") || query.includes("fgts") || query.includes("carteira")) {
      specialtyTriage("trabalhista", activeName);
    } else if (query.includes("familia") || query.includes("família") || query.includes("divorcio") || query.includes("divórcio") || query.includes("partilha") || query.includes("inventario") || query.includes("inventário") || query.includes("herança") || query.includes("pensao") || query.includes("guarda") || query.includes("casamento")) {
      specialtyTriage("familia", activeName);
    } else if (query.includes("aposentadoria") || query.includes("previdenciario") || query.includes("previdenciário") || query.includes("beneficio") || query.includes("benefício") || query.includes("loas") || query.includes("bpc") || query.includes("inss") || query.includes("auxilio")) {
      specialtyTriage("previdenciario", activeName);
    } else if (query.includes("criminal") || query.includes("vítima") || query.includes("vitima") || query.includes("policia") || query.includes("delegacia") || query.includes("crime") || query.includes("processo penal") || query.includes("defesa criminal") || query.includes("prisao") || query.includes("prisão")) {
      specialtyTriage("criminal", activeName);
    } else if (query.includes("admin") || query.includes("servidor") || query.includes("publico") || query.includes("público") || query.includes("concurso") || query.includes("prefeitura") || query.includes("estado") || query.includes("tributario") || query.includes("tributário")) {
      specialtyTriage("tributario", activeName);
    } else if (query.includes("endereco") || query.includes("endereço") || query.includes("onde") || query.includes("localizacao") || query.includes("localização") || query.includes("fica") || query.includes("campina")) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `Nossa sede está localizada no Centro de Campina Grande/PB, na **Rua Afonso Campos, 304 - Salas 13 e 14**. Teremos a honra de recebê-lo(a) para uma consulta. Deseja abrir a rota no Google Maps?`,
            timestamp: new Date(),
            whatsappLink: "https://share.google/OqIFiSvPTdZo2Divq",
            whatsappLabel: "Abrir Google Maps"
          }
        ]);
      }, 1000);
    } else if (query.includes("ola") || query.includes("olá") || query.includes("oi") || query.includes("bom dia") || query.includes("boa tarde") || query.includes("boa noite") || query.includes("tudo bem")) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `Olá, prezado(a) **${activeName}**. Estou à disposição para triar seu caso com rigor ético. Qual das especialidades abaixo mais se assemelha ao seu cenário jurídico atual?`,
            timestamp: new Date()
          }
        ]);
      }, 1000);
    } else {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `Compreendo, prezado(a) **${activeName}**. Para direcionar seu caso ao especialista de nossa banca, por favor selecione a área abaixo ou descreva seu caso brevemente.`,
            timestamp: new Date()
          }
        ]);
      }, 1100);
    }
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    if (step === "greet") {
      setIsTyping(true);
      setTimeout(() => {
        let name = userText;
        const namePatterns = [
          /meu nome e\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /meu nome é\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /sou o\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /sou a\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /me chamo\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /aqui é o\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /aqui é a\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i
        ];
        
        for (const pattern of namePatterns) {
          const match = userText.match(pattern);
          if (match && match[1]) {
            name = match[1].trim();
            break;
          }
        }
        
        const nameParts = name.split(/\s+/);
        const displayName = nameParts.length > 2 ? `${nameParts[0]} ${nameParts[1]}` : name;
        
        setUserName(displayName);
        setStep("case");
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `É uma honra, prezado(a) **${displayName}**. A HATO Advogados atua sob rigor absoluto. Para direcioná-lo(a) ao especialista correto de nossa banca, qual demanda jurídica necessita de nossa intervenção hoje? (Ou selecione uma das opções abaixo)`,
            timestamp: new Date()
          }
        ]);
      }, 1000);
    } else {
      processInputText(userText);
    }
  };

  const handleChipClick = (label: string, key: string) => {
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: label,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);

    const activeName = userName || "Visitante";
    if (!userName) {
      setUserName(activeName);
      setStep("case");
    }
    specialtyTriage(key, activeName);
  };

  const formatMessageText = (text: string) => {
    if (!text.includes("**")) return text;
    
    const parts = text.split("**");
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="font-bold text-gold-300 drop-shadow-sm">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Botão Flutuante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gold-500 hover:bg-gold-400 text-brand-900 rounded-full flex items-center justify-center shadow-2xl relative transition-colors duration-300"
        aria-label="Conversar com o HATO AI"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center relative"
            >
              <MessageSquare size={24} />
              <Sparkles size={12} className="absolute -top-1.5 -right-2 text-brand-900 fill-current animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-brand-900 animate-pulse" />
        )}
      </motion.button>

      {/* Janela de Chat (Luxury Glassmorphism) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="absolute bottom-16 right-0 w-[340px] sm:w-[380px] h-[520px] bg-brand-900/95 backdrop-blur-lg border border-white/10 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-brand-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-gold-500/30 relative shrink-0">
                  <img src="/erick_dark_suit.jpg" alt="Advogado" className="w-full h-full object-cover object-top" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-brand-800 z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-medium text-white text-sm">HATO AI</span>
                  <span className="text-[9px] uppercase tracking-widest text-gold-500 font-semibold font-sans">Triagem Jurídica Conversacional</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-cashmere-500 hover:text-white p-1 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gold-500 text-brand-900 font-medium rounded-tr-none"
                        : "bg-brand-700/60 text-cashmere-300 border border-white/[0.04] rounded-tl-none"
                    }`}
                  >
                    <p className="font-light whitespace-pre-wrap">{formatMessageText(msg.text)}</p>
                    
                    {msg.whatsappLink && (
                      <a
                        href={msg.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 py-2 px-4 bg-green-650 hover:bg-green-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-[10px] uppercase tracking-wider"
                      >
                        <Phone size={12} className="fill-current" />
                        {msg.whatsappLabel}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-brand-700/40 border border-white/[0.04] rounded-xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold-500/70 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Sugestões Rápidas (Chips Clicáveis) */}
            <div className="px-4 py-2 border-t border-white/5 bg-brand-900/50 flex flex-wrap gap-2 overflow-x-auto max-h-[110px]">
              <button
                onClick={() => handleChipClick("🏢 Empresarial & Imóveis", "empresarial")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                🏢 Empresarial & Imóveis
              </button>
              <button
                onClick={() => handleChipClick("💰 Bancário & Juros", "bancario")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                💰 Bancário & Juros
              </button>
              <button
                onClick={() => handleChipClick("📝 Contratos & Consumidor", "civil")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                📝 Contratos & Consumidor
              </button>
              <button
                onClick={() => handleChipClick("🏠 Família & Divórcios", "familia")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                🏠 Família & Divórcios
              </button>
              <button
                onClick={() => handleChipClick("👴 Previdenciário & INSS", "previdenciario")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                👴 Previdenciário & INSS
              </button>
              <button
                onClick={() => handleChipClick("⚖️ Defesa Criminal & Vítimas", "criminal")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                ⚖️ Defesa Criminal & Vítimas
              </button>
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/5 bg-brand-800 flex gap-2 items-center">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={step === "greet" ? "Como se chama?" : "Qual o seu caso jurídico hoje?"}
                className="flex-1 bg-brand-900 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500/50 transition-colors font-light placeholder:text-white/20"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-lg bg-gold-500 hover:bg-gold-400 text-brand-900 flex items-center justify-center transition-colors shadow-lg"
              >
                <Send size={14} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
