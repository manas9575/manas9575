import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Send, Check, Sparkles } from "lucide-react";
import { SectionHeading, FloatingHearts } from "./shared";

const MEALS = ["Vegetarian", "Non-Vegetarian", "Jain", "Vegan"];

export const RSVP = () => {
  const [form, setForm] = useState({ name: "", phone: "", guests: "1", attendance: "yes", meal: "Vegetarian", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please tell us your name";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) err.phone = "Enter a valid phone number";
    setErrors(err);
    if (Object.keys(err).length) return;

    setSubmitted(true);
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.7 }, colors: ["#D4AF37", "#E4899B", "#E6E6FA"] });
  };

  const inputCls = "w-full bg-white/70 border border-[#E6D9B8] rounded-2xl px-5 py-3.5 font-body text-[#2C2C2C] placeholder:text-[#595959]/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition";

  return (
    <section id="rsvp" className="relative section-pad bg-[#FDF5F6] overflow-hidden" data-testid="rsvp-section">
      <FloatingHearts count={6} />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <SectionHeading eyebrow="Will You Join Us?" title="RSVP" subtitle="Kindly respond by 5th January 2027. We can't wait to celebrate with you!" />

        <div className="glass rounded-[2rem] p-7 md:p-12 relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
                data-testid="rsvp-success"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-[#E4899B] flex items-center justify-center mx-auto"
                >
                  <Check className="w-10 h-10 text-white" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-[#2C2C2C] mt-6">Thank you, {form.name.split(" ")[0]}!</h3>
                <p className="font-body font-light text-[#595959] mt-3 max-w-md mx-auto">
                  {form.attendance === "yes"
                    ? "Your RSVP is received with joy. We're thrilled to have you celebrate with us! 💕"
                    : "We'll miss you dearly, but thank you for letting us know. Sending love your way. 💕"}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", guests: "1", attendance: "yes", meal: "Vegetarian", message: "" }); }}
                  data-testid="rsvp-reset"
                  className="mt-7 font-body text-sm uppercase tracking-[0.2em] text-gold hover:underline"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} className="space-y-5" data-testid="rsvp-form" exit={{ opacity: 0 }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-[#595959] mb-2 block">Guest Name</label>
                    <input data-testid="rsvp-name" className={inputCls} placeholder="Your full name" value={form.name} onChange={(e) => set("name", e.target.value)} />
                    {errors.name && <p className="text-xs text-red-500 mt-1 font-body">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="font-body text-sm text-[#595959] mb-2 block">Phone Number</label>
                    <input data-testid="rsvp-phone" className={inputCls} placeholder="+91 98765 43210" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                    {errors.phone && <p className="text-xs text-red-500 mt-1 font-body">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-[#595959] mb-2 block">Number of Guests</label>
                    <select data-testid="rsvp-guests" className={inputCls} value={form.guests} onChange={(e) => set("guests", e.target.value)}>
                      {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-sm text-[#595959] mb-2 block">Meal Preference</label>
                    <select data-testid="rsvp-meal" className={inputCls} value={form.meal} onChange={(e) => set("meal", e.target.value)}>
                      {MEALS.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-[#595959] mb-2 block">Will you attend?</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[{ v: "yes", l: "Joyfully Accept" }, { v: "no", l: "Regretfully Decline" }].map((o) => (
                      <button
                        key={o.v}
                        type="button"
                        onClick={() => set("attendance", o.v)}
                        data-testid={`rsvp-attend-${o.v}`}
                        className={`rounded-2xl py-3.5 font-body text-sm tracking-wide border transition-all duration-300 ${
                          form.attendance === o.v
                            ? "bg-[#2C2C2C] text-white border-[#2C2C2C]"
                            : "bg-white/60 text-[#2C2C2C] border-[#E6D9B8] hover:border-gold"
                        }`}
                      >
                        {o.v === "yes" && <Heart className="w-4 h-4 inline mr-2 -mt-0.5" fill={form.attendance === "yes" ? "#E4899B" : "none"} strokeWidth={1.4} />}
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-[#595959] mb-2 block">Message for the Couple</label>
                  <textarea data-testid="rsvp-message" rows={3} className={inputCls} placeholder="Share your blessings & wishes..." value={form.message} onChange={(e) => set("message", e.target.value)} />
                </div>

                <button
                  type="submit"
                  data-testid="rsvp-submit"
                  className="group w-full rounded-full bg-gradient-to-r from-gold to-[#c99a2e] text-white font-body uppercase tracking-[0.2em] text-sm py-4 flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" strokeWidth={1.4} />
                  Send RSVP
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.4} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
