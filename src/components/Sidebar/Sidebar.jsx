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

export const SideBar = ({
  className,
  onInit,
  menu = [],
  actions = [],
  children,
}) => {
  const navigate = useNavigate();

  return (
    <aside className={`${styles.sideBar} ${className ?? ""}`}>
      <div className={styles.brand}>
        <Icons size={getIconSize()} color="white" />
        <p>Gestión integral de tu bienestar.</p>
      </div>

      {/* MENÚ */}
      {menu.length > 0 && (
        <nav className={styles.menu}>
          {menu.map((item) => (
            <button
              key={item.label}
              className={styles.menuItem}
              onClick={() => navigate(item.to)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      {/* CONTENIDO PERSONALIZADO */}
      {children && (
        <div className={styles.customContent}>
          {children}
        </div>
      )}

      {/* ACCIONES */}
      <div className={styles.actionButtons}>
        {actions.length > 0 ? (
          actions.map((action, index) => (
            <Button
              key={index}
              width={341}
              height={48}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))
        ) : (
          <>
            <Button width={341} height={48} onClick={onInit}>
              Iniciar Sesión
            </Button>
            <Button
              width={341}
              height={48}
              onClick={() => navigate("/register")}
            >
              Registrarse
            </Button>
          </>
        )}
      </div>
    </aside>
  );
};
