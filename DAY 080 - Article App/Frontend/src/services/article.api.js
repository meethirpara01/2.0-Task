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

export async function createArticle(title, tag, coverImage, content) {

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("tag", tag);
    if (coverImage) {
        formdata.append("coverImage", coverImage);
    }
    formdata.append("content", JSON.stringify(content));
    
    const response = await api.post("/create", formdata);
    return response.data;
}