import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReportForm.css";

const ReportForm = () => {
  const navigate = useNavigate();
  const [hazardType, setHazardType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const sendReport = async () => {
    if (!file || !hazardType || !location || !description) {
      alert("Please fill out all fields and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    // ** FIX: Append the location text to send to the backend **
    formData.append("location", location);
    // You can also append other form data if your backend is set up to receive it.
    // formData.append("hazardType", hazardType);
    // formData.append("description", description);


    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Upload successful:", result);
        alert("Report submitted successfully!");
        navigate("/detailed");
      } else {
        const errorResult = await response.json();
        console.error("Upload failed:", errorResult);
        alert(`Error: ${errorResult.detail || "An unknown error occurred."}`);
      }
    } catch (error) {
      console.error("There was an error uploading the file:", error);
      alert("There was an error uploading the file. Please try again.");
    }
  };

  return (
    <>
      <div className="report-form-container">
        <div className="form-container">
          <div className="head">
            <h1>Submit a New Report</h1>
          </div>
          <div className="input-form">
            <input
              type="text"
              placeholder="Type of Hazard"
              className="form-input"
              value={hazardType}
              onChange={(e) => setHazardType(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Location"
              className="form-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="upload">
              <label className="custom-file-input">
                Upload Photo
                <input type="file" id="fileInput" onChange={handleFileChange} />
              </label>
              <span className="file-name" id="fileName">
                {fileName}
              </span>
            </div>
            <div className="form-btn">
              <button onClick={sendReport}>Submit Report</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportForm;