import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative mt-10 mx-3 md:mx-6 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[hsl(230_60%_8%)] to-[hsl(230_70%_4%)] border border-border/60"
    >
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative px-6 md:px-12 py-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-accent shadow-glow">
            <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            Care<span className="italic text-gradient">Connect</span>
          </span>
        </div>

        <p className="max-w-md text-muted-foreground leading-relaxed">
          Connecting patients, families and hospitals through one secure,
          role-based care platform.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl text-sm">
          <a
            href="mailto:praveen@careconnect.app"
            className="glass rounded-2xl px-4 py-3 flex items-center gap-3 hover-lift"
          >
            <Mail className="w-4 h-4 text-primary" />
            praveen@careconnect.app
          </a>
          <a
            href="tel:+910000000000"
            className="glass rounded-2xl px-4 py-3 flex items-center gap-3 hover-lift"
          >
            <Phone className="w-4 h-4 text-primary" />
            +91 00000 00000
          </a>
          <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
            <MapPin className="w-4 h-4 text-primary" />
            Lucknow, India
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16 pt-10 border-t border-border/60">
          <div>
            <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#roles" className="hover:text-foreground">Roles</a></li>
              <li><a href="#workflow" className="hover:text-foreground">Workflow</a></li>
              <li><a href="#tech" className="hover:text-foreground">Tech Stack</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Project</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>BCA Minor Project</li>
              <li>Department of Computer Application</li>
              <li>G.I.H.S Mahavidyalaya</li>
              <li>University of Lucknow</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Built With</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>React + Vite</li>
              <li>FastAPI · Python</li>
              <li>JWT · bcrypt</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Care Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
