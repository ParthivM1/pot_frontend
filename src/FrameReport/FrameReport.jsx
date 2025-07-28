// src/FrameReport/FrameReport.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GiRoad } from "react-icons/gi";
import "./FrameReport.css";
import mapImage from "../assets/images/map-image.jpeg";

const FrameReport = () => {
  const { frame_id } = useParams();
  const [frame, setFrame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (frame_id) {
        fetchFrameData();
    }
  }, [frame_id]);

  const fetchFrameData = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/frame/${frame_id}`);
        if (response.ok) {
          const data = await response.json();
          setFrame(data);
        }
    } catch (error) {
        console.error("Error fetching frame data:", error);
    } finally {
        setIsLoading(false);
    }
  };

  const updateStatus = async (clickedStatus) => {
    const newStatus = frame.status === clickedStatus ? 'In Progress' : clickedStatus;
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/frame/${frame_id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        setFrame(prevFrame => ({ ...prevFrame, status: newStatus }));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (isLoading) return <div>Loading frame report...</div>;
  if (!frame) return <div>Frame not found.</div>;

  return (
    <>
      <div className="pothole-navbar">
        {/* Navbar content... */}
      </div>
      <div className="pothole-report-container">
        <div className="left-pothole-report">
          <h1>Pothole Report - Frame #{frame.frame_number}</h1>
          <div className="pothole-details">
            <div className="pothole-details-img">
              <img src={frame.frame_image_url} alt={`Frame ${frame.frame_number}`} />
            </div>
            <div className="pothole-report-desc">
              <p>Source Video: {frame.videos.video_name}</p>
              <p>Date Captured: {new Date(frame.created_at).toLocaleDateString()}</p>
              <p>Frame Number: {frame.frame_number}</p>
              <p>Status: {frame.status || 'In Progress'}</p>
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
              className={frame.status === 'Follow-up Inspection' ? 'selected' : ''}
            >
              Follow-up Inspection
            </button>
            <button 
              onClick={() => updateStatus('Repair Crew Sent')}
              className={frame.status === 'Repair Crew Sent' ? 'selected' : ''}
            >
              Send Repair Crew
            </button>
            <button 
              onClick={() => updateStatus('Closed')}
              className={frame.status === 'Closed' ? 'selected' : ''}
            >
              Close Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameReport;