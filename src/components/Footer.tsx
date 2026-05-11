export default function Footer() {
  return (
    <footer className="py-12 bg-obsidian border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-lg tracking-tighter mb-2">VANTAGE EDIT</span>
          <p className="text-[10px] text-white/30 uppercase tracking-widest leading-loose">
            © 2024 VANTAGE MOTION STUDIO. <br />
            ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-bold tracking-widest text-white/40 hover:text-white transition-colors uppercase">Licensing</a>
          <a href="#" className="text-[10px] font-bold tracking-widest text-white/40 hover:text-white transition-colors uppercase">Privacy</a>
          <a href="#" className="text-[10px] font-bold tracking-widest text-white/40 hover:text-white transition-colors uppercase">Agency</a>
        </div>
        
        <div className="text-[10px] text-white/20 font-mono">
          DESIGNED BY AI STUDIO
        </div>
      </div>
    </footer>
  );
}
