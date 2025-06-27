const express = require("express");
const router = express.Router();
const { analyzeDescription } = require("../utils/classifier");

// POST route to analyze job description and extract tech skills
router.post("/skill-trend", (req, res) => {
  const { job_description } = req.body;

  // validate input
  if (!job_description) {
    return res.status(400).json({ error: "Missing job_description field" });
  }

  // process description and return matched skills
  const result = analyzeDescription(job_description);
  res.json({ detected_skills: result });
});

module.exports = router;
