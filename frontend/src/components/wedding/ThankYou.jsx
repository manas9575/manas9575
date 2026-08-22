import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { COUPLE, IMG } from "../../data/weddingData";
import { Reveal, FloatingHearts } from "./shared";

export const ThankYou = () => (
  <section id="thankyou" className="relative section-pad hero-gradient grain overflow-hidden" data-testid="thankyou-section">
    <FloatingHearts count={12} />
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <Reveal>
        <motion.img
          src={IMG.floralDivider}
          alt=""
          className="h-16 mx-auto mb-8 mix-blend-multiply opacity-90"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-body uppercase tracking-[0.4em] text-xs text-gold">With All Our Love</p>
      </Reveal>
      <Reveal delay={0.2}>
        <h2 className="font-heading text-5xl md:text-7xl font-light text-[#2C2C2C] mt-5 leading-tight">
          Thank You
        </h2>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="font-body font-light text-[#595959] mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Words can't express how grateful we are to have you in our lives. Your love, blessings and presence mean the world to us as we begin this new chapter together.
        </p>
      </Reveal>
      <Reveal delay={0.4}>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <Heart className="w-5 h-5 text-[#E4899B]" fill="currentColor" strokeWidth={0} />
          <span className="h-px w-10 bg-gold" />
        </div>
        <p className="font-script text-5xl md:text-6xl gold-gradient-text mt-6">
          {COUPLE.groom} &amp; {COUPLE.bride}
        </p>
      </Reveal>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-[#2C2C2C] py-12" data-testid="footer">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div>
        <p className="font-script text-3xl gold-gradient-text">{COUPLE.groom} &amp; {COUPLE.bride}</p>
        <p className="font-body text-white/50 text-sm mt-1 tracking-wide">24 · 01 · 2027 · Ujjain, India</p>
      </div>
      <p className="font-body text-white/40 text-xs tracking-[0.15em] flex items-center gap-2">
        Made with <Heart className="w-3.5 h-3.5 text-[#E4899B]" fill="currentColor" strokeWidth={0} /> for our special day
      </p>
    </div>
  </footer>
);
