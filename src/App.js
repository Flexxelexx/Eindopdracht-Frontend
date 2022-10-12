import React from "react";
import {Switch, Route} from "react-router-dom";

import './App.css';


import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Upload from "./pages/Upload";
import Visplekken from "./pages/Visplekken";

import Navbar from "./components/Navbar"


function App() {


    return (

        <>
            <div className="outer-container">

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

                    <footer>❌TYPFEAUXTEN VOORBEHEAUXDEN❌</footer>

                </div>

            </div>
        </>
    );

}


export default App;
