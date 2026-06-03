import { ShieldCheck, Stethoscope, HeartPulse, Activity, Sparkles, Clock } from "lucide-react";

const items = [
  { Icon: ShieldCheck, label: "Trusted by Thousands" },
  { Icon: Clock, label: "24/7 Emergency Care" },
  { Icon: Stethoscope, label: "Expert Specialists" },
  { Icon: Activity, label: "Advanced Diagnostics" },
  { Icon: HeartPulse, label: "Compassionate Care" },
  { Icon: Sparkles, label: "Premium Experience" },
];

const Row = () => (
  <div className="flex items-center gap-12 px-6 shrink-0">
    {items.map(({ Icon, label }, i) => (
      <div key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground whitespace-nowrap">
        <Icon className="w-4 h-4 text-primary" />
        <span className="tracking-[0.18em] uppercase font-medium">{label}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 ml-6" />
      </div>
    ))}
  </div>
);

const TrustMarquee = () => {
  return (
    <section
      aria-label="Trust banner"
      className="relative py-6 border-y border-border/40 bg-background/60 backdrop-blur-md overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </section>
  );
};

export default TrustMarquee;
