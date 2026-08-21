import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FAMILY } from "../../data/weddingData";
import { SectionHeading } from "./shared";

export const Family = () => (
  <section id="family" className="relative section-pad bg-[#FDF5F6]" data-testid="family-section">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="With Love & Blessings" title="Meet The Family" subtitle="A wedding unites not just two people, but two beautiful families. Here are the hearts behind our celebration." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FAMILY.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-3xl p-8 text-center group hover:-translate-y-2 transition-transform duration-500"
            data-testid={`family-card-${i}`}
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#F9E5E6] via-[#E6E6FA] to-[#FFDAB9] flex items-center justify-center font-heading text-3xl text-[#2C2C2C] group-hover:scale-110 transition-transform">
              {f.initials}
            </div>
            <p className="font-body uppercase tracking-[0.25em] text-[10px] text-gold mt-5">{f.side}</p>
            <h3 className="font-heading text-2xl font-light text-[#2C2C2C] mt-2">{f.name}</h3>
            <p className="font-body font-light text-sm text-[#595959] mt-2 flex items-center justify-center gap-1.5">
              <Heart className="w-3 h-3 text-[#E4899B]" fill="currentColor" strokeWidth={0} /> {f.relation}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
