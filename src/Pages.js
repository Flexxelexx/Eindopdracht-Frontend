import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";

import Uploads from "./pages/Uploads/Uploads";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden/AlgemeneVoorwaarden";
import Contact from "./pages/Contact/Contact";
import SignIn from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AdminPortal from "./pages/Admin/AdminLogin";
import Register from "./pages/Register/Register";
import Zoeken from "./pages/Zoeken/Zoeken";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import UserPage from "./pages/UserPage/UserPage";
import OverOns from "./pages/OverOns/OverOns"
import CreateAdmin from "./pages/Admin/CreateAdmin";

function Pages() {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>

                <Route path="/zoeken" exact component={Zoeken}/>

                <Route path="/upload" exact component={Uploads}/>

                <Route path="/account" exact component={Account}/>

                <Route path="/contact" exact component={Contact}/>

                <Route path="/login" exact component={SignIn}/>

                <Route path="/admin" exact component={AdminPortal}/>

                <Route path="/register" exact component={Register}/>

                <Route path="/details/:id" component={DetailsPage}/>

                <Route path="/users/:id" component={UserPage}/>

                <Route path="/algemene-voorwaarden" exact component={AlgemeneVoorwaarden}/>

                <Route path="/over-ons" exact component={OverOns}/>

                <Route path="/beepetiebaapetiebooHowAboutYou" exact component={CreateAdmin}/>

            </Switch>

            <Footer/>
        </>
    );
}

export default Pages;
