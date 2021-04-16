import React, { useState, useEffect } from "react";
import "../public/css/tabBar.css";
import workIconPress from "../public/images/workIcon-p.svg";
import lightingIconNormal from "../public/images/lightingIcon-n.svg";
import settingIconNormal from "../public/images/settingIcon-n.svg";
import workIconNormal from "../public/images/workIcon-n.svg";
import lightingIconPress from "../public/images/lightingIcon-p.svg";
import settingIconPress from "../public/images/settingIcon-p.svg";

import { Link } from "react-router-dom";

const TabBar = ({ title, now_location, setTitleState }) => {
  let workImg = workIconPress;
  let lightingImg = lightingIconNormal;
  let settingImg = settingIconNormal;

  const [workState, setWorkState] = useState(workImg);
  const [lightingState, setLightingState] = useState(lightingImg);
  const [settingState, setSettingState] = useState(settingImg);

  const titleChange = () => {
    if (now_location === "/LightingPage") {
      title = "Lighting";
    } else if (now_location === "/") {
      title = "Today";
    } else if (now_location === "/SettingPage") {
      title = "Setting";
    }
    setTitleState(title);
  };

  useEffect(() => {
    if (now_location === "/LightingPage") {
      workImg = workIconNormal;
      lightingImg = lightingIconPress;
      settingImg = settingIconNormal;
    } else if (now_location === "/") {
      workImg = workIconPress;
      lightingImg = lightingIconNormal;
      settingImg = settingIconNormal;
    } else if (now_location === "/SettingPage") {
      workImg = workIconNormal;
      lightingImg = lightingIconNormal;
      settingImg = settingIconPress;
    }
    setLightingState(lightingImg);
    setWorkState(workImg);
    setSettingState(settingImg);
  }, []);

  return (
    <div className="tabBar">
      <Link to="/" className="workTab" onClick={titleChange()}>
        <img src={workState} alt="" />
        <p>Work</p>
      </Link>

      <Link to="/LightingPage" className="lightingTab" onClick={titleChange}>
        <img src={lightingState} alt="" />
        <p>Lighting</p>
      </Link>

      <Link to="/SettingPage" className="settingTab" onClick={titleChange}>
        <img src={settingState} alt="" />
        <p>setting</p>
      </Link>
    </div>
  );
};

export default TabBar;
