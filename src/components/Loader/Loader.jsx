import styles from "./Loader.module.scss";

export function Loader({ isLoading }) {
    return (
        <div
            className={`${styles.loader} ${isLoading ? styles.isVisible : ""}`}
        >
            <div className={styles.spinner}></div>
        </div>
    );
}
