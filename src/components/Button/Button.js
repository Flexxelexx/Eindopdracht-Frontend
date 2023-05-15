import styles from "./Button.module.css"

function Button({value, clickHandler}) {

    return (

        <button
            type="submit"
            className={styles.buttoncontainer}
            onClick={clickHandler}
        >
            {value}
        </button>
    )
}

export default Button;