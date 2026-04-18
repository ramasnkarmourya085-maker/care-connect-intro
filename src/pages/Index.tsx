import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Roles from "@/components/site/Roles";
import Workflow from "@/components/site/Workflow";
import TechStack from "@/components/site/TechStack";
import Faq from "@/components/site/Faq";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Roles />
      <Workflow />
      <TechStack />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;
