import { motion } from "framer-motion";
import { Instagram, Copy, Check, Camera } from "lucide-react";
import { useState } from "react";
import { COUPLE } from "../../data/weddingData";
import { Reveal, FloatingHearts } from "./shared";

export const Hashtag = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(COUPLE.hashtag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hashtag" className="relative section-pad bg-[#2C2C2C] overflow-hidden grain" data-testid="hashtag-section">
      <FloatingHearts count={8} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-body uppercase tracking-[0.3em] text-xs text-gold">
            <Camera className="w-4 h-4" strokeWidth={1.2} /> Share The Love
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-heading text-2xl md:text-3xl font-light text-white/70 mt-6">Tag your favourite moments with</p>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.h2
            whileHover={{ scale: 1.03 }}
            className="font-script text-6xl md:text-8xl gold-gradient-text mt-3 leading-none"
          >
            {COUPLE.hashtag}
          </motion.h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-body font-light text-white/60 mt-6 max-w-lg mx-auto">
            Help us relive every laugh, every dance and every happy tear. Use our hashtag on all your posts so we never miss a moment!
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
            <button
              onClick={copy}
              data-testid="hashtag-copy"
              className="inline-flex items-center gap-3 rounded-full glass-dark text-white font-body text-sm tracking-[0.15em] py-3.5 px-7 hover:scale-105 transition-transform"
            >
              {copied ? <Check className="w-4 h-4 text-gold" /> : <Copy className="w-4 h-4" strokeWidth={1.4} />}
              {copied ? "Copied!" : "Copy Hashtag"}
            </button>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 text-white/80 font-body text-sm tracking-[0.15em] py-3.5 px-7">
              <Instagram className="w-4 h-4" strokeWidth={1.4} /> Share on Social
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
