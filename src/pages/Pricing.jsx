import Layout from "../components/Layout";

function Pricing() {
  return (
    <Layout>
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1>Pricing Plans</h1>
            <p>Choose the plan that fits your business needs.</p>
          </div>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body text-center">
                  <h3>Basic</h3>
                  <h2 className="text-primary">₹999</h2>

                  <ul className="list-unstyled mt-4">
                    <li>✓ GST Registration</li>
                    <li>✓ Email Support</li>
                    <li>✓ Consultation</li>
                  </ul>

                  <button className="btn btn-primary mt-3">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body text-center">
                  <h3>Professional</h3>
                  <h2 className="text-primary">₹2999</h2>

                  <ul className="list-unstyled mt-4">
                    <li>✓ GST Registration</li>
                    <li>✓ ITR Filing</li>
                    <li>✓ Priority Support</li>
                  </ul>

                  <button className="btn btn-primary mt-3">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body text-center">
                  <h3>Business</h3>
                  <h2 className="text-primary">₹4999</h2>

                  <ul className="list-unstyled mt-4">
                    <li>✓ Company Registration</li>
                    <li>✓ GST Services</li>
                    <li>✓ Accounting</li>
                    <li>✓ Compliance Support</li>
                  </ul>

                  <button className="btn btn-primary mt-3">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Pricing;