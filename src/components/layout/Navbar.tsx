import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Logo } from "./Logo";

const links = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Áreas de Atuação", path: "/atuacao" },
  { name: "Advogados", path: "/advogados" },
  { name: "Blog", path: "/blog" },
  { name: "Contato", path: "/contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-brand-900/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo size={32} textColor="text-gold-500 group-hover:text-white" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] font-medium transition-colors hover:text-gold-500 relative py-2 duration-500",
                location.pathname === link.path ? "text-gold-500" : "text-cashmere-400"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contato"
            className="px-6 py-2.5 border border-gold-500/50 text-gold-500 font-medium uppercase tracking-[0.25em] text-[10px] hover:bg-gold-500 hover:text-brand-900 hover:border-gold-500 transition-all duration-500 ease-out"
          >
            Fale Conosco
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-cashmere-400 p-2 hover:text-gold-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[72px] bg-brand-900 z-40 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-display font-medium tracking-wide",
                    location.pathname === link.path ? "text-gold-500" : "text-cashmere-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-4" />
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="inline-flex justify-center px-6 py-4 border border-gold-500 text-gold-500 font-medium text-base text-center hover:bg-gold-500 hover:text-brand-900 transition-colors duration-500"
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
