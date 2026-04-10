import { uploadImage } from "../services/article.api";

export const useArticle = () => {
    const handleUploadImage = async (file) => {
        const response = await uploadImage(file);
        return response.url;
    }

    return {
        handleUploadImage
    }
}