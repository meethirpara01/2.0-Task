import { Link, useNavigate } from "react-router-dom";
import "./signin.scss"
import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { useEffect } from "react";

const Signin = () => {

    const { user, loading, handleLogin } = useAuth()

    useEffect(() => {
        console.log("USER: ", user);
    }, [user])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleFromSubmit = async (e) => {
        e.preventDefault();

        // console.log(email);
        // console.log(password);

        await handleLogin(email, password)

        setEmail("")
        setPassword("")
        navigate("/")
    }

    return (
        <div className="signinPage">
            <div className="conteiner">
                <div className="left">
                    <div className="top">
                        <h2>YOUR STORY MATTERS</h2>
                        <div className="line"></div>
                    </div>
                    <div className="bottom">
                        <h2>Write</h2>
                        <h2>Without</h2>
                        <h2>Limits</h2>
                        <p>Turn your thoughts into stories that inspire.</p>
                        <p>Start your journey with Quillix.</p>
                    </div>
                </div>
                <div className="right">
                    <div className="textContent">
                        <h4>Welcome Back</h4>
                        <p>Enter your credentials to continue.</p>
                    </div>
                    <form onSubmit={handleFromSubmit} className="Form">
                        <div className="fromInput">
                            <label htmlFor="email">Email</label>
                            <input type="text" onInput={(e) => { setEmail(e.target.value) }} value={email} id="email" placeholder="Enet your email" />
                        </div>
                        <div className="fromInput">
                            <label htmlFor="password">Password</label>
                            <input type="password" onInput={(e) => { setPassword(e.target.value) }} value={password} id="password" placeholder="Enter password" />
                        </div>
                        <button type='submit' className="signupBtn">Sign Up</button>
                    </form>
                    <p>Don't have an account? <Link className="toggleAuthForm" to={"/signup"}>Signup</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signin