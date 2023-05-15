import React from "react";

import "./App.css";
import "./components/Navbar/Navbar.module.css";

import Pages from "../src/Pages";
import { ThemeContextProvider } from "./components/ThemeContext/ThemeContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Pages />
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
