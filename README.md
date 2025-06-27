# 🔍 Job Market Analysis System

An AI-powered, MERN-based web application that analyzes job descriptions, detects technical skills, and classifies them as **emerging** or **established** — all styled with a **Solo Leveling-inspired Shadow Monarch UI**.

---

## 🧠 Features

- 📊 Extracts technical skills from job descriptions
- 🚥 Classifies skills as **established** or **emerging**
- 🧮 NLP-based CSV analysis with trend scoring
- 🧪 Visualizations using Python & Google Colab
- 🌐 REST API with JSON support
- 🖼️ React-based UI with Solo Leveling theme

---
## 🧠 Live and Demo Video:


## 💻 Tech Stack

| Layer     | Technology         |
|-----------|--------------------|
| Frontend  | React, Vite, Axios |
| Backend   | Node.js, Express   |
| Data      | CSV Dataset        |
| Analysis  | Python, Colab (matplotlib, seaborn) |
| Style     | Custom CSS + Solo Leveling-inspired theme |

---
## 💻 projects View:
<center>
<table>
  <tr>
    <td><img src="https://github.com/Mahesh7Kumar/Job-Market-Analysis-System/blob/main/frontend/src/assets/Screenshot%202025-06-26%20104505.png" width="150"/></td>
    <td><img src="https://github.com/Mahesh7Kumar/Job-Market-Analysis-System/blob/main/frontend/src/assets/Screenshot%202025-06-26%20114220.png" width="150"/></td>
    <td><img src="https://github.com/Mahesh7Kumar/Job-Market-Analysis-System/blob/main/frontend/src/assets/Screenshot%202025-06-26%20114409.png" width="150"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/Mahesh7Kumar/Job-Market-Analysis-System/blob/main/frontend/src/assets/Screenshot%202025-06-26%20114631.png" width="150"/></td>
    <td><img src="https://github.com/Mahesh7Kumar/Job-Market-Analysis-System/blob/main/frontend/src/assets/Screenshot%202025-06-26%20114702.png" width="150"/></td>
  </tr>
</table>
</center>
---

## 📂 Project Structure
```bash
Job-Market-Analysis-System/
│
├── backend/                      # Express backend server
│   ├── data/                     # Contains dataset.csv
│   ├── routes/                   # skill-trend API route
│   ├── utils/                    # CSV loader & classifier functions
│   └── server.js                 # Starts the API server
│
├── frontend/                    # React client using Vite
│   └── src/
│       ├── App.jsx              # Main application component
│       └── SkillForm.jsx       # Core UI component for input/output
│
├── skill.json                   # List of known tech skills
├── assets/                      # Screenshots and banner images
├── README.md                    # You're here 📘
```
---
## 🚀 Getting Started
## 1️⃣ Backend Setup
```bash
cd backend
npm install
node server.js
```
Server runs at:``` http://localhost:5000```
## 2️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Runs at : ```http://localhost:5173 ```
  🛡️Vite Proxy Config in ```vite.config.js```
  ```bash
export default {
     server: {
       proxy: {
         "/api": "http://localhost:5000"
       }
     }
   }
```
---
## 🔌 API Documentation
 POST ```/api/skill-trend```
 Sample Request:
```bash
{
  "job_description": "Looking for someone with AWS, React, and LangChain experience."
}
```
 Sample Response:
```bash
{
  "detected_skills": [
    {
      "skill": "aws",
      "category": "established",
      "trend_score": 0.74
    },
    {
      "skill": "react",
      "category": "established",
      "trend_score": 0.65
    },
    {
      "skill": "langchain",
      "category": "emerging",
      "trend_score": 0.32
    }
  ]
}

```
