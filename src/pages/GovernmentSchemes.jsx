import ServiceTemplate from "../components/ServiceTemplate";

function GovernmentSchemes() {
  return (
    <ServiceTemplate
      title="Government Scheme Assistance"
      description="Guidance and application support for government schemes."
      image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
      benefits={[
        "Subsidy Guidance",
        "Application Support",
        "MSME Benefits",
        "Expert Assistance"
      ]}
      documents={[
        "Aadhaar Card",
        "PAN Card",
        "Business Documents",
        "Bank Details"
      ]}
    />
  );
}

export default GovernmentSchemes;