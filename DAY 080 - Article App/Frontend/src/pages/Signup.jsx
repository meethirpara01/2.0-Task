import { Link, NavLink } from "react-router-dom";
import "./signup.scss"

const Signup = () => {

    const handleFromSubmit = (e) => {
        e.preventDefault();
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
                            <input type="text" id="name" placeholder="Enet your name" />
                        </div>
                        <div className="fromInput">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Enet username" />
                        </div>
                        <div className="fromInput">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Enet your email" />
                        </div>
                        <div className="File">
                            <label htmlFor="file">Profile Pic</label>
                            <input type="file" id="file"/>
                        </div>
                        <div className="fromInput">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter password" />
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