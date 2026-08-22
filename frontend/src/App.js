import "@/App.css";
import { useLenis } from "@/hooks/useLenis";
import { Navbar } from "@/components/wedding/Navbar";
import { GaneshBlessing } from "@/components/wedding/GaneshBlessing";
import { BackgroundMusic } from "@/components/wedding/BackgroundMusic";
import { Hero } from "@/components/wedding/Hero";
import { MarqueeStrip } from "@/components/wedding/MarqueeStrip";
import { Countdown } from "@/components/wedding/Countdown";
import { EventTimeline } from "@/components/wedding/EventTimeline";
import { ScratchCard } from "@/components/wedding/ScratchCard";
import { Gallery } from "@/components/wedding/Gallery";
import { RSVP } from "@/components/wedding/RSVP";
import { Venue } from "@/components/wedding/Venue";
import { Family } from "@/components/wedding/Family";
import { Hashtag } from "@/components/wedding/Hashtag";
import { DressCode } from "@/components/wedding/DressCode";
import { FAQ } from "@/components/wedding/FAQ";
import { Guestbook } from "@/components/wedding/Guestbook";
import { ThankYou, Footer } from "@/components/wedding/ThankYou";

function App() {
  useLenis();

  return (
    <div className="App">
      <Navbar />
      <BackgroundMusic />
      <main>
        <GaneshBlessing />
        <Hero />
        <MarqueeStrip />
        <Countdown />
        <EventTimeline />
        <ScratchCard />
        <Gallery />
        <DressCode />
        <RSVP />
        <Venue />
        <Family />
        <Hashtag />
        <FAQ />
        <Guestbook />
        <ThankYou />
      </main>
      <Footer />
    </div>
  );
}

export default App;
