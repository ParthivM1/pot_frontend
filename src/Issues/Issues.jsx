import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import "./Issues.css";

const allowedHeights = [0, 20, 25, 75, 100];
const reports = [
  { title: "Reports Submitted", submitted: 100, total: 120 },
  { title: "Issue Resolved", submitted: 50, total: 75 },
  { title: "Pending Reviews", submitted: 10, total: 15 },
];

const data = [
  {
    name: "Page A",
    value: allowedHeights[Math.floor(Math.random() * allowedHeights.length)],
  },
  {
    name: "Page B",
    value: allowedHeights[Math.floor(Math.random() * allowedHeights.length)],
  },
  {
    name: "Page C",
    value: allowedHeights[Math.floor(Math.random() * allowedHeights.length)],
  },
  {
    name: "Page D",
    value: allowedHeights[Math.floor(Math.random() * allowedHeights.length)],
  },
  {
    name: "Page E",
    value: allowedHeights[Math.floor(Math.random() * allowedHeights.length)],
  },
];
const dummyData = [
  { id: 1, name: "Alice", age: 25, city: "Pune" },
  { id: 2, name: "Bob", age: 30, city: "Mumbai" },
  { id: 3, name: "Charlie", age: 28, city: "Delhi" },
  { id: 4, name: "Diana", age: 22, city: "Bangalore" },
];
const tableData = [
  {
    id: 1,
    billboard: "Billboard Report",
    pothole: 1,
    construction: 2,
    pending: 4,
    resolved: 6,
    analysis: 10,
  },
  {
    id: 2,
    billboard: "Billboard Report",
    pothole: 1,
    construction: 2,
    pending: 4,
    resolved: 6,
    analysis: 10,
  },
  {
    id: 3,
    billboard: "Billboard Report",
    pothole: 1,
    construction: 2,
    pending: 4,
    resolved: 6,
    analysis: 10,
  },
  {
    id: 4,
    billboard: "Billboard Report",
    pothole: 1,
    construction: 2,
    pending: 4,
    resolved: 6,
    analysis: 10,
  },
  {
    id: 5,
    billboard: "Billboard Report",
    pothole: 1,
    construction: 2,
    pending: 4,
    resolved: 6,
    analysis: 10,
  },
  {
    id: 6,
    billboard: "Billboard Report",
    pothole: 1,
    construction: 2,
    pending: 4,
    resolved: 6,
    analysis: 10,
  },
  {
    id: 7,
    billboard: "Billboard Report",
    pothole: 1,
    construction: 2,
    pending: 4,
    resolved: 6,
    analysis: 10,
  },
];

const Issues = () => {
  const navigate = useNavigate();
  const goToForm = () => {
    navigate("/form");
  };
  return (
    <>
      {/* Aside Bar */}
      <div className="issue-page">
        <div className="issue-navbar">
          <div className="issue-nav">
            <div className="logo">
              <ul>
                <li>Reported Issues</li>
              </ul>
            </div>
            <div className="search">
              <span className="search-icon">
                <IoSearch />
              </span>
              <input placeholder="Report an issue" type="text" />
            </div>
            <div className="nav-icon">
              <ul>
                <li>
                  <span>
                    <FaBell />
                  </span>
                </li>
                <li>
                  <span>
                    <IoMail />
                  </span>
                </li>
                <li>
                  <span>
                    <MdMessage />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="issue-container">
          <div className="issue-tab">
            <button className="tab">View Report</button>
            <button className="tab">View Map</button>
            <button className="tab">Report Issue</button>
            <button className="tab">Analytics</button>
            <button className="tab" onClick={goToForm}>
              Report
            </button>
          </div>
          <div className="issue-table">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Billboard</th>
                  <th>Pothole</th>
                  <th>Construction</th>
                  <th>Pending</th>
                  <th>Resolved</th>
                  <th>Final Analysis</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, id) => (
                  <tr key={id}>
                    <td>{item.billboard}</td>
                    <td>{item.pothole}</td>
                    <td>{item.construction}</td>
                    <td>{item.pending}</td>
                    <td>{item.resolved}</td>
                    <td>{item.analysis}</td>
                  </tr>
                ))}
                {/* <tr>
                  <td>Billboard Report</td>
                  <td>75</td>
                  <td>85</td>
                  <td>90</td>
                  <td>80</td>
                  <td>85(8)</td>
                </tr>
                <tr>
                  <td>Billboard Report</td>
                  <td>75</td>
                  <td>85</td>
                  <td>90</td>
                  <td>80</td>
                  <td>85(8)</td>
                </tr>
                <tr>
                  <td>Billboard Report</td>
                  <td>75</td>
                  <td>85</td>
                  <td>90</td>
                  <td>80</td>
                  <td>85(8)</td>
                </tr>
                <tr>
                  <td>Billboard Report</td>
                  <td>75</td>
                  <td>85</td>
                  <td>90</td>
                  <td>80</td>
                  <td>85(8)</td>
                </tr>
                <tr>
                  <td>Billboard Report</td>
                  <td>75</td>
                  <td>85</td>
                  <td>90</td>
                  <td>80</td>
                  <td>85(8)</td>
                </tr>
                <tr>
                  <td>Billboard Report</td>
                  <td>75</td>
                  <td>85</td>
                  <td>90</td>
                  <td>80</td>
                  <td>85(8)</td>
                </tr>
                <tr>
                  <td>Heat Map Insight</td>
                  <td>75</td>
                  <td>85</td>
                  <td>90</td>
                  <td>80</td>
                  <td>100(A)</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="issue-graph">
            <div className="bar-graph">
              <h4>Current Issues</h4>
              <div style={{ width: 300, margin: "0 auto" }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data} barSize={20} barCategoryGap="5%">
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis ticks={[0, 20, 25, 50, 75, 100]} domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#00bfff" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* <div className="progress-bar">
              <h4>Porgress-Tracking</h4>
              <div className="report-flex">
                {reports.map((report, idx) => {
                  const percentage = Math.round(
                    (report.submitted / report.total) * 100
                  );

                  return (
                    <div key={idx} className="report-card">
                      <div className="report-title">{report.title}</div>

                      <div className="report-bar">
                        <ProgressBar
                          now={percentage}
                          //   label={`${percentage}%`}
                          variant="success"
                          //   className="custom-progress-bar"
                        />
                      </div>

                      <div className="report-footer">
                        <span>
                          {report.submitted}/{report.total}
                        </span>
                        <span>{percentage}% done</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}
            {/* <div className="progress-bar">
              <h4>Progress Tracking</h4>
              <div className="report-flex">
                {reports.map((report, idx) => {
                  const percentage = Math.round(
                    (report.submitted / report.total) * 100
                  );

                  return (
                    <div key={idx} className="report-card">
                      <div className="report-title">{report.title}</div>

                      <div className="custom-progress-container">
                        <div
                          className="custom-progress-fill"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>

                      <div className="report-footer">
                        <span>
                          {report.submitted}/{report.total}
                        </span>
                        <span>{percentage}% done</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}
            <div className="progress-bar">
              <h4>Progress-Tracking</h4>

              <div
                className="report-card"
                style={{ backgroundColor: "#A9A9A9" }}
              >
                {reports.map((report, idx) => {
                  const percentage = Math.round(
                    (report.submitted / report.total) * 100
                  );

                  return (
                    <div key={idx} className="report-item">
                      <div className="report-title">{report.title}</div>

                      <div className="custom-progress-container">
                        <div
                          className="custom-progress-fill"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>

                      <div className="report-footer">
                        <span>
                          {report.submitted}/{report.total}
                        </span>
                        <span>{percentage}% done</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Issues;
