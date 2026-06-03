import { useEffect, useState } from "react";
import { LogOut, Menu, X, LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/site/ThemeToggle";
import logo from "@/assets/care-connect-logo.jpeg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#workflow", label: "Your Visit" },
  { href: "#showcase", label: "Showcase" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [session, setSession] = useState<Session | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Signed out", description: "You have been logged out." });
    navigate("/", { replace: true });
  };

  const userLabel =
    (session?.user?.user_metadata?.full_name as string | undefined) ||
    (session?.user?.user_metadata?.name as string | undefined) ||
    session?.user?.email ||
    "";

  const AuthArea = ({ onAction }: { onAction?: () => void }) =>
    session ? (
      <>
        <span
          className="hidden lg:inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full glass text-muted-foreground max-w-[180px] truncate"
          title={userLabel}
        >
          <User className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="truncate">{userLabel}</span>
        </span>
        <Button
          variant="ghostOutline"
          size="sm"
          onClick={() => {
            onAction?.();
            handleLogout();
          }}
        >
          <LogOut className="w-4 h-4" /> Logout
        </Button>
      </>
    ) : (
      <Button variant="ghostOutline" size="sm" asChild>
        <Link to="/sign-in" onClick={onAction}>
          <LogIn className="w-4 h-4" /> Sign in
        </Link>
      </Button>
    );

  return (
    <header
      className={`sticky top-0 z-[9999] w-full transition-all duration-300 ease-out ${
        scrolled
          ? "py-2 bg-background/70 backdrop-blur-2xl shadow-[0_8px_30px_-12px_hsl(230_50%_5%/0.35)] border-b border-border/40"
          : "py-4 bg-background/30 backdrop-blur-xl"
      }`}
    >
      <nav className="container max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-xl overflow-hidden bg-background ring-1 ring-primary/40 transition-transform duration-300 group-hover:scale-105">
            <img src={logo} alt="Care Connect logo" className="w-full h-full object-cover" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Care <span className="text-gradient">Connect</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nav-link relative px-3 py-2 rounded-full transition-all duration-300 inline-flex items-center hover:scale-105 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span>{l.label}</span>
                  <span
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                      isActive ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-6"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <AuthArea />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="p-2 text-foreground rounded-xl glass"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[64px] bg-background/95 backdrop-blur-2xl transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-2 max-w-md mx-auto">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`text-2xl font-display font-semibold py-3 border-b border-border/40 transition-all duration-300 ${
                active === l.href ? "text-primary" : "text-foreground hover:text-primary hover:translate-x-2"
              }`}
            >
              {l.label}
            </a>
          ))}
          {session && (
            <div className="mt-4 text-sm text-muted-foreground inline-flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="truncate">{userLabel}</span>
            </div>
          )}
          <div className="mt-4 flex gap-3">
            <AuthArea onAction={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
