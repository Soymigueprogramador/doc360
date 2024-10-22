import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Icons } from "../../components/Icons/Icons";
import { SideBar } from "../../components/Sidebar/Sidebar";
import styles from "./home.module.scss";
import { useState } from "react";
import { LoginModal } from "./LoginModal/LoginModal";

export const Home = (props) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const history = useNavigate();

    return (
        <div className={styles.home}>
            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />
            <div className={styles.content}>
                <SideBar onInit={() => setIsLoginOpen(true)} />
                <article className={styles.article}>
                    <p className={styles.lead}>
                        Doc360 brinda a los usuarios la posibilidad de tener un
                        seguimiento de su historia clinica.
                    </p>
                    <Icons className={styles.icon} icon="home" />
                    <p className={styles.description}>
                        Disponible para todos los dispositivos.
                    </p>
                    <div className={styles.actionButtons}>
                        <Button
                            width={300}
                            height={40}
                            onClick={() => setIsLoginOpen(true)}
                        >
                            Iniciar sesión
                        </Button>
                        <Button
                            width={300}
                            height={40}
                            onClick={() => history("/register")}
                        >
                            Registrarse
                        </Button>
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    );
};
