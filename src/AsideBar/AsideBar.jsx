import React from "react";
import "./style.css";
import profileIcon from "../assets/images/profile.png";
import { FaMap } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { TbSelect } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
const AsideBar = () => {
  return (
    <>
      <div className="left-dash-container">
        <div className="upper-profile">
          <div className="profile">
            <img src={profileIcon} />
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
    </>
  );
};

export default AsideBar;
