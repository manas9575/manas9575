import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { GALLERY } from "../../data/weddingData";
import { SectionHeading, FloralDivider } from "./shared";

export const Gallery = () => {
  const [idx, setIdx] = useState(null);
  const open = idx !== null;

  const close = () => setIdx(null);
  const next = (e) => { e?.stopPropagation(); setIdx((p) => (p + 1) % GALLERY.length); };
  const prev = (e) => { e?.stopPropagation(); setIdx((p) => (p - 1 + GALLERY.length) % GALLERY.length); };

  return (
    <section id="gallery" className="relative section-pad bg-[#FFFAF8]" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Captured Moments" title="Our Gallery" subtitle="A collection of little moments that led us to forever. Tap any photo to view." />

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[180px] md:auto-rows-[240px] gap-4 md:gap-6">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setIdx(i)}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl glass p-1.5 ${g.span}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover rounded-[1.25rem] transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-1.5 rounded-[1.25rem] bg-gradient-to-t from-[#2C2C2C]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="flex items-center gap-2 text-white font-body text-sm tracking-wide translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <Camera className="w-4 h-4" strokeWidth={1.4} /> View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <FloralDivider className="mt-16" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-[#2C2C2C]/90 backdrop-blur-md flex items-center justify-center p-4"
            data-testid="lightbox"
          >
            <button onClick={close} data-testid="lightbox-close" className="absolute top-6 right-6 text-white/80 hover:text-white p-2" aria-label="Close">
              <X className="w-8 h-8" strokeWidth={1.2} />
            </button>
            <button onClick={prev} data-testid="lightbox-prev" className="absolute left-4 md:left-10 text-white/70 hover:text-white p-2" aria-label="Previous">
              <ChevronLeft className="w-9 h-9" strokeWidth={1.2} />
            </button>
            <motion.img
              key={idx}
              src={GALLERY[idx].src}
              alt={GALLERY[idx].alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-h-[82vh] max-w-[86vw] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={next} data-testid="lightbox-next" className="absolute right-4 md:right-10 text-white/70 hover:text-white p-2" aria-label="Next">
              <ChevronRight className="w-9 h-9" strokeWidth={1.2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
