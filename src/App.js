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

import dataRecord from "./public/js/data.json";

// import { useLocation, HashRouter } from "react-router-dom";

function App() {
  let location = useLocation();
  let now_location = location.pathname;
  let title = "Today";
  const [oldWorkHour, setOldWorkHour] = useState(dataRecord);
  const [titleState, setTitleState] = useState(title);
  const [newWorking, setNewWorking] = useState(false);
  const [newNumber, setNewNumber] = useState({});
  const [newInfo, setNewInfo] = useState({ name: "", colorId: "" });
  const [hours, setHours] = useState({});
  const [language, setLanguage] = useState("Chinese");

  // const hours = {};

  const iconStatus = titleState != "Today" ? "none" : "navBarIcon";
  const history = useHistory();

  return (
    <div className="appContainer">
      <div className="add-newWorking">
        {newWorking ? (
          <DateSetting
            setNewWorking={setNewWorking}
            hours={hours}
            newNumber={newNumber}
            setNewNumber={setNewNumber}
            newInfo={newInfo}
            setNewInfo={setNewInfo}
            oldWorkHour={oldWorkHour}
            setOldWorkHour={setOldWorkHour}
            language={language}
          />
        ) : null}
      </div>

      <HashRouter>
        <div className="container">
          <NavBar
            title={titleState}
            iconStatus={iconStatus}
            setNewWorking={setNewWorking}
            language={language}
          />
        </div>

        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <HomePage
                hours={hours}
                newNumber={newNumber}
                setNewNumber={setNewWorking}
                newInfo={newInfo}
                setNewInfo={setNewInfo}
                setHours={setHours}
                oldWorkHour={oldWorkHour}
                setOldWorkHour={setOldWorkHour}
                language={language}
              />
            )}
          />
          <Route
            path="/LightingPage"
            component={() => <LightingPage language={language} />}
          />

          <Route
            path="/SettingPage"
            component={() => (
              <SettingPage language={language} setLanguage={setLanguage} />
            )}
          />
        </Switch>

        {newWorking ? null : (
          <TabBar
            setTitleState={setTitleState}
            title={title}
            setNewWorking={setNewWorking}
            newWorking={newWorking}
            language={language}
            setLanguage={setLanguage}
          />
        )}
      </HashRouter>
    </div>
  );
}

export default App;
