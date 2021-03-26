import React, { useState } from "react";
import "../public/css/dateSetting.css";
import "../public/css/common.css";
import closeIcon from "../public/images/closeIcon.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateSetting = () => {
  console.log("dateSetting");
  const [value, onChange] = useState(new Date());
  return (
    <div className="dateSetting">
      <div className="container">
        <div className="dateSettingBar">
          <img src={closeIcon} alt="" />
          <p>Save</p>
        </div>
        <div className="nameInput">
          <input type="text" placeholder="New event" />
          <div className="colorChooser">
            <div className="colorItem"></div>
          </div>
        </div>
        <p>Deadline</p>
        <div className="deadlinePicker">
          <p>2019 / 12 / 12 Mon.</p>
          <p>0:00 A.M.</p>
        </div>
        <p>Estimated total hours</p>
        <div className="hourPicker">
          <p>0</p>
          <p>hr</p>
        </div>
        <p>Set work hours for each day</p>
        <div className="datePicker">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
};

export default DateSetting;
