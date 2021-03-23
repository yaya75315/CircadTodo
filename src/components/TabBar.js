import React from "react";
import "../public/css/tabBar.css";
import workIconPress from "../public/images/workIcon-p.svg";
import lightingIconNormal from "../public/images/lightingIcon-n.svg";
import settingIconNormal from "../public/images/settingIcon-n.svg";

const TabBar = () => {
  console.log("TabBar");
  return (
    <div className="tabBar">
      <div className="workTab">
        <img src={workIconPress} alt="" />
        <p>Work</p>
      </div>
      <div className="lightingTab">
        <img src={lightingIconNormal} alt="" />
        <p>Lighting</p>
      </div>
      <div className="settingTab">
        <img src={settingIconNormal} alt="" />
        <p>setting</p>
      </div>
    </div>
  );
};

export default TabBar;
