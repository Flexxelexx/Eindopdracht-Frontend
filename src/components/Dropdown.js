import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import './Menu.css';

import {AiFillCaretDown} from 'react-icons/ai'

const Dropdown = props => {

    const [openMenu, setOpenMenu] = useState(false)

    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) {
            classArr.push(`open-${num}`)
        return classArr.join(' ')
        } else if (!openMenu) {
            classArr.push(`close-${num}`)
            return classArr.join(' ')
        }
    }

    const pushToRoute = route => {
        props.history.push(route)
        setOpenMenu(false)
    }

    return (
        <div className="Menu">
            <div className={"m-item m-logo"}
                 onClick={() => setOpenMenu(!openMenu)}>
                Menu <AiFillCaretDown/>
            </div>
            <div className={setClassNames(1)}
                 onClick={() => pushToRoute("/")}>
                Home
            </div>
            <div className={setClassNames(2)}
                 onClick={() => pushToRoute("/visplekken")}>
                Visplekken
            </div>
            <div className={setClassNames(3)}
                 onClick={() => pushToRoute("/portfolio")}>
                Portfolio
            </div>
            <div className={setClassNames(4)}
                 onClick={() => pushToRoute("/upload")}>
                Upload
            </div>
            <div className={setClassNames(5)}
                 onClick={() => pushToRoute("/account")}>
                Account
            </div>
            <div className={setClassNames(6)}
                 onClick={() => pushToRoute("/algemene-voorwaarden")}>
                Algemene Voorwaarden
            </div>
            <div className={setClassNames(6)}
                 onClick={() => pushToRoute("/contact")}>
                Contacteer ons
            </div>
        </div>
    );
}

export default withRouter(Dropdown);