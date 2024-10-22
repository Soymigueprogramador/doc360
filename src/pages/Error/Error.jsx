import { Button } from "../../components/Button/Button";
import { Icons } from "../../components/Icons/Icons";
import styles from "./Error.module.scss";
import { useNavigate } from "react-router-dom";

export function ErrorPage(props) {
    const history = useNavigate();

    return (
        <div className={styles.error}>
            <div className={styles.illustrations}>
                <Icons
                    className={styles.number}
                    icon={props.error === 404 ? "error404" : "error500"}
                />
                <Icons
                    className={styles.image}
                    icon={props.error === 404 ? "image404" : "image500"}
                />
            </div>
            <p className={styles.label}>{props.label}</p>
            <Button onClick={() => history("/")}>Volver al inicio</Button>
        </div>
    );
}
