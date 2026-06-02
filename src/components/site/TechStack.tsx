import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="relative py-28 px-6">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-[2.5rem] px-8 md:px-16 py-16 md:py-24 text-center relative overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

          <p className="relative text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            / Your Health, Today
          </p>
          <h2 className="relative font-display font-bold text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
            Don't wait for the right moment.{" "}
            <span className="italic text-gradient">Create it.</span>
          </h2>
          <p className="relative mt-6 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Book a consultation with a Care Connect specialist today —
            and feel the quiet difference that truly personal care makes.
          </p>

          <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Book Your Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghostOutline" size="lg" asChild>
              <a href="#services">View All Services</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
