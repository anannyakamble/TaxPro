import ServiceTemplate from "../components/ServiceTemplate";

function ROCCompliance() {
  return (
    <ServiceTemplate
      title="ROC Compliance"
      description="Annual ROC filing and company compliance services."
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      benefits={[
        "Avoid Penalties",
        "Legal Compliance",
        "Annual Filing",
        "Professional Support"
      ]}
      documents={[
        "Company PAN",
        "Incorporation Certificate",
        "Financial Statements",
        "Director Details"
      ]}
    />
  );
}

export default ROCCompliance;