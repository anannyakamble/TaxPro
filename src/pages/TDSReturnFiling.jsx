import ServiceTemplate from "../components/ServiceTemplate";

function TDSReturnFiling() {
  return (
    <ServiceTemplate
      title="TDS Return Filing"
      description="Timely and accurate TDS return filing services."
      image="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
      benefits={[
        "Avoid Penalties",
        "Legal Compliance",
        "Accurate Filing",
        "Expert Support"
      ]}
      documents={[
        "PAN",
        "TAN",
        "Deduction Records",
        "Challan Details"
      ]}
    />
  );
}

export default TDSReturnFiling;