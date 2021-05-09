import React, { useState, useEffect } from "react";
import moment from "moment";
import buildCalendar from "./buildCal";
import dayStyle, { beforeToday } from "./DayStyle";
import DateWork from "./DateWork";
import eventData from "../public/workingData.json";
import WorkingHour from "./WorkingHour";
import "../public/css/workingStyle.css";
import "../public/css/common.css";

function WorkingTime() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];

  const hours = {
    3: 3,
    4: 4,
    5: 2,
    6: 3,
    7: 2,
    9: 1,
    10: 2,
    11: 2,
    12: 3,
    13: 1,
    14: 3,
    15: 2,
    16: 2,
    17: 4,
    18: 2,
    19: 2,
    20: 1,
    21: 3,
    22: 1,
    23: 3,
    24: 2,
    26: 1,
    27: 2,
    28: 1,
    29: 1,
    30: 2,
    31: 2,
  };

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
                      <div className="day">
                        <div className={dayStyle(day, value, hours)}>
                          <div className="day-names">
                            <div className="week">
                              {weeks[day.weekday().toString()]}
                            </div>
                          </div>
                          {day.format("D").toString()}
                          <WorkingHour
                            Num={hours[day.format("D").toString()]}
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

        <DateWork
          backGroundColor={"blue"}
          workContent={"Paper draft for ICCE-Tw"}
          workHour={2}
        />
      </div>
    </div>
  );
}

export default WorkingTime;
