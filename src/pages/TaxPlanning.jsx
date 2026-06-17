import ServiceTemplate from "../components/ServiceTemplate";

function TaxPlanning() {
  return (
    <ServiceTemplate
      title="Tax Planning & Consultancy"
      description="Reduce tax liabilities and maximize savings with expert tax planning."
      image="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
      benefits={[
        "Tax Savings",
        "Financial Planning",
        "Expert Guidance",
        "Compliance Support"
      ]}
      documents={[
        "PAN Card",
        "Income Details",
        "Investment Proofs",
        "Bank Statements"
      ]}
    />
  );
}

export default TaxPlanning;