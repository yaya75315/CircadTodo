import React from "react";
import StatusDisplay from "../components/StatusDisplay";
import WeekCalender from "../components/WeekCalender";
import "../public/css/common.css";
import "../public/css/homePage.css";
import arriveHome from "../public/images/arrivehome.svg";
import sleepTime from "../public/images/sleeptime.svg";

const HomePage = () => {
  console.log("HomePage");
  return (
    <div className="appContent">
      <div className="container">
        <div className="stateArea">
          <StatusDisplay
            iconImg={arriveHome}
            statusName={"Arrive time"}
            time={"19:20"}
          />
          <div className="spacingBlock"></div>
          <StatusDisplay
            iconImg={sleepTime}
            statusName={"Sleep time"}
            time={"0:00"}
          />
        </div>
      </div>
      <div className="calenderArea">
        <div className="container">
          <h2>Working time</h2>
        </div>
        <WeekCalender />
      </div>
    </div>
  );
};

export default HomePage;
