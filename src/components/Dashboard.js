import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>📊 Dashboard</h1>
        <p>Welcome to your internal product management tool</p>
      </header>

      <div className="dashboard-grid">
        <div className="card">
          <h2>Total Products</h2>
          <p>120</p>
        </div>
        <div className="card">
          <h2>Categories</h2>
          <p>5</p>
        </div>
        <div className="card">
          <h2>Latest Updates</h2>
          <p>3 new products added</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
