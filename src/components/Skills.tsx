import { motion } from "motion/react";

const SOFTWARE = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "After Effects", level: 85 },
  { name: "DaVinci Resolve", level: 90 },
  { name: "Final Cut Pro", level: 80 }
];

const SPECIALTIES = [
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Storytelling",
  "Narrative Flow",
  "VFX Compositing",
  "Rhythmic Cuts",
  "Commercial Tech"
];

export default function Skills() {
  return (
    <section className="py-24 bg-obsidian">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 mb-4 block">Capabilites</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">THE TOOLKIT</h2>
            
            <div className="space-y-8">
              {SOFTWARE.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-mono tracking-widest text-white/70 uppercase">{tech.name}</span>
                    <span className="text-xs font-mono text-white/30">{tech.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-white" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-8 mt-4 block">Specialized In</h3>
            <div className="flex flex-wrap gap-3">
              {SPECIALTIES.map((skill) => (
                <div 
                  key={skill}
                  className="px-6 py-4 rounded-2xl glass border-white/5 text-sm font-medium tracking-tight hover:border-white/20 transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-dashed border-white/10">
              <p className="text-sm text-white/50 leading-relaxed italic">
                "I believe editing is the final rewrite of the script. My focus is always on the emotional arc, ensuring every frame serves the narrative."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
