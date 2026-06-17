import ServiceTemplate from "../components/ServiceTemplate";

function PANServices() {
  return (
    <ServiceTemplate
      title="PAN Card Services"
      description="New PAN application and PAN correction services."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
      benefits={[
        "PAN Application",
        "PAN Correction",
        "Fast Processing",
        "Professional Assistance"
      ]}
      documents={[
        "Aadhaar Card",
        "Photo",
        "Address Proof",
        "Mobile Number"
      ]}
    />
  );
}

export default PANServices;
