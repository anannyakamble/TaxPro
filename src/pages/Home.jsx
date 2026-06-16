import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactCTA from "../components/ContactCTA";
import CallButton from "../components/CallButton";
import QuoteForm from "../components/QuoteForm";
import ProcessSection from "../components/ProcessSection";
import TrustSection from "../components/TrustSection";
import BackToTop from "../components/BackToTop";
import { Helmet } from "react-helmet";
import BenefitSection from "../components/BenefitSection";
import DocumentsSection from "../components/DocumentsSection";

import FeaturedIn from "../components/FeaturedIn";
import FounderSection from "../components/FounderSection";



function Home() {
  return (
    <>
     
      <Helmet>
        <title>TaxPro - GST Registration, ITR Filing &
      Company Registration Services</title>
       <meta
      name="description"
      content="Professional GST Registration, Income Tax Filing, Company Registration and Compliance Services Across India."
    />
      </Helmet>
      <Navbar />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitSection />
      <WhyChooseUs />
      <FounderSection />
      <DocumentsSection />
      <Testimonials />
      <FeaturedIn />
      <FaqSection />
      <ContactCTA />
      <QuoteForm />
      <Footer />
       <CallButton />
      <WhatsAppButton />
      <BackToTop />
      
    </>
  );
}

export default Home;