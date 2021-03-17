import React from 'react'
import StatusDisplay from '../components/StatusDisplay'
import WeekCalender from '../components/WeekCalender'
import '../public/common.css'
import '../public/homePage.css'

const HomePage = () => {
    console.log("HomePage");
    return (
        <div className="appContent">
        <div className="container">
        <div className="stateArea">
            <StatusDisplay/>
            <StatusDisplay/>
        </div>
        </div>
        <div className="calenderArea">
        <div className="container">
        <h2>Working time</h2>
        </div>
        <WeekCalender/>
        </div>
        <div className="workList"></div>
     
        </div>
    )
}

export default HomePage
