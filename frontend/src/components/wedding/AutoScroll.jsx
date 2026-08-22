import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

// Auto "guided tour": scrolls section-by-section, pausing at each for a
// time proportional to how much there is to read / look at.
export const AutoScroll = () => {
  const [running, setRunning] = useState(false);
  const runRef = useRef(false);
  const timerRef = useRef(null);
  const idxRef = useRef(0);
  const selfScroll = useRef(false);

  const getSections = () => Array.from(document.querySelectorAll("section[id]"));

  const dwellFor = (el) => {
    const text = (el.innerText || "").trim();
    const words = text ? text.split(/\s+/).length : 0;
    const media = el.querySelectorAll("img, iframe, canvas").length;
    const ms = 3200 + words * 85 + media * 900; // glance-reading estimate
    return Math.min(9500, Math.max(3200, ms));
  };

  const stop = useCallback(() => {
    runRef.current = false;
    setRunning(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const step = useCallback(() => {
    if (!runRef.current) return;
    const secs = getSections();
    if (idxRef.current >= secs.length) {
      stop();
      return;
    }
    const el = secs[idxRef.current];
    const offset = idxRef.current === 0 ? 0 : -60;
    selfScroll.current = true;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => (selfScroll.current = false), 1600);

    const wait = dwellFor(el) + 1500;
    idxRef.current += 1;
    timerRef.current = setTimeout(step, wait);
  }, [stop]);

  const start = useCallback(() => {
    runRef.current = true;
    setRunning(true);
    const secs = getSections();
    const mid = window.scrollY + window.innerHeight / 2;
    let from = 0;
    secs.forEach((s, i) => {
      if (s.offsetTop <= mid) from = i;
    });
    // if near the very top start from the beginning
    idxRef.current = window.scrollY < 40 ? 0 : Math.min(from + 1, secs.length - 1);
    step();
  }, [step]);

  const toggle = () => (running ? stop() : start());

  // Any genuine user scroll gesture cancels the tour.
  useEffect(() => {
    const onUser = () => {
      if (runRef.current && !selfScroll.current) stop();
    };
    window.addEventListener("wheel", onUser, { passive: true });
    window.addEventListener("touchmove", onUser, { passive: true });
    window.addEventListener("keydown", onUser);
    return () => {
      window.removeEventListener("wheel", onUser);
      window.removeEventListener("touchmove", onUser);
      window.removeEventListener("keydown", onUser);
    };
  }, [stop]);

  useEffect(() => () => timerRef.current && clearTimeout(timerRef.current), []);

  return (
    <motion.button
      onClick={toggle}
      data-testid="autoscroll-toggle"
      aria-label={running ? "Stop guided tour" : "Start guided tour"}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full glass pl-3 pr-4 py-2.5 text-[#2C2C2C] shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
    >
      <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-gold to-[#c99a2e] text-white">
        {running && <span className="absolute inset-0 rounded-full border border-gold/50 animate-ping" />}
        {running ? <Pause className="w-4 h-4" strokeWidth={2} fill="currentColor" /> : <Play className="w-4 h-4 ml-0.5" strokeWidth={2} fill="currentColor" />}
      </span>
      <span className="font-body text-xs uppercase tracking-[0.18em]">{running ? "Touring" : "Auto Tour"}</span>
    </motion.button>
  );
};
