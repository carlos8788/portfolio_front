const url_api = import.meta.env.VITE_URL_API;
const url_login = import.meta.env.VITE_URL_LOGIN;
const url_auth = import.meta.env.VITE_URL_AUTH;

export const dataApi = async () => {
    let response = await fetch(url_api)
    let data = await response.json()
    return data
}

export const login = async (data) => {
    let response = await fetch(url_auth, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

            'X-CSRFToken': data.token
        },
        body: JSON.stringify({
            username: data.username,
            password: data.password
        }),
        credentials: 'include'
    })
    let result = await response.json()

    if (result.key) {
        window.location.href = url_login;
    } else {
        console.log('error')
    }
}