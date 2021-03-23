import React from "react";
import calenderIcon from "../public/images/calender-n.svg";
import "../public/css/navBar.css";

const NavBar = () => {
  console.log("NavBar");
  const title = "Today";
  return (
    <div className="navBarPosition">
      <div className="navBar">
        <h1>{title}</h1>
        <a href="###">
          <img src={calenderIcon} alt="icon" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
