import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2, Sparkles, ArrowLeft, ShieldCheck, Heart, Stethoscope } from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path fill="#EA4335" d="M12 10.2v3.96h5.52c-.24 1.44-1.74 4.2-5.52 4.2-3.32 0-6.04-2.74-6.04-6.12S8.68 6.12 12 6.12c1.9 0 3.16.8 3.88 1.5l2.64-2.54C16.94 3.62 14.7 2.7 12 2.7 6.92 2.7 2.82 6.8 2.82 12s4.1 9.3 9.18 9.3c5.3 0 8.82-3.72 8.82-8.96 0-.6-.06-1.06-.14-1.52H12z"/>
  </svg>
);

const SignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s) navigate("/", { replace: true });
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) navigate("/", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const signIn = async () => {
    setSigningIn(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast({
        title: "Sign-in failed",
        description: (result.error as Error).message,
        variant: "destructive",
      });
      setSigningIn(false);
    }
  };

  if (session) return null;

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background flair */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pb-16">
        {/* Left brand panel */}
        <div className="hidden lg:block space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Care Connect
          </div>
          <h1 className="font-display text-5xl xl:text-6xl font-bold leading-tight">
            Healthcare,
            <br />
            <span className="text-gradient">connected for everyone.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md">
            Sign in to explore Care Connect — a unified platform built to make
            healthcare faster, smarter and more accessible.
          </p>
          <ul className="space-y-3 text-sm">
            {[
              { Icon: Stethoscope, t: "Built with doctors & patients in mind" },
              { Icon: ShieldCheck, t: "Your data stays private & secure" },
              { Icon: Heart, t: "Crafted with care by Team C²" },
            ].map(({ Icon, t }) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary/15 ring-1 ring-primary/40 grid place-items-center">
                  <Icon className="w-4 h-4 text-primary" />
                </span>
                <span className="text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right card */}
        <div className="w-full max-w-md mx-auto">
          <div className="glass rounded-3xl p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Welcome back
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Sign in to <span className="text-gradient">Care Connect</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Continue with your Google account to access the site.
            </p>

            <Button
              onClick={signIn}
              disabled={signingIn}
              size="lg"
              variant="ghostOutline"
              className="mt-8 w-full"
            >
              {signingIn ? <Loader2 className="w-4 h-4 animate-spin" /> : <GoogleIcon />}
              {signingIn ? "Redirecting…" : "Continue with Google"}
            </Button>

            <p className="mt-6 text-xs text-muted-foreground">
              By continuing you agree to our terms and acknowledge our privacy
              practices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
