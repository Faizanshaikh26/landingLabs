import React from "react";
import ProjectSummaryGraph from "./graphs/ProjectSummaryGraph";
import CampaignStatusGraph from "./graphs/CampaignStatusGraph";

export default function App() {
  return (
    <div className=" bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">📊 Client Dashboard</h1>

      <div className="grid grid-col-1 md:grid-col-2 gap-6">
        {/* Project Summary */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Project Summary</h2>
          <ProjectSummaryGraph />
        </div>
         
        {/* Campaign Status */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Campaign Status</h2>
          <CampaignStatusGraph />
        </div>
      </div>
    </div>
  );
}
