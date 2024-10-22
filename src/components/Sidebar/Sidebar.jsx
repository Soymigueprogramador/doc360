import { Button } from "../Button/Button";
import { Icons } from "../Icons/Icons";
import { getMediaQuery } from "../../helpers/browser";
import styles from "./Sidebar.module.scss";
import { useNavigate } from "react-router-dom";

const getIconSize = () => {
    const media = getMediaQuery();

    switch (media) {
        case "small":
            return 64;
        case "medium":
            return 250;
        default:
            return 220;
    }
};

export const SideBar = (props) => {
    const history = useNavigate();

    return (
        <aside className={`${styles.sideBar} ${props.className}`}>
            <div className={styles.brand}>
                <Icons size={getIconSize} color="white" />
                <p>Gestión integral de tu bienestar.</p>
            </div>
            <div className={styles.actionButtons}>
                <Button width={341} height={48} onClick={props.onInit}>
                    Iniciar Sesion
                </Button>
                <Button
                    width={341}
                    height={48}
                    onClick={() => history("/register")}
                >
                    Registrarse
                </Button>
            </div>
        </aside>
    );
};
