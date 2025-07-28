import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./VideoReport.css";

const VideoReport = () => {
  const { guid } = useParams();
  const navigate = useNavigate();
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
        // Only set loading to false on the initial fetch
        if (isLoading) {
            setIsLoading(false);
        }
      }
    };

    // Initial fetch
    fetchReport();

    // Set up polling to check for updates every 5 seconds
    const interval = setInterval(() => {
        // Only poll if the video is still processing
        if (reportData?.video_info.status === 'processing') {
            fetchReport();
        }
    }, 5000); 

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);

  }, [guid, isLoading, reportData]); // Dependencies for the effect

  if (isLoading) {
    return <div>Loading video report...</div>;
  }

  if (!reportData) {
    return <div>Could not load report data.</div>;
  }

  const { video_info, detected_frames } = reportData;

  // Limit the display to the first 15 frames
  const displayed_frames = detected_frames.slice(0, 15);

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
        {displayed_frames.length > 0 ? (
          displayed_frames.map(frame => (
            <div className="frame-card" key={frame.id} onClick={() => navigate(`/frame/${frame.id}`)}>
              <img src={frame.frame_image_url} alt={`Frame ${frame.frame_number}`} />
              <p>Frame #{frame.frame_number}</p>
            </div>
          ))
        ) : (
          <p>{video_info.status === 'complete' ? 'No potholes were detected in this video.' : 'No pothole frames detected yet.'}</p>
        )}
      </div>
    </div>
  );
};

export default VideoReport;
