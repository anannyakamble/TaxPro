import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";
import gstImage from "../assests/images/gst.jpg";


function GSTServices() {
  return (

    
    <Layout>
       <Helmet>
    <title>GST Registration Services | TaxPro</title>

    <meta
      name="description"
      content="Professional GST Registration services across India with expert support and affordable pricing."
    />
  </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">

          <h1 className="display-4 fw-bold">
            GST Registration Services
          </h1>

          <p className="lead">
            Fast, affordable and hassle-free GST
            registration for businesses across India.
          </p>

          <button className="btn btn-light">
            Apply Now
          </button>
          <div className="container py-5">
  <img
    src={gstImage}
    alt="GST Registration"
    className="img-fluid rounded shadow"
  />
</div>

        </div>
      </section>

      {/* Benefits */}

      <section className="py-5">
        <div className="container">

          <h2 className="mb-4">
            Benefits of GST Registration
          </h2>

          <div className="row">

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Legal Compliance
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Input Tax Credit
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Business Expansion
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Tender Eligibility
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Documents */}

      <section className="bg-light py-5">
        <div className="container">

          <h2>Required Documents</h2>

          <ul>
            <li>PAN Card</li>
            <li>Aadhaar Card</li>
            <li>Business Address Proof</li>
            <li>Bank Account Details</li>
          </ul>

        </div>
      </section>

      {/* Process Section */}

<section className="py-5">

  <div className="container">

    <h2 className="text-center mb-5">
      How GST Registration Works
    </h2>

    <div className="row text-center">

      <div className="col-md-3">
        <h1>1</h1>
        <p>Submit Inquiry</p>
      </div>

      <div className="col-md-3">
        <h1>2</h1>
        <p>Upload Documents</p>
      </div>

      <div className="col-md-3">
        <h1>3</h1>
        <p>Verification</p>
      </div>

      <div className="col-md-3">
        <h1>4</h1>
        <p>GST Certificate Issued</p>
      </div>

    </div>

  </div>

</section>

{/* Pricing Section */}

<section className="bg-light py-5">

  <div className="container">

    <h2 className="text-center mb-5">
      GST Registration Pricing
    </h2>

    <div className="row justify-content-center">

      <div className="col-md-4">

        <div className="card shadow text-center">

          <div className="card-body">

            <h3>GST Registration</h3>

            <h1 className="text-primary">
              ₹999
            </h1>

            <p>Documentation Support</p>
            <p>Application Filing</p>
            <p>Expert Assistance</p>

            <button className="btn btn-primary">
              Apply Now
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* FAQ Section */}

<section className="py-5">

  <div className="container">

    <h2 className="mb-4">
      Frequently Asked Questions
    </h2>

    <div className="accordion">

      <div className="accordion-item">

        <button
          className="accordion-button"
          data-bs-toggle="collapse"
          data-bs-target="#faq1"
        >
          Who needs GST Registration?
        </button>

        <div
          id="faq1"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            Businesses crossing the prescribed turnover limit must register under GST.
          </div>
        </div>

      </div>

      <div className="accordion-item">

        <button
          className="accordion-button collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#faq2"
        >
          How many days does GST Registration take?
        </button>

        <div
          id="faq2"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            Usually 3–7 working days.
          </div>
        </div>

      </div>

    </div>

  </div>

</section>
{/* Lead Form */}

<section className="bg-primary text-white py-5">

  <div className="container">

    <div className="row justify-content-center">

      <div className="col-md-6">

        <div className="card p-4">

          <h3 className="text-dark mb-3">
            Get GST Registration
          </h3>

          <input
            className="form-control mb-3"
            placeholder="Name"
          />

          <input
            className="form-control mb-3"
            placeholder="Phone Number"
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
          />

          <button className="btn btn-primary w-100">
            Request Callback
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
 

    </Layout>
  );
}

export default GSTServices;