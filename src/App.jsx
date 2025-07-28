import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Import all page components
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Detailed from "./DetailedDash/Detailed";
import Report from "./Report/Report";
import ReportForm from "./ReportForm/ReportForm";
import Billboards from "./Billboards/Billboards";
import PotholeReport from "./PotholeReport/PotholeReport";
import BillboardReport from "./BillboardReport/BillboardReport";
import VideoReport from "./VideoReport/VideoReport";
import FrameReport from "./FrameReport/FrameReport"; // Import the new FrameReport component

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/detailed" element={<Detailed />} />
        <Route path="/form" element={<ReportForm />} />
        <Route path="/billboards" element={<Billboards />} />
        <Route path="/potholereport/:guid" element={<PotholeReport />} />
        <Route path="/billboardreport" element={<BillboardReport />} />
        
        {/* Video and Frame Analysis Routes */}
        <Route path="/video_report/:guid" element={<VideoReport />} />
        <Route path="/frame/:frame_id" element={<FrameReport />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
