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
  hours,
  language,
}) => {
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
                  {hours[day.format("YYYY-MM-DD")]}
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
                    calendarValue.isSame(day, "day") &&
                    triangleOpen &&
                    hourInput
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
                placeholder={
                  language == "English" ? "Type working hours" : "輸入工作時數"
                }
                value={numberSize > 24 && numberSize ? 24 : numberSize}
                min="0"
                max="24"
                onKeyPress={(e) => {
                  console.log(e.key);
                  if (e.key === "Enter") {
                    console.log(e.key);
                    setHourInput(false);
                    setNumberSize("");
                    setTriangleOpen(false);
                    if (numberSize > 0) {
                      setNewHourStyle("newHours");
                      setNewNumber({
                        ...newNumber,
                        [dateSave]: document.getElementById("hourInput").value,
                      });
                    } else if (numberSize == 0) {
                      delete newNumber[dateSave];
                    }
                  }
                }}
              />

              <input
                type="button"
                value={language == "English" ? "OK" : "完成"}
                onClick={() => {
                  setHourInput(false);
                  setNumberSize("");
                  setTriangleOpen(false);
                  if (numberSize > 0) {
                    setNewHourStyle("newHours");
                    setNewNumber({
                      ...newNumber,
                      [dateSave]: document.getElementById("hourInput").value,
                    });
                  } else if (numberSize == 0) {
                    delete newNumber[dateSave];
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
