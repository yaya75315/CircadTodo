import React from "react";
import "../public/css/statusDisplay.css";
import arriveHome from "../public/images/arrivehome.svg";

const StatusDisplay = ({ iconImg, statusName, time }) => {
  console.log("status");
  // const homeIcon = arriveHome;
  // const statusName ="Arrive home"
  // const time = "19:30"
  return (
    <div className="statusContainer">
      <div className="statusImg">
        <img src={iconImg} alt="home" />
      </div>
      <div className="statusTime">
        <p>{statusName}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default StatusDisplay;
