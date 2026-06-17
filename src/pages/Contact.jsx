import Layout from "../components/Layout";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(
        collection(db, "leads"),
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          createdAt: new Date()
        }
      );

      alert("Inquiry Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });

    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Failed to submit inquiry.");
    }
  };

  return (
    <Layout>

      <Helmet>
        <title>Contact UV Ledger & Tax Solutions</title>

        <meta
          name="description"
          content="Contact UV Ledger & Tax Solutions for GST Registration, ITR Filing, Accounting, Taxation and Business Compliance Services."
        />
      </Helmet>

      <section className="contact-hero py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1>Contact Us</h1>

            <p>
              Get in touch with our experts for Taxation,
              Accounting, GST and Registration services.
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
                        required
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
                        required
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
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Service</label>

                      <select
                        className="form-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select Service
                        </option>

                        <option>
                          GST Registration
                        </option>

                        <option>
                          Income Tax Filing
                        </option>

                        <option>
                          Accounting & Bookkeeping
                        </option>

                        <option>
                          Payroll Services
                        </option>

                        <option>
                          Company Registration
                        </option>

                        <option>
                          MSME Registration
                        </option>

                        <option>
                          FSSAI Registration
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
                        required
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

                  <p>📞 +91 88289 30457</p>

                  <p>✉ uvledgertax@gmail.com</p>

                  <p>📍 Ghatkopar, Mumbai, Maharashtra</p>

                  <p>
                    🕒 Monday - Saturday
                    <br />
                    10:00 AM - 8:00 PM
                  </p>

                </div>

                <div className="p-3">

                  <h4 className="mb-3">
                    Our Location
                  </h4>

                  <iframe
                    title="location"
                    src="https://maps.google.com/maps?q=ghatkopar%20mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
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