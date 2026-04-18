import { Activity, Mail, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  {
    label: "Email",
    href: "mailto:hello@careconnect.app",
    Icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    Icon: Youtube,
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative mt-10 mx-3 md:mx-6 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[hsl(230_60%_8%)] to-[hsl(230_70%_4%)] border border-border/60"
    >
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-primary/15 ring-1 ring-primary/40">
                <Activity className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight">
                Care <span className="text-gradient">Connect</span>
              </span>
            </div>

            <p className="max-w-md text-muted-foreground leading-relaxed">
              Connecting patients, families and hospitals through one secure,
              role-based care platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="group glass rounded-2xl px-4 py-3 flex items-center gap-2 hover-lift text-sm"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground">About</a></li>
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
                <li><a href="#roles" className="hover:text-foreground">Roles</a></li>
                <li><a href="#workflow" className="hover:text-foreground">Workflow</a></li>
                <li><a href="#tech" className="hover:text-foreground">Tech Stack</a></li>
                <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Built With</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>React + Vite</li>
                <li>Tailwind CSS</li>
                <li>FastAPI · Python</li>
                <li>JWT · bcrypt</li>
                <li>fpdf2 · Haversine</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Care Connect. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Connecting Care · Not Just Records</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
