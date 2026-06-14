import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactCTA from "../components/ContactCTA";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
        <ContactCTA />
    </>
  );
}

export default Home;