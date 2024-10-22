import { Icons } from "../Icons/Icons";
import styles from "./Footer.module.scss";

export const Footer = (props) => {
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

    return (
        <footer className={`${styles.footer} ${props.className}`}>
            <div className={styles.brand}>
                <Icons size={getIconSize} color="white" />
                <p>Gestión integral de tu bienestar.</p>
            </div>
            <div className={styles.contact}>
                <p>Contactanos</p>
                <div className={styles.logos}>
                    <Icons icon="twitter" size={getIconSize} color="white" />
                    <Icons icon="instagram" size={getIconSize} color="white" />
                    <Icons icon="facebook" size={getIconSize} color="white" />
                </div>
            </div>
        </footer>
    );
};