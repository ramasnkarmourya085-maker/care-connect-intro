import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path fill="#EA4335" d="M12 10.2v3.96h5.52c-.24 1.44-1.74 4.2-5.52 4.2-3.32 0-6.04-2.74-6.04-6.12S8.68 6.12 12 6.12c1.9 0 3.16.8 3.88 1.5l2.64-2.54C16.94 3.62 14.7 2.7 12 2.7 6.92 2.7 2.82 6.8 2.82 12s4.1 9.3 9.18 9.3c5.3 0 8.82-3.72 8.82-8.96 0-.6-.06-1.06-.14-1.52H12z"/>
  </svg>
);

const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen grid place-items-center bg-background px-4">
        <div className="max-w-md w-full text-center glass rounded-3xl p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Welcome
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Sign in to continue to <span className="text-gradient">Care Connect</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Please sign in with Google to access the site.
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
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGate;
