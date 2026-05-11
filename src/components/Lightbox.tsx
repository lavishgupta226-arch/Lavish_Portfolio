import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId: string | null;
}

const SHORTS_IDS = ["BNxEVgcrS-o", "CdbJr4SfY9c", "rc4HGrUAwjw", "eBwTuXgk0Ts"];

export default function Lightbox({ isOpen, onClose, youtubeId }: LightboxProps) {
  const isShort = youtubeId ? SHORTS_IDS.includes(youtubeId) : false;

  return (
    <AnimatePresence>
      {isOpen && youtubeId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative rounded-3xl overflow-hidden glass shadow-[0_0_100px_-20px_rgba(255,255,255,0.1)] border border-white/10 ${
              isShort 
                ? "h-[90vh] aspect-[9/16]" 
                : "w-full max-w-6xl aspect-video"
            }`}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all z-50 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
