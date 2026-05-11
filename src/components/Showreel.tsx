import { useState } from "react";
import { motion } from "motion/react";
import { Play, Volume2 } from "lucide-react";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showreel" className="py-24 bg-obsidian">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">Selected Highlights</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              THE SHOWREEL <span className="text-white/20">2024</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50 text-sm leading-relaxed">
            A montage of high-tempo editing, precise color grading, and sound design that defines my creative direction.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group aspect-video rounded-3xl overflow-hidden glass shadow-2xl bg-charcoal"
        >
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/WNfcuLSERDs?autoplay=1&controls=1&rel=0&modestbranding=1"
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              {/* Video Placeholder Surface */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
                  alt="Showreel Cover"
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 rounded-full glass border-white/20 flex items-center justify-center group/btn transition-all hover:scale-110 active:scale-95"
                >
                  <Play className="w-8 h-8 fill-white text-white group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-white" 
                    />
                  </div>
                  <span className="text-[10px] font-mono text-white/50">0:42 / 1:30</span>
                </div>
                <Volume2 className="w-5 h-5 text-white/50" />
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
