import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import GSTServices from "./pages/GSTServices";
import IncomeTax from "./pages/IncomeTax";
import CompanyRegistration from "./pages/CompanyRegistration";
import MSMERegistration from "./pages/MSMERegistration";
import TrademarkRegistration from "./pages/TrademarkRegistration";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
<Route path="/pricing" element={<Pricing />} />
<Route path="/blog" element={<Blog />} />
<Route path="/gst-services" element={<GSTServices />} />
<Route path="/income-tax" element={<IncomeTax />} />
<Route path="/company-registration" element={<CompanyRegistration />} />
<Route path="/msme-registration" element={<MSMERegistration />} />
<Route path="/trademark-registration" element={<TrademarkRegistration />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-conditions" element={<TermsConditions />} />

<Route path="/admin" element={<Dashboard />} />

<Route path="/admin/leads" element={<Leads />} />  
      </Routes>
    
      
    </BrowserRouter>
  );
}

export default App;