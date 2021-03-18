import React from 'react'
import "../public/css/dateWork.css"
import noteIcon from '../public/images/noteIcon.svg'

const DateWork = () => {
    console.log("DateWork");
    return (
        <div className="container">
            <div className="workContainer" id="workID">
                <div className="workArea">
                <div className="workImg">
                    <img src={noteIcon} alt=""/>
                </div>
                <div className="workContent">
                    <p>Wake up for Work</p>
                </div>
                </div>
                <div className="timeArea">
                    <p>3</p>
                    <p>hr</p>
                </div>
            </div>
        </div>
    )
}

export default DateWork
