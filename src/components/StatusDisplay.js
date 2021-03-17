import React from 'react'
import '../public/statusDisplay.css'
import arriveHome from '../public/arrivehome.svg'

const StatusDisplay = () => {
    console.log('status');
    const homeIcon = arriveHome;
    const statusName ="Arrive home"
    const time = "19:30"
    return (
        <div className="statusContainer">
        
            <div className="statusImg">
                <img src={homeIcon} alt="home"/>
            </div>
            <div className="statusTime">
                <p>{statusName}</p>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default StatusDisplay
