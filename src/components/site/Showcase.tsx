import { Award, MapPin, Calendar, Sparkles } from "lucide-react";
import showcase1 from "@/assets/showcase-iitbhu-1.jpeg";
import showcase2 from "@/assets/showcase-iitbhu-2.jpeg";

const events = [
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
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Featured Showcase
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Recognised at <span className="text-gradient">IIT (BHU) Varanasi</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            A proud milestone — Care Connect was showcased at one of India's
            most prestigious institutions, earning appreciation from medical
            experts and industry leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          <div className="glass rounded-3xl p-6 hover-lift">
            <div className="w-11 h-11 rounded-xl bg-primary/15 ring-1 ring-primary/40 grid place-items-center mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Venue</p>
            <p className="font-display text-lg font-semibold">IIT (BHU) Varanasi</p>
          </div>
          <div className="glass rounded-3xl p-6 hover-lift">
            <div className="w-11 h-11 rounded-xl bg-primary/15 ring-1 ring-primary/40 grid place-items-center mb-4">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Reviewed By</p>
            <p className="font-display text-lg font-semibold">CEO, Mankind Pharma</p>
          </div>
          <div className="glass rounded-3xl p-6 hover-lift">
            <div className="w-11 h-11 rounded-xl bg-primary/15 ring-1 ring-primary/40 grid place-items-center mb-4">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Event</p>
            <p className="font-display text-lg font-semibold">Research & Project Expo</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((e) => (
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
                  <h3 className="font-display text-xl font-bold text-foreground">
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

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <blockquote className="font-display italic text-lg md:text-xl text-foreground/90 leading-relaxed">
            "A project focused on improving healthcare accessibility and
            coordination through technology-driven solutions."
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            — Care Connect Team
          </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
