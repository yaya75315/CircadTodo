import React, { useState, useEffect } from "react";
import moment from "moment";
import buildCalendar from "./buildCal";

import dayStyle, { beforeToday } from "./DayStyle";
import DateWork from "./DateWork";
import WorkingHour from "./WorkingHour";
import "../public/css/workingStyle.css";
import "../public/css/common.css";

function WorkingTime({
  hours,
  // setHours,
  newNumber,
  setNewNumber,
  newInfo,
  setNewInfo,
  oldWorkHour,
  setOldWorkHour,
}) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];

  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "week");
  }
  function nextMonth() {
    return value.clone().add(1, "week");
  }

  function thisWeek() {
    return value.isSame(new Date(), "week");
  }

  const todayFormat = () => {
    return value.format("YYYY-MM-DD");
  };

  const list = [];

  function myWork() {
    for (let item in oldWorkHour) {
      if (todayFormat() == item) {
        for (let i = 0; i < oldWorkHour[item].length; i++) {
          list.push(
            <div>
              <DateWork
                backGroundColor={oldWorkHour[item][i].colorId}
                workContent={oldWorkHour[item][i].name}
                workHour={oldWorkHour[item][i].hour}
              />
            </div>
          );
        }
      }
    }
  }
  let h = 0;

  function allHours(day) {
    for (let item in oldWorkHour) {
      if (day.format("YYYY-MM-DD") == item) {
        for (let i = 0; i <= oldWorkHour[item].length; i++) {
          if (i != oldWorkHour[item].length) {
            h += oldWorkHour[item][i].hour;
            hours[item] = h;
          } else {
            h = 0;
          }
        }
      }
    }
  }

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div>
      <div className="weekCalendar">
        <div className="calendar">
          <div className="header">
            <div
              className="previous"
              onClick={() => !thisWeek() && setValue(prevMonth())}
            >
              {!thisWeek() ? String.fromCharCode(171) : null}
            </div>
            <div className="current">
              {currMonthName()}
              {currYear()}
            </div>
            <div className="next" onClick={() => setValue(nextMonth())}>
              {String.fromCharCode(187)}
            </div>
          </div>
          <div className="body">
            <div className={"dayStatus"}>
              {calendar.map((week) => (
                <div className="dayContainer">
                  {week.map((day) => (
                    <div onClick={() => !beforeToday(day) && setValue(day)}>
                      {allHours(day)}
                      <div className="day">
                        <div className={dayStyle(day, value, hours)}>
                          <div className="day-names">
                            <div className="week">
                              {weeks[day.weekday().toString()]}
                            </div>
                          </div>
                          {day.format("D").toString()}

                          <WorkingHour hours={hours} day={day} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="dayWork">
        <div className="marginSpace"></div>
        {myWork()}
        {list}
      </div>
    </div>
  );
}

export default WorkingTime;
