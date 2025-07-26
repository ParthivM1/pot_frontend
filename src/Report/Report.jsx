import React from "react";
import AsideBar from "../AsideBar/AsideBar";
import Issues from "../Issues/Issues";
import IssueProfile from "../IssueProfile/IssueProfile";
// import "./style.css";
const Report = () => {
  return (
    <>
      <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
        <div
          style={{ width: "20%", backgroundColor: "#d5f4f9", height: "100%" }}
        >
          <AsideBar />
        </div>
        <div style={{ width: "60%" }}>
          <Issues />
        </div>
        <div style={{ width: "30%", backgroundColor: "#A9A9A9" }}>
          <IssueProfile />
        </div>
      </div>
    </>
  );
};

export default Report;
