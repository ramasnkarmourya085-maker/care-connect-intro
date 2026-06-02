import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Microscope,
  Clock,
  Leaf,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    desc: "Board-certified specialists with decades of focused experience across every department.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    desc: "Modern diagnostic equipment and digital health records for faster, more accurate care.",
  },
  {
    icon: Leaf,
    title: "Strict Hygiene",
    desc: "Hospital-grade sanitization standards followed in every room, every visit, every time.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Approach",
    desc: "We listen first, explain clearly, and design every plan around your unique needs.",
  },
  {
    icon: Clock,
    title: "On-Time Appointments",
    desc: "Respect for your time — minimal waiting, smooth check-in and clear scheduling.",
  },
  {
    icon: Sparkles,
    title: "Premium Comfort",
    desc: "Quiet, beautifully designed spaces that put you at ease from the moment you arrive.",
  },
];

const Roles = () => {
  return (
    <section id="why" className="relative py-14 md:py-28 px-4 md:px-6">
      <div className="container max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-4 md:gap-6 mb-8 md:mb-14">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 md:mb-4">
              / Why Choose Us
            </p>
            <h2 className="font-display font-bold text-[1.7rem] sm:text-4xl md:text-6xl leading-tight max-w-2xl">
              The standard of care{" "}
              <span className="italic text-gradient">you've been waiting for.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-sm">
            Six quiet promises that shape every consultation, every diagnosis
            and every follow-up at Care Connect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-3xl p-7 hover-lift relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-accent grid place-items-center shadow-glow">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roles;
