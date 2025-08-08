
import React, { useEffect, useRef } from "react";
import gantt from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";


const rawData = [
  {
    task: "Design Landing Page",
    start: "2025-08-01",
    end: "2025-08-10",
    status: "In Progress",
  },
  {
    task: "Develop Backend",
    start: "2025-08-05",
    end: "2025-08-20",
    status: "Upcoming",
  },
  {
    task: "QA & Testing",
    start: "2025-08-21",
    end: "2025-08-30",
    status: "Pending",
  },
];

function calculateDuration(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return Math.ceil((+endDate - +startDate) / (1000 * 60 * 60 * 24));
}

const transformData = () =>
  rawData.map((item, index) => ({
    id: index + 1,
    text: item.task,
    start_date: item.start.split("-").reverse().join("-"), // DD-MM-YYYY
    duration: calculateDuration(item.start, item.end),
    progress: item.status === "In Progress" ? 0.5 : 0,
  }));

export  function GanttChartView() {
  const ganttContainer = useRef(null);

  useEffect(() => {
    gantt.clearAll();
    gantt.init(ganttContainer.current!);
    gantt.parse({ data: transformData() });
  }, []);

  return (
    <div className="w-full bg-white border rounded-md p-4">
      <div className="text-xl font-bold mb-2">Project Timeline</div>
      <div
        ref={ganttContainer}
        className="border border-gray-300 rounded-xl h-[500px]"
      />
    </div>
  );
}
