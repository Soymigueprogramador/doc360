import { fetchApi } from "../helpers/api";

export async function register(body) {
    const url = `auth/users`;

    const response = await fetchApi(url, "POST", body);

    return response;
}

export async function login(body) {
    const url = "api/token";

    const response = await fetchApi(url, "POST", body);

    return response;
}