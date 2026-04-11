import { useContext } from "react";
import { createArticle, uploadImage } from "../services/article.api";
import { ArticleContext } from "../context/ArticleContext";

export const useArticle = () => {

    const context = useContext(ArticleContext)

    const { loading, setLoading, articles, setArticles } = context

    const handleUploadImage = async (file) => {
        const response = await uploadImage(file);
        return response.url;
    }

    const handleCreateArticle = async (title, tag, coverImage, content) => {
        setLoading(true)

        const response = await createArticle(title, tag, coverImage, content);
        setArticles((prev) => [...prev, response.article])

        setLoading(false)
    }

    return {
        loading, articles, handleUploadImage, handleCreateArticle
    }  
}


