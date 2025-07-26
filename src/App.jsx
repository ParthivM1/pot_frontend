import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Detailed from "./DetailedDash/Detailed";
import Issues from "./Issues/Issues";
import IssueProfile from "./IssueProfile/IssueProfile";
import Report from "./Report/Report";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReportForm from "./ReportForm/ReportForm";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Billboards from "./Billboards/Billboards";
import PotholeReport from "./PotholeReport/PotholeReport";
import BillboardReport from "./BillboardReport/BillboardReport";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Detailed />} />
        <Route path="/report" element={<Report />} />
        <Route path="/detailed" element={<Detailed />} />
        <Route path="/form" element={<ReportForm />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} /> */}
        <Route path="/billboards" element={<Billboards />} />
        <Route path="/potholereport/:guid" element={<PotholeReport />} />
        <Route path="/billboardreport" element={<BillboardReport />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;