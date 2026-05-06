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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Roles />
      <Workflow />
      <Showcase />
      <Faq />
      <Cta />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Index;

