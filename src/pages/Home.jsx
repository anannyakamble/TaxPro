import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactCTA from "../components/ContactCTA";
//import { Helmet } from "react-helmet-async";
import CallButton from "../components/CallButton";
import QuoteForm from "../components/QuoteForm";


function Home() {
  return (
    <>
{/*      
      <Helmet>
        <title>TaxPro | Accounting & Tax Consultancy Services</title>
      </Helmet> */}
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <ContactCTA />
      <QuoteForm />
      <Footer />
      <WhatsAppButton />
      <CallButton />
      
    </>
  );
}

export default Home;