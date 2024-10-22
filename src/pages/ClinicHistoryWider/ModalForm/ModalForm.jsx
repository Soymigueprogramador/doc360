import styles from "./ModalForm.module.scss";
import {FormContainer} from "../../../components/FormContainer/FormContainer"

export const ModalForm=({ children})=>{
    return (
    <div className={styles.modal_overlay}>
        <FormContainer
            title="Comentario"
            saveLabel="Guardar"
            
        >
            {children}
        </FormContainer>
    </div>

    )
}