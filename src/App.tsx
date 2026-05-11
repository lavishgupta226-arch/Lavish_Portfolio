import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showreel from "./components/Showreel";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = (this as HTMLAnchorElement).getAttribute('href');
        if (targetId) {
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="showreel">
          <Showreel />
        </div>

        <div id="works">
          <Portfolio onProjectClick={(id) => setSelectedVideo(id)} />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="process">
          <Workflow />
        </div>

        <Skills />

        <Testimonials />

        <Contact />
      </main>

      <Footer />

      <Lightbox 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        youtubeId={selectedVideo} 
      />
    </div>
  );
}
