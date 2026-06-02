import { useEffect, useState } from "react";
import { Award, MapPin, Calendar, Sparkles, Rocket, X, Play } from "lucide-react";
import showcase1 from "@/assets/showcase-iitbhu-1.jpeg";
import showcase2 from "@/assets/showcase-iitbhu-2.jpeg";
import cu1 from "@/assets/showcase-cu-1.png";
import cu2 from "@/assets/showcase-cu-2.png";
import cu3 from "@/assets/showcase-cu-3.png";
import cuScifusion from "@/assets/showcase-cu-scifusion-2026.jpg";
import cuAiConclaveVideo from "@/assets/showcase-cu-ai-conclave.mp4";
import goel1 from "@/assets/showcase-goel-1.png";
import goel2 from "@/assets/showcase-goel-2.jpeg";


type EventItem = {
  image: string;
  video?: string;
  title: string;
  subtitle: string;
  description: string;
};

type ShowcaseBlock = {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  intro: string;
  stats: { icon: typeof MapPin; label: string; value: string }[];
  gallery: EventItem[];
  extraImages?: { image: string; alt: string }[];
  quote?: string;
  quoteAuthor?: string;
};

const showcases: ShowcaseBlock[] = [
  {
    id: "iitbhu",
    badge: "Featured Showcase",
    title: "Recognised at",
    highlight: "IIT (BHU) Varanasi",
    intro:
      "A proud milestone — Care Connect was showcased at one of India's most prestigious institutions, earning appreciation from medical experts and industry leaders.",
    stats: [
      { icon: MapPin, label: "Venue", value: "IIT (BHU) Varanasi" },
      { icon: Award, label: "Reviewed By", value: "Mankind Pharma" },
      { icon: Calendar, label: "Event", value: "Research & Project Expo" },
    ],
    gallery: [
      {
        image: showcase1,
        title: "Care Connect at IIT (BHU) Varanasi",
        subtitle: "Research & Project Exhibition",
        description:
          "Our team presented Care Connect to distinguished guests including senior medical department officials and the CEO of Mankind Pharma. The project received an overwhelmingly positive response.",
      },
      {
        image: showcase2,
        title: "Live Demo & Expert Feedback",
        subtitle: "Industry & Academic Review",
        description:
          "Walking through the workflow with industry leaders — from patient registration to real-time vitals monitoring. Encouraging feedback that fuels our mission to improve healthcare accessibility.",
      },
    ],
    quote:
      "A project focused on improving healthcare accessibility and coordination through technology-driven solutions.",
    quoteAuthor: "— Care Connect Team",
  },
  {
    id: "chandigarh",
    badge: "Latest Recognition",
    title: "Presented at",
    highlight: "Chandigarh University",
    intro:
      "Care Connect was showcased at the AI Conclave: Science, Society & Future — AI for All, hosted by Chandigarh University, Uttar Pradesh. The project earned highly positive feedback and opened doors to funding discussions.",
    stats: [
      { icon: MapPin, label: "Venue", value: "Chandigarh University, UP" },
      { icon: Rocket, label: "Outcome", value: "DRDO Meet & Funding Talks" },
      { icon: Calendar, label: "Event", value: "AI Conclave 2026" },
    ],
    gallery: [
      {
        image: cuScifusion,
        title: "SciFusion Nexus 2026 — Group Photo",
        subtitle: "Where Disciplines Converge & Ideas Come Alive",
        description:
          "A memorable group photo with participants, faculty, and dignitaries at SciFusion Nexus 2026, Chandigarh University — celebrating innovation, collaboration, and the spirit of bringing ideas to life.",
      },
      {
        image: cu2,
        title: "Certificate of Excellence",
        subtitle: "Awarded by Chandigarh University",
        description:
          "Team C² — Founder Nishant Pandey and Co-Founder Praveen Kumar Maurya — received the Certificate of Excellence for presenting Care Connect, recognised for innovation and real-world impact.",
      },
      {
        image: cu3,
        title: "SciFusion Nexus 2026",
        subtitle: "Where Disciplines Converge",
        description:
          "Engaging with judges, faculty, and fellow innovators at Chandigarh University. Currently in discussions for funding opportunities and future collaboration with the leadership of the university.",
      },
      {
        image: cu1,
        video: cuAiConclaveVideo,
        title: "AI Conclave — AI for All",
        subtitle: "Science, Society & Future",
        description:
          "Care Connect was presented at the AI Conclave at Chandigarh University, an event bringing together innovators, researchers, and decision-makers shaping the future of AI in society.",
      },
    ],
    quote:
      "We believe this is just the beginning — with the right support, Care Connect can create a meaningful impact in healthcare.",
    quoteAuthor: "— Nishant Pandey, Founder · Praveen Kumar Maurya, Co-Founder",
  },
  {
    id: "goel-ayurvedic",
    badge: "Institutional Meeting",
    title: "Insightful Meeting at",
    highlight: "Goel Ayurvedic Medical College",
    intro:
      "An insightful and productive meeting with the leadership of Goel Ayurvedic Medical College and Hospital — discussing Care Connect, recording valuable feedback, and exploring how technology can strengthen patient care in Ayurvedic practice.",
    stats: [
      { icon: MapPin, label: "Venue", value: "Goel Ayurvedic Medical College & Hospital" },
      { icon: Award, label: "Reviewed By", value: "Principal · Academic Dean · HOD" },
      { icon: Calendar, label: "Outcome", value: "Recorded Reviews & Discussion" },
    ],
    gallery: [
      {
        image: goel1,
        title: "Live Demo with the Principal",
        subtitle: "Dr. Abhinath Chandra Srivastava",
        description:
          "Walking the Principal, Dr. Abhinath Chandra Srivastava, through Care Connect — showcasing patient workflows, dashboards, and how the platform can support hospital coordination. The session received warm engagement and constructive feedback.",
      },
      {
        image: goel2,
        title: "Discussion with Academic Leadership",
        subtitle: "Dr. Sunil Gupta & Dr. AK Singh",
        description:
          "A productive conversation with Academic Dean Dr. Sunil Gupta and HOD Dr. AK Singh. We recorded their reviews on Care Connect and discussed how the platform can integrate with academic and clinical needs of the institution.",
      },
    ],
    quote:
      "An insightful and productive meeting — encouraging feedback from respected academic and medical leaders.",
    quoteAuthor: "— Team Care Connect",
  },
];


