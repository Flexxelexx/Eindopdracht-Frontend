import React, {useState, useContext} from "react";
import './Login.css'

import axios from "axios";
import {AuthContext} from "../AuthContext/AuthContext";


function LoginComp() {

    const [ username, setUsername ] = useState( "" )
    const [ password, setPassword ] = useState( "" )

    const { login } = useContext( AuthContext )

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8080/login',{
                username: username,
                password: password,
            })
            console.log(response.data)
            login(response.data.token)
        } catch ( e ) {
            console.error( e )
        }
    }


    return (
        <main className="container">
            <h1>Login</h1>
            <form onSubmit={ handleLogin }>
                <input placeholder="Username" type="username" value={ username } onChange={ e => setUsername( e.target.value ) }/>
                <input placeholder="Password" type="password" value={ password } onChange={ e => setPassword( e.target.value ) }/>
                <button type="submit">Login</button>
            </form>
        </main>
    );
}

export default LoginComp;