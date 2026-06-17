import { useEffect, useState } from "react";

function Dashboard() {

  const [leadCount, setLeadCount] =
    useState(0);

  useEffect(() => {

    const leads =
      JSON.parse(localStorage.getItem("leads"))
      || [];

    setLeadCount(leads.length);

  }, []);

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Admin Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4">

          <div className="card shadow p-4">

            <h2>{leadCount}</h2>

            <p>Total Leads</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;