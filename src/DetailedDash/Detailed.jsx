import React, { useState, useEffect } from "react";
import "./Detailed.css";
import { IoSearch } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import profileIcon from "../assets/images/profile.png";
import { FaMap } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { TbSelect } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoIosCloud } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoAnalytics } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
// FIX: Corrected the import from 'react--router-dom' to 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Detailed = () => {
  const navigate = useNavigate();
  const [lowerCards, setLowerCards] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/reports`);
        if (response.ok) {
          const data = await response.json();
          setLowerCards(data);
        } else {
          console.error("Failed to fetch reports from the server.");
        }
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []); 

  const cardData = [
    {
      id: 1,
      icon: MdOutlineSupportAgent,
      title: "Alerts",
      info: [
        { icon: GoFileDirectoryFill, label: "1,245" },
        { icon: IoIosCloud, label: "75 MB" },
      ],
    },
    {
      id: 2,
      icon: FaVideo,
      title: "Videos",
      info: [
        { icon: GoFileDirectoryFill, label: "1,245" },
        { icon: IoIosCloud, label: "75 MB" },
      ],
    },
    {
      id: 3,
      icon: FaFile,
      title: "Reports",
      info: [
        { icon: GoFileDirectoryFill, label: "1,245" },
        { icon: IoIosCloud, label: "75 MB" },
      ],
    },
    {
      id: 4,
      icon: FaImage,
      title: "Images",
      info: [
        { icon: GoFileDirectoryFill, label: "1,245" },
        { icon: IoIosCloud, label: "75 MB" },
      ],
    },
  ];

  const goToReport = () => {
    navigate("/form");
  };
  const goToBillboard = () => {
    navigate("/billboards");
  };

  return (
    <>
      <div className="detailed-navbar">
        <div className="left-detailed-nav"></div>
        <div className="right-detailed-nav">
          <div className="right-nav-content">
            <div className="detailed-logo">
              <ul>
                <li style={{ alignSelf: "center", gap: "15px" }}>
                  <span>
                    {" "}
                    <FaMap />
                  </span>
                  PROACTIX Dashboard
                </li>
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
                    <FaQuestionCircle />
                  </span>
                </li>
                <li>
                  <span>
                    <FaBell />
                  </span>
                </li>
                <li>
                  <span>
                    <IoSettingsSharp />
                  </span>
                </li>
                <li>
                  <span className="profile-img-icon">
                    {/* FIX: Added alt prop to the image */}
                    <img src={profileIcon} alt="Profile" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="dash-container">
        <div className="left-dash-content">
          <div className="left-dash-container">
            <div className="upper-profile">
              <div className="profile">
                {/* FIX: Added alt prop to the image */}
                <img src={profileIcon} alt="User Profile" />
                <div className="profile-details">
                  <p>ABC user</p>
                  <p>abcuser@gmail.com</p>
                </div>
              </div>
              <div className="settings">
                <ul>
                  <li>
                    <span>
                      <FaMap />
                    </span>
                    Overview
                  </li>
                  <li>
                    <span>
                      <MdReportProblem />
                    </span>
                    Report
                  </li>
                  <li>
                    <span>
                      <TbSelect />{" "}
                    </span>
                    Issues
                  </li>
                  <li>
                    <span>
                      <RiTeamFill />
                    </span>
                    Team
                  </li>
                  <li>
                    <span>
                      <FaNoteSticky />
                    </span>
                    Notes
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-profile">
              <ul>
                <li>
                  <span>
                    <IoMdSettings />
                  </span>{" "}
                  Settings
                </li>
                <li>
                  {" "}
                  <span>
                    <IoLogOutOutline />
                  </span>
                  Log out
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right-dash-container">
          <div className="inner-right-dash">
            <div className="head">Reported Issues 2025</div>
            <div className="filter-tab">
              <div className="left-filter">
                <ul>
                  <li>
                    Overview{" "}
                    <span>
                      <IoChevronDown />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="right-filter">
                <ul>
                  <li>
                    <FaFilter />
                  </li>
                  <li>
                    <FaRegEye />
                  </li>
                  <li>
                    <IoMdInformationCircleOutline />
                  </li>
                  <li>
                    <button>Sort</button>
                  </li>
                  <li>
                    <button>View</button>
                  </li>
                  <li>
                    <button>Filter</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="report-container">
              <div className="inner-report">
                <div className="upper-report">
                  {cardData.map(({ id, icon: Icon, title, info }) => (
                    <div className="card" key={id}>
                      <div className="image">
                        <span>
                          <Icon />
                        </span>
                      </div>
                      <div className="card-info">
                        <h3>{title}</h3>
                        <ul>
                          {info.map((item, idx) => {
                            const InfoIcon = item.icon;
                            return (
                              <li key={idx}>
                                <span>
                                  <InfoIcon />
                                </span>
                                {item.label}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="lower-report">
                  <div className="lower-head">
                    <ul>
                      <li>
                        Reports{" "}
                        <span>
                          <IoChevronDown />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="lower-card-report">
                    {lowerCards.map((card) => (
                      <div
                        className="card"
                        key={card.id}
                        onClick={() => navigate(`/potholereport/${card.guid}`)}
                      >
                        <div className="image">
                          <img
                            src={card.image_url}
                            alt={card.image_name}
                            style={{
                              width: "100%",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                        <div className="card-info">
                          <ul>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '0.5rem' }}>
                              <FaFile />
                              <span>{card.image_name}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inner-report-filter">
                <div className="filter-head">
                  <ul>
                    <li>
                      <span>
                        <FaFilter />
                      </span>
                      Filter
                    </li>
                  </ul>
                  <span className="cancel-icon">
                    <RxCross2 />
                  </span>
                </div>
                <div className="upper-filter">
                  <h4>Issue type</h4>
                  <ul>
                    <li style={{ cursor: "pointer" }} onClick={goToReport}>
                      <span>✅</span>
                      <span>
                        <FaFile />
                      </span>
                      <span>Report</span>
                    </li>
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={goToBillboard}
                    >
                      {" "}
                      <span>✅</span>
                      <span>
                        <MdReportProblem />
                      </span>
                      <span>Billboard</span>
                    </li>
                    <li>
                      {" "}
                      <span>✅</span>
                      <span>
                        <FaMap />
                      </span>
                      <span>Construction</span>
                    </li>
                    <li>
                      {" "}
                      <span>✅</span>
                      <span>
                        <FaImage />
                      </span>
                      <span>Visual Report</span>
                    </li>
                    <li>
                      {" "}
                      <span>✅</span>
                      <span>
                        <IoAnalytics />
                      </span>
                      <span>Analytics</span>
                    </li>
                  </ul>
                </div>
                <div className="lower-filter">
                  <h4>Issues</h4>
                  <ul>
                    <li>
                      {" "}
                      <span>✅</span>
                      <span>
                        <FaChartSimple />
                      </span>
                      <span>Visual Report</span>
                    </li>
                    <li>
                      {" "}
                      <span>✅</span>
                      <span>
                        <RiTeamFill />
                      </span>
                      <span>Visual Report</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailed;