import React, {useEffect} from "react";

import './Admin.css'

import {NavLink} from "react-router-dom";




function AdminPortal() {

    useEffect(() => {
        document.title = "Admin Portal";
    }, []);


    return (

        <div className="admin-form">
            <h5>Admin dashboard</h5>
            <label>Name</label>
            <input className='formInput' type="text"/>
            <label>PW</label>
            <input className='formInput' type="password"/>
            <div className="button-container">
                <NavLink to='/' className="loginbtns2">Send</NavLink>
            </div>
        </div>

    )
}

export default AdminPortal;