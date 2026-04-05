import React from "react";

const HeatMap = ({ commits }) => (
  <div>
    <h2>Commit Heatmap</h2>
    {/* Replace with a heatmap library like react-calendar-heatmap */}
    <pre>{JSON.stringify(commits, null, 2)}</pre>
  </div>
);

export default HeatMap;
