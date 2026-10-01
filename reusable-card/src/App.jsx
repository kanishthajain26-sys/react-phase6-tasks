import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showJob, setShowJob] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  return (
    <div className="app">

      <h1>Reusable Card</h1>

      <div className="cards">

        <Card title="Student Profile">
          <h3>Kanishtha Jain</h3>

          <p>Course: Web Development</p>
          <p>Campus: Pune</p>

          <button onClick={() => setShowProfile(!showProfile)}>
            View Profile
          </button>

          {showProfile && (
            <div className="extra-info">
              <p>Skills: React, JavaScript</p>
              <p>Goal: Frontend Developer</p>
            </div>
          )}
        </Card>


        <Card title="Job Opportunity">
          <h3>Frontend Developer</h3>

          <p>Company: Tech Solutions</p>
          <p>Location: Pune</p>

          <button onClick={() => setShowJob(!showJob)}>
            Apply Now
          </button>

          {showJob && (
            <div className="extra-info">
              <p>Experience: Fresher</p>
              <p>Status: Application Started</p>
            </div>
          )}
        </Card>


        <Card title="Learning Progress">
          <h3>React Phase 6</h3>

          <p>Completed: 8 Tasks</p>
          <p>Progress: 80%</p>

          <button onClick={() => setShowProgress(!showProgress)}>
            View Progress
          </button>

          {showProgress && (
            <div className="extra-info">
              <p>Custom Hooks: Completed</p>
              <p>Reusable Components: In Progress</p>
            </div>
          )}
        </Card>

      </div>

    </div>
  );
}

export default App;