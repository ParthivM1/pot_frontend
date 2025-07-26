import React from "react";
import "./Dashboard.css";
import { MdCancel } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const Dashboard = () => {
  const incidentData = [
    { id: 1, title: "Unauthorised Billboard", value: 12, color: "#8C8C8C" },
    {
      id: 2,
      title: "Unapproved Structures",
      value: 5,
      color: "#A9A9A9",
    },
    {
      id: 3,
      title: "Potholes",
      value: 8,
      color: "#82E517",
    },
    {
      id: 4,
      title: "Safety Feature Absence",
      value: 3,
      color: "#030303",
    },
  ];
  return (
    <>
      <div className="dash-navbar">
        <div className="logo">
          <img />
          <h2>PROACTIX</h2>
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Incident Report</li>
          <li>Analytics</li>
          <li>Heat Map</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="container">
        <div className="left-container">
          <div className="left-div1">
            <h1>Current Incidents</h1>

            <div className="left-div-content">
              {incidentData.map((incident, id) => (
                <div
                  className="content"
                  key={id}
                  style={{
                    backgroundColor: incident.color,
                    borderColor: incident.color,
                  }}
                >
                  <h3>{incident.title}</h3>
                  <p>{incident.value} incidents</p>
                </div>
              ))}
              {/* <div className="content">
                <h3>Illegal Billboards</h3>
                <p>12 Incidents</p>
              </div>
              <div className="content">
                <h3>Illegal Billboards</h3>
                <p>12 Incidents</p>
              </div>
              <div className="content">
                <h3>Illegal Billboards</h3>
                <p>12 Incidents</p>
              </div>
              <div className="content">
                <h3>Illegal Billboards</h3>
                <p>12 Incidents</p>
              </div> */}
            </div>
          </div>

          <div className="left-div2">
            <h1>Action Taken</h1>

            <div className="left-div2-content">
              {/* <img/> */}
              <div className="img-div"></div>
              <p>
                The road management team has addressed a total of 18 incident
                this month. The measures taken include removing 6 illegal
                billboards, halting 2 unapproved constructions, filling 5
                potholes, and installing 3 new safety features.
              </p>
            </div>
          </div>
        </div>

        <div className="right-container">
          <h1>Summary</h1>
          <div className="right-div1">
            <ul>
              <li>
                <span className="icon" style={{ fontSize: "0.9rem" }}>
                  ✅
                </span>
                6 Illegal Billboards Removed
              </li>
              <li>
                <span className="icon">
                  <MdCancel />
                </span>
                2 Unapproved Structures Halted
              </li>
              <li>
                <span className="icon">
                  <FaTools />
                </span>
                5 Potholes Filled
              </li>
              <li>
                <span className="icon">
                  <MdOutlineSecurity />
                </span>
                3 Safety Features Installed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
