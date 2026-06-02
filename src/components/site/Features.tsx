import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Brain,
  Bone,
  Eye,
  Smile,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    desc: "Everyday health, expertly handled — from check-ups to chronic care.",
    iconBg: "bg-emerald-500/15 text-emerald-400",
  },
  {
    icon: HeartPulse,
    title: "Cardiology",
    desc: "Advanced heart screening, diagnostics and long-term care plans.",
    iconBg: "bg-rose-500/15 text-rose-400",
  },
  {
    icon: Brain,
    title: "Neurology",
    desc: "Specialist evaluation for headaches, sleep, memory and the nervous system.",
    iconBg: "bg-violet-500/15 text-violet-400",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    desc: "Gentle, attentive care for infants, children and growing teens.",
    iconBg: "bg-sky-500/15 text-sky-400",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    desc: "Bone, joint and sports recovery — guided by experienced surgeons.",
    iconBg: "bg-amber-500/15 text-amber-400",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    desc: "Comprehensive eye care, modern diagnostics and refined vision treatment.",
    iconBg: "bg-cyan-500/15 text-cyan-400",
  },
  {
    icon: Smile,
    title: "Dental Care",
    desc: "Painless dentistry, cosmetic treatment and complete oral health.",
    iconBg: "bg-teal-500/15 text-teal-400",
  },
  {
    icon: Activity,
    title: "Diagnostics & Labs",
    desc: "Fast, accurate test results delivered straight to your dashboard.",
    iconBg: "bg-indigo-500/15 text-indigo-400",
  },
];

const Features = () => {
  return (
    <section id="services" className="relative py-14 md:py-28 px-4 md:px-6">
      <div className="container max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-4 md:gap-6 mb-8 md:mb-14">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 md:mb-4">
              / Our Services
            </p>
            <h2 className="font-display font-bold text-[1.7rem] sm:text-4xl md:text-6xl leading-tight max-w-2xl">
              Complete care, under{" "}
              <span className="italic text-gradient">one calm roof.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-sm">
            Every specialty is led by experienced consultants and supported by
            modern, gentle technology — so the whole family feels at home.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((f, i) => {
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
