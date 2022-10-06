import React from "react";
import {Switch, Route, NavLink} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import logo from "./assets/logo.jpg";
import burgervis from "./assets/burgervis.png"
import './components/Navigation.css'
import Portfolio from "./pages/Home/Portfolio";
import Upload from "./pages/Home/Upload";
import Visplekken from "./pages/Home/Visplekken";

function App() {
    return (
        <>
            <div className="outer-container">

                <div className="inner-container">


                    <nav>
                        <img className="logo" src={logo} alt="Logo"/>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    <button className="navibuttons">🏡 Home</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/visplekken">
                                    <button className="navibuttons">🎣 Visplekken</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio">
                                    <button className="navibuttons">📖 Portfolio</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/upload">
                                    <button className="navibuttons">🐠 Upload</button>
                                </NavLink>
                            </li>
                        </ul>

                        <div className="hamburgerVisible">
                            <button className="hamburger">

                                <img className="burgervis" src={burgervis} alt="burgervis"/>

                                <li>MENU</li>
                            </button>
                        </div>

                    </nav>

                    <Switch>

                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="visplekken">
                            <Visplekken/>
                        </Route>
                        <Route path="portfolio">
                            <Portfolio/>
                        </Route>
                        <Route path="upload">
                            <Upload/>
                        </Route>

                    </Switch>

                </div>
                <footer>❌TYPFEAUXTEN VOORBEHEAUXDEN❌</footer>
            </div>
        </>
    );
}

export default App;
