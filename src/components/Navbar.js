import React, {useState} from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import {GiFishCorpse} from "react-icons/gi"
import logo from "../assets/logo.jpg"
import navlogotop from "../assets/navlogotop.jpg"
import origineellogoPNG from "../assets/origineelLogoPNG.png"


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
            <img className="navLogo" src={origineellogoPNG} alt="logo"/>
            <nav>
                <img className="navLogoDropdown" src={origineellogoPNG} alt="logo"/>
                <NavLink to='/' onClick={showNavBar}>Home</NavLink>
                <NavLink to='/visplekken' onClick={showNavBar}>Visplekken</NavLink>
                <NavLink to='/portfolio' onClick={showNavBar}>Portfolio</NavLink>
                <NavLink to='/upload' onClick={showNavBar}>Upload</NavLink>
                <NavLink to ='/secret' className='secret' onClick={showNavBar}><GiFishCorpse/></NavLink>
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