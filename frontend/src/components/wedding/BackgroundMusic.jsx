import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";
import { MUSIC } from "../../data/weddingData";

export const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const startedRef = useRef(false);

  // Attempt to start playback on the first user interaction (autoplay policy).
  useEffect(() => {
    const tryStart = () => {
      if (startedRef.current || !audioRef.current) return;
      audioRef.current.volume = 0.35;
      audioRef.current
        .play()
        .then(() => {
          startedRef.current = true;
          setPlaying(true);
        })
        .catch(() => {});
    };
    const events = ["click", "touchstart", "scroll", "keydown"];
    events.forEach((e) => window.addEventListener(e, tryStart, { once: true, passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, tryStart));
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.volume = 0.35;
      a.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC} loop preload="auto" data-testid="bg-audio" />
      <motion.button
        onClick={toggle}
        data-testid="music-toggle"
        aria-label={playing ? "Pause music" : "Play music"}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-5 left-5 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-gold shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
      >
        {playing && (
          <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping" />
        )}
        {playing ? (
          <Pause className="w-5 h-5" strokeWidth={1.6} fill="currentColor" />
        ) : (
          <Music className="w-5 h-5" strokeWidth={1.6} />
        )}
      </motion.button>
    </>
  );
};
