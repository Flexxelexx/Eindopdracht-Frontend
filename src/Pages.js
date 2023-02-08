import React from 'react';
import {Route, Switch} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/Home";
import Visplekken from "./pages/Visplekken/Visplekken";
import Upload from "./pages/Upload/Upload";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden/AlgemeneVoorwaarden";
import Contact from "./pages/Contact/Contact";
import Login from "./components/Login/Login";
import Account from "./pages/Account/Account";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function Pages() {
    return (
        <>
            <Header/>
            <Switch>
            {/*    <ScrollToTop>*/}

                    <Route path="/" exact component={Home}/>

                    <Route path="/fishingspots" exact component={Visplekken}/>

                    <Route path="/upload" exact component={Upload}/>

            {/*        /!*<Route path="/algemene-voorwaarden" exact component={AlgemeneVoorwaarden}/>*!/*/}

            {/*        /!*<Route path="/contact" exact component={Contact}/>*!/*/}

            {/*        /!*<Route path="/login" exact component={Login}/>*!/*/}

            {/*        /!*<Route path="/account" exact component={Account}/>*!/*/}


            {/*    </ScrollToTop>*/}
            </Switch>
            <Footer/>
        </>
    );
}
export default Pages;