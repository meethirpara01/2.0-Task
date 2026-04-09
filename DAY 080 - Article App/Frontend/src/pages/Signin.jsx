import { Link } from "react-router-dom";
import "./signin.scss"

const Signin = () => {

    const handleFromSubmit = (e) => {
        e.preventDefault();
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
                            <input type="text" id="email" placeholder="Enet your email" />
                        </div>
                        <div className="fromInput">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter password" />
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