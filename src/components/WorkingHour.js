import React, { useState } from "react";

function WorkingHour({ Num }) {
  return (
    <div>
      <div className="Every-dot">
        <div className="dot"></div>
      </div>
      <div className="day-workHour">
        <div>{Num}</div>
      </div>
      <div className="hour">
        <div> {Num == null ? null : "hr"}</div>
      </div>
    </div>
  );
}

export default WorkingHour;
