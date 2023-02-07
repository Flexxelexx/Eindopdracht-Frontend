import React, {useState} from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import {GiFishCorpse} from "react-icons/gi"
import origineellogoPNG from "../../assets/origineelLogoPNG.png"
import Dropdown from "../Dropdown";
import SearchBar from "../SearchBar/SearchBar";
import {BsFillSunFill} from "react-icons/bs";
import {MdDarkMode} from "react-icons/md";
import useLocalStorage from "use-local-storage";



function Navbar() {

    const [className, setClassName] = useState('header')

    const showNavBar = () => {
        setClassName("header")
    }

    const hideNavBar = () => {
        setClassName("header2")
    }

    const defaultDark = window.matchMedia('(prefers-color-scheme: donker)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'donker' : 'licht');

    const switchTheme = () => {
        const newTheme = theme === 'donker' ? 'licht' : 'donker';
        setTheme(newTheme)
    }

    return (


        <header className={className}>
            <img className="navLogo" src={origineellogoPNG} alt="logo" />
            <nav>
                <div className='smallDropdown'>
                    <img className="navLogoDropdown" src={origineellogoPNG} alt="logo"/>

                    <button
                        className='themebtn'
                        onClick={switchTheme}
                    > {theme === 'donker' ? <BsFillSunFill /> : <MdDarkMode />}
                    </button>

                    <NavLink to='/' onClick={showNavBar}>Home</NavLink>
                    <NavLink to='/visplekken' onClick={showNavBar}>Visplekken</NavLink>
                    <NavLink to='/portfolio' onClick={showNavBar}>Portfolio</NavLink>
                    <NavLink to='/upload' onClick={showNavBar}>Upload</NavLink>
                    <NavLink to='/account' onClick={showNavBar}>Account</NavLink>
                    <NavLink to='/contact' onClick={showNavBar}>Contacteer Ons</NavLink>
                    <NavLink to='/secret' className='secret' onClick={showNavBar}><GiFishCorpse/></NavLink>
                    <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                        <FaTimes/>
                    </button>
                </div>
                {/*<div className='dropdownRight'>*/}
                {/*    <Dropdown/>*/}
                {/*</div>*/}
            </nav>
            <button className='nav-btn' onClick={hideNavBar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar;