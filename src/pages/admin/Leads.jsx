import { useEffect, useState } from "react";

function Leads() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const storedLeads =
      JSON.parse(localStorage.getItem("leads")) || [];

    setLeads(storedLeads);
  }, []);

  const deleteLead = (id) => {
    const updatedLeads =
      leads.filter((lead) => lead.id !== id);

    setLeads(updatedLeads);

    localStorage.setItem(
      "leads",
      JSON.stringify(updatedLeads)
    );
  };

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Lead Management
      </h1>

      <div className="table-responsive">

        <table className="table table-bordered table-striped">

          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Service</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {leads.length === 0 ? (

              <tr>
                <td colSpan="6" className="text-center">
                  No Leads Found
                </td>
              </tr>

            ) : (

              leads.map((lead) => (

                <tr key={lead.id}>

                  <td>{lead.name}</td>

                  <td>{lead.phone}</td>

                  <td>{lead.email}</td>

                  <td>{lead.service}</td>

                  <td>{lead.date}</td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteLead(lead.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Leads;