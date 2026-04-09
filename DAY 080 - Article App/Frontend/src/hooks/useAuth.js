import { useContext } from "react"
import { login, register } from "../services/auth.api.js";
import { AuthContext } from "../context/AuthContext.jsx";

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

    return {
        user, loading, handleLogin, handleRegister
    }
}