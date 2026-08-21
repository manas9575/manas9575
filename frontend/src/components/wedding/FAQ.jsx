import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "../../data/weddingData";
import { SectionHeading } from "./shared";

export const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative section-pad bg-[#FFFAF8]" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading eyebrow="Good To Know" title="Questions & Answers" subtitle="A few things guests often ask. Still curious? Just reach out to us!" />

        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass rounded-3xl overflow-hidden"
                data-testid={`faq-item-${i}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  data-testid={`faq-toggle-${i}`}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-heading text-xl md:text-2xl font-light text-[#2C2C2C]">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 w-9 h-9 rounded-full bg-[#2C2C2C] text-white flex items-center justify-center">
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="font-body font-light text-[#595959] px-6 pb-6 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
