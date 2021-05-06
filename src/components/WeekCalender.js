import React, { useState } from "react";
import "../public/css/weekCalender.css";
import "../public/css/common.css";
import DateHour from "./DateHour";
import DateWork from "./DateWork";
import leftIcon from "../public/images/left.svg";
import rightIcon from "../public/images/right.svg";

const WeekCalender = () => {
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

  const [weeklyDay, setWeeklyDay] = useState({
    Day: ["S", "M", "T", "W", "T", "F", "S"],
  });

  const getMonthDayTotal = (year, month) => {
    let d = new Date(year, month, 0); //不設定預設為零
    return d.getDate(); //總共有幾天
  };

  // function getMonthLastDayWeek(year, month) {
  // let lastDay = getMonthDayTotal(year, month); //用總共的天數作為每個月最後一日的日期
  // let d = new Date(year, month, lastDay);
  // return d.getDay();
  //  }

  const todayMonth = () => {
    return Today.getMonth();
  };

  let Today = new Date();
  let todayDay = Today.getDay();
  let contentStyle = [];
  let todayDate = [];
  let myDate = Today.getDate();
  let calendarMonth = Today.getMonth();

  const [weeklyMonth, setWeeklyMonth] = useState(calendarMonth);
  const [weeklyDate, setWeeklyDate] = useState(todayDate);
  const [dateStyle, setDateStyle] = useState(contentStyle);

  let lastDay = getMonthDayTotal(2021, weeklyMonth + 1);

  const refreshDate = () => {
    for (var i = 0, j = 1; i < weeklyDay.Day.length; i++) {
      let x = todayDay - i;
      let jFlag = false;
      if (todayDay > i) {
        contentStyle[i] = "date";
        todayDate[i] = Today.getDate() - x;
      } else if (todayDay < i) {
        contentStyle[i] = "date";
        todayDate[i] = Today.getDate() + j;
        const jNumber =
          todayDate[i] > lastDay ? todayDate[i] - lastDay : Today.getDate() + j;
        todayDate[i] = jNumber;
        j++;
      } else if (todayDay === i && weeklyMonth == calendarMonth) {
        contentStyle[i] = "dataChoose";
        todayDate[i] = Today.getDate();
      }
    }
  };
  refreshDate();
  console.log(lastDay);
  console.log(todayDate[6]);

  const rightIconOnClick = () => {
    let newFlag = false;
    // let d = [];
    let c = [1];
    //let b = [2, 3, 4, 5, 6, 7, 8];
    let b = [];
    // let b = weeklyDate.map((e) => {
    //   return e + 7;
    // });

    for (let i = 0, j = 1; i < weeklyDay.Day.length; i++) {
      b[i] = todayDate[6] + j;
      j++;
    }

    let newStyle = ["date", "date", "date", "date", "date", "date", "date"];

    for (var i = 0; i < weeklyDay.Day.length; i++) {
      if (b[i] == myDate && weeklyMonth == calendarMonth) {
        newStyle[i] = "dataChoose";
      } else if (b[i] > lastDay) {
        c[i] = c[0] + i;
      }
      b[i] = b[i] + 1;
    }

    const nextMonthDate = newFlag == true ? setWeeklyDate(c) : setWeeklyDate(b);
    const nextMonth =
      newFlag == true ? setWeeklyMonth((prev) => prev + 1) : "none";

    setDateStyle(newStyle);
  };

  const leftIconOnClick = () => {
    let b = weeklyDate.map((e) => {
      return e - 7;
    });

    let newStyle = ["date", "date", "date", "date", "date", "date", "date"];

    for (var i = 0; i < weeklyDay.Day.length; i++) {
      if (b[i] === myDate) {
        newStyle[i] = "dataChoose";
      }
    }

    setWeeklyDate(b);
    setDateStyle(newStyle);
    //console.log(weeklyDate);
  };

  // const rightOnClick = () => {
  //   var date = new Date();

  //   date.setDate(date.getDate() + 7);
  //   console.log(date.getDay());
  //   console.log(date);
  // };

  return (
    <div className="weekCalender">
      <div className="container">
        <div className="monthBar">
          <div>
            <img src={leftIcon} alt="leftIcon" onClick={leftIconOnClick} />
          </div>
          <p>{month[weeklyMonth]}</p>
          <a href="###" onClick={rightIconOnClick}>
            <img src={rightIcon} alt="" />
          </a>
        </div>
        <div className="dayWeek">
          <DateHour
            day={weeklyDay.Day[0]}
            date={weeklyDate[0]}
            hour={0}
            contentStyle={dateStyle[0]}
          />
          <DateHour
            day={weeklyDay.Day[1]}
            date={weeklyDate[1]}
            hour={3}
            contentStyle={dateStyle[1]}
          />
          <DateHour
            day={weeklyDay.Day[2]}
            date={weeklyDate[2]}
            hour={2}
            contentStyle={dateStyle[2]}
          />
          <DateHour
            day={weeklyDay.Day[3]}
            date={weeklyDate[3]}
            hour={2}
            contentStyle={dateStyle[3]}
          />
          <DateHour
            day={weeklyDay.Day[4]}
            date={weeklyDate[4]}
            hour={2}
            contentStyle={dateStyle[4]}
          />
          <DateHour
            day={weeklyDay.Day[5]}
            date={weeklyDate[5]}
            hour={3}
            contentStyle={dateStyle[5]}
          />
          <DateHour
            day={weeklyDay.Day[6]}
            date={weeklyDate[6]}
            hour={0}
            contentStyle={dateStyle[6]}
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
