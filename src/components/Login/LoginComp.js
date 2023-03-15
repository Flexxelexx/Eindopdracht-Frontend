import React, {useState, useContext} from "react";
import './Login.css'

import axios from "axios";
import {AuthContext} from "../AuthContext/AuthContext";


function LoginComp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", {
                username: username,
                password: password,
            });

            console.log(response.data);
            login(response.data);
            setIsLoggedIn(true);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <main className="container">
            {isLoggedIn ? (
                <div>
                    <h1>Welcome, {username}!</h1>
                    <p>You are logged in.</p>
                </div>
            ) : (
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            placeholder="Username"
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
        </main>
    );
}

export default LoginComp;
