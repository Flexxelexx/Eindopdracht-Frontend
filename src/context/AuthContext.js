import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    username: null,
    status: "pending",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);

      fetchUserData(decodedToken.sub, token);
    } else {
      setAuth({
        ...auth,
        status: "done",
      });
    }
  }, []);

  async function fetchUserData(username, token) {
    try {
      const response = await axios.get(
        `http://localhost:8080/users/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const roleResponse = await axios.get(
        `http://localhost:8080/roles/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAuth({
        ...auth,
        isAuth: true,
        status: "done",
        user: {
          email: response.data.email,
          username: response.data.username,
          accountID: response.data.id,
          rolename: roleResponse.data[0].rolename,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  function login(token) {
    console.log(token);

    localStorage.setItem("token", token);

    const decodedToken = jwtDecode(token);
    console.log("decoded token:", decodedToken);

    fetchUserData(decodedToken.sub, token);

    console.log("Gebruiker is ingelogd!");
  }

  function logout() {
    setAuth({
      ...auth,
      isAuth: false,
      user: null,
    });

    localStorage.clear();
    console.log("Gebruiker is uitgelogd!");
  }

  const contextData = {
    isAuthenticated: auth.isAuth,
    user: auth.user,
    loginFunction: login,
    logoutFunction: logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {auth.status === "done" ? children : <p>Loading...</p>}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
