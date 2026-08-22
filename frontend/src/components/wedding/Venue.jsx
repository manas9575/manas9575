import { MapPin, Navigation } from "lucide-react";
import { VENUES } from "../../data/weddingData";
import { SectionHeading, Reveal } from "./shared";

const VenueCard = ({ v, index }) => (
  <Reveal delay={index * 0.12}>
    <div className="glass rounded-[2rem] p-3 h-full flex flex-col overflow-hidden" data-testid={`venue-card-${index}`}>
      <div className="rounded-[1.6rem] overflow-hidden min-h-[260px] flex-1">
        <iframe
          src={v.mapsEmbed}
          title={v.name}
          className="w-full h-full min-h-[260px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          data-testid={`venue-map-${index}`}
        />
      </div>
      <div className="p-5">
        <span className="font-body uppercase tracking-[0.25em] text-[10px] text-gold">{v.tag}</span>
        <h3 className="font-heading text-2xl md:text-3xl font-light text-[#2C2C2C] mt-1 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gold shrink-0" strokeWidth={1.4} /> {v.name}
        </h3>
        <p className="font-body font-light text-sm text-[#595959] mt-2 leading-relaxed">{v.address}</p>
        <a
          href={v.directions}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`get-directions-${index}`}
          className="group mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-[#2C2C2C] text-white font-body uppercase tracking-[0.2em] text-xs py-3.5 px-7 hover:bg-gold transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
        >
          <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" strokeWidth={1.5} />
          Get Directions
        </a>
      </div>
    </div>
  </Reveal>
);

export const Venue = () => (
  <section id="venue" className="relative section-pad bg-[#FFFAF8]" data-testid="venue-section">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading eyebrow="Where The Magic Happens" title="The Venues" subtitle="Our celebrations unfold across two beautiful locations in Ratlam. Tap 'Get Directions' to find your way." />

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {VENUES.map((v, i) => (
          <VenueCard key={i} v={v} index={i} />
        ))}
      </div>
    </div>
  </section>
);
