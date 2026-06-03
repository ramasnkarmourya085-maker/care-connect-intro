import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Features from "@/components/site/Features";
import Roles from "@/components/site/Roles";
import Workflow from "@/components/site/Workflow";
import Showcase from "@/components/site/Showcase";
import Cta from "@/components/site/TechStack";
import Faq from "@/components/site/Faq";
import Reviews from "@/components/site/Reviews";
import Footer from "@/components/site/Footer";
import TrustMarquee from "@/components/site/TrustMarquee";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <About />
      <Features />
      <Roles />
      <Workflow />
      <Showcase />
      <Faq />
      <Cta />
      <Reviews />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
