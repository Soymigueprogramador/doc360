import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import styles from "./FormContainer.module.scss";

export function FormContainer({
    title,
    children,
    saveLabel,
    isSaveDisabled,
    isLoading,
    onReturn,
    onSave,
}) {
    const history = useNavigate();

    return (
        <div className={styles.formContainer}>
            {isLoading && <Loader isLoading={isLoading} />}
            <div className={styles.title}>
                <h4>{title}</h4>
            </div>
            {children}
            <div className={styles.actionButtons}>
                <Button disabled={isSaveDisabled || isLoading} onClick={onSave}>
                    {saveLabel ?? "Guardar"}
                </Button>
                <Button
                    variant="text"
                    onClick={() => (onReturn ? onReturn() : history(-1))}
                >
                    Cancelar
                </Button>
            </div>
        </div>
    );
}
