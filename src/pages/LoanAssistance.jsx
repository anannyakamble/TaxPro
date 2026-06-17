import ServiceTemplate from "../components/ServiceTemplate";

function LoanAssistance() {
  return (
    <ServiceTemplate
      title="Project Report & Loan Assistance"
      description="Business project reports and loan documentation support."
      image="https://images.unsplash.com/photo-1521791136064-7986c2920216"
      benefits={[
        "Project Reports",
        "Loan Guidance",
        "Documentation",
        "Business Growth"
      ]}
      documents={[
        "PAN Card",
        "Aadhaar Card",
        "Business Plan",
        "Bank Statements"
      ]}
    />
  );
}

export default LoanAssistance;