import { motion } from "framer-motion";
import {
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Users,
  MapPin,
} from "lucide-react";

const roles = [
  {
    icon: ShieldCheck,
    title: "Admin",
    sub: "Hospital Administrator",
    points: [
      "Register new patients with unique IDs",
      "Add doctors & nurses to the hospital",
      "Assign doctors to specific patients",
      "Monitor staff and ward assignments",
    ],
  },
  {
    icon: Stethoscope,
    title: "Doctor",
    sub: "Treatment & Reports",
    points: [
      "View patients assigned to you",
      "Add diagnosis, medications & injections",
      "Set diet plans & update health status",
      "Generate full PDF discharge reports",
    ],
  },
  {
    icon: HeartPulse,
    title: "Nurse",
    sub: "Vitals & Monitoring",
    points: [
      "View patients in assigned ward/room",
      "Record BP, heart rate, temperature, SpO₂",
      "Add observation notes per session",
      "Track full monitoring history",
    ],
  },
  {
    icon: Users,
    title: "Guardian",
    sub: "Family Member",
    points: [
      "View linked patient's live information",
      "See assigned doctor & nurse details",
      "Read full treatment & vitals timeline",
      "Track current health status",
    ],
  },
  {
    icon: MapPin,
    title: "Public",
    sub: "No login required",
    points: [
      "Find nearby hospitals via GPS",
      "Find nearby pharmacies",
      "Sorted by real distance",
      "Powered by Haversine formula",
    ],
  },
];

const Roles = () => {
  return (
    <section id="roles" className="relative py-28 px-6">
      <div className="container max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              / Five Dashboards
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-2xl">
              One platform. <span className="italic text-gradient">Five</span> ways to care.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Each role gets a focused, role-based dashboard with strict
            permissions and hospital-scoped access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((r, i) => {
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
                  <p className="text-xs uppercase tracking-wider text-accent mt-1">
                    {r.sub}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary mt-1">›</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
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
