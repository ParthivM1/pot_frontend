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
import { useNavigate } from "react-router-dom";

const Detailed = () => {
  const navigate = useNavigate();
  // ** CHANGE: Renamed state to be more descriptive and added loading state **
  const [combinedReports, setCombinedReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ** CHANGE: Updated useEffect to fetch both images and videos **
  useEffect(() => {
    const fetchAllReports = async () => {
      setIsLoading(true);
      try {
        // Fetch both image reports and video reports in parallel
        const [imageRes, videoRes] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/reports`),
          fetch(`${process.env.REACT_APP_API_URL}/videos`),
        ]);

        const images = await imageRes.json();
        const videos = await videoRes.json();

        // Add a 'type' property to each object to distinguish them
        const formattedImages = images.map((img) => ({ ...img, type: "image" }));
        const formattedVideos = videos.map((vid) => ({ ...vid, type: "video" }));

        // Combine, sort by date, and set the state
        const allReports = [...formattedImages, ...formattedVideos];
        allReports.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        
        setCombinedReports(allReports);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllReports();
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
                  {/* ** CHANGE: Updated rendering logic for combined reports ** */}
                  <div className="lower-card-report">
                    {isLoading ? <p>Loading reports...</p> : combinedReports.map((report) => {
                      if (report.type === 'image') {
                        return (
                          <div className="card" key={`img-${report.id}`} onClick={() => navigate(`/potholereport/${report.guid}`)}>
                            <div className="image"><img src={report.image_url} alt={report.image_name} style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "15px" }} /></div>
                            <div className="card-info"><ul><li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '0.5rem' }}><FaFile /><span>{report.image_name}</span></li></ul></div>
                          </div>
                        );
                      }
                      if (report.type === 'video') {
                        return (
                          <div className="card" key={`vid-${report.id}`} onClick={() => navigate(`/video_report/${report.guid}`)}>
                            <div className="image video-placeholder"><FaVideo size={40} /></div>
                            <div className="card-info">
                              <ul>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '0.5rem' }}><FaVideo /><span>{report.video_name}</span></li>
                                <li style={{ color: report.status === 'processing' ? 'orange' : 'green', fontWeight: 'bold' }}>Status: {report.status}</li>
                              </ul>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
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
