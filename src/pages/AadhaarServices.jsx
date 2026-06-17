import ServiceTemplate from "../components/ServiceTemplate";

function AadhaarServices() {
  return (
    <ServiceTemplate
      title="Aadhaar Update Assistance"
      description="Support for Aadhaar updates and corrections."
      image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
      benefits={[
        "Address Update",
        "Mobile Update",
        "Name Correction",
        "Quick Assistance"
      ]}
      documents={[
        "Aadhaar Card",
        "Address Proof",
        "Mobile Number"
      ]}
    />
  );
}

export default AadhaarServices;
