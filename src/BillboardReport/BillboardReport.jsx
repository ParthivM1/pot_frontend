import React, { useState } from "react";
import "./BillboardReport.css";
import { CiLocationOn } from "react-icons/ci";
import billboardImage from "../assets/images/billboard.jpg";

const BillboardReport = () => {
  const [isActive, setIsActive] = useState(true);
  // const location = useLocation();
  // const { card } = location.state || {};

  // if (!card) return <p>No card data available</p>;

  return (
    <>
      <div className="billboard-report-navbar">
        <div className="billboard-report-logo">
          <span style={{ paddingTop: "3px" }}>
            <CiLocationOn color="white" />
          </span>
          <span>Proactix</span>
        </div>
        <div className="billboard-list">
          <ul>
            <li>Dashboard</li>
            <li>Reports</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
      <div className="billboard-report-container">
        <div className="left-billboard-report">
          <h1>Quick Access</h1>
          <button>Report New Issue</button>
          <div className="alert-billboard">
            <h2>Active Alerts</h2>
            <p>Billboard at 5th Ave & Main St</p>
            <p>Illegal Sign on Highway 101</p>
            <p>Pothole near Central Park</p>
          </div>
        </div>
        <div className="right-billboard-report">
          <div className="right-billboard-head">
            <h1>Billboard Details</h1>
            <button>Edit Details</button>
          </div>
          <div className="right-billboard-details">
            <div className="right-billboard-img">
              <img src={billboardImage} />
              <h3>Location: 5th Ave & Main St</h3>
              <p>Dimensions: 20ft x 10ft</p>
              <p>Reported Issues: None</p>
            </div>
            <div className="billboard-status">
              <h3>Status</h3>
              <div className="status">
                <span style={{ marginRight: "10px" }}>
                  {isActive ? "Active" : "Inactive"}
                </span>

                <label>
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => setIsActive(!isActive)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: isActive ? "#7CFC00" : "#ccc",
                      transition: ".4s",
                      borderRadius: "20px",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        height: "16px",
                        width: "16px",
                        left: isActive ? "22px" : "2px",
                        bottom: "4px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        transition: ".4s",
                      }}
                    />
                  </span>
                </label>
              </div>
              <button>Mark as Resolved</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillboardReport;
