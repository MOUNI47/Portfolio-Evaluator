import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScoreCard from "../components/ScoreCard";
import RadarChart from "../components/RadarChart";
import HeatMap from "../components/Heatmap";
import { fetchProfileReport } from "../utils/api";

const Report = () => {
  const { repoUrl } = useParams(); // assuming route like /report/:repoUrl
  const [report, setReport] = useState(null);

  useEffect(() => {
    const loadReport = async () => {
      const data = await fetchProfileReport(repoUrl);
      setReport(data);
    };
    loadReport();
  }, [repoUrl]);

  if (!report) return <p>Loading report...</p>;

  return (
    <div className="report-page">
      <h1>Report for {repoUrl}</h1>
      <ScoreCard score={report.score} />
      <RadarChart metrics={report.metrics} />
      <HeatMap commits={report.commits} />
    </div>
  );
};

export default Report;
