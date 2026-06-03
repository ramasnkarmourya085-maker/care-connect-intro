import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";
import logo from "@/assets/care-connect-logo.jpeg";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Your Visit", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
];

const services = [
  "General Consultation",
  "Specialist Care",
  "Diagnostics",
  "Emergency Services",
  "Wellness Programs",
];

const socials = [
  {
    label: "Email",
    href: "mailto:nishant@careconnecthospital.com",
    Icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/careconnecthospital?igsh=MWN2OGNvMTViNW0wdA==",
    Icon: Instagram,
  },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: Linkedin },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative mt-20">
      {/* Wave top edge */}
      <div className="absolute -top-[1px] left-0 right-0 overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[hsl(230_60%_8%)] to-[hsl(230_70%_4%)] border-t border-border/30">
        {/* Glow orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="relative px-6 md:px-12 pt-24 pb-12">
          {/* Main Footer Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
              {/* Brand Column */}
              <div className="lg:col-span-4">
                <motion.a
                  href="#top"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-3 mb-6"
                >
                  <span className="grid place-items-center w-12 h-12 rounded-2xl overflow-hidden bg-background ring-1 ring-primary/40">
                    <img
                      src={logo}
                      alt="Care Connect logo"
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="font-display text-2xl font-bold tracking-tight">
                    Care <span className="text-gradient">Connect</span>
                  </span>
                </motion.a>

                <p className="max-w-sm text-muted-foreground leading-relaxed text-sm">
                  Premium healthcare, designed around you. Quiet spaces, expert
                  doctors and care that always feels personal.
                </p>

                {/* Contact Info */}
                <div className="mt-8 space-y-3">
                  <a
                    href="mailto:nishant@careconnecthospital.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-secondary/60 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </span>
                    nishant@careconnecthospital.com
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-9 h-9 rounded-xl bg-secondary/60 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-primary" />
                    </span>
                    24/7 Care Line Available
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-9 h-9 rounded-xl bg-secondary/60 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </span>
                    Mon – Sat · 9:00 – 20:00
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-8 flex gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl bg-secondary/40 border border-border/40 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2 lg:col-start-6">
                <h4 className="font-semibold text-sm mb-6 tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span className="w-0 group-hover:w-3 transition-all duration-300 overflow-hidden">
                          <ArrowUpRight className="w-3 h-3 text-primary" />
                        </span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="lg:col-span-2">
                <h4 className="font-semibold text-sm mb-6 tracking-wide">
                  Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="text-sm text-muted-foreground"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter / CTA */}
              <div className="lg:col-span-4">
                <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-[60px] pointer-events-none" />

                  <h4 className="font-display font-bold text-lg mb-2 relative">
                    Stay Connected
                  </h4>
                  <p className="text-sm text-muted-foreground mb-6 relative">
                    Get health tips and updates delivered to your inbox.
                  </p>

                  <form
                    className="flex gap-2 relative"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 bg-background/60 border border-border/60 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* Hours mini-card */}
                <div className="mt-4 glass rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Open Hours
                    </p>
                    <p className="text-sm font-medium mt-1">
                      Mon – Sat · 9:00 – 20:00
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-border/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                  <p>
                    © {new Date().getFullYear()} Care Connect. All rights
                    reserved.
                  </p>
                  <span className="hidden sm:inline text-border">|</span>
                  <p className="flex items-center gap-1">
                    Crafted with{" "}
                    <Heart className="w-3 h-3 text-primary fill-primary" /> for
                    better healthcare
                  </p>
                </div>

                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="group w-10 h-10 rounded-full border border-border/40 bg-secondary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-colors"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
