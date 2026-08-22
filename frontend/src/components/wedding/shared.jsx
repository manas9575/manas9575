import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { IMG } from "../../data/weddingData";

// Scroll-reveal wrapper
export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// Eyebrow + title + subtitle block
export const SectionHeading = ({ eyebrow, title, subtitle, light = false, center = true }) => (
  <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-16`}>
    {eyebrow && (
      <Reveal>
        <span className={`inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] ${light ? "text-white/80" : "text-gold"} font-body`}>
          <Sparkles className="w-4 h-4" strokeWidth={1.2} />
          {eyebrow}
          <Sparkles className="w-4 h-4" strokeWidth={1.2} />
        </span>
      </Reveal>
    )}
    <Reveal delay={0.1}>
      <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mt-4 ${light ? "text-white" : "text-[#2C2C2C]"}`}>
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={0.2}>
        <p className={`font-body font-light mt-5 text-base md:text-lg leading-relaxed ${light ? "text-white/75" : "text-[#595959]"}`}>
          {subtitle}
        </p>
      </Reveal>
    )}
  </div>
);

export const FloralDivider = ({ className = "" }) => (
  <div className={`w-full flex justify-center py-6 ${className}`} aria-hidden>
    <motion.img
      src={IMG.floralDivider}
      alt=""
      className="h-16 md:h-24 w-auto object-contain opacity-90 mix-blend-multiply"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 0.9, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  </div>
);

// Ambient floating hearts / sparkles background
export const FloatingHearts = ({ count = 8 }) => {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden>
      {items.map((_, i) => {
        const left = (i * 137) % 100;
        const size = 12 + ((i * 7) % 20);
        const dur = 8 + (i % 5) * 2;
        const delay = (i % 6) * 1.2;
        const Icon = i % 3 === 0 ? Sparkles : Heart;
        return (
          <motion.div
            key={i}
            className="absolute text-[#E4899B]/30"
            style={{ left: `${left}%`, bottom: -30 }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -700, opacity: [0, 0.7, 0], rotate: [0, 20, -10, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon style={{ width: size, height: size }} strokeWidth={1.2} fill="currentColor" />
          </motion.div>
        );
      })}
    </div>
  );
};
