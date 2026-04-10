import { NavLink } from "react-router-dom"
import "./navbar.scss"
import { useAuth } from "../hooks/useAuth"

const Navbar = () => {

    const { user } = useAuth();
    
    return (
        <div className='navbar'>
            <div className="navContent">
                <div className="logo"><h4>Quillix</h4></div>
                <div className="menu">
                    <h4><NavLink className={"NavLink"} to={"/"}>Home</NavLink></h4>
                    <h4><NavLink className={"NavLink"} to={"/articles"}>Articles</NavLink></h4>
                    <h4><NavLink className={"NavLink"} to={"/create"}>Create</NavLink></h4>
                    <h4><NavLink className={"NavLink"} to={"/"}>Profile</NavLink></h4>
                </div>
                <div className="btns">
                    {user ? <button className="logout">Logout</button>
                    : <button className="sighin"><NavLink className={"NavLink"} to={"/signin"}>SighIn</NavLink></button>}
                </div>
            </div>
        </div>
    )
}

export default Navbar