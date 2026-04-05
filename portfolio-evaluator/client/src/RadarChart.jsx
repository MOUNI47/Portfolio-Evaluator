import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


const RadarChart = ({ metrics }) => {
  const data = {
    labels: Object.keys(metrics),
    datasets: [
      {
        label: "Code Quality",
        data: Object.values(metrics),
        backgroundColor: "rgba(34,202,236,0.2)",
        borderColor: "rgba(34,202,236,1)",
      },
    ],
  };

  return <Radar data={data} />;
};

export default RadarChart;
