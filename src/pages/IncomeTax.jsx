import Layout from "../components/Layout";
import taxImage from "../assests/images/tax.jpg";

function IncomeTax() {
  return (
    <Layout>
      <section className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Income Tax Filing Services
          </h1>

          <p className="lead">
            Accurate and hassle-free Income Tax Return
            filing for individuals and businesses.
          </p>

          <button className="btn btn-light">
            File Your ITR
          </button>
        </div>
      </section>
      <div className="container py-5">
        <img
          src={taxImage}
          alt="Income Tax"
          className="img-fluid rounded shadow"
        />
      </div>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">
            Benefits of Income Tax Filing
          </h2>

          <div className="row">

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Avoid Penalties
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Claim Refunds
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Loan Approval
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Financial Proof
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2>Required Documents</h2>

          <ul>
            <li>PAN Card</li>
            <li>Aadhaar Card</li>
            <li>Bank Statements</li>
            <li>Form 16</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default IncomeTax;