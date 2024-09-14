import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Index from "./Pages/Index.jsx";
import JobList from "./Pages/JobList.jsx";
import JobDetails from "./Pages/JobDetails.jsx";
import Resume from "./Pages/Resume.jsx";
import Profile from "./Pages/Profile.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
