import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* background image */}
      <img
        src={heroImg}
        alt="Glowing 3D medical cross representing Care Connect platform"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />

      {/* glow blobs */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[140px] animate-pulse-glow" />

      <div className="relative z-10 container max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Activity className="w-4 h-4 text-primary" strokeWidth={2.5} />
          <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Smart Hospital Management Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
        >
          Connecting Care.
          <br />
          Not Just <span className="italic text-gradient">Records.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Care Connect is a multi-hospital patient management system that brings
          Admins, Doctors, Nurses, Guardians and the Public together through one
          secure, role-based platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#about">
              Explore the Platform <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="ghostOutline" size="lg" asChild>
            <a href="#roles">View User Roles</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-scroll-hint" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
