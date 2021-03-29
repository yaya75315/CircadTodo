import React, { useState } from "react";
import "../public/css/weekCalender.css";
import "../public/css/common.css";
import DateHour from "./DateHour";
import DateWork from "./DateWork";
import leftIcon from "../public/images/left.svg";
import rightIcon from "../public/images/right.svg";

const WeekCalender = () => {
  console.log("WeekCalender");
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDay = ["S", "M", "T", "W", "T", "F", "S"];
  const todayMonth = () => {
    return Today.getMonth();
  };

  let Today = new Date();
  let todayDay = Today.getDay();
  let contentStyle = [];
  let todayDate = [];

  for (var i = 0, j = 1; i < weekDay.length; i++) {
    let x = todayDay - 1;
    if (todayDay > i) {
      contentStyle[i] = "date";
      todayDate[i] = Today.getDate() - x;
    } else if (todayDay < i) {
      contentStyle[i] = "date";
      todayDate[i] = Today.getDate() + j;
      j++;
    } else if (todayDay === i) {
      contentStyle[i] = "dataChoose";
      todayDate[i] = Today.getDate();
    }
  }

  for (var i = 0; i < weekDay.length; i++) {
    if (todayDate[i] > 31) {
      todayDate[i] = todayDate[i] - 31;
    }
  }

  return (
    <div className="weekCalender">
      <div className="container">
        <div className="monthBar">
          <div>
            <img src={leftIcon} alt="leftIcon" />
          </div>
          <p>{month[todayMonth()]}</p>
          <a href="###">
            <img src={rightIcon} alt="" />
          </a>
        </div>
        <div className="dayWeek">
          <DateHour
            day={weekDay[0]}
            date={todayDate[0]}
            hour={0}
            contentStyle={contentStyle[0]}
          />
          <DateHour
            day={weekDay[1]}
            date={todayDate[1]}
            hour={3}
            contentStyle={contentStyle[1]}
          />
          <DateHour
            day={weekDay[2]}
            date={todayDate[2]}
            hour={2}
            contentStyle={contentStyle[2]}
          />
          <DateHour
            day={weekDay[3]}
            date={todayDate[3]}
            hour={2}
            contentStyle={contentStyle[3]}
          />
          <DateHour
            day={weekDay[4]}
            date={todayDate[4]}
            hour={2}
            contentStyle={contentStyle[4]}
          />
          <DateHour
            day={weekDay[5]}
            date={todayDate[5]}
            hour={3}
            contentStyle={contentStyle[5]}
          />
          <DateHour
            day={weekDay[6]}
            date={todayDate[6]}
            hour={0}
            contentStyle={contentStyle[6]}
          />
        </div>
      </div>
      <div className="dayWork">
        <div className="marginSpace"></div>
        <DateWork
          backGroundColor={"yellow"}
          workContent={"Paper draft for ICCE-TW"}
          workHour={4}
        />
        <DateWork
          backGroundColor={"blue"}
          workContent={"Paper draft for ICCE-TW"}
          workHour={3}
        />
      </div>
    </div>
  );
};

export default WeekCalender;
