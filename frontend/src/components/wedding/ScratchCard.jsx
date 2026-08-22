import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Gift } from "lucide-react";
import { SectionHeading, Reveal } from "./shared";

export const ScratchCard = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const drawing = useRef(false);
  const firedRef = useRef(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    // Foil gradient cover
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#E6E6FA");
    grad.addColorStop(0.4, "#F9E5E6");
    grad.addColorStop(0.7, "#FFDAB9");
    grad.addColorStop(1, "#D4AF37");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Sparkle dots
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * rect.width, Math.random() * rect.height, Math.random() * 2 + 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = "rgba(44,44,44,0.55)";
    ctx.font = "600 15px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✦  SCRATCH TO REVEAL  ✦", rect.width / 2, rect.height / 2);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [initCanvas]);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;
    return { x: point.clientX - rect.left, y: point.clientY - rect.top };
  };

  const scratch = (e) => {
    if (!drawing.current || revealed) return;
    const ctx = canvasRef.current.getContext("2d");
    const { x, y } = getPos(e);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();
    checkCleared();
  };

  const checkCleared = () => {
    if (firedRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    const data = ctx.getImageData(0, 0, width, height).data;
    let clear = 0;
    for (let i = 3; i < data.length; i += 40) if (data[i] === 0) clear++;
    const ratio = clear / (data.length / 40);
    if (ratio > 0.5) {
      firedRef.current = true;
      setRevealed(true);
      const c = containerRef.current.getBoundingClientRect();
      confetti({
        particleCount: 140,
        spread: 80,
        origin: { x: (c.left + c.width / 2) / window.innerWidth, y: (c.top + c.height / 2) / window.innerHeight },
        colors: ["#D4AF37", "#E4899B", "#E6E6FA", "#FFDAB9"],
      });
    }
  };

  const start = () => (drawing.current = true);
  const end = () => (drawing.current = false);

  return (
    <section id="scratch" className="relative section-pad bg-[#FFFAF8]" data-testid="scratch-section">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="A Little Surprise" title="Scratch The Date" subtitle="Go on — use your finger or mouse to scratch the card and reveal when the magic happens." />

        <Reveal>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#F9E5E6] to-[#E6E6FA] blur-2xl opacity-70" />
            <div
              ref={containerRef}
              className="relative rounded-[2rem] overflow-hidden glass p-1 select-none"
              style={{ touchAction: "none" }}
            >
              {/* Prize underneath */}
              <div className="relative flex flex-col items-center justify-center text-center bg-white/70 rounded-[1.8rem] py-14 px-6" style={{ minHeight: 260 }}>
                <motion.div animate={revealed ? { scale: [0.8, 1.1, 1] } : {}} transition={{ duration: 0.6 }}>
                  <Gift className="w-8 h-8 text-gold mx-auto mb-3" strokeWidth={1.2} />
                  <p className="font-body uppercase tracking-[0.3em] text-xs text-[#595959]">Save The Date</p>
                  <p className="font-heading text-5xl md:text-6xl font-light gold-gradient-text mt-2">24 · 01 · 2027</p>
                  <p className="font-script text-3xl text-[#E4899B] mt-2">Manas &amp; Kavita</p>
                  <p className="font-body text-sm text-[#595959] mt-1 flex items-center justify-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-[#E4899B]" fill="currentColor" strokeWidth={0} /> Gondi Dharamsi & Hatnara Ratlam, Madhya Pradesh
                  </p>
                </motion.div>
              </div>

              {/* Scratch layer */}
              <canvas
                ref={canvasRef}
                data-testid="scratch-canvas"
                className={`absolute inset-1 rounded-[1.8rem] cursor-grab active:cursor-grabbing transition-opacity duration-700 ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                onMouseDown={start}
                onMouseUp={end}
                onMouseLeave={end}
                onMouseMove={scratch}
                onTouchStart={start}
                onTouchEnd={end}
                onTouchMove={scratch}
              />
            </div>
            {revealed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-body text-sm text-gold mt-5 tracking-[0.15em]"
                data-testid="scratch-revealed-msg"
              >
                🎉 See you there!
              </motion.p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
