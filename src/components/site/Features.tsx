import { motion } from "framer-motion";
import {
  UserPlus,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  UserCog,
  FileText,
  Activity,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: UserPlus,
    title: "Register Patient",
    desc: "Add a new patient to the system with auto-generated unique ID.",
    tone: "from-sky-500/20 to-sky-500/5",
    iconBg: "bg-sky-500/15 text-sky-400",
  },
  {
    icon: ClipboardList,
    title: "View Patients",
    desc: "Browse all registered patients with ward, doctor and live status.",
    tone: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-500/15 text-emerald-400",
  },
  {
    icon: HeartPulse,
    title: "Manage Nurses",
    desc: "Assign nurses to specific wards or ICU rooms in one click.",
    tone: "from-rose-500/20 to-rose-500/5",
    iconBg: "bg-rose-500/15 text-rose-400",
  },
  {
    icon: ShieldCheck,
    title: "Add Doctor",
    desc: "Onboard a new doctor with department and specialty assignment.",
    tone: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/15 text-violet-400",
  },
  {
    icon: UserCog,
    title: "Add Nurse",
    desc: "Onboard a new nurse to the staff with secure credentials.",
    tone: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/15 text-amber-400",
  },
  {
    icon: FileText,
    title: "Discharge Reports",
    desc: "Generate full PDF reports with diagnosis, meds, vitals and signatures.",
    tone: "from-cyan-500/20 to-cyan-500/5",
    iconBg: "bg-cyan-500/15 text-cyan-400",
  },
  {
    icon: Activity,
    title: "Record Vitals",
    desc: "Log BP, Heart Rate, Temperature, SpO₂ with observation notes.",
    tone: "from-teal-500/20 to-teal-500/5",
    iconBg: "bg-teal-500/15 text-teal-400",
  },
  {
    icon: MapPin,
    title: "Find Nearby",
    desc: "Public users locate hospitals & pharmacies via GPS — no login.",
    tone: "from-indigo-500/20 to-indigo-500/5",
    iconBg: "bg-indigo-500/15 text-indigo-400",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="container max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              / Quick Actions
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-2xl">
              Everything a hospital{" "}
              <span className="italic text-gradient">actually needs.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Real features taken straight from the Care Connect dashboards —
            built for speed, clarity and zero training time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass rounded-3xl p-6 hover-lift relative overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${f.tone} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-2xl grid place-items-center ${f.iconBg}`}
                  >
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
