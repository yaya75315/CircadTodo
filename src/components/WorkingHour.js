import React from "react";

function WorkingHour({ hours, day }) {
  return (
    <div>
      <div className="Every-dot">
        <div className="dot"></div>
      </div>
      <div className="day-workHour">{hours[day.format("YYYY-MM-DD")]}</div>
      <div className="hour">
        {hours[day.format("YYYY-MM-DD")] == null ? null : "hr"}
      </div>
    </div>
  );
}

export default WorkingHour;
