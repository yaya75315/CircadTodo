import React, { useState, useEffect } from "react";
import moment from "moment";
import "../public/css/datePicker.css";
import triangle from "../public/images/triangle.svg";

const DatePicker = ({
  deadLineValue,
  totalHoursValue,
  setHourInput,
  hourInput,
}) => {
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

  const [calendar, setCalendar] = useState([]);
  const [calendarValue, setCalendarValue] = useState(moment());
  const [numberSize, setNumberSize] = useState(0);
  const [triangleOpen, setTriangleOpen] = useState(false);

  const calendarStart = calendarValue.clone().startOf("month").startOf("week");
  const calendarEnd = calendarValue.clone().endOf("month").endOf("week");

  const numberChange = (e) => {
    setNumberSize(e.target.value);
  };

  useEffect(() => {
    const days = calendarStart.clone().subtract(1, "day");
    const a = [];
    while (days.isBefore(calendarEnd, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => days.add(1, "day").clone())
      );
    }

    setCalendar(a);
  }, [calendarValue]);

  return (
    <div className="monthCalendar">
      {calendar.map((week) => (
        <div className="">
          {week.map((day) => (
            <div
              className="day"
              onClick={() => {
                setCalendarValue(day);
                setHourInput(true);
                setNumberSize(0);
                setTriangleOpen(true);
              }}
            >
              {/* 這邊onClick要多寫一段加入input的程式 */}
              <div
                className={calendarValue.isSame(day, "day") ? "selected" : ""}
              >
                {day.format("D").toString()}
              </div>

              <div className="oldHours">
                {hours[day.format("D").toString()]}
              </div>
              <img
                className={
                  calendarValue.isSame(day, "day") && triangleOpen
                    ? "triangle"
                    : "triangleNone"
                }
                src={triangle}
              />
            </div>
          ))}

          <div
            className={
              calendarValue.isSame(week[0], "week") && hourInput
                ? "hourInput"
                : "noneInput"
            }
          >
            <input
              type="number"
              onInput={numberChange}
              value={numberSize > 9 ? 9 : numberSize}
            />
            <input
              type="button"
              value="OK"
              onClick={() => {
                setHourInput(false);
                setNumberSize(0);
                setTriangleOpen(false);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DatePicker;
