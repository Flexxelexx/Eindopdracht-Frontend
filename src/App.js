import React, {useEffect, useRef, useState} from "react";
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import useLocalStorage from 'use-local-storage'
import decode from 'jwt-decode';
import { MdDarkMode } from 'react-icons/md';
import {BsFillSunFill} from 'react-icons/bs';
import './App.css';
import './components/Navbar/Navbar.css'

import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Upload from "./pages/Upload/Upload";
import Visplekken from "./pages/Visplekken/Visplekken";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden/AlgemeneVoorwaarden"
import AdminPortal from "./pages/Admin/Admin";
import Contact from "./pages/Contact/Contact";
import Account from "./pages/Account/Account";

import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import ScrollToTop from "./components/ScrollToTop";




function App() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: donker)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'donker' : 'licht');

    const switchTheme = () => {
        const newTheme = theme === 'donker' ? 'licht' : 'donker';
        setTheme(newTheme)
    }

    return (

        <>
            <div className='admin-portal'>
                <Route path="/admin" exact component={AdminPortal}/>
            </div>
            <div className="outer-container" data-theme={theme}>



                <div className="inner-container">

                    <button
                        className='themebtn'
                        onClick={switchTheme}
                    > {theme === 'donker' ? <BsFillSunFill /> : <MdDarkMode />}
                    </button>
                    <Navbar/>


                    <Switch>
                        <ScrollToTop>

                            <Route path="/" exact component={Home}>

                            </Route>
                            <Route path="/visplekken" exact component={Visplekken}>

                            </Route>
                            <Route path="/portfolio" exact component={Portfolio}>

                            </Route>
                            <Route path="/upload" exact component={Upload}>
                            </Route>

                            <Route path="/algemene-voorwaarden" exact component={AlgemeneVoorwaarden}/>

                            <Route path="/contact" exact component={Contact}/>

                            <Route path="/login" exact component={Login}/>

                            <Route path="/account" exact component={Account}/>


                        </ScrollToTop>
                    </Switch>

                    <footer>
                        <NavLink to='/algemene-voorwaarden'>Algemene Voorwaarden</NavLink>
                        <a>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</a>
                        <p>Alex Kooij - Eindopdracht Novi Fullstack Bootcamp 2022™</p>
                    </footer>

                </div>
            </div>

        </>
    );

}


export default App;
