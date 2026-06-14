import Layout from "../components/Layout";

function Blog() {
  const blogs = [
    {
      title: "GST Registration Guide",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
    },
    {
      title: "Income Tax Saving Tips",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      title: "Benefits of MSME Registration",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
    },
    {
      title: "Trademark Registration Process",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284"
    }
  ];

  return (
    <Layout>
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1>Latest Blogs</h1>
            <p>Stay updated with taxation and business compliance news.</p>
          </div>

          <div className="row">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 mb-4"
              >
                <div className="card shadow border-0 h-100">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover"
                    }}
                  />

                  <div className="card-body">

                    <h5>{blog.title}</h5>

                    <button className="btn btn-primary mt-3">
                      Read More
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Blog;