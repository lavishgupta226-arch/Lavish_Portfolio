import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, PlayCircle } from "lucide-react";

const CATEGORIES = ["All", "Commercials", "Social", "Cinematic", "Music Videos"];

const PROJECTS = [
  {
    id: 1,
    title: "Visual Narrative",
    category: "Social",
    youtubeId: "BNxEVgcrS-o",
    year: "2024",
    type: "short",
    caption: "A deep dive into visual storytelling through high-tempo editing and atmospheric soundscapes."
  },
  {
    id: 2,
    title: "Midnight Drive",
    category: "Commercials",
    youtubeId: "WNfcuLSERDs",
    year: "2024",
    type: "wide",
    caption: "Dynamic commercial edit focusing on texture, lighting, and the rhythm of the city at night."
  },
  {
    id: 3,
    title: "Urban Exploration",
    category: "Cinematic",
    youtubeId: "sYEBD0o6I2E",
    year: "2024",
    type: "wide",
    caption: "Cinematic exploration of architecture and human flow in modern metropolises."
  },
  {
    id: 4,
    title: "High Speed Motion",
    category: "Social",
    youtubeId: "CdbJr4SfY9c",
    year: "2024",
    type: "short",
    caption: "Technical motion design and speed ramping for high-impact social content."
  },
  {
    id: 5,
    title: "Cinematic Journey",
    category: "Cinematic",
    youtubeId: "DHZmlz6bJRc",
    year: "2023",
    type: "wide",
    caption: "An immersive travel narrative crafted with precision color grading and smooth transitions."
  },
  {
    id: 6,
    title: "Street Aesthetics",
    category: "Music Videos",
    youtubeId: "rc4HGrUAwjw",
    year: "2024",
    type: "short",
    caption: "Gritty, high-energy visual style designed for contemporary music and street culture."
  },
  {
    id: 7,
    title: "Beyond the Horizon",
    category: "Cinematic",
    youtubeId: "ySM3hZxDD7Y",
    year: "2024",
    type: "wide",
    caption: "Epic landscapes meets intimate moments in this narrative editing showcase."
  },
  {
    id: 8,
    title: "Technical Precision",
    category: "Commercials",
    youtubeId: "WUw_kkQw4b4",
    year: "2023",
    type: "wide",
    caption: "Product-focused editing highlighting manufacturing detail and engineering beauty."
  },
  {
    id: 9,
    title: "Soul of Cinema",
    category: "Cinematic",
    youtubeId: "0jmPmVaWM3E",
    year: "2024",
    type: "wide",
    caption: "Exploring the emotional core of film through pacing and evocative visual choices."
  },
  {
    id: 10,
    title: "Portrait of Light",
    category: "Social",
    youtubeId: "eBwTuXgk0Ts",
    year: "2024",
    type: "short",
    caption: "Elegant lighting and intimate framing for luxury brand positioning."
  }
];

export default function Portfolio({ onProjectClick }: { onProjectClick?: (id: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter">SELECTED <span className="italic font-light text-white/20">W</span>ORKS</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-white text-black" 
                    : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => onProjectClick?.(project.youtubeId)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-charcoal/50 border border-white/5 cursor-pointer"
              >
                {/* Project Thumbnail */}
                <img 
                  src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full glass text-[8px] uppercase tracking-widest text-white/80 font-bold">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full glass border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-bold tracking-tight mb-2">{project.title}</h3>
                    <p className="text-[10px] text-white/40 leading-relaxed mb-4 font-light opacity-0 group-hover:opacity-100 transition-all duration-500 line-clamp-2">
                      {project.caption}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-white/30">{project.year}</span>
                      <ExternalLink className="w-4 h-4 text-white/0 group-hover:text-white/40 transition-all" />
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
