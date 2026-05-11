import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "WORKS", id: "works" },
  { name: "ABOUT", id: "about" },
  { name: "PROCESS", id: "process" },
  { name: "CONTACT", id: "contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-obsidian/80 backdrop-blur-lg border-b border-white/5" : "py-8"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
            <span className="text-black font-extrabold text-lg">V</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter transition-colors group-hover:text-white/60">VANTAGE EDIT</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className="text-[10px] font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 rounded-full border border-white/20 text-[10px] font-bold tracking-widest hover:bg-white hover:text-black transition-all">
            START PROJECT
          </button>
        </div>

        {/* Mobile Trigger */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 w-full h-screen bg-obsidian flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <button className="absolute top-8 right-6" onClick={() => setMobileMenuOpen(false)}><X /></button>
          {NAV_LINKS.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-display font-bold"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
