function DocumentsSection() {
  return (
    <section className="py-5">

      <div className="container">

        <h2 className="mb-5 text-center">
          Documents Required
        </h2>

        <div className="row">

          <div className="col-md-6">
            <ul>
              <li>PAN Card</li>
              <li>Aadhaar Card</li>
              <li>Bank Details</li>
              <li>Mobile Number</li>
            </ul>
          </div>
          

          <div className="col-md-6">
            <ul>
              <li>Email ID</li>
              <li>Business Details</li>
              <li>Address Proof</li>
              <li>Passport Size Photo</li>
            </ul>
          </div>

        </div>

      </div>
      
    </section>
  );
}

export default DocumentsSection;