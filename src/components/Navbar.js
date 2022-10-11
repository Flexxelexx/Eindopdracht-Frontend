import React, {useState} from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "../assets/logo.jpg"

function Navbar() {

    const [click, setClick] = useState(false)

    const [className, setClassName] = useState('header')

    const showNavBar = () => {
        setClassName("header")
    }

    const hideNavBar = () => {
        setClassName("header2")
    }


    return (

        <header className={className}>
            <img className="navLogo" src={logo} alt="logo"/>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/visplekken'>Visplekken</NavLink>
                <NavLink to='/portfolio'>Portfolio</NavLink>
                <NavLink to='/upload'>Upload</NavLink>
                -----------
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={hideNavBar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar;