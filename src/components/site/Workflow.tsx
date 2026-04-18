import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Login", desc: "Single secure entry — JWT routes you to the right dashboard. Public users skip login." },
  { n: "02", title: "Admin Setup", desc: "Register patients, add staff, assign doctors and manage wards." },
  { n: "03", title: "Doctor Care", desc: "Diagnose, prescribe meds, set diet, update status, generate PDF reports." },
  { n: "04", title: "Nurse Monitoring", desc: "Record BP, HR, Temp, SpO₂ and notes; build a complete vitals timeline." },
  { n: "05", title: "Guardian View", desc: "Family stays informed with live patient info, treatment & vitals." },
  { n: "06", title: "Public Discovery", desc: "GPS-based search for nearby hospitals & pharmacies." },
];

const Workflow = () => {
  return (
    <section id="workflow" className="relative py-28 px-6">
      <div className="container max-w-6xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          / How It Works
        </p>
        <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-3xl mb-16">
          A simple, <span className="italic text-gradient">end-to-end</span> care workflow.
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
