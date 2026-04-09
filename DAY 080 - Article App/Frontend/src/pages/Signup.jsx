import { Link, NavLink, useNavigate } from "react-router-dom";
import "./signup.scss"
import { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Signup = () => {

    const { user, loading, handleRegister } = useAuth()

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const progilePicInputFeildRef = useRef(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleFromSubmit = async (e) => {
        e.preventDefault();

        const file = progilePicInputFeildRef.current.files[0];

        await handleRegister(name, username, email, file, password)
        navigate("/signin")
    }

    return (
        <div className='signupPage'>
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
                            <label htmlFor="name">Name</label>
                            <input onInput={(e) => { setName(e.target.value) }} value={name} type="text" id="name" placeholder="Enet your name" />
                        </div>
                        <div className="fromInput">
                            <label htmlFor="username">Username</label>
                            <input onInput={(e) => { setUsername(e.target.value) }} value={username} type="text" id="username" placeholder="Enet username" />
                        </div>
                        <div className="fromInput">
                            <label htmlFor="email">Email</label>
                            <input onInput={(e) => { setEmail(e.target.value) }} value={email} type="text" id="email" placeholder="Enet your email" />
                        </div>
                        <div className="File">
                            <label htmlFor="file">Profile Pic</label>
                            <input ref={progilePicInputFeildRef} type="file" id="file" />
                        </div>
                        <div className="fromInput">
                            <label htmlFor="password">Password</label>
                            <input onInput={(e) => { setPassword(e.target.value) }} value={password} type="password" id="password" placeholder="Enter password" />
                        </div>
                        <button type='submit' className="signupBtn">Sign Up</button>
                    </form>
                    <p>Already have an account? <Link className="toggleAuthForm" to={"/signin"}>Signin</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup