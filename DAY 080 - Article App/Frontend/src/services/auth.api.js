import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
});

export async function login(email, password) {
    const response = await api.post("/login", {
        email,
        password
    });

    return response.data
}

export async function register(name, username, email, file, password) {

    const formData = new FormData();

    formData.append("name", name)
    formData.append("username", username)
    formData.append("email", email)
    formData.append("image", file)
    formData.append("password", password)

    const response = await api.post("/register", formData);
    return response.data
}