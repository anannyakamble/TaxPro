import ServiceTemplate from "../components/ServiceTemplate";

function AccountingBookkeeping() {
  return (
    <ServiceTemplate
      title="Accounting & Bookkeeping"
      description="Professional bookkeeping and accounting services for businesses."
      image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
      benefits={[
        "Accurate Records",
        "Financial Reports",
        "Tax Ready Accounts",
        "Business Insights"
      ]}
      documents={[
        "Bank Statements",
        "Invoices",
        "Expense Records",
        "GST Details"
      ]}
    />
  );
}

export default AccountingBookkeeping;