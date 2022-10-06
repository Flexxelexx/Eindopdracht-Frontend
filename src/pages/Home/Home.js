import React from "react";
import SideMenuNotLoggedIn from "../../components/SideMenuNotLoggedIn";
import Midinfo from "../../components/Midinfo";
import './Home.css'



function Home() {
    return (
        <>
            <div className="midStrip">

                <SideMenuNotLoggedIn
                />

                <Midinfo
                />

            </div>

        </>
    );
}

export default Home;