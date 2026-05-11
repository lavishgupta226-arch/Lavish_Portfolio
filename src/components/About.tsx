import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-obsidian">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden glass border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop" 
                alt="Profile"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Overlay Badges */}
            <div className="absolute -bottom-6 -right-6 p-10 rounded-full glass border-white/10 hidden md:block">
              <span className="text-xl font-display font-bold">+08</span>
              <span className="block text-[8px] uppercase tracking-widest text-white/40">Years Experience</span>
            </div>
          </motion.div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 mb-6 block">The Editor</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-[1.1]">
              STORYTELLING IS THE <br />
              <span className="text-white/20">SILENT</span> LANGUAGE.
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed mb-10 font-sans font-light">
              I specialize in high-end video editing that bridges the gap between raw footage and cinematic art. My process is deeply rooted in understanding the "vibe" and "pace" required for each unique project.
            </p>

            <div className="space-y-6">
              {[
                { title: "Precision", desc: "Every frame is considered. Frame-accurate timing for emotional impact." },
                { title: "Atmosphere", desc: "Crafting color and sound to build a world that feels real." },
                { title: "Innovation", desc: "Always looking for ways to break the mold and create new visual styles." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 pb-6 border-b border-white/5 last:border-0 grow">
                  <span className="text-[10px] font-mono text-white/20 mt-1">0{idx + 1}</span>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest mb-1 text-white/90 uppercase">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
