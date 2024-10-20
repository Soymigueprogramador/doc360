
import styles from "./Header.module.scss";
import { useState } from "react";
import { Icons } from "../Icons/Icons";
import { Button } from "../Button/Button";
import { Dropdown } from "./Dropdown/Dropdown";

export const Header = ({
  name = "Melania Palomino",
  isEditable = true,
  hasSearch = false,
  ...props
}) => {

  const [showEditDropdown, setShowEditDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const editOptions = [
    { label: 'Subir Foto', action: () => console.log('Subir Foto') },
    { label: 'Eliminar Foto Actual', action: () => console.log('Eliminar Foto Actual') },
    { label: 'Cancelar', action: () => setShowEditDropdown(false) },
  ];

  const settingsOptions = [
    { label: 'Editar Perfil', path: '/editar-perfil' },
    { label: 'Cerrar Sesión', path: '/cerrar-sesion' },
    { label: 'Ayuda', path: '/ayuda' },
  ];
  function getInitials(names) {
    return names
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  }

  const toggleEditDropdown = () => {
    setShowEditDropdown(!showEditDropdown);
    setShowSettingsDropdown(false);
  };

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
    setShowEditDropdown(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.user_actions}>
        <div className={styles.user_info}>
          <div className={styles.user_initials}>
            {getInitials(name)}
            {isEditable && (
              <div className={styles.edit_icon} onClick={toggleEditDropdown}>
                <Icons icon="edit" size={24} color="#222121" />
              </div> 

            )}
            {showEditDropdown && <Dropdown options={editOptions} onClose={() => setShowEditDropdown(false)} />}
          </div>
          <span>{name}</span>
        </div>
      </div>
      {hasSearch ? (
        <div className={styles.search_bar}>
          <input
            className={styles.search}
            type="text"
            placeholder="Buscar..."
          />
          <div className={styles.icon}>
            <Icons icon="search" size={24} color="#222121" />
          </div>
        </div>
      ) :  (
        <div className={styles.settings}>
          <Button
            variant="text"
            width={66}
            height={57}
            onClick={toggleSettingsDropdown}
          >
            <Icons icon="setting" size={43.75} color="#222121" />
          </Button>
          {showSettingsDropdown && <Dropdown options={settingsOptions} onClose={() => setShowSettingsDropdown(false)} />}
        </div>
      )}
    </header>
  );
};
