import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/article",
    withCredentials: true
})

export async function uploadImage(file) {

    const fromdata = new FormData();
    fromdata.append("image", file);

    const response = await api.post("upload-image", fromdata);
    return response.data
}