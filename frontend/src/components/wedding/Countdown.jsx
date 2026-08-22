import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WEDDING_DATE } from "../../data/weddingData";
import { SectionHeading, Reveal, FloatingHearts } from "./shared";

const getTime = () => {
  const diff = new Date(WEDDING_DATE).getTime() - Date.now();
  const clamp = (n) => Math.max(0, n);
  return {
    days: clamp(Math.floor(diff / 86400000)),
    hours: clamp(Math.floor((diff / 3600000) % 24)),
    minutes: clamp(Math.floor((diff / 60000) % 60)),
    seconds: clamp(Math.floor((diff / 1000) % 60)),
  };
};

export const Countdown = () => {
  const [t, setT] = useState(getTime());

  useEffect(() => {
    const id = setInterval(() => setT(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <section id="countdown" className="relative section-pad bg-[#FDF5F6] overflow-hidden" data-testid="countdown-section">
      <FloatingHearts count={6} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="The Big Day Awaits" title="Counting Every Heartbeat" subtitle="Until we say 'I do' — every second brings us closer to forever." />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-4xl mx-auto">
          {units.map((u, i) => (
            <Reveal key={u.label} delay={i * 0.1}>
              <div className="glass rounded-3xl p-6 md:p-8 text-center relative group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  key={u.value}
                  initial={{ y: -12, opacity: 0.4 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-heading text-5xl md:text-7xl font-light gold-gradient-text tabular-nums"
                  data-testid={`countdown-${u.label.toLowerCase()}`}
                >
                  {String(u.value).padStart(2, "0")}
                </motion.div>
                <div className="font-body uppercase tracking-[0.25em] text-xs md:text-sm text-[#595959] mt-3">{u.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
