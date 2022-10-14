import React, {useEffect, useRef, useState} from "react";
import {Switch, Route} from "react-router-dom";
import useLocalStorage from 'use-local-storage'

import './App.css';


import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Upload from "./pages/Upload";
import Visplekken from "./pages/Visplekken";

import Navbar from "./components/Navbar"


function App() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: donker)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'donker' : 'licht');

    const switchTheme = () => {
        const newTheme = theme === 'licht' ? 'donker' : 'licht';
        setTheme(newTheme)
    }

    return (

        <>
            <div className="outer-container" data-theme={theme}>

                <button
                    className='themebtn'
                    onClick={switchTheme}
                > Klik hier voor {theme === 'licht' ? 'donker' : 'licht'} thema
                </button>

                <div className="inner-container">



                    <Navbar/>

                    <Switch>

                        <Route path="/" exact component={Home}>

                        </Route>
                        <Route path="/visplekken" exact component={Visplekken}>

                        </Route>
                        <Route path="/portfolio" exact component={Portfolio}>

                        </Route>
                        <Route path="/upload" exact component={Upload}>
                        </Route>

                    </Switch>

                    <footer>Alex Kooij - Eindopdracht Novi Fullstack Bootcamp 2022™</footer>

                </div>
            </div>

        </>
    );

}


export default App;
