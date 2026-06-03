import {
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import logo from "@/assets/care-connect-logo.jpeg";

const explore = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Your Visit", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  "General Medicine",
  "Specialist Doctors",
  "Diagnostics",
  "Emergency Care",
  "Health Packages",
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/careconnecthospital?igsh=MWN2OGNvMTViNW0wdA==", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/", Icon: Twitter },
  { label: "YouTube", href: "https://youtube.com/", Icon: Youtube },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative mt-16 mx-2 md:mx-4 overflow-hidden rounded-t-[40px] border border-white/5"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #021226 0%, #041B35 50%, #062B3E 100%)",
      }}
    >
      {/* Animated ring circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full border border-primary/10 animate-spin-very-slow" />
        <div className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full border border-primary/10 animate-spin-very-slow [animation-direction:reverse]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-primary/10 animate-spin-very-slow" />
        <div className="absolute top-1/3 right-1/4 w-[260px] h-[260px] rounded-full border border-primary/5 animate-spin-very-slow [animation-direction:reverse]" />
      </div>
      <div className="pointer-events-none absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative px-6 md:px-12 py-16 text-white/90">
        {/* Top brand row */}
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-10 lg:gap-12">
          {/* Brand */}
          <div className="rounded-3xl p-6 bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
            <a href="#top" className="inline-flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-14 h-14 rounded-2xl overflow-hidden bg-white/10 ring-1 ring-primary/40">
                <img src={logo} alt="Care Connect logo" className="w-full h-full object-cover" />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Care <span className="text-gradient">Connect</span>
              </span>
            </a>
            <p className="text-sm text-white/65 leading-relaxed">
              Premium healthcare designed around you — calm spaces, expert
              doctors, and quietly powerful technology.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary">
              <ShieldCheck className="w-3.5 h-3.5" />
              NABH-aligned care standards
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-primary/90 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {explore.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-primary transition-all duration-300 hover:translate-x-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-primary/90 mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-primary transition-all duration-300 hover:translate-x-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{s}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-primary/90 mb-5">Visit Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Care Connect Hospital, India</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Mon – Sat · 9:00 – 20:00<br />Sunday · 10:00 – 14:00</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:nishant@careconnecthospital.com" className="hover:text-primary transition-colors">
                  nishant@careconnecthospital.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="tel:+910000000000" className="hover:text-primary transition-colors">
                  24/7 Care Line — Always On
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group w-11 h-11 grid place-items-center rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:bg-primary/15 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-4.5 h-4.5 w-4 h-4 text-white/70 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
              </a>
            ))}
          </div>
          <p className="text-xs tracking-[0.3em] uppercase text-white/50">
            Care You Trust · Comfort You Deserve
          </p>
        </div>

        {/* Animated divider */}
        <div className="mt-10 relative h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer-x" />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Care Connect. All rights reserved.</p>
          <p>Designed with care for every patient.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
