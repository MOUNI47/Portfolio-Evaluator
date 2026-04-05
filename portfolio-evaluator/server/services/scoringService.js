const calculateScore = (repoData) => {
  const { metrics } = repoData;
  const avg = Object.values(metrics).reduce((a, b) => a + b, 0) / Object.keys(metrics).length;
  return Math.round(avg);
};

export default { calculateScore };
