import { createContext, useState } from 'react'

export const ArticleContext = createContext()

export const ArticleProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    return (
        <ArticleContext.Provider value={{ articles, setArticles, loading, setLoading }} >
            {children}
        </ArticleContext.Provider>
    )
}