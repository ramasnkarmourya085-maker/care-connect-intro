import { Mail, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/care-connect-logo.jpeg";

const socials = [
  { label: "Email", href: "mailto:nishant@careconnecthospital.com", Icon: Mail },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/", Icon: Youtube },
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
            <a href="#top" className="inline-flex items-center gap-3 mb-6">
              <span className="grid place-items-center w-12 h-12 rounded-2xl overflow-hidden bg-background ring-1 ring-primary/40">
                <img src={logo} alt="Care Connect logo" className="w-full h-full object-cover" />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight">
                Care <span className="text-gradient">Connect</span>
              </span>
            </a>

            <p className="max-w-md text-muted-foreground leading-relaxed">
              Premium healthcare, designed around you. Quiet spaces, expert
              doctors and care that always feels personal.
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
              <h4 className="font-semibold mb-4 text-sm">Explore</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground">About</a></li>
                <li><a href="#services" className="hover:text-foreground">Services</a></li>
                <li><a href="#why" className="hover:text-foreground">Why Choose Us</a></li>
                <li><a href="#workflow" className="hover:text-foreground">Your Visit</a></li>
                <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Visit</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mon – Sat · 9:00 – 20:00</li>
                <li>Sunday · 10:00 – 14:00</li>
                <li>24/7 Care Line Available</li>
                <li>nishant@careconnecthospital.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Care Connect. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Care You Trust · Comfort You Deserve</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
