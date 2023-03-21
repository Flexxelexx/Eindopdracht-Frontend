import {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });

    useEffect(() => {
        console.log('De context is zojuist opnieuw opgestart!');
        // is er een token?
        const token = localStorage.getItem('token');
        console.log(token);


        if (token) {

            const decodedToken = jwtDecode(token);

            fetchUserData(decodedToken.sub, token);
        } else {

            setAuth({
                ...auth,
                status: 'done',
            });
        }
    }, []);


    async function fetchUserData(jwt, username) {
        try {
            const response = await axios.get(`http://localhost:8080/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}`,
                }
            })

            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id
                }
            })
        } catch (e) {
            console.error(e)
        }
    }

    function login(jwt) {
        console.log(jwt)

        localStorage.setItem('token', jwt);

        const decodedToken = jwtDecode(jwt);
        console.log('decoded token:', decodedToken);


        fetchUserData(decodedToken.sub, jwt);


        console.log('Gebruiker is ingelogd!');

    }


    function logout() {
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
        });

        localStorage.clear();
        console.log('Gebruiker is uitgelogd!');
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        status: auth.status,
        loginF: login,
        logoutF: logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
