import { motion } from "framer-motion";

const stack = [
  { layer: "Frontend", value: "React (Vite) · Tailwind · Axios" },
  { layer: "Backend", value: "FastAPI (Python) · Uvicorn" },
  { layer: "Auth", value: "JWT · python-jose · bcrypt" },
  { layer: "Storage", value: "JSON file-based (thread-safe)" },
  { layer: "Reports", value: "PDF generation (fpdf2)" },
  { layer: "Location", value: "Browser Geolocation · Haversine" },
];

const TechStack = () => {
  return (
    <section id="tech" className="relative py-28 px-6">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              / Tech Stack
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              Built modern. <br />
              <span className="italic text-gradient">Built to scale.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              A pragmatic stack that pairs a fast React frontend with a clean
              Python backend, role-based JWT auth and lightweight JSON storage —
              perfect for prototypes and small hospital networks.
            </p>
          </div>

          <div className="space-y-3">
            {stack.map((t, i) => (
              <motion.div
                key={t.layer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass rounded-2xl px-6 py-5 flex items-center justify-between gap-6 hover-lift"
              >
                <span className="font-display text-lg font-bold">{t.layer}</span>
                <span className="text-sm text-muted-foreground text-right">
                  {t.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
