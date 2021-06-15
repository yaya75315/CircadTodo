// import logo from './logo.svg';
import "./App.css";
import "./public/css/common.css";
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";

import React, { useState } from "react";

import HomePage from "./viewpages/HomePage";
import LightingPage from "./viewpages/LightingPage";
import SettingPage from "./viewpages/SettingPage";
import DateSetting from "./viewpages/DateSetting";

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
  const [newWorking, setNewWorking] = useState(false);

  const iconStatus = titleState != "Today" ? "none" : "navBarIcon";
  const history = useHistory();

  return (
    <div className="appContainer">
      <div className="add-newWorking">
        {newWorking ? <DateSetting setNewWorking={setNewWorking} /> : null}
        {console.log(newWorking)}
      </div>
      <HashRouter>
        <div className="container">
          <NavBar
            title={titleState}
            iconStatus={iconStatus}
            setNewWorking={setNewWorking}
          />
        </div>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/LightingPage" component={LightingPage} />
          <Route path="/SettingPage" component={SettingPage} />
        </Switch>

        {newWorking ? null : (
          <TabBar
            setTitleState={setTitleState}
            title={title}
            setNewWorking={setNewWorking}
            newWorking={newWorking}
          />
        )}
      </HashRouter>
    </div>
  );
}

export default App;
