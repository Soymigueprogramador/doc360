export async function fetchApi(url, method, body) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${url}`,
        options
    );

    if (!response.ok) {
        throw await response.json();
    }

    return await response.json();
}