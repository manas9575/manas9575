import { motion } from "framer-motion";
import { IMG } from "../../data/weddingData";
import { FloatingHearts } from "./shared";

export const GaneshBlessing = () => (
  <section id="ganesh" className="relative hero-gradient grain overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20" data-testid="ganesh-section">
    <FloatingHearts count={5} />
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="absolute inset-0 -m-6 rounded-full bg-white/50 blur-2xl" />
        <motion.img
          src={IMG.ganesh}
          alt="Shree Ganesh Ji"
          className="relative w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="font-devanagari text-gold text-2xl md:text-3xl mt-6 tracking-wide"
      >
        ॥ श्री गणेशाय नमः ॥
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="font-devanagari text-[#2C2C2C] text-lg md:text-2xl leading-relaxed mt-5"
      >
        <p>वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।</p>
        <p className="mt-1">निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex items-center gap-3 mt-7"
      >
        <span className="h-px w-10 md:w-16 bg-gold/60" />
        <span className="font-body uppercase tracking-[0.35em] text-[10px] md:text-xs text-[#595959]">Shubh Vivah</span>
        <span className="h-px w-10 md:w-16 bg-gold/60" />
      </motion.div>
    </div>
  </section>
);
