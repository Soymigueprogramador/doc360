
export function mapValues(object) {
    return Object.keys(object);
}

export function validateField(value, validation) {
    if (validation === "") return false;

    return !new RegExp(validation).test(value);
}