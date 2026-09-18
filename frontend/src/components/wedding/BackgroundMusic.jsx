import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";
import { PLAYLIST } from "../../data/weddingData";

export const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(0);

  // Keep a ref in sync with `playing` so effects can read the latest
  // value without needing it in their dependency array.
  const playingRef = useRef(playing);
  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  // Autoplay on page load
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        // Browser blocked autoplay.
        // Start music on first interaction instead.
        const startMusic = () => {
          audio
            .play()
            .then(() => setPlaying(true))
            .catch(() => {});
        };

        window.addEventListener("click", startMusic, { once: true });
        window.addEventListener("touchstart", startMusic, { once: true });
        window.addEventListener("keydown", startMusic, { once: true });

        return () => {
          window.removeEventListener("click", startMusic);
          window.removeEventListener("touchstart", startMusic);
          window.removeEventListener("keydown", startMusic);
        };
      });
  }, []);

  // Play next song automatically
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    if (playingRef.current) {
      audio.load();
      audio.play().catch(() => {});
    }
  }, [idx]);

  const onEnded = () => {
    setIdx((prev) => (prev + 1) % PLAYLIST.length);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={PLAYLIST[idx]}
        onEnded={onEnded}
        preload="auto"
        data-testid="bg-audio"
      />

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
          <Pause
            className="w-5 h-5"
            strokeWidth={1.6}
            fill="currentColor"
          />
        ) : (
          <Music className="w-5 h-5" strokeWidth={1.6} />
        )}
      </motion.button>
    </>
  );
};