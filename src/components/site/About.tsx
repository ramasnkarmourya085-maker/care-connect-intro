import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Expert Doctors" },
  { value: "15K+", label: "Patients Served" },
  { value: "24/7", label: "Care Available" },
  { value: "4.9★", label: "Patient Rating" },
];

const About = () => {
  return (
    <section id="about" className="relative py-14 md:py-28 px-4 md:px-6">
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
            A clinic that treats people —{" "}
            <em className="italic text-gradient">not just patients.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              At Care Connect, every detail is designed around your comfort.
              Our experienced specialists, calm interiors and quiet technology
              work together to make great care feel effortless.
            </p>
            <p>
              We believe medicine should feel personal. From your first visit
              to your follow-up, you'll always speak to someone who knows
              your story.
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
