import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import './Menu.css';

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
                Support
            </div>
            <div className={setClassNames(1)}
                 onClick={() => pushToRoute("/algemene-voorwaarden")}>
                Algemene voorwaarden
            </div>
            <div className={setClassNames(2)}
                 onClick={() => pushToRoute("/contact")}>
                Contacteer ons
            </div>
            <div className={setClassNames(3)}
                 onClick={() => pushToRoute("/secret")}>
                Huh?!
            </div>
        </div>
    );
}

export default withRouter(Dropdown);