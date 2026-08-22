// All wedding content in one place — easy to edit.

export const IMG = {
  heroCouple: "https://static.prod-images.emergentagent.com/jobs/086bbd86-1a0f-445b-8bee-59b7d3245cc4/images/635d37d34edf72397b2c8a861b64329c5c3794f8ac49d6d734904a2459eab88a.jpeg",
  haldi: "https://static.prod-images.emergentagent.com/jobs/086bbd86-1a0f-445b-8bee-59b7d3245cc4/images/905c350b899355dac8f2a51d2f14418294b822247dd9dcee480d555d671ef8d5.jpeg",
  djNight: "https://static.prod-images.emergentagent.com/jobs/086bbd86-1a0f-445b-8bee-59b7d3245cc4/images/5960270bd5b22a4a9fab66c3913cdc01b7d4a71461d0038632bc9cfd01114ab7.jpeg",
  wedding: "https://static.prod-images.emergentagent.com/jobs/086bbd86-1a0f-445b-8bee-59b7d3245cc4/images/d44bd93771005aedea89ef57d635f5f1b7c219ea284e2bd6234b3d2d2c8c558f.jpeg",
  reception: "https://static.prod-images.emergentagent.com/jobs/086bbd86-1a0f-445b-8bee-59b7d3245cc4/images/2f730b9e56c6bde5a3db82201694a76bf3154657ebc021f54b59cfe1f2f227b7.jpeg",
  floralDivider: "https://static.prod-images.emergentagent.com/jobs/086bbd86-1a0f-445b-8bee-59b7d3245cc4/images/2df416f63b2ad77ee82ab124865f643bacfad670d3b913b786abc0837751b18a.jpeg",
  ganesh: "https://static.prod-images.emergentagent.com/jobs/086bbd86-1a0f-445b-8bee-59b7d3245cc4/images/c15a5738b2ae28853abd1c340c0855855e1aa9dcb2bcf8f95e7e26132dbb77c5.jpeg",
};

export const PLAYLIST = [
  "/vakratunda.mp3",
  "/sahilmadan.mp3",
];

// Uploaded couple photos used for the hero background slideshow
export const PHOTOS = [
  { src: "/couple/p1.jpeg", alt: "Manas & Kavita" },
  { src: "/couple/p4.jpeg", alt: "Manas & Kavita" },
  { src: "/couple/p5.jpeg", alt: "Manas & Kavita" },
  { src: "/couple/p3.jpeg", alt: "Manas & Kavita" },
  { src: "/couple/p8.jpeg", alt: "Manas & Kavita" },
  { src: "/couple/p2.jpeg", alt: "Manas & Kavita" },
  { src: "/couple/p6.jpeg", alt: "Manas & Kavita" },
  { src: "/couple/p7.jpeg", alt: "Manas & Kavita" },
];

export const COUPLE = {
  groom: "Manas",
  bride: "Kavita",
  hashtag: "#ManuWedsKavii",
  tagline: "Two souls, one beautiful journey",
};

// Wedding day used for countdown & scratch card (main wedding: 24 Jan 2027)
export const WEDDING_DATE = "2027-01-24T08:00:00";

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1724280120520-c52b4c1170fd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", span: "md:col-span-5 md:row-span-2", alt: "Manas and Kavita in traditional attire" },
  { src: "https://images.unsplash.com/photo-1735052712464-9d24b69be5f5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", span: "md:col-span-4", alt: "Pre-wedding shoot in the woods" },
  { src: "https://images.pexels.com/photos/36683124/pexels-photo-36683124.jpeg?auto=compress&cs=tinysrgb&w=1200", span: "md:col-span-3", alt: "A loving embrace" },
  { src: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", span: "md:col-span-3", alt: "Under the floral canopy" },
  { src: "https://images.unsplash.com/photo-1720105761832-927de5f2ecce?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", span: "md:col-span-4", alt: "Together forever" },
  { src: "https://images.pexels.com/photos/32149830/pexels-photo-32149830.jpeg?auto=compress&cs=tinysrgb&w=1200", span: "md:col-span-5", alt: "Romantic moment" },
];

