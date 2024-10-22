import styles from "./Button.module.scss";

export const Button = (props) => {
    return (
        <button
            className={`${styles.button} ${
                props.variant ? styles[props.variant] : ""
            }`}
            disabled={props.disabled}
            style={{ width: `${props.width}px`, height: `${props.height}px` }}
            {...props}
        >
            {props.children}
        </button>
    );
};
