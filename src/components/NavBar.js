import React, { useEffect } from "react";
import calenderIcon from "../public/images/calender-n.svg";
import "../public/css/navBar.css";

const NavBar = ({ title, iconStatus, setNewWorking }) => {
  // useEffect(() => {
  //   console.log("title:", title);
  //   return () => {};
  // }, [title]);

  return (
    <div className="navBarPosition">
      <div className="navBar">
        <h1>{title}</h1>
        <div
          className={iconStatus}
          onClick={() => {
            setNewWorking(true);
          }}
        >
          <img src={calenderIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
