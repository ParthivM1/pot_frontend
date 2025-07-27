import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VideoReport.css";

const VideoReport = () => {
  const { guid } = useParams();
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/video_report/${guid}`);
        if (response.ok) {
          const data = await response.json();
          setReportData(data);
        } else {
          console.error("Failed to fetch video report");
        }
      } catch (error) {
        console.error("Error fetching video report:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReport();

    const interval = setInterval(() => {
        // Only poll if the component is still mounted and status is not complete
        if (reportData && reportData.video_info.status !== 'complete') {
            fetchReport();
        }
    }, 5000);

    return () => clearInterval(interval);

  }, [guid, reportData]);

  if (isLoading) {
    return <div>Loading video report...</div>;
  }

  if (!reportData) {
    return <div>Could not load report data.</div>;
  }

  const { video_info, detected_frames } = reportData;

  return (
    <div className="video-report-container">
      <h1>Video Analysis Report</h1>
      <div className="video-details">
        <p><strong>Original File:</strong> {video_info.video_name}</p>
        <p><strong>Video ID:</strong> {video_info.guid}</p>
        <p><strong>Status:</strong> <span className={`status-${video_info.status}`}>{video_info.status}</span></p>
      </div>
      
      <hr />

      <h2>Detected Pothole Frames</h2>
      {video_info.status === 'processing' && <p>Processing is ongoing. New frames will appear here automatically.</p>}
      
      <div className="frames-gallery">
        {/* ** CHANGE: Limit the displayed frames to 15 ** */}
        {detected_frames.length > 0 ? (
          detected_frames.slice(0, 15).map(frame => (
            <div className="frame-card" key={frame.id}>
              <img src={frame.frame_image_url} alt={`Frame ${frame.frame_number}`} />
              <p>Frame #{frame.frame_number}</p>
            </div>
          ))
        ) : (
          <p>No pothole frames detected yet.</p>
        )}
      </div>
    </div>
  );
};

export default VideoReport;
