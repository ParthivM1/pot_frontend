import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GiRoad } from "react-icons/gi";
import "./PotholeReport.css";
import mapImage from "../assets/images/map-image.jpeg";

const PotholeReport = () => {
  const { guid } = useParams();
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      if (!guid) {
        setIsLoading(false);
        setError("No report ID provided.");
        return;
      }
      
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/report/${guid}`);
        if (response.ok) {
          const data = await response.json();
          setReport(data);
        } else {
          const errorData = await response.json();
          setError(errorData.detail || "Failed to fetch report.");
        }
      } catch (err) {
        setError("An error occurred while fetching the report.");
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReportData();
  }, [guid]);

  if (isLoading) {
    return <div>Loading report...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  if (!report) {
    return <div>Report not found.</div>;
  }

  return (
    <>
      <div className="pothole-navbar">
        <div className="pothole-logo">
          <span style={{ paddingTop: "3px" }}>
            <GiRoad />
          </span>
          <span>Proactix</span>
        </div>
        <div className="pothole-list">
          <ul>
            <li>Dashboard</li>
            <li>Reports</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
      <div className="pothole-report-container">
        <div className="left-pothole-report">
          <h1>Pothole Report #{report.guid}</h1>
          <div className="pothole-details">
            <div className="pothole-details-img">
              <img src={report.image_url} alt={report.image_name} />
            </div>
            <div className="pothole-report-desc">
              <p>Reported by: Alex Johnson</p>
              {/* ** FIX: Conditionally display the location ** */}
              <p>Location: {report.location || report.location_text || "Not Available"}</p>
              <p>Date: {new Date(report.created_at).toLocaleDateString()}</p>
              <p>Status: In Progress</p>
            </div>
          </div>
          <div className="pothole-report-map">
            <img src={mapImage} alt="Map of the pothole location" />
          </div>
        </div>
        <div className="right-pothole-report">
          <h1>Related Actions</h1>
          <div className="pothole-button">
            <button>Follow-up Inspection </button>
            <button>Send Repair Crew</button>
            <button>Close Report</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PotholeReport;