import Marquee from "react-fast-marquee";
import { Heart, Sparkles } from "lucide-react";
import { COUPLE } from "../../data/weddingData";

const PHRASES = [
  "Save the Date",
  COUPLE.hashtag,
  "24 · 01 · 2027",
  "Manas weds Kavita",
  "Join the Celebration",
  "Forever & Always",
];

export const MarqueeStrip = () => (
  <section id="marquee" className="relative py-6 md:py-8 bg-[#2C2C2C] overflow-hidden" data-testid="marquee-strip">
    <Marquee gradient={false} speed={55} autoFill>
      {PHRASES.map((p, i) => (
        <div key={i} className="flex items-center">
          <span className="font-heading text-3xl md:text-5xl font-light text-[#FDF5F6] px-8 tracking-tight whitespace-nowrap">
            {p}
          </span>
          {i % 2 === 0 ? (
            <Heart className="w-5 h-5 text-[#E4899B]" fill="currentColor" strokeWidth={0} />
          ) : (
            <Sparkles className="w-5 h-5 text-gold" strokeWidth={1.2} />
          )}
        </div>
      ))}
    </Marquee>
  </section>
);
