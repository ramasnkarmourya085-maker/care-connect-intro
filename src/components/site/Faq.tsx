import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book online in under a minute — pick your specialist, choose a time slot and confirm. We'll send a gentle reminder before your visit.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes, walk-ins are welcome during clinic hours. However, booking ahead guarantees minimal waiting and a confirmed time with your preferred doctor.",
  },
  {
    q: "Are my medical records kept private?",
    a: "Always. Every record is encrypted, access is strictly controlled, and your information is never shared without your explicit consent.",
  },
  {
    q: "Do you offer emergency or after-hours care?",
    a: "Our care line is available 24/7 for urgent guidance. For acute emergencies, please call your local emergency number first.",
  },
  {
    q: "Can I get a digital copy of my reports?",
    a: "Yes. All test results, prescriptions and visit summaries are available securely through your Care Connect account, anytime.",
  },
  {
    q: "Do you offer follow-up consultations?",
    a: "Of course. Follow-ups can be in-clinic or via video, ensuring your care continues smoothly after every visit.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              / FAQ's
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              Questions, <br /> answered <br />
              <span className="italic text-gradient">honestly.</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl border-border/60 px-5"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
