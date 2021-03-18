import React from 'react'
import '../public/css/weekCalender.css'
import '../public/css/common.css'
import DateHour from './DateHour'
import DateWork from './DateWork'

const WeekCalender = () => {
    console.log("WeekCalender");


    return (
        <div className="weekCalender">
        <div className="container">
            <p>December</p>
            <div className="dayWeek">
            <DateHour day={'S'} date={12} hour={0}/>
            <DateHour day={'M'} date={13} hour={3}/>
            <DateHour day={'T'} date={14} hour={2}/>
            <DateHour day={'W'} date={15} hour={2}/>
            <DateHour day={'T'} date={16} hour={2}/>
            <DateHour day={'F'} date={17} hour={3}/>
            <DateHour day={'S'} date={18} hour={0}/>
            </div>
            </div>
             <div className="dayWork">
             <div className="marginSpace"></div>
                 <DateWork/>
                 <DateWork/>
             </div>
        </div>
    )
}

export default WeekCalender
