import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, ChevronDown } from "lucide-react";
import { COUPLE } from "../../data/weddingData";
import { FloatingHearts } from "./shared";
import { PhotoSlideshow } from "./PhotoSlideshow";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] overflow-hidden flex items-center">
      {/* Photo slideshow background */}
      <PhotoSlideshow />

      {/* Readability scrim */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FFFAF8]/95 via-[#FFFAF8]/70 to-[#FFFAF8]/20 md:to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#FFFAF8]/60 via-transparent to-[#FFFAF8]/40" />

      <FloatingHearts count={7} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 lg:pt-0">
        <motion.div style={{ y: yText, opacity }} className="max-w-2xl text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="font-body uppercase tracking-[0.4em] text-xs md:text-sm text-[#595959] mb-6 flex items-center gap-3 justify-center lg:justify-start"
          >
            <span className="h-px w-8 bg-gold" /> Together with their families <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.2} />
          </motion.p>

          <h1 className="font-heading font-light leading-[0.9] tracking-tighter text-[#2C2C2C]">
            <span className="block overflow-hidden">
              <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block text-6xl sm:text-7xl lg:text-8xl">
                {COUPLE.groom}
              </motion.span>
            </span>
            <span className="block overflow-hidden my-1 pb-2">
              <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block font-script gold-gradient-text text-5xl sm:text-6xl lg:text-7xl">
                &amp; forever
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span custom={2} variants={line} initial="hidden" animate="show" className="block text-6xl sm:text-7xl lg:text-8xl">
                {COUPLE.bride}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="font-body font-light text-[#595959] mt-8 text-base md:text-lg max-w-md mx-auto lg:mx-0"
          >
            {COUPLE.tagline} — and we would be honoured to have you by our side as it begins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="mt-9 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
          >
            <div className="glass rounded-full px-7 py-3 flex items-center gap-3">
              <Heart className="w-4 h-4 text-[#E4899B]" fill="currentColor" strokeWidth={0} />
              <span className="font-body tracking-[0.15em] text-sm text-[#2C2C2C]">24 · 01 · 2027 · Gondi Dharamsi & Hatnara Ratlam</span>
            </div>
            <button
              onClick={() => window.__lenis?.scrollTo(document.getElementById("events"), { offset: -70 })}
              data-testid="hero-events-button"
              className="group px-8 py-3.5 rounded-full bg-[#2C2C2C] text-white font-body text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105"
            >
              View Celebrations
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="mt-8 inline-flex items-center gap-2 glass rounded-full px-5 py-2"
          >
            <Heart className="w-4 h-4 text-[#E4899B]" fill="currentColor" strokeWidth={0} />
            <span className="font-script text-2xl text-gold leading-none">{COUPLE.hashtag}</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => window.__lenis?.scrollTo(document.getElementById("countdown"), { offset: -40 })}
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#595959] flex flex-col items-center gap-1"
        data-testid="hero-scroll-down"
        aria-label="Scroll down"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-5 h-5" strokeWidth={1.2} />
      </motion.button>
    </section>
  );
};
