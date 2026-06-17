import { useState } from "react";

function FloatingConsultation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: ""
  });

  return (
    <div
      className="shadow bg-white p-3"
      style={{
        position: "fixed",
        right: "20px",
        top: "120px",
        width: "300px",
        zIndex: 999
      }}
    >
      <h5>Get Free Consultation</h5>

      <input
        type="text"
        placeholder="Name"
        className="form-control mb-2"
      />

      <input
        type="text"
        placeholder="Phone"
        className="form-control mb-2"
      />

      <select className="form-select mb-2">
        <option>Select Service</option>
        <option>GST Registration</option>
        <option>ITR Filing</option>
        <option>FSSAI Registration</option>
      </select>

      <button className="btn btn-primary w-100">
        Request Callback
      </button>
    </div>
  );
}

export default FloatingConsultation;