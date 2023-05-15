import styles from "./Card.module.css";
import {useContext} from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

function Card({children}) {

    const { boxjes } = useContext(ThemeContext);


    return (

            <div style={{ WebkitBoxShadow: boxjes }} className={styles.welkom}>
            {children}
            </div>

    )

}

export default Card;