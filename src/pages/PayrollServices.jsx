import ServiceTemplate from "../components/ServiceTemplate";

function PayrollServices() {
  return (
    <ServiceTemplate
      title="Payroll Services"
      description="Complete employee payroll management solution."
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      benefits={[
        "Salary Processing",
        "PF & ESIC",
        "Compliance",
        "Employee Records"
      ]}
      documents={[
        "Employee Details",
        "Salary Structure",
        "Bank Details",
        "Attendance Records"
      ]}
    />
  );
}

export default PayrollServices;