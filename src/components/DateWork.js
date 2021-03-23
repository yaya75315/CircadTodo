import React from "react";
import "../public/css/dateWork.css";
import noteIcon from "../public/images/noteIcon.svg";

const DateWork = ({ backGroundColor, workContent, workHour }) => {
  console.log("DateWork");
  return (
    <div className="container">
      <div className="workContainer" id={backGroundColor}>
        <div className="workArea">
          <div className="workImg">
            <img src={noteIcon} alt="" />
          </div>
          <div className="workContent">
            <p>{workContent}</p>
          </div>
        </div>
        <div className="timeArea">
          <p>{workHour}</p>
          <p>hr</p>
        </div>
      </div>
    </div>
  );
};

export default DateWork;
