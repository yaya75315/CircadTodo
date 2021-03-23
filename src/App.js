// import logo from './logo.svg';
import "./App.css";
import "./public/css/common.css";
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";
import HomePage from "./viewpages/HomePage";

function App() {
  return (
    <div className="appContainer">
      <div className="container">
        <NavBar />
      </div>
      <HomePage />
      <TabBar />
    </div>
  );
}

export default App;
