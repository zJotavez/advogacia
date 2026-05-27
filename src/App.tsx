/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingAI } from "./components/FloatingAI";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Advogados } from "./pages/Advogados";
import { AreasAtuacao } from "./pages/AreasAtuacao";
import { Blog } from "./pages/Blog";

// Gerenciador de SEO Dinâmico e Reativo
function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    let title = "HATO Advogados | Advocacia de Elite & Corporativa";
    let description = "HATO Advogados é uma banca jurídica boutique sob a liderança do Dr. Erick Hato. Atuação em Direito Empresarial, Imobiliário, Bancário, de Família, Previdenciário e Defesa Criminal.";

    switch (location.pathname) {
      case "/":
        title = "HATO Advogados | Advocacia de Elite & Corporativa";
        description = "HATO Advogados é uma banca jurídica boutique sob a liderança do Dr. Erick Hato. Especialistas em Direito Empresarial, Bancário, Imobiliário, Previdenciário e Defesa Criminal em Campina Grande/PB.";
        break;
      case "/sobre":
        title = "Nossa História & Valores | HATO Advogados";
        description = "Conheça a história, o método rigoroso de trabalho e os pilares de transparência e excelência da HATO Advogados em Campina Grande/PB.";
        break;
      case "/advogados":
        title = "Nossa Banca de Advogados | HATO Advogados";
        description = "Conheça nosso corpo jurídico de elite: Dr. Erick Hato, Dr. Vinicius Oliveira e Dra. Caroliny Alves. Profissionais altamente qualificados para proteger seus interesses.";
        break;
      case "/atuacao":
        title = "Áreas de Atuação Jurídica | HATO Advogados";
        description = "Oferecemos assessoria jurídica de alto padrão em Direito Empresarial, Regularização Imobiliária, Direito Bancário, Família, Previdenciário e Defesa Criminal.";
        break;
      case "/blog":
        title = "Inteligência Jurídica & Notícias | HATO Advogados";
        description = "Acompanhe artigos informativos, novidades jurisprudenciais e inteligência jurídica escritas diretamente pela nossa banca de advogados seniores.";
        break;
      case "/contato":
        title = "Fale com um Especialista | HATO Advogados";
        description = "Entre em contato direto com a nossa banca boutique no Centro de Campina Grande/PB e agende uma consulta estratégica presencial ou virtual.";
        break;
      default:
        break;
    }

    document.title = title;
    
    // Atualizar meta description dinamicamente
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }
    
    // Atualizar Open Graph para compartilhamentos em tempo real
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <SEOManager />
      <ScrollToTop />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-brand-900 text-slate-200">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/advogados" element={<Advogados />} />
              <Route path="/atuacao" element={<AreasAtuacao />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <FloatingAI />
        </div>
      </SmoothScroll>
    </Router>
  );
}

