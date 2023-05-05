import React from 'react';
import './Dashboard.css';

// Rest of the code for the Dashboard component


function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div className="stats">
        <div className="stat">
          <h2>Users</h2>
          <p>10,000</p>
        </div>
        <div className="stat">
          <h2>Sales</h2>
          <p>$1,000,000</p>
        </div>
        <div className="stat">
          <h2>Views</h2>
          <p>100,000</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
