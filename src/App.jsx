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
import FSSAIRegistration from "./pages/FSSAIRegistration";

import AccountingBookkeeping from "./pages/AccountingBookkeeping";
import PayrollServices from "./pages/PayrollServices";
import TDSReturnFiling from "./pages/TDSReturnFiling";
import TaxPlanning from "./pages/TaxPlanning";
import DSC from "./pages/DSC";
import ROCCompliance from "./pages/ROCCompliance";
import PANServices from "./pages/PANServices";
import AadhaarServices from "./pages/AadhaarServices";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import LoanAssistance from "./pages/LoanAssistance";

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
        <Route path="/fssai-registration" element={<FSSAIRegistration />} />
        <Route
          path="/accounting"
          element={<AccountingBookkeeping />}
        />

        <Route
          path="/payroll"
          element={<PayrollServices />}
        />

        <Route
          path="/tds-filing"
          element={<TDSReturnFiling />}
        />
<Route path="/tax-planning" element={<TaxPlanning />} />
<Route path="/dsc" element={<DSC />} />
<Route path="/roc-compliance" element={<ROCCompliance />} />
<Route path="/pan-services" element={<PANServices />} />
<Route path="/aadhaar-services" element={<AadhaarServices />} />
<Route path="/government-schemes" element={<GovernmentSchemes />} />
<Route path="/loan-assistance" element={<LoanAssistance />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;