import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import all the page components
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Detailed from "./DetailedDash/Detailed";
import Report from "./Report/Report";
import ReportForm from "./ReportForm/ReportForm";
import Billboards from "./Billboards/Billboards";
import PotholeReport from "./PotholeReport/PotholeReport";
import BillboardReport from "./BillboardReport/BillboardReport";
import VideoReport from "./VideoReport/VideoReport"; // The new component for video results

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* The Router component wraps all the routes */}
      <Routes>
        {/* --- Main Application Routes --- */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detailed" element={<Detailed />} />
        
        {/* --- Reporting and Analysis Routes --- */}
        <Route path="/form" element={<ReportForm />} />
        <Route path="/report" element={<Report />} />
        
        {/* --- Specific Report Display Routes --- */}
        <Route path="/potholereport/:guid" element={<PotholeReport />} />
        <Route path="/billboardreport" element={<BillboardReport />} />
        <Route path="/billboards" element={<Billboards />} />

        {/* --- NEW: Route for displaying video analysis results --- */}
        <Route path="/video_report/:guid" element={<VideoReport />} />

        {/* Note: You can uncomment these if you decide to use them later */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/signin" element={<Signin />} /> */}
        {/* <Route path="/issues" element={<Issues />} /> */}
        {/* <Route path="/issue_profile" element={<IssueProfile />} /> */}
      </Routes>
      
      {/* Container for displaying toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
