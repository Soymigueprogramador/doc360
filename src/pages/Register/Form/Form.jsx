import { useState } from "react";
import styles from "./Form.module.scss";
import { mapValues, validateField } from "../../../helpers/data";
import { Input } from "../../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { register } from "../../../services/userServices";
import momment from "moment";
import { FormContainer } from "../../../components/FormContainer/FormContainer";

function checkField(values, key, currentValue) {
    switch (key) {
        case "password_1":
            if (currentValue === values["password"].value) {
                return validateField(
                    currentValue,
                    values["password"].validation
                );
            }

            return true;
        case "nacimiento":
            const diference = momment(momment()).diff(
                momment(currentValue),
                "years"
            );
            return diference >= 18 ? false : true;

        default:
            return validateField(currentValue, values[key].validation);
    }
}

export function Form({ title, fields }) {
    const history = useNavigate();
    const [values, setValues] = useState(fields);
    const [isLoading, setIsLoading] = useState(false);
    const isSaveDisabled =
        Object.keys(values).filter((k) => values[k].error).length > 0 ||
        Object.keys(values).filter((k) => values[k].value === "").length > 0;

    async function onSave() {
        try {
            setIsLoading(true);
            await register({
                password: values["password"].value,
                username: values["email"].value,
                first_name: values["nombre"].value,
                last_name: values["apellido"].value,
                user_country: values["pais"].value,
                id_nationality: values["dni"].value,
                date_birth: values["nacimiento"].value,
            });
            history("/");
            setIsLoading(false);
        } catch (e) {
            console.error("Register:error", e);
            setIsLoading(false);
        }
    }

    return (
        <FormContainer
            title={title}
            isSaveDisabled={isSaveDisabled}
            isLoading={isLoading}
            onSave={onSave}
        >
            <form className={styles.form}>
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
                                    error: checkField(
                                        values,
                                        key,
                                        e.target.value
                                    ),
                                },
                            })
                        }
                    />
                ))}
            </form>
        </FormContainer>
    );
}
