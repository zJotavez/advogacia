/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <Router>
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

