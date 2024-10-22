import { Icons } from "../Icons/Icons";
import styles from "./TopBar.module.scss";
import { useNavigate } from "react-router-dom";

export function TopBar(props) {
    const history = useNavigate();

    return (
        <div className={styles.topBar}>
            <div className={styles.icon}>
                {props.hasBack && (
                    <div onClick={() => history(-1)}>
                        <Icons icon="backArrow" size={30} />
                    </div>
                )}
                {props.hasMenu && <Icons icon="menu" size={30} />}
            </div>
        </div>
    );
}
