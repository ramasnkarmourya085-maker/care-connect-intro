import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Care Connect?",
    a: "Care Connect is a hospital patient management platform built for multi-hospital environments. It supports five user roles — Admin, Doctor, Nurse, Guardian and Public — each with a dedicated, role-based dashboard.",
  },
  {
    q: "How is patient data kept secure?",
    a: "All staff accounts are scoped to their hospital, so users at one hospital cannot access records from another. Authentication uses JWT tokens, passwords are bcrypt-hashed, and each API endpoint enforces strict role-based authorization.",
  },
  {
    q: "Do guardians and the public need an account?",
    a: "Guardians log in with a patient ID to view their family member's care details. The public does not need an account at all — they can directly search for nearby hospitals and pharmacies.",
  },
  {
    q: "Can doctors generate discharge reports?",
    a: "Yes. Doctors can generate a professional PDF report including patient info, diagnosis, medications, injections, diet, monitoring logs and signature lines.",
  },
  {
    q: "What technology powers Care Connect?",
    a: "The frontend is built with React + Vite + Tailwind. The backend uses FastAPI with JWT authentication, bcrypt password hashing, and JSON-based thread-safe storage. Reports use fpdf2.",
  },
  {
    q: "Is this a finished product?",
    a: "Care Connect is currently a working prototype. Future versions will add real database support, in-app chat, video consultation and appointment scheduling.",
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
              Some <br /> Questions <br />
              <span className="italic text-gradient">For Our Visitors</span>
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
