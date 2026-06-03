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
  const [session, setSession] = useState<Session | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Signed out", description: "You have been logged out." });
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      <header className="sticky top-0 z-50 w-full">
        <nav
          className={`glass border-b border-border/40 px-6 md:px-10 py-3.5 flex items-center justify-between transition-all ${
            scrolled ? "shadow-elevated backdrop-blur-xl" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
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
                <a href={l.href} className="relative hover:text-foreground transition-colors group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <AuthArea />
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
          <div className="md:hidden glass border-b border-border/40 px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-secondary text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            {session && (
              <div className="px-3 py-2 text-xs text-muted-foreground inline-flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-primary" />
                <span className="truncate">{userLabel}</span>
              </div>
            )}
            <AuthArea onAction={() => setOpen(false)} />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
