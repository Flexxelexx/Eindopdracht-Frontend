import React from 'react';
import './Navigation.css';

function Navigation({name}) {

const logClick = () => {
    console.log({name}.name)
}

    return (
            <li>
                <button className="navibuttons" onClick={logClick}>{name}</button>
            </li>
        );
}

export default Navigation;