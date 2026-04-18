import { motion } from "framer-motion";

const stats = [
  { value: "5", label: "User Roles" },
  { value: "100%", label: "Hospital-scoped data" },
  { value: "JWT", label: "Secure auth" },
  { value: "PDF", label: "Discharge reports" },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="container max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          / About Us
        </motion.p>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 font-display font-bold text-3xl md:text-5xl leading-tight"
          >
            We're building a{" "}
            <mark className="bg-primary/20 text-primary-foreground px-2 rounded-md">
              unified patient care
            </mark>{" "}
            platform that puts <em className="italic text-gradient">trust, transparency</em> and speed at the heart of every hospital.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              Care Connect is designed for multi-hospital environments where
              admins, doctors, nurses and guardians each need a focused workspace —
              while patient data stays strictly isolated per hospital.
            </p>
            <p>
              The public can also discover nearby hospitals and pharmacies, no
              login required, sorted by real distance using the Haversine formula.
            </p>
          </motion.div>
        </div>

        {/* stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-6 hover-lift"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
