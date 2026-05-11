import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, PlayCircle } from "lucide-react";

const CATEGORIES = ["All", "Commercials", "Social", "Cinematic", "Music Videos"];

const PROJECTS = [
  {
    id: 1,
    title: "Urban Echoes",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 2,
    title: "Vanguard Tech Ad",
    category: "Commercials",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 3,
    title: "Neon Streets",
    category: "Music Videos",
    thumbnail: "https://images.unsplash.com/photo-1514525253344-7814d2a75a15?q=80&w=1974&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 4,
    title: "Lifestyle Reel",
    category: "Social",
    thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 5,
    title: "The Silent Peak",
    category: "Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 6,
    title: "Midnight Drive",
    category: "Commercials",
    thumbnail: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-obsidian border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">FEA<span className="italic">T</span>URED WORKS</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeCategory === cat 
                    ? "bg-white text-black" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-charcoal"
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full glass border-white/20 flex items-center justify-center">
                      <PlayCircle className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-display font-bold tracking-tight mb-2">{project.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-white/40">{project.year}</span>
                      <ExternalLink className="w-4 h-4 text-white/0 group-hover:text-white/60 transition-all font-light" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
