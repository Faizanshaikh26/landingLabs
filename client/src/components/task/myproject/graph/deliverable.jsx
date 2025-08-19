// components/task/myproject/graph/deliverable.jsx
import React from "react";

export default function Deliverable() {
  const deliverables = [
    { task: "Design Phase", progress: 70, color: "#3498db" },
    { task: "Development Phase", progress: 50, color: "#2ecc71" },
    { task: "Testing Phase", progress: 20, color: "#e67e22" },
  ];

  return (
    <div>
      {deliverables.map((d, i) => (
        <div key={i} style={{ marginBottom: "12px" }}>
          <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{d.task}</div>
          <div style={styles.barBackground}>
            <div style={{ ...styles.barFill, width: `${d.progress}%`, backgroundColor: d.color }}>
              <span style={styles.barText}>{d.progress}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  barBackground: {
    backgroundColor: "#ecf0f1",
    borderRadius: "8px",
    overflow: "hidden",
    height: "20px",
  },
  barFill: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
    transition: "width 0.5s ease",
  },
  barText: {
    position: "relative",
    zIndex: 2,
  },
};
