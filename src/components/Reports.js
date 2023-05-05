import React, { useState, useEffect } from 'react';
import './Reports.css';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('/api/reports')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="reports">
      <h1>Reports</h1>
      {reports.map(report => (
        <div className="report" key={report.id}>
          <h2>{report.title}</h2>
          <p>{report.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Reports;
