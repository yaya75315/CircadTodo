import React from 'react'
import calenderIcon from '../public/images/calender-n.svg'
import '../public/css/navBar.css'

const NavBar = () => {
    console.log("NavBar");
    const title = 'Today';
    return (
        <div className="navBar">
            <h1>{title}</h1>
            <a href="###"><img src={calenderIcon} alt="icon"/></a>
        </div>
    )
}

export default NavBar
