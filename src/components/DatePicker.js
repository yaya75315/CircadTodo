import React, { useState, useEffect } from "react";
import moment from "moment";
import "../public/css/datePicker.css";
import triangle from "../public/images/triangle.svg";
import dayStyle, {
  beforeToday,
  oldHour,
  afterDeadline,
} from "../viewpages/pickerStyles";
const DatePicker = ({
  setHourInput,
  hourInput,
  deadlineValue,
  newNumber,
  setNewNumber,
}) => {
  const hours = {
    // 3: 3,
    // 4: 4,
    // 5: 2,
    // 6: 3,
    // 7: 2,
    // 9: 1,
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
    // 22: 1,
    // 23: 3,
    // 24: 2,
    // 26: 1,
    // 27: 2,
    // 28: 1,
    // 29: 1,
    // 30: 2,
    // 31: 2,
  };
  const hour = "hour";
  const [calendar, setCalendar] = useState([]);
  const [calendarValue, setCalendarValue] = useState(moment());
  const [numberSize, setNumberSize] = useState("0");
  const [triangleOpen, setTriangleOpen] = useState(false);

  const [dateSave, setDateSave] = useState(0);
  const [newHourStyle, setNewHourStyle] = useState("newHoursNull");

  const calendarStart = calendarValue.clone().startOf("month").startOf("week");
  const calendarEnd = calendarValue.clone().endOf("month").endOf("week");
  const todayDate = () => {
    let date = calendarValue.clone().format("YYYY-MM-DD");
    setDateSave(date);
  };

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
    todayDate();
    setCalendar(a);
  }, [calendarValue]);

  const currMonthName = () => {
    return calendarValue.format("MMMM");
  };

  const currYear = () => {
    return calendarValue.format("YYYY");
  };

  const prevMonth = () => {
    return calendarValue.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    return calendarValue.clone().add(1, "month");
  };

  const thisMonth = () => {
    return calendarValue.isSame(new Date(), "month");
  };

  return (
    <div className="calendarPicker">
      <div className="monthHeader">
        <div className="current">{`${currMonthName()} ${currYear()}`}</div>
        <div className="changeButton">
          <div
            className={!thisMonth() ? "previous" : ""}
            onClick={() => !thisMonth() && setCalendarValue(prevMonth())}
          >
            {!thisMonth() ? String.fromCharCode(171) : null}
          </div>
          <div className="next" onClick={() => setCalendarValue(nextMonth())}>
            {String.fromCharCode(187)}
          </div>
        </div>
      </div>
      <div className="monthCalendar">
        <div className="dayName">
          {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
            <div className="week">{d}</div>
          ))}
        </div>
        {calendar.map((week) => (
          <div className="">
            {week.map((day) => (
              <div
                className="day"
                onClick={() => {
                  if (
                    !beforeToday(day) == true &&
                    afterDeadline(day, deadlineValue) != true
                  ) {
                    setCalendarValue(day);
                    setHourInput(true);
                  }

                  setNumberSize("");
                  setTriangleOpen(true);
                }}
              >
                <div className={dayStyle(day, calendarValue, deadlineValue)}>
                  {day.format("D").toString()}
                </div>

                <div className={oldHour(day, hours)}>
                  {hours[day.format("D").toString()]}
                </div>

                <div
                  className={
                    newNumber[day.format("YYYY-MM-DD")] != null &&
                    newNumber[day.format("YYYY-MM-DD")] != 0
                      ? newHourStyle
                      : "newHoursNull"
                  }
                >
                  {newNumber[day.format("YYYY-MM-DD")]}
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
                id="hourInput"
                onInput={numberChange}
                placeholder="Type working hours"
                value={numberSize > 9 && numberSize ? 9 : numberSize}
                min="0"
                max="9"
              />

              <input
                type="button"
                value="OK"
                onClick={() => {
                  setHourInput(false);
                  setNumberSize("");
                  setTriangleOpen(false);
                  if (numberSize >= 0) {
                    setNewHourStyle("newHours");
                    setNewNumber({
                      ...newNumber,
                      [dateSave]: document.getElementById("hourInput").value,
                    });
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
