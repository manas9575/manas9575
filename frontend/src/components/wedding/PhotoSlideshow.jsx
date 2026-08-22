import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHOTOS } from "../../data/weddingData";

// Background slideshow: blurred fill keeps the frame full, the sharp
// contained image preserves each photo's original aspect ratio (no crop/stretch).
export const PhotoSlideshow = ({ interval = 5500 }) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (PHOTOS.length <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % PHOTOS.length), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F5EFEA]" aria-hidden>
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          {/* blurred fill */}
          <div
            className="absolute inset-0 scale-110"
            style={{
              backgroundImage: `url(${PHOTOS[i].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(26px) brightness(0.9)",
            }}
          />
          {/* sharp contained image (maintains aspect ratio) */}
          <motion.img
            src={PHOTOS[i].src}
            alt={PHOTOS[i].alt}
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: interval / 1000 + 1.6, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
