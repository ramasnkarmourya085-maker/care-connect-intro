import { useEffect, useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/site/ThemeToggle";
import logo from "@/assets/care-connect-logo.jpeg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#workflow", label: "Your Visit" },
  { href: "#showcase", label: "Showcase" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Signed out", description: "You have been logged out." });
    navigate("/sign-in", { replace: true });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl">
      <nav
        className={`glass rounded-full px-4 py-3 flex items-center justify-between transition-all ${
          scrolled ? "shadow-elevated" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-2">
          <span className="grid place-items-center w-10 h-10 rounded-xl overflow-hidden bg-background ring-1 ring-primary/40">
            <img src={logo} alt="Care Connect logo" className="w-full h-full object-cover" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Care <span className="text-gradient">Connect</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Book Appointment →</a>
          </Button>
          <Button variant="ghostOutline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 glass rounded-3xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-secondary text-sm"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>
              Book Appointment →
            </a>
          </Button>
          <Button variant="ghostOutline" size="sm" onClick={() => { setOpen(false); handleLogout(); }}>
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
