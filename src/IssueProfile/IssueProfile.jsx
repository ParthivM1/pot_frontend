import React from "react";
import profileIcon from "../assets/images/profile.png";
import { CiCircleList } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import heatMap from "../assets/images/heatmap.jpg";
import "./style.css";
import AsideBar from "../AsideBar/AsideBar";
const IssueProfile = () => {
  const reportData = [
    {
      id: 1,
      icon: CiCircleList,
      title: "Unauthorised Billboard",
      subtitle: "Reported on",
      month: "April",
    },
    {
      id: 2,
      icon: CiLocationOn,
      title: "Pothole",
      subtitle: "Reported on",
      month: "April",
    },
    {
      id: 3,
      icon: FaTools,
      title: "Unsafe Construction",
      subtitle: "Reported on",
      month: "April",
    },
  ];

  return (
    <div>
      <div className="issue-container">
        <div className="issue-profile">
          <h1>Profile</h1>
          <div className="detail-profile">
            <button>User of Proactix</button>
            <div className="user">
              <div className="profile-user">
                <img src={profileIcon} />
              </div>

              <h3>Proactix User</h3>
              <p>abc.user@example.com</p>
            </div>
          </div>
        </div>
        <div className="reports">
          <ul>
            {reportData.map(({ id, icon: Icon, title, subtitle, month }) => (
              <li key={id} className="report-card">
                <div className="left-report">
                  <div className="icon-circle">
                    <Icon />
                  </div>
                  <div className="report-text">
                    <div className="title">{title}</div>
                    <div className="subtitle">{subtitle}</div>
                  </div>
                </div>

                <div className="month-badge">{month}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="next-step">
          <h1>Next Steps</h1>
          <div className="step">
            <div className="step-img">
              <img src={heatMap} />
            </div>
            <div className="step-details">
              <h3>HeatMap of Issues</h3>
              <p>Updated Daily</p>
              <p>View on Map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueProfile;