const Showcase = () => {
  const [lightbox, setLightbox] = useState<
    { type: "image"; src: string; alt: string } | { type: "video"; src: string; alt: string } | null
  >(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    if (lightbox) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="showcase" className="relative py-14 md:py-32">
      <div className="container mx-auto px-4 space-y-16 md:space-y-28">
        {showcases.map((s) => (
          <div key={s.id}>
            <div className="max-w-2xl mx-auto text-center mb-8 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full glass text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-4 md:mb-6">
                <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                {s.badge}
              </div>
              <h2 className="font-display text-[1.7rem] sm:text-4xl md:text-5xl font-bold leading-tight">
                {s.title} <span className="text-gradient">{s.highlight}</span>
              </h2>
              <p className="mt-3 md:mt-5 text-sm md:text-lg text-muted-foreground">{s.intro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto mb-8 md:mb-12">
              {s.stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 hover-lift">
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-primary/15 ring-1 ring-primary/40 grid place-items-center mb-3 md:mb-4">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {label}
                  </p>
                  <p className="font-display text-base md:text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div
              className={`grid gap-4 md:gap-6 max-w-5xl mx-auto ${
                s.gallery.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {s.gallery.map((e) => (
                <article
                  key={e.title}
                  className="group glass rounded-3xl overflow-hidden hover-lift"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox(
                        e.video
                          ? { type: "video", src: e.video, alt: e.title }
                          : { type: "image", src: e.image, alt: e.title }
                      )
                    }
                    className="relative aspect-[4/3] overflow-hidden block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={e.video ? `Play video: ${e.title}` : `Open image: ${e.title}`}
                  >
                    {e.video ? (
                      <video
                        src={e.video}
                        poster={e.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={e.image}
                        alt={e.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    {e.video && (
                      <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] uppercase tracking-widest text-foreground ring-1 ring-border">
                        <Play className="w-3 h-3 text-primary" fill="currentColor" />
                        Tap for sound
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <p className="text-xs uppercase tracking-widest text-primary mb-1">
                        {e.subtitle}
                      </p>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {e.title}
                      </h3>
                    </div>
                  </button>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {s.extraImages && s.extraImages.length > 0 && (
              <div className="mt-10 max-w-5xl mx-auto">
                <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  More Moments
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {s.extraImages.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        setLightbox({ type: "image", src: img.image, alt: img.alt })
                      }
                      className="group relative aspect-square overflow-hidden rounded-2xl glass hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`Open image: ${img.alt}`}
                    >
                      <img
                        src={img.image}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {s.quote && (
              <div className="mt-12 max-w-3xl mx-auto text-center">
                <blockquote className="font-display italic text-lg md:text-xl text-foreground/90 leading-relaxed">
                  "{s.quote}"
                </blockquote>
                {s.quoteAuthor && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {s.quoteAuthor}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full glass grid place-items-center text-foreground hover:bg-primary/20 transition-colors"
            aria-label="Close image"
          >
            <X className="w-5 h-5" />
          </button>
          {lightbox.type === "video" ? (
            <video
              src={lightbox.src}
              autoPlay
              controls
              playsInline
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-2xl bg-black"
            />
          ) : (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Showcase;
