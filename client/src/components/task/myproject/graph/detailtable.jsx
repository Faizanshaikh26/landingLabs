// components/task/myproject/graph/detailtable.jsx
import React from "react";

export default function DetailTable() {
  const campaigns = [
    { id: 1, name: "Social Media Blast", status: "Active", start: "2025-08-01", end: "2025-09-15" },
    { id: 2, name: "Email Outreach", status: "Active", start: "2025-08-05", end: "2025-09-20" },
    { id: 3, name: "SEO Optimization", status: "Paused", start: "2025-07-10", end: "2025-09-10" },
  ];

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Campaign Name</th>
          <th style={styles.th}>Status</th>
          <th style={styles.th}>Start Date</th>
          <th style={styles.th}>End Date</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((c) => (
          <tr key={c.id} style={styles.tr}>
            <td style={styles.td}>{c.id}</td>
            <td style={styles.td}>{c.name}</td>
            <td style={{ ...styles.td, color: c.status === "Active" ? "green" : "orange" }}>{c.status}</td>
            <td style={styles.td}>{c.start}</td>
            <td style={styles.td}>{c.end}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
  th: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  tr: {
    transition: "background 0.3s",
  },
};
