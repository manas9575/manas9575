import { motion } from "framer-motion";
import { Calendar, Clock, Shirt, Sparkles } from "lucide-react";
import { EVENTS } from "../../data/weddingData";
import { SectionHeading, FloatingHearts } from "./shared";

const EventCard = ({ ev, index }) => {
  const flip = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid md:grid-cols-2 gap-8 md:gap-14 items-center"
    >
      {/* Illustration */}
      <div className={`relative ${flip ? "md:order-2" : ""}`}>
        <div
          className="absolute inset-0 -m-4 rounded-[3rem] blur-2xl opacity-40"
          style={{ background: ev.accent }}
        />
        <motion.div
          whileHover={{ scale: 1.03, rotate: flip ? -1.5 : 1.5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative rounded-[2.5rem] overflow-hidden glass p-3"
        >
          <img src={ev.img} alt={`${ev.name} illustration`} className="w-full h-[380px] md:h-[460px] object-cover object-top rounded-[2rem]" />
        </motion.div>
        <div
          className="absolute -top-5 left-6 md:-left-5 w-16 h-16 rounded-full glass flex items-center justify-center font-heading text-3xl"
          style={{ color: ev.accent }}
        >
          0{index + 1}
        </div>
      </div>

      {/* Details */}
      <div className={`${flip ? "md:order-1 md:text-right" : ""}`}>
        <span className="font-body uppercase tracking-[0.3em] text-xs" style={{ color: ev.accent }}>
          {ev.note}
        </span>
        <h3 className="font-heading text-5xl md:text-6xl font-light text-[#2C2C2C] mt-2">{ev.name}</h3>
        <p className="font-body font-light text-[#595959] mt-4 leading-relaxed max-w-md md:inline-block">{ev.desc}</p>

        <div className={`mt-7 flex flex-col gap-3 ${flip ? "md:items-end" : ""}`}>
          <Detail icon={Calendar} label={`${ev.date} · ${ev.day}`} flip={flip} />
          <Detail icon={Clock} label={ev.time} flip={flip} />
          <Detail icon={Shirt} label={ev.dress} flip={flip} />
        </div>
      </div>
    </motion.div>
  );
};

const Detail = ({ icon: Icon, label, flip }) => (
  <div className={`inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 ${flip ? "md:flex-row-reverse" : ""}`}>
    <Icon className="w-4 h-4 text-gold shrink-0" strokeWidth={1.4} />
    <span className="font-body text-sm text-[#2C2C2C]">{label}</span>
  </div>
);

export const EventTimeline = () => (
  <section id="events" className="relative section-pad bg-[#FDF5F6] overflow-hidden" data-testid="event-timeline-section">
    <FloatingHearts count={7} />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="Four Days of Joy" title="The Celebrations" subtitle="From golden Haldi mornings to a glittering Reception — here's everything we're celebrating together." />

      <div className="flex flex-col gap-20 md:gap-32 mt-8">
        {EVENTS.map((ev, i) => (
          <EventCard key={ev.id} ev={ev} index={i} />
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <div className="glass rounded-full px-7 py-3 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.2} />
          <span className="font-body text-sm tracking-[0.15em] text-[#2C2C2C]">Your presence is the only present we need</span>
        </div>
      </div>
    </div>
  </section>
);
