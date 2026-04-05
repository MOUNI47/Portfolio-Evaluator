import axios from "axios";

const fetchRepoData = async (repoUrl) => {
  // Extract owner/repo from URL
  const [owner, repo] = repoUrl.split("/").slice(-2);

  const commitsRes = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/commits`
  );

  // Example metrics
  const metrics = {
    complexity: Math.random() * 10,
    readability: Math.random() * 10,
    maintainability: Math.random() * 10,
  };

  return {
    metrics,
    commits: commitsRes.data,
  };
};

export default { fetchRepoData };
