import Report from "../models/Report.js";

const cache = async (req, res, next) => {
  try {
    const { repoUrl } = req.body;
    const cachedReport = await Report.findOne({ repoUrl });

    if (cachedReport) {
      console.log("Cache hit");
      return res.json(cachedReport);
    }

    console.log("Cache miss");
    next();
  } catch (err) {
    next(err);
  }
};

export default cache;
