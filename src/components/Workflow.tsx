import { motion } from "motion/react";
import { Cpu, Wind, Layers, Maximize } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    icon: Wind,
    title: "CONCEPT & CULLING",
    desc: "Reviewing raw footage to find the 'soul' of the story. Selecting the perfect takes."
  },
  {
    icon: Layers,
    title: "RHYTHMIC EDITING",
    desc: "Building the backbone of the visual. Timing cuts to sound and emotional beats."
  },
  {
    icon: Cpu,
    title: "COLOR & MOTION",
    desc: "Atmospheric grading and subtle motion design to enhance the visual language."
  },
  {
    icon: Maximize,
    title: "FINAL MASTERING",
    desc: "Sound mixing and high-fidelity output for all required formats and platforms."
  }
];

export default function Workflow() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">HO<span className="italic">W</span> I WORK</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl glass border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="text-[8px] font-mono text-white/20 mb-6 absolute top-8 right-8">STEP 0{idx + 1}</div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-white/90 mb-4">{step.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
