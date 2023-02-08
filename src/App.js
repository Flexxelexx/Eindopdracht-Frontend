import React, {useEffect, useRef, useState} from "react";
import useLocalStorage from 'use-local-storage'
import './App.css'
import './components/Navbar/Navbar.module.css'

import Pages from '../src/Pages'

function App() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: donker)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'donker' : 'licht');

    const switchTheme = () => {
        const newTheme = theme === 'donker' ? 'licht' : 'donker';
        setTheme(newTheme)
    }

    return (

        <>
            <Pages/>
        </>
    );

}


export default App;
