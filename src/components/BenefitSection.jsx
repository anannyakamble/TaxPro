function BenefitSection() {
  const benefits = [
    "Fast Processing",
    "Expert CA Support",
    "Affordable Pricing",
    "Secure Data",
    "PAN India Service",
    "Dedicated Manager"
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center mb-5">
          Benefits of Choosing TaxPro
        </h2>

        <div className="row">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
            >
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <h1>✅</h1>
                  <h5>{item}</h5>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BenefitSection;