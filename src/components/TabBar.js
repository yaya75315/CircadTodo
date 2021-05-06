import React, { useState, useEffect } from "react";
import "../public/css/tabBar.css";
import workIconPress from "../public/images/workIcon-p.svg";
import lightingIconNormal from "../public/images/lightingIcon-n.svg";
import settingIconNormal from "../public/images/settingIcon-n.svg";
import workIconNormal from "../public/images/workIcon-n.svg";
import lightingIconPress from "../public/images/lightingIcon-p.svg";
import settingIconPress from "../public/images/settingIcon-p.svg";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const TabBar = ({ title, now_location, setTitleState }) => {
  let workImg = workIconPress;
  let lightingImg = lightingIconNormal;
  let settingImg = settingIconNormal;

  const [workState, setWorkState] = useState(workImg);
  const [lightingState, setLightingState] = useState(lightingImg);
  const [settingState, setSettingState] = useState(settingImg);
  const history = useHistory();
  const titleChange = (router) => {
    setTitleState((pre) => {
      let tmpTitle = "Lighting";
      if (router == "/LightingPage") {
        tmpTitle = "Lighting";
      } else if (router == "/") {
        tmpTitle = "Today";
      } else if (router == "/SettingPage") {
        tmpTitle = "Setting";
      }
      return tmpTitle;
    });
    if (router === "/LightingPage") {
      workImg = workIconNormal;
      lightingImg = lightingIconPress;
      settingImg = settingIconNormal;
      console.log("settingImg0");
    } else if (router === "/SettingPage") {
      workImg = workIconNormal;
      lightingImg = lightingIconNormal;
      settingImg = settingIconPress;
      console.log("settingImg1");
    } else if (router === "/") {
      workImg = workIconPress;
      lightingImg = lightingIconNormal;
      settingImg = settingIconNormal;
      console.log("settingImg2");
    }
    setLightingState(lightingImg);
    setWorkState(workImg);
    setSettingState(settingImg);
    history.push(router);
  };

  return (
    <div className="tabBar">
      <div className="workTab" onClick={() => titleChange("/")}>
        <img src={workState} alt="" />
        <p>Work</p>
      </div>

      <div className="lightingTab" onClick={() => titleChange("/LightingPage")}>
        <img src={lightingState} alt="" />
        <p>Lighting</p>
      </div>

      <div className="settingTab" onClick={() => titleChange("/SettingPage")}>
        <img src={settingState} alt="" />
        <p>setting</p>
      </div>
    </div>
  );
};

export default TabBar;
