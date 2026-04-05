import React from "react";

const ScoreCard = ({ score }) => (
  <div className="score-card">
    <h2>Scorecard</h2>
    <p>Overall Score: {score}</p>
  </div>
);

export default ScoreCard;
