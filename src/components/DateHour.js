import React,{useState} from 'react'

const DateHour = ({day,date,hour}) => {

    const hourTag = hour===0 ?  "hide":"hour";
    const hourNumTag = hour===0 ?  "hideNum":"hourNum";

    const contentStyle = date===15? "dataChoose":"date";

    const dayStyle = contentStyle==="dataChoose" ? "dayChooseStyle" : "day"; 
    const dateStyle = contentStyle==="dataChoose" ? "dateChooseStyle" : "dateNormal";
    const dotStyle = contentStyle==="dataChoose"? "dotChooseStyle":"dot";
    const hourStyle = contentStyle==="dataChoose"? {color:"#000"}:{display:"block"}
 



    
    return (
        <div className={contentStyle}>
            <div className="dateContent">
                <p className={dayStyle}>{day}</p>
                <p className={dateStyle}>{date}</p>
                <div className={dotStyle}></div>
            <p className={hourNumTag} style={hourStyle}>{hour}</p>
            <p  className={hourTag}>hr</p>
            </div>
        </div>
    )
}

export default DateHour
