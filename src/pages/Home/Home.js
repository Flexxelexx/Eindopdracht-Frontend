import Navigation from "../../components/Navigation";
import logo from "../../assets/logo.jpg";
import SideMenuNotLoggedIn from "../../components/SideMenuNotLoggedIn";
import Midinfo from "../../components/Midinfo";
import './Home.css'

function Home() {
    return (
        <>
            <div className="inner-container">
                <nav>
                    <img className="logo" src={logo} alt="Logo"/>
                    <ul>
                        <Navigation
                            name={"🏡  Home"}
                        />
                        <Navigation
                            name={"🎣  Visplekken"}
                        />
                        <Navigation
                            name={"📖  Portfolio"}
                        />
                        <Navigation
                            name={"🐠  Upload"}
                        />
                    </ul>
                </nav>

                <div className="midStrip">

                    <SideMenuNotLoggedIn
                    />

                    <Midinfo
                    />

                </div>
            </div>
        </>
    );
}

export default Home;