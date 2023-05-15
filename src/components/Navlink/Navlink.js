import {NavLink} from "react-router-dom";
import styles from "./Navlink.module.css"


function Navlink({value, page, symbol, onclick}) {

    return (

            <NavLink
                to={page}
                className={styles.navbuttons}
                onClick={onclick}
            >
                <i className={symbol} />
                {value}
            </NavLink>

    )

}


export default Navlink;