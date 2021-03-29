// import logo from './logo.svg';
import "./App.css";
import "./public/css/common.css";
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";
import HomePage from "./viewpages/HomePage";
import DateSetting from "./viewpages/DateSetting";

function App() {
  return (
    <div className="appContainer">
      <div className="container">
        <NavBar />
      </div>
      <HomePage />
      <TabBar />
      {/* <DateSetting /> */}
    </div>
  );
}

export default App;
