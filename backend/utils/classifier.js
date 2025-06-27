const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const csvPath = path.join(__dirname, "../data/dataset.csv");
const knownSkills = require("./skills.json");

const skillCounts = {};

function loadCSV(callback) {
  fs.createReadStream(csvPath)
    .pipe(csv())
    .on("data", (row) => {
      const text = row.job_description_text?.toLowerCase() || "";

      knownSkills.forEach((skill) => {
        const pattern = new RegExp(`\\b${skill}\\b`, "i");
        if (pattern.test(text)) {
          skillCounts[skill] = (skillCounts[skill] || 0) + 1;
        }
      });
    })
    .on("end", () => {
      console.log("✅ CSV loaded. Sample matched skills:", Object.keys(skillCounts).slice(0, 10));
      callback();
    });
}

function classifySkill(skill) {
  const lower = skill.toLowerCase();
  const count = skillCounts[lower] || 0;
  const maxCount = Math.max(...Object.values(skillCounts), 1);
  const score = parseFloat((count / maxCount).toFixed(2));
  const category = count > 5 ? "established" : "emerging";

  return {
    skill,
    category,
    trend_score: score,
  };
}

function analyzeDescription(text) {
  const detected = [];

  knownSkills.forEach((skill) => {
    const pattern = new RegExp(`\\b${skill}\\b`, "i");
    if (pattern.test(text)) {
      detected.push(skill);
    }
  });

  return detected.map(classifySkill);
}

module.exports = { loadCSV, analyzeDescription };
