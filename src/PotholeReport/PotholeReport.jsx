// src/PotholeReport/PotholeReport.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GiRoad } from "react-icons/gi";
import "./PotholeReport.css";
import mapImage from "../assets/images/map-image.jpeg";

const PotholeReport = () => {
  const { guid } = useParams();
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (guid) {
      fetchReportData();
    }
  }, [guid]);

  const fetchReportData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/report/${guid}`);
      if (response.ok) {
        const data = await response.json();
        setReport(data);
      }
    } catch (error) {
      console.error("Error fetching report:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (clickedStatus) => {
    const newStatus = report.status === clickedStatus ? 'In Progress' : clickedStatus;
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/report/${guid}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        setReport(prevReport => ({ ...prevReport, status: newStatus }));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (isLoading) return <div>Loading report...</div>;
  if (!report) return <div>Report not found.</div>;

  return (
    <>
      <div className="pothole-navbar">
        {/* Navbar content... */}
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
              <p>Location: {report.location || report.location_text || "Not Available"}</p>
              <p>Date: {new Date(report.created_at).toLocaleDateString()}</p>
              <p>Status: {report.status || 'In Progress'}</p>
            </div>
          </div>
          <div className="pothole-report-map">
            <img src={mapImage} alt="Map of the pothole location" />
          </div>
        </div>
        <div className="right-pothole-report">
          <h1>Related Actions</h1>
          <div className="pothole-button">
            <button 
              onClick={() => updateStatus('Follow-up Inspection')}
              className={report.status === 'Follow-up Inspection' ? 'selected' : ''}
            >
              Follow-up Inspection
            </button>
            <button 
              onClick={() => updateStatus('Repair Crew Sent')}
              className={report.status === 'Repair Crew Sent' ? 'selected' : ''}
            >
              Send Repair Crew
            </button>
            <button 
              onClick={() => updateStatus('Closed')}
              className={report.status === 'Closed' ? 'selected' : ''}
            >
              Close Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PotholeReport;