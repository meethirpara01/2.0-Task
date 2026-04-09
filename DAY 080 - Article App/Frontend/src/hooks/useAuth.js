import { useContext } from "react"
import { getMe, login, register } from "../services/auth.api.js";
import { AuthContext } from "../context/AuthContext.jsx";
import { useEffect } from "react";

export const useAuth = () => {
    const context = useContext(AuthContext);

    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async (email, password) => {
        setLoading(true);

        const response = await login(email, password);
        setUser(response.user);

        setLoading(false);
    }

    const handleRegister = async (name, username, email, file, password) => {
        setLoading(true);

        const response = await register(name, username, email, file, password);
        setUser(response.user);

        setLoading(false);
    }
    
    const handleGetMe = async () => {
        setLoading(true);

        const response = await getMe();
        setUser(response.user);

        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        handleGetMe()
        setLoading(false);
    }, [])

    return {
        user, loading, handleLogin, handleRegister, handleGetMe
    }
}