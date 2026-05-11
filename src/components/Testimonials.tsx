import { motion } from "motion/react";
import { Quote } from "lucide-react";

const REVIEWS = [
  {
    text: "Working with Vantage was a game-changer for our brand campaign. The pace and rhythm were exactly what our social strategy needed.",
    author: "Sarah J.",
    role: "Creative Director"
  },
  {
    text: "A true storyteller. They didn't just cut the footage; they found an emotional hook we didn't even know we had in the raw files.",
    author: "Marcello D.",
    role: "Film Producer"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 mb-12 block">Voices</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[40px] glass border-white/5 text-left relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5" />
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div>
                <span className="block text-sm font-bold tracking-widest text-white">{review.author.toUpperCase()}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
