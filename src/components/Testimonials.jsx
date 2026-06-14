function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      review: "Excellent GST and taxation services."
    },
    {
      name: "Priya Patel",
      review: "Quick company registration process."
    },
    {
      name: "Amit Verma",
      review: "Professional team and great support."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center mb-5">
          What Our Clients Say
        </h2>

        <div className="row">

          {testimonials.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <p>"{item.review}"</p>
                  <h6 className="mt-3">
                    {item.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;