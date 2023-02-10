import React from "react";

import "./App.css";
import "./components/Navbar/Navbar.module.css";

import Pages from "../src/Pages";
import { ThemeContextProvider } from "./components/ThemeContext/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Pages />
      </ThemeContextProvider>
    </>
  );
}

export default App;
