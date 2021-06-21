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
  oldWorkHour,
  setOldWorkHour,
  setHours,
  language,
}) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];
  let h = 0;

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
                index={i}
                setOldWorkHour={setOldWorkHour}
                oldWorkHour={oldWorkHour}
                item={item}
                hours={hours}
                h={h}
                setHours={setHours}
                language={language}
              />
            </div>
          );
        }
      }
    }
  }

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
            <div className="previous" onClick={() => setValue(prevMonth())}>
              {String.fromCharCode(171)}
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
                    <div onClick={() => setValue(day)}>
                      {allHours(day)}
                      <div className="day">
                        <div className={dayStyle(day, value, hours)}>
                          <div className="day-names">
                            <div className="week">
                              {weeks[day.weekday().toString()]}
                            </div>
                          </div>
                          {day.format("D").toString()}

                          <WorkingHour
                            hours={hours}
                            day={day}
                            language={language}
                          />
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
        <div className="workingSchedule">
          {myWork()}
          {list}
        </div>
      </div>
    </div>
  );
}

export default WorkingTime;
