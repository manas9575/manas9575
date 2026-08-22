import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, PenLine, Send } from "lucide-react";
import { SectionHeading, FloatingHearts } from "./shared";

const SEED = [
  { name: "Aarav & Riya", msg: "So happy for you both! Wishing you a lifetime of love and laughter. 💕", color: "#F9E5E6" },
  { name: "Neha Kapoor", msg: "Manas & Kavita — a match made in heaven. Can't wait to dance at the DJ Night!", color: "#E6E6FA" },
  { name: "The Sharmas", msg: "May your journey together be as beautiful as your love story. Blessings always.", color: "#FFDAB9" },
];

export const Guestbook = () => {
  const [entries, setEntries] = useState(SEED);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const colors = ["#F9E5E6", "#E6E6FA", "#FFDAB9", "#F5F5DC"];

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    setEntries((p) => [{ name: name.trim(), msg: msg.trim(), color: colors[p.length % colors.length] }, ...p]);
    setName("");
    setMsg("");
  };

  const inputCls = "w-full bg-white/70 border border-[#E6D9B8] rounded-2xl px-5 py-3.5 font-body text-[#2C2C2C] placeholder:text-[#595959]/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition";

  return (
    <section id="guestbook" className="relative section-pad bg-[#FDF5F6] overflow-hidden" data-testid="guestbook-section">
      <FloatingHearts count={6} />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Leave A Little Love" title="Guestbook" subtitle="Sign our virtual guestbook and share a wish, a memory, or a blessing for the road ahead." />

        <div className="grid lg:grid-cols-5 gap-8">
          <form onSubmit={submit} className="lg:col-span-2 glass rounded-3xl p-7 h-fit" data-testid="guestbook-form">
            <div className="flex items-center gap-2 text-gold mb-5">
              <PenLine className="w-5 h-5" strokeWidth={1.4} />
              <span className="font-body uppercase tracking-[0.2em] text-xs">Write a note</span>
            </div>
            <input data-testid="guestbook-name" className={inputCls} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea data-testid="guestbook-message" rows={4} className={`${inputCls} mt-4`} placeholder="Your wishes for the couple..." value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button type="submit" data-testid="guestbook-submit" className="group mt-4 w-full rounded-full bg-[#2C2C2C] text-white font-body uppercase tracking-[0.2em] text-sm py-3.5 flex items-center justify-center gap-3 hover:bg-gold transition-colors">
              Sign Guestbook <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.4} />
            </button>
          </form>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 content-start" data-testid="guestbook-entries">
            <AnimatePresence initial={false}>
              {entries.map((en, i) => (
                <motion.div
                  key={`${en.name}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="rounded-3xl p-6 relative overflow-hidden"
                  style={{ background: en.color }}
                >
                  <Heart className="absolute -right-3 -bottom-3 w-16 h-16 text-white/40" fill="currentColor" strokeWidth={0} />
                  <p className="font-body font-light text-[#2C2C2C] relative z-10 leading-relaxed">"{en.msg}"</p>
                  <p className="font-script text-2xl text-[#2C2C2C] mt-3 relative z-10">— {en.name}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