// Order: Haldi, Wedding, DJ Night, Reception
export const EVENTS = [
  {
    id: "haldi",
    name: "Haldi",
    img: IMG.haldi,
    date: "22 January 2027",
    time: "10:00 AM onwards",
    day: "Friday",
    dress: "Light sky blue",
    desc: "A morning drenched in turmeric, laughter and marigold. Join us as we shower Manas with golden blessings.",
    note: "Groom's celebration",
    accent: "#8EC5E8",
    cal: { start: "20270122T043000Z", end: "20270122T073000Z", location: "Gondi Dharamsi, Tehsil Jaora, Dist. Ratlam, MP 457336" },
  },
  {
    id: "wedding",
    name: "The Wedding",
    img: IMG.wedding,
    date: "24 January 2027",
    time: "Morning to Day",
    day: "Sunday",
    dress: "Traditional festive finery",
    desc: "The sacred pheras. Bride in red, groom in cream, seven vows and a lifetime of togetherness under the mandap.",
    note: "Manas weds Kavita",
    accent: "#E4899B",
    cal: { start: "20270124T023000Z", end: "20270124T083000Z", location: "Hatanara, Tehsil Piploda, Dist. Ratlam, MP" },
  },
  {
    id: "dj",
    name: "DJ Night",
    img: IMG.djNight,
    date: "24 January 2027",
    time: "07:00 PM onwards",
    day: "Sunday Evening",
    dress: "Dark shades & glam",
    desc: "Dim the lights, turn up the bass. A glamorous night of dancing, dhol and dazzle under the stage lights.",
    note: "Manas & Kavita",
    accent: "#C3A6F5",
    cal: { start: "20270124T133000Z", end: "20270124T173000Z", location: "Gondi Dharamsi, Tehsil Jaora, Dist. Ratlam, MP 457336" },
  },
  {
    id: "reception",
    name: "Reception",
    img: IMG.reception,
    date: "25 January 2027",
    time: "07:00 PM onwards",
    day: "Monday Evening",
    dress: "Your choice, dress to impress",
    desc: "An evening of elegance, fine dining and celebration as we toast to the newlyweds in style.",
    note: "Manas & Kavita",
    accent: "#D4AF37",
    cal: { start: "20270125T133000Z", end: "20270125T173000Z", location: "Gondi Dharamsi, Tehsil Jaora, Dist. Ratlam, MP 457336" },
  },
];

export const FAMILY = [
  { side: "Groom's Parents", name: "Nageshwar & Shyama Bai", relation: "Parents of Manas", initials: "N" },
  { side: "Groom's Grandparents", name: "Shivnarayan & Chanda Bai", relation: "Blessings of the elders", initials: "S" },
  { side: "Bride's Parents", name: "Dinesh Hathiya Patidar & Vidhya Bai", relation: "Parents of Kavita", initials: "D" },
];

export const FAQS = [
  { q: "When should I RSVP by?", a: "Kindly RSVP before 5th January 2027 so we can make sure everything is perfect for you." },
  { q: "Can I bring a plus one?", a: "We'd love to celebrate with your loved ones! Please indicate the number of guests in your RSVP form." },
  { q: "Will the events be indoors?", a: "The Haldi is outdoors in the morning, while the DJ Night, Wedding and Reception are held in beautifully decorated venues." },
  { q: "Are children welcome?", a: "Absolutely! We adore little ones. Please include them in your guest count so we can arrange for them." },
  { q: "Is there parking at the venue?", a: "Yes, ample parking is available at both venues for all guests." },
];

// Haldi: light sky blue primary. DJ Night: dark. Wedding & Reception: guests' choice.
export const DRESS_CODE = [
  { event: "Haldi", palette: ["#8EC5E8", "#BFE0F5", "#EAF6FD"], note: "Primary: light sky blue" },
  { event: "Wedding", palette: ["#E4899B", "#D4AF37", "#F5EBD0"], note: "Wear whatever you love" },
  { event: "DJ Night", palette: ["#2C2C2C", "#3A2A5A", "#1A1A2E"], note: "Dark shades & sparkle" },
  { event: "Reception", palette: ["#F5F5DC", "#D4AF37", "#E6E6FA"], note: "Your choice, dress to impress" },
];

export const VENUES = [
  {
    name: "Wedding Venue — Hatanara",
    tag: "The Wedding · 24 Jan",
    address: "Hatanara, Tehsil Piploda, Dist. Ratlam, Madhya Pradesh",
    mapsEmbed: "https://www.google.com/maps?q=Hatanara%2C%20Piploda%2C%20Ratlam%2C%20Madhya%20Pradesh&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Hatanara+Piploda+Ratlam+Madhya+Pradesh",
  },
  {
    name: "Gondi Dharamsi",
    tag: "Haldi · DJ Night · Reception",
    address: "Gondi Dharamsi, Tehsil Jaora, Dist. Ratlam, Madhya Pradesh 457336, IN",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.4392946940687!2d75.2358521662536!3d23.763851807625215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396417d85dc77739%3A0x97cbce553862c468!2z4KS44KSw4KSm4KS-4KSwIOCkquCkn-Clh-CksiDgpKfgpLDgpY3gpK7gpLbgpL7gpLLgpL4g4KSX4KWL4KSC4KSm4KWAIOCkp-CksOCljeCkruCkuOClgA!5e1!3m2!1sen!2sin!4v1787295621818!5m2!1sen!2sin",
    directions: "https://www.google.com/maps/dir/?api=1&destination=23.763851807625215,75.2358521662536",
  },
];
