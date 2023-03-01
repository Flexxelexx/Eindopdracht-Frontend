import React, {useRef, useState, useEffect, useContext} from "react";
import AuthContext from "../../context/AuthProvider";
import './Login.css'

import axios from "axios";


function LoginComp() {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth', JSON.stringify({user, pwd}),
                {
                    headers: {"Content-Type": 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            setAuth({user, pwd, accessToken})
            setUser('');
            setPwd('');
            setSuccess(true)
        } catch (err) {
if (!err?.response) {
    setErrMsg('No server response');
} else if (err.response?.status === 400) {
    setErrMsg('Missing Username or Password');
} else if (err.response?.status === 401) {
    setErrMsg('Unauthorized');
}   else {
    setErrMsg('SignIn failed');
}
errRef.current.focus();
        }


    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Je bent ingelogd!</h1>
                    <br/>
                    <p>
                        <a href="/">Naar de homepagina</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            className="inputfield"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            className="inputfield"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign in</button>
                    </form>
                    <p>
                        Heb je nog geen account?<br/>
                        <span className="line">
                    <a href="/register">Sign up</a>
                </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default LoginComp;