import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Criteria from "@/components/landing/Criteria";
import Process from "@/components/landing/Process";
import Testimonials from "@/components/landing/Testimonials";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <Criteria />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
