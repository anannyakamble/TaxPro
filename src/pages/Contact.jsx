import Layout from "../components/Layout";
import { useState } from "react";
import { Helmet } from "react-helmet";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form submitted successfully!");
  };
  return (
    <Layout>

      <Helmet>
  <title>Contact TaxPro</title>

  <meta
    name="description"
    content="Contact TaxPro for GST Registration, Income Tax Filing and Business Compliance Services."
  />
</Helmet>
      <section className="contact-hero py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1>Contact Us</h1>
            <p>
              Get in touch with our experts for GST,
              Taxation and Registration services.
            </p>
          </div>
          

          <div className="row">

            {/* Contact Form */}

            <div className="col-md-8">

              <div className="card shadow border-0 bg-white">
                <div className="card-body p-4">

                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label>Name</label>
                      <input
  type="text"
  className="form-control"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name"
/>
                    </div>

                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-3">
                      <label>Phone Number</label>
                      <input
  type="text"
  className="form-control"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter phone number"
/>
                    </div>

                    <div className="mb-3">
                      <label>Service</label>

                     <select
  className="form-select"
  name="service"
  value={formData.service}
  onChange={handleChange}
>

                        <option>
                          Select Service
                        </option>

                        <option>
                          GST Registration
                        </option>

                        <option>
                          Income Tax Filing
                        </option>

                        <option>
                          Company Registration
                        </option>

                        <option>
                          Trademark Registration
                        </option>

                      </select>
                    </div>

                    <div className="mb-3">
    <label className="form-label">
      Upload Documents
    </label>

    <input
      type="file"
      className="form-control"
    />
  </div>

                    <div className="mb-3">
                      <label>Message</label>

                      <textarea
  rows="4"
  className="form-control"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Enter message"
/>

                    </div>

                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      Submit Inquiry
                    </button>

                  </form>

                </div>
              </div>

             

            </div>

            {/* Contact Details */}

            <div className="col-md-4">

              <div className="card shadow border-0">
                <div className="card-body">

                  <h4>Contact Details</h4>

                  <hr />

                  <p>
                    📞 +91 8828930457
                  </p>

                  <p>
                    ✉ info@taxpro.com
                  </p>

                  <p>
                    📍 Mumbai, India
                  </p>

                </div>
                <div className="mt-5">
                  

  <h3 className="mb-4">
    Our Location
  </h3>

  <iframe
    title="location"
    src="https://www.google.com/maps/embed?pb=!1m18..."
    width="100%"
    height="200"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>

</div>
 
              </div>

            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Contact;