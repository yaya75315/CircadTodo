import React from "react";

function WorkingHour({ hours, day, language }) {
  const hourDisplay = () => {
    if (hours[day.format("YYYY-MM-DD")] == null) {
      return null;
    } else {
      if (language == "English") {
        return "hr";
      } else if (language == "Chinese") {
        return "小時";
      } else {
        return "hr";
      }
    }
  };
  return (
    <div>
      <div className="Every-dot">
        <div className="dot"></div>
      </div>
      <div className="day-workHour">{hours[day.format("YYYY-MM-DD")]}</div>
      <div className="hour">
        {/* {hours[day.format("YYYY-MM-DD")] == null ? null : "hr"} */}
        {hourDisplay()}
      </div>
    </div>
  );
}

export default WorkingHour;
