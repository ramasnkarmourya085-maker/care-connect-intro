import { Award, MapPin, Calendar, Sparkles, Users, Rocket } from "lucide-react";
import showcase1 from "@/assets/showcase-iitbhu-1.jpeg";
import showcase2 from "@/assets/showcase-iitbhu-2.jpeg";
import cu1 from "@/assets/showcase-cu-1.png";
import cu2 from "@/assets/showcase-cu-2.png";
import cu3 from "@/assets/showcase-cu-3.png";

type EventItem = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

type Showcase = {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  intro: string;
  stats: { icon: typeof MapPin; label: string; value: string }[];
  gallery: EventItem[];
  quote?: string;
  quoteAuthor?: string;
};

const showcases: Showcase[] = [
  {
    id: "iitbhu",
    badge: "Featured Showcase",
    title: "Recognised at",
    highlight: "IIT (BHU) Varanasi",
    intro:
      "A proud milestone — Care Connect was showcased at one of India's most prestigious institutions, earning appreciation from medical experts and industry leaders.",
    stats: [
      { icon: MapPin, label: "Venue", value: "IIT (BHU) Varanasi" },
      { icon: Award, label: "Reviewed By", value: "CEO, Mankind Pharma" },
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
      { icon: Rocket, label: "Outcome", value: "Funding Discussions" },
      { icon: Calendar, label: "Event", value: "AI Conclave 2026" },
    ],
    gallery: [
      {
        image: cu1,
        title: "AI Conclave — AI for All",
        subtitle: "Science, Society & Future",
        description:
          "Care Connect was presented at the AI Conclave at Chandigarh University, an event bringing together innovators, researchers, and decision-makers shaping the future of AI in society.",
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
    ],
    quote:
      "We believe this is just the beginning — with the right support, Care Connect can create a meaningful impact in healthcare.",
    quoteAuthor: "— Nishant Pandey, Founder · Praveen Kumar Maurya, Co-Founder",
  },
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 space-y-28">
        {showcases.map((s) => (
          <div key={s.id}>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                {s.badge}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                {s.title} <span className="text-gradient">{s.highlight}</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">{s.intro}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
              {s.stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass rounded-3xl p-6 hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 ring-1 ring-primary/40 grid place-items-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {label}
                  </p>
                  <p className="font-display text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div
              className={`grid gap-6 max-w-5xl mx-auto ${
                s.gallery.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {s.gallery.map((e) => (
                <article
                  key={e.title}
                  className="group glass rounded-3xl overflow-hidden hover-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs uppercase tracking-widest text-primary mb-1">
                        {e.subtitle}
                      </p>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {e.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {s.id === "chandigarh" && (
              <div className="mt-10 max-w-3xl mx-auto">
                <div className="glass rounded-3xl p-8 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 ring-1 ring-primary/40 text-xs uppercase tracking-widest text-primary mb-5">
                    <Users className="w-3.5 h-3.5" />
                    The Team Behind Care Connect
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Founder
                      </p>
                      <p className="font-display text-xl font-semibold">
                        Nishant Pandey
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Co-Founder
                      </p>
                      <p className="font-display text-xl font-semibold">
                        Praveen Kumar Maurya
                      </p>
                    </div>
                  </div>
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
    </section>
  );
};

export default Showcase;
