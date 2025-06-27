// basic express server setup for skill trend API

const express = require("express");
const cors = require("cors");
const { loadCSV } = require("./utils/classifier");
const skillRoute = require("./routes/skills");

const app = express();
const PORT = 5000; // backend port

// enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// route for skill analysis
app.use("/api", skillRoute);

// load CSV before starting the server
loadCSV(() => {
  app.listen(PORT, () => {
    console.log(`✅ Backend running at http://localhost:${PORT}`);
  });
});

// optional root route just to check server is up
app.get("/", (req, res) => {
  res.send("✔️ Skill Trend API working! Use POST /api/skill-trend");
});
