import ServiceTemplate from "../components/ServiceTemplate";

function DSC() {
  return (
    <ServiceTemplate
      title="Digital Signature Certificate (DSC)"
      description="Secure digital signatures for business and compliance needs."
      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
      benefits={[
        "Secure Authentication",
        "Legal Validity",
        "Paperless Process",
        "Fast Approval"
      ]}
      documents={[
        "PAN Card",
        "Aadhaar Card",
        "Passport Photo",
        "Mobile Number"
      ]}
    />
  );
}

export default DSC;