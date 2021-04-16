// import logo from './logo.svg';
import "./App.css";
import "./public/css/common.css";
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";

import React, { useState } from "react";

import HomePage from "./viewpages/HomePage";
import LightingPage from "./viewpages/LightingPage";
import SettingPage from "./viewpages/SettingPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  let now_location = location.pathname;
  let title = "Today";
  const [titleState, setTitleState] = useState(title);
  console.log(now_location);

  const iconStatus = titleState != "Today" ? "none" : "navBarIcon";

  return (
    <div className="appContainer">
      <div className="container">
        <NavBar title={titleState} iconStatus={iconStatus} />
      </div>
      <div className={"insideContent"}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/LightingPage" component={LightingPage} />
          <Route path="/SettingPage" component={SettingPage} s />
        </Switch>
      </div>
      <TabBar
        setTitleState={setTitleState}
        now_location={now_location}
        title={title}
      />
    </div>
  );
}

export default App;
