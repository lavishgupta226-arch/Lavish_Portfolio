import { motion, useScroll, useTransform } from "motion/react";
import { Play } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/50 to-obsidian z-10" />
        <img 
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-40 brightness-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">
            Available for Projects 2024
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-6">
          CR<span className="italic font-light">A</span>FTING<br />
          ST<span className="text-white/20">O</span>RIES
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-sans mb-10 tracking-tight leading-relaxed">
          Professional Video Editor focusing on the emotional impact of motion. 
          Ads, Films, and high-end Social Media content.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            id="hero-cta-work"
            className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">View My Work</span>
            <Play className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </button>
          
          <button 
            id="hero-cta-contact"
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
          >
            Let's Talk
          </button>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
