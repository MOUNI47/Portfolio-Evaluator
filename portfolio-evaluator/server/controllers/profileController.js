// server/controllers/profileController.js
import githubService from "../services/githubService.js";
import scoringService from "../services/scoringService.js";
import Report from "../models/Report.js";

export const getProfileReport = async (req, res, next) => {
  try {
    const { repoUrl } = req.body;

    // Fetch repo data from GitHub
    const repoData = await githubService.fetchRepoData(repoUrl);

    // Calculate score
    const score = scoringService.calculateScore(repoData);

    // Save or return report
    const report = await Report.create({
      repoUrl,
      score,
      metrics: repoData.metrics,
      commits: repoData.commits,
    });

    res.json(report);
  } catch (err) {
    next(err);
  }
};
