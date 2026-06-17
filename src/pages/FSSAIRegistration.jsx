import ServiceTemplate from "../components/ServiceTemplate";

function FSSAIRegistration() {
  return (
    <ServiceTemplate
      title="FSSAI Registration"
      description="Get your food business registered under FSSAI quickly and legally."
      image="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
      benefits={[
        "Legal Compliance",
        "Food Safety",
        "Customer Trust",
        "Business Growth"
      ]}
      documents={[
        "PAN Card",
        "Aadhaar Card",
        "Address Proof",
        "Food Business Details"
      ]}
    />
  );
}

export default FSSAIRegistration;