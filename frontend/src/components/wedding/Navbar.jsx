import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { COUPLE } from "../../data/weddingData";

const LINKS = [
  { label: "Events", id: "events" },
  { label: "Venue", id: "venue" },
  { label: "Family", id: "family" },
  { label: "RSVP", id: "rsvp" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background,box-shadow,padding] duration-500 ${
        scrolled ? "glass py-3 shadow-[0_4px_30px_rgba(212,175,55,0.1)]" : "py-5 bg-transparent"
      }`}
      data-testid="main-navbar"
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => go("hero")} className="flex items-center gap-2 group" data-testid="nav-logo">
          <Heart className="w-5 h-5 text-[#E4899B] transition-transform group-hover:scale-125" strokeWidth={1.5} fill="currentColor" />
          <span className="font-script text-2xl md:text-3xl text-gold leading-none">
            {COUPLE.groom} &amp; {COUPLE.bride}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="relative font-body text-sm uppercase tracking-[0.15em] text-[#2C2C2C]/80 hover:text-gold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("rsvp")}
            data-testid="nav-rsvp-cta"
            className="px-6 py-2.5 rounded-full bg-[#2C2C2C] text-white text-xs uppercase tracking-[0.2em] hover:bg-gold transition-colors duration-300"
          >
            RSVP
          </button>
        </div>

        <button className="md:hidden text-[#2C2C2C]" onClick={() => setOpen((v) => !v)} data-testid="nav-mobile-toggle" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass mt-3 mx-4 rounded-3xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {LINKS.map((l) => (
                <button key={l.id} onClick={() => go(l.id)} data-testid={`nav-mobile-${l.id}`} className="text-left font-body uppercase tracking-[0.15em] text-sm text-[#2C2C2C] py-1">
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
