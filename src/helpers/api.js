const url_api = import.meta.env.VITE_URL_API;
export const dataApi = async () => {
    let response = await fetch(url_api)
    let data = await response.json()
    return data
} 