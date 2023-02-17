import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Visplekken from "./pages/Visplekken/Visplekken";
import Upload from "./pages/Upload/Upload";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden/AlgemeneVoorwaarden";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AdminPortal from "./pages/Admin/Admin";
import Register from "./pages/Register/Register";
import Vangsten from "./pages/Vangsten/Vangsten";
import Vissen from "./pages/Vissen/Vissen";
import Zoeken from "./pages/Zoeken/Zoeken";

function Pages() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/zoeken" exact component={Zoeken} />

        <Route path="/visplekken" exact component={Visplekken} />

        <Route path="/vangsten" exact component={Vangsten} />

        <Route path="/vissen" exact component={Vissen} />

        <Route path="/upload" exact component={Upload} />

        <Route path="/account" exact component={Account} />

        <Route path="/contact" exact component={Contact} />

        <Route path="/login" exact component={Login} />

        <Route path="/admin" exact component={AdminPortal} />

        <Route path="/register" exact component={Register} />

        <Route
          path="/algemene-voorwaarden"
          exact
          component={AlgemeneVoorwaarden}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default Pages;
