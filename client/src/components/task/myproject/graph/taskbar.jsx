// components/task/myproject/graph/taskbar.jsx
import React from "react";

export default function Taskbar() {
  const tasks = [
    { name: "Research", progress: 100 },
    { name: "Wireframes", progress: 80 },
    { name: "Frontend", progress: 60 },
    { name: "Backend", progress: 40 },
    { name: "Deployment", progress: 10 },
  ];

  return (
    <div>
      {tasks.map((t, i) => (
        <div key={i} style={styles.taskRow}>
          <div style={styles.taskName}>{t.name}</div>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: `${t.progress}%` }}></div>
          </div>
          <div style={styles.percentage}>{t.progress}%</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  taskRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  taskName: {
    flex: "1",
    fontWeight: "500",
  },
  progressBar: {
    flex: "3",
    backgroundColor: "#ecf0f1",
    height: "12px",
    borderRadius: "6px",
    overflow: "hidden",
    marginRight: "10px",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#27ae60",
    transition: "width 0.5s ease",
  },
  percentage: {
    minWidth: "40px",
    textAlign: "right",
    fontWeight: "500",
  },
};
