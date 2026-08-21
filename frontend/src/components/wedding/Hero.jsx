import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, ChevronDown } from "lucide-react";
import { COUPLE, IMG } from "../../data/weddingData";
import { FloatingHearts } from "./shared";

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
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollNext = () => {
    const el = document.getElementById("marquee");
    if (window.__lenis && el) window.__lenis.scrollTo(el);
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] overflow-hidden hero-gradient grain flex items-center">
      <FloatingHearts count={10} />

      {/* Soft glowing orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F9E5E6] blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[#E6E6FA] blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 items-center pt-24 lg:pt-0">
        {/* Left: kinetic text */}
        <motion.div style={{ y: yText, opacity }} className="text-center lg:text-left order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
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
            transition={{ delay: 1.6, duration: 1 }}
            className="font-body font-light text-[#595959] mt-8 text-base md:text-lg max-w-md mx-auto lg:mx-0"
          >
            {COUPLE.tagline} — and we would be honoured to have you by our side as it begins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-9 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
          >
            <div className="glass rounded-full px-7 py-3 flex items-center gap-3">
              <Heart className="w-4 h-4 text-[#E4899B]" fill="currentColor" strokeWidth={0} />
              <span className="font-body tracking-[0.15em] text-sm text-[#2C2C2C]">24 · 01 · 2027 · UJJAIN</span>
            </div>
            <button
              onClick={() => window.__lenis?.scrollTo(document.getElementById("rsvp"), { offset: -70 })}
              data-testid="hero-rsvp-button"
              className="group px-8 py-3.5 rounded-full bg-[#2C2C2C] text-white font-body text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105"
            >
              RSVP Now
            </button>
          </motion.div>
        </motion.div>

        {/* Right: couple illustration with parallax */}
        <motion.div style={{ y: yImg }} className="order-1 lg:order-2 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 -m-6 rounded-[3rem] bg-white/40 blur-2xl" />
            <img
              src={IMG.heroCouple}
              alt="Manas and Kavita illustration"
              className="relative w-[74vw] max-w-[420px] lg:max-w-[480px] drop-shadow-2xl rounded-[2.5rem]"
            />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-[#E4899B]" fill="currentColor" strokeWidth={0} />
              <span className="font-script text-xl text-gold">{COUPLE.hashtag}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollNext}
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
