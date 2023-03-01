import React, {useEffect} from "react";
import "./Login.module.css";
import styles from "./Login.module.css";

import LoginComp from "../../components/Login/LoginComp";

function SignIn() {


    useEffect(() => {
        document.title = "SignIn";
    }, []);


    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.formposition}>
                <LoginComp/>
            </div>
        </div>
    );
}

export default SignIn;
