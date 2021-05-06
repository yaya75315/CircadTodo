// import logo from './logo.svg';
import "./App.css";
import "./public/css/common.css";
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";

import React, { useState } from "react";

import HomePage from "./viewpages/HomePage";
import LightingPage from "./viewpages/LightingPage";
import SettingPage from "./viewpages/SettingPage";

import {
  Switch,
  Route,
  useLocation,
  HashRouter,
  useHistory,
} from "react-router-dom";

// import { useLocation, HashRouter } from "react-router-dom";

function App() {
  let location = useLocation();
  let now_location = location.pathname;
  let title = "Today";
  const [titleState, setTitleState] = useState(title);

  const iconStatus = titleState != "Today" ? "none" : "navBarIcon";
  const history = useHistory();

  return (
    <div className="appContainer">
      <HashRouter>
        <div className="container">
          <NavBar title={titleState} iconStatus={iconStatus} />
        </div>
        <div>
          <div className={"insideContent"}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/LightingPage" component={LightingPage} />
              <Route path="/SettingPage" component={SettingPage} s />
            </Switch>
          </div>
        </div>
        <TabBar setTitleState={setTitleState} title={title} />
      </HashRouter>
    </div>
  );
}

export default App;
