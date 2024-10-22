import { useContext, useState } from "react";
import { FormContainer } from "../../../components/FormContainer/FormContainer";
import { mapValues, validateField } from "../../../helpers/data";
import { Input } from "../../../components/Input/Input";
import { login } from "../../../services/userServices";
import styles from "./LoginModal.module.scss";
import { UserContext } from "../../../context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const FormFields = {
    email: {
        label: "Email",
        type: "email",
        value: "",
        validation: "^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,})$",
        error: false,
    },
    password: {
        label: "Contraseña",
        type: "password",
        value: "",
        helperText:
            "Utiliza al menos 8 caracteres, combinando letras mayúsculas y minúsculas, números y caracteres especiales (como @, #, $, %).",
        validation:
            "^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$",
        error: false,
    },
};

export function LoginModal({ isOpen, onClose }) {
    const history = useNavigate();
    const [values, setValues] = useState(FormFields);
    const [isLoading, setIsLoading] = useState(false);
    const isSaveDisabled = false;
    const { setUser } = useContext(UserContext);

    async function onLogin() {
        try {
            setIsLoading(true);
            const data = await login({
                password: values["password"].value,
                username: values["email"].value,
            });
            if (data.user_id) {
                setUser({
                    refresh_token: data.refresh,
                    access_token: data.access,
                    user_id: data.user_id,
                    username: data.username,
                });
                history("/clinicHistory");
            }

            setIsLoading(false);
        } catch (e) {
            console.error("Register:error", e);
            setIsLoading(false);
        }
    }

    return (
        <div className={`${styles.loginModal} ${isOpen ? styles.open : ""}`}>
            <FormContainer
                title="Iniciar sesión"
                isLoading={isLoading}
                isSaveDisabled={isSaveDisabled}
                saveLabel="Iniciar sesión"
                onSave={onLogin}
                onReturn={() => onClose()}
            >
                {mapValues(values).map((key) => (
                    <Input
                        key={values[key].label}
                        label={values[key].label}
                        options={values[key].options}
                        type={values[key].type ?? "text"}
                        error={values[key].error}
                        helperText={values[key].helperText}
                        onChange={(e) =>
                            setValues({
                                ...values,
                                [key]: {
                                    ...values[key],
                                    value: e.target.value,
                                    error: validateField(
                                        e.target.value,
                                        values[key].validation
                                    ),
                                },
                            })
                        }
                    />
                ))}
            </FormContainer>
        </div>
    );
}
