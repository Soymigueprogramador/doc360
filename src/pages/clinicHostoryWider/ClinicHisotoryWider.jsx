import styles from "./ClinicHistoryWider.module.scss";
import { Footer } from "../../components/Footer/Footer";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import { TopBar } from "../../components/TopBar/TopBar";
import {mapValues } from "../../helpers/data";
import {Icons} from "../../components/Icons/Icons";
import {CommentItem } from "./CommentItem/CommentItem";
import {ModalForm} from "./ModalForm/ModalForm";
import {FileUpload} from "../../components/FileUpload/FileUpload";
import {useState} from "react";


export const ClinicHistoryWider= ()=>{

  const FormFields = {
    name: {
        label: "Nombre del profesional",
        type: "text",
        value: "",

    },
   specialty: {
        label: "Especialidad",
        type: "text",
        value: "",

    },
    consultationDate: {
        label: "Fecha de la consulta",
        type: "date",
        value: "",

    },
    diagnosis: {
        label: "Diagnóstico",
        type: "textarea",
        value: "",

    },
    treatment: {
        label: "Tratamiento",
        type: "textarea",
        value: "",

    },
    Comment: {
        label: "Comentario",
        type: "textarea",
        value: "",

    },
};

const articles = [
        { date: '25/05/2024', description: 'Marcelo Perez ha agregado un nuevo documento' },
        { date: '25/05/2024', description: 'Marcelo Perez ha agregado un nuevo documento' },
        { date: '25/05/2024', description: 'Marcelo Perez ha agregado un nuevo documento' },
];

const [isModalOpen, setIsModalOpen] = useState(false);
const [values, setValues] = useState(FormFields);
const [isLoading, setIsLoading] = useState(false);
const isSaveDisabled = false;

const openModal = () => {
  setIsModalOpen(true);
};
const closeModal = () => {
  setIsModalOpen(false);
};

async function saveDiagnostic() {}

  
return (
    <>
    <TopBar hasBack />
    <div className={styles.section}>
        <FormContainer
            title="Diagnostico"
            isLoading={isLoading}
            isSaveDisabled={isSaveDisabled}
            saveLabel="Guardar"
            onReturn={() => onClose()}
        >
            <>
                <div className={styles.form_container} >
                    {mapValues(values).map((key) => (
                        <Input
                            key={values[key].label}
                            label={values[key].label}
                            type={values[key].type ?? "text"}
                            onChange={(e) =>
                                    setValues({
                                        ...values,
                                        [key]: {
                                            ...values[key],
                                            value: e.target.value,
                                        },
                                    })
                                }
                            />
                
                        ))}
                </div>
                <div className={styles.btn_carga}>
                        <div className={styles.fileUpload} >
                        <FileUpload 
                            icon={
                                <Icons 
                                    icon="document" 
                                    size={36} 
                                    color="green"  
                                />} 
                            size={60}
                            
                        />
                        </div>
                        <div className={`${styles.modal} ${isModalOpen ? styles.modal_open : ""}`}>
                            <Button 
                                onClick={openModal}
                                width={60} 
                                height={60}
                            >
                                <Icons
                                    icon="comment"
                                    size={33}  
                                />
                            </Button>
                            {isModalOpen && (
                                <ModalForm 
                                    onClose={closeModal}
                                >
                                <Input type="textarea"/>
                                </ModalForm>
                            )}
                        </div>
                    </div>
            </>
        </FormContainer>

        <div className={styles.article}>
            <div className={styles.article_title}>
                <h3>Historial</h3>
            </div>
            {articles.map((item, index) => (
                <CommentItem 
                key={index} 
                date={item.date} 
                description={item.description} />
            ))}
        </div>

        </div>
     <Footer />
   
    </>
)
}