import React, {useEffect, useRef, useState} from "react";
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import useLocalStorage from 'use-local-storage'
import decode from 'jwt-decode';

import './App.css';
import './components/Navbar/Navbar.css'

import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Upload from "./pages/Upload/Upload";
import Visplekken from "./pages/Visplekken/Visplekken";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden/AlgemeneVoorwaarden"
import AdminPortal from "./pages/Admin/Admin";
import Contact from "./pages/Contact/Contact";

import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./components/Dropdown";



function App() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: donker)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'donker' : 'licht');

    const switchTheme = () => {
        const newTheme = theme === 'donker' ? 'licht' : 'donker';
        setTheme(newTheme)
    }

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        try {
            decode(token);
            decode(refreshToken);
            console.log([decode(token), decode(refreshToken)])
            return true;
        } catch (error) {
            return false;
        }
    }

    function PrivateRoute({component: Component, ...rest}) {
        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated() ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                            }}
                        />
                    )
                }
            />
        );
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
                    > {theme === 'donker' ? 'Donker' : 'Licht'} thema
                    </button>
                    <Navbar/>


                    <Switch>
                        <ScrollToTop>

                            <Route path="/" exact component={Home}>

                            </Route>
                            <PrivateRoute path="/visplekken" exact component={Visplekken}>

                            </PrivateRoute>
                            <PrivateRoute path="/portfolio" exact component={Portfolio}>

                            </PrivateRoute>
                            <PrivateRoute path="/upload" exact component={Upload}>
                            </PrivateRoute>

                            <Route path="/algemene-voorwaarden" exact component={AlgemeneVoorwaarden}/>

                            <Route path="/contact" exact component={Contact}/>

                            <Route path="/login" exact component={Login}/>


                        </ScrollToTop>
                    </Switch>

                    <footer>

                        <p>Alex Kooij - Eindopdracht Novi Fullstack Bootcamp 2022™</p>
                    </footer>

                </div>
            </div>

        </>
    );

}


export default App;
