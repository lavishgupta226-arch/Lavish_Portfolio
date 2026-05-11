import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-obsidian border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/40 mb-8 block"
          >
            Stay in Touch
          </motion.span>
          
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12">
            LET'S <span className="italic font-light">BUILD</span> SOMETHING <span className="text-white/20">ICONIC</span>.
          </h2>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="mailto:contact@vantageedit.com"
              className="text-2xl md:text-4xl font-mono hover:text-white/60 transition-colors border-b border-white/10 pb-2"
            >
              hello@vantageedit.com
            </a>

            <div className="flex gap-6 mt-8">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" }
              ].map((social) => (
                <button 
                  key={social.label}
                  className="w-14 h-14 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs group"
            >
              Start a Project 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
