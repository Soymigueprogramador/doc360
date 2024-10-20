import { useState } from "react";
import { Icons } from "../Icons/Icons";
import styles from "./Input.module.scss";

function getFormIcon(type) {
    switch (type) {
        default:
            return "downArrow";
    }
}

export const Input = ({
    label,
    type,
    options,
    value,
    error,
    helperText,
    onChange,
}) => {
    const [changePasswordView, setChangePasswordView] = useState(false);

    return (
        <div className={styles.input}>
            <label htmlFor={label} className={styles.label}>
                {label}
            </label>
            <div
                className={`${styles.field} ${
                    type === "textarea" ? styles.textarea : ""
                } ${error ? styles.error : ""}`}
            >
                {type !== "select" ? (
                    <>
                        <input
                            id={label}
                            className={styles.content}
                            type={
                                type === "password"
                                    ? changePasswordView
                                        ? "text"
                                        : "password"
                                    : type
                            }
                            value={value}
                            onChange={onChange}
                        />
                        {type === "password" && (
                            <div
                                onClick={() =>
                                    setChangePasswordView(!changePasswordView)
                                }
                            >
                                <Icons
                                    className={styles.icon}
                                    size={18}
                                    icon={
                                        changePasswordView
                                            ? "password"
                                            : "passwordVisible"
                                    }
                                />
                            </div>
                        )}
                    </>
                ) : (
                    <select
                        id={label}
                        className={styles.content}
                        value={value}
                        onChange={onChange}
                    >
                        {options.map((option) => (
                            <option key={option.label} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            {helperText && <p className={styles.helperText}>{helperText}</p>}
        </div>
    );
};