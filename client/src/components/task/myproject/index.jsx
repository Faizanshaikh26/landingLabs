// components/task/myproject/index.jsx
import React from "react";
import DetailTable from "./graph/detailtable";
import Deliverable from "./graph/deliverable";
import Taskbar from "./graph/taskbar";

export default function MyProject() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📊 My Project Dashboard</h1>

      {/* Active Campaigns Table */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Active Campaigns</h2>
        <DetailTable />
      </section>

      {/* Deliverables Timeline */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Deliverables Timeline</h2>
        <Deliverable />
      </section>

      {/* Task Progress */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Task Progress</h2>
        <Taskbar />
      </section>
    </div>
  );
}

// Inline styling
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f7fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  subheading: {
    borderBottom: "2px solid #3498db",
    paddingBottom: "5px",
    marginBottom: "15px",
    color: "#34495e",
  },
  section: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "25px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
};
