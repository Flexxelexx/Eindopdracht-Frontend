import React from "react";
import './Login.css'
import {FaFish} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";


function Login() {


    return (

        <div className='login-grid'>
            <div className="loginFirst">
                <form>
                    <div className="inlog-form">
                        <h5>Om verder te kunnen gaan dien je in te loggen!</h5>
                        <div className="fishLogo"><FaFish/></div>
                        <label>Email</label>
                        <input className='emailInput' type="text" name="uname" placeholder="Vul hier je email in..."
                        />
                        <label>Wachtwoord</label>
                        <input className='emailInput' type="password" name="wachtwoord"
                               placeholder="Vul hier je wachtwoord in..."/>
                        <div className="button-container">
                            <NavLink to='/' className="loginbtns2">Verzenden</NavLink>
                            {/*<button className="loginbtns">Verzenden</button>*/}
                        </div>
                        <div className="button-container">
                            <button className="loginbtns">Wachtwoord vergeten?</button>
                        </div>
                        <div className="button-container">
                            <button className="loginbtns">Nog geen lid? Registreer jezelf!</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;



