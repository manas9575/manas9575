import { motion } from "framer-motion";
import { DRESS_CODE } from "../../data/weddingData";
import { SectionHeading } from "./shared";

export const DressCode = () => (
  <section id="dresscode" className="relative section-pad bg-[#FFFAF8]" data-testid="dresscode-section">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="Dress To Impress" title="Dress Code" subtitle="We'd love for you to twirl into our celebrations in these dreamy palettes." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DRESS_CODE.map((d, i) => (
          <motion.div
            key={d.event}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-3xl p-8 text-center group"
            data-testid={`dresscode-${d.event.toLowerCase().replace(/\s/g, "-")}`}
          >
            <div className="flex justify-center gap-2 mb-6">
              {d.palette.map((c, j) => (
                <motion.span
                  key={j}
                  whileHover={{ scale: 1.25, y: -4 }}
                  className="w-11 h-11 rounded-full shadow-inner border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <h3 className="font-heading text-2xl font-light text-[#2C2C2C]">{d.event}</h3>
            <p className="font-body font-light text-sm text-[#595959] mt-2">{d.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
