// import logo from './logo.svg';
import './App.css';
import './public/common.css'
import NavBar from './components/NavBar';

import HomePage from './viewpages/HomePage'


function App() {
  return (
    <div className="appContainer">
      <div className="container">
        <div className="navBar">
        <NavBar/>
       </div>
       </div>
        <HomePage/>
        <div className="tabBar"></div>
       
      
      
    </div>
  );
}

export default App;
