import React, { useState } from "react";
import axios from "axios";
import "./SkillForm.css";

// Create axios instance with Vite environment variable
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

function SkillForm() {
  const [description, setDescription] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDetect = async () => {
    if (!description.trim()) return;

    setLoading(true);
    try {
      const res = await API.post("/api/skill-trend", {
        job_description: description,
      });
      setResults(res.data.detected_skills || []);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Something went wrong while detecting skills.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "20px", maxWidth: "600px" }}>
      <textarea
        rows="6"
        style={{ width: "95%", padding: "10px", fontSize: "16px" }}
        placeholder="Paste the job description here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleDetect}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Detecting..." : "Detect Skill Trends"}
      </button>

      {results.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>🧠 Detected Skills:</h3>
          <ul>
            {results.map((skill, idx) => (
              <li key={idx}>
                <strong>{skill.skill}</strong> -{" "}
                {skill.category === "established" ? "✅ Established" : "🌱 Emerging"} (Score: {skill.trend_score})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SkillForm;
