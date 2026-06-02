import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Book Appointment", desc: "Choose your specialist and a time that fits — online, in seconds." },
  { n: "02", title: "Consultation", desc: "A calm, unhurried conversation with a doctor who actually listens." },
  { n: "03", title: "Diagnosis & Tests", desc: "Modern, on-site diagnostics with fast and accurate results." },
  { n: "04", title: "Treatment Plan", desc: "A clear, personalised plan explained in simple, honest language." },
  { n: "05", title: "Ongoing Care", desc: "Gentle follow-ups and reminders so nothing important slips by." },
  { n: "06", title: "Health Records", desc: "Every report, prescription and visit — secure and always with you." },
];

const Workflow = () => {
  return (
    <section id="workflow" className="relative py-28 px-6">
      <div className="container max-w-6xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          / Your Visit
        </p>
        <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-3xl mb-16">
          Six simple steps. <span className="italic text-gradient">Zero stress.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="glass rounded-3xl p-7 hover-lift flex gap-5"
            >
              <span className="font-display text-5xl font-bold text-gradient leading-none">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
