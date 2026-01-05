import { NavLink, useNavigate } from 'react-router'

const Navbar = () => {

    const navigate = useNavigate();
    const handelH2Click = () => {
        navigate("/");
    }
    return (
        <>
            <div className='Navbar'>
                <h2 onClick={handelH2Click}>Nav</h2>
                <div className="menu">
                    <NavLink className={({ isActive }) => isActive ? "active" : "NavLink"} to="/Docs">Docs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : "NavLink"} to="/Contact">Contact</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : "NavLink"} to="/Products">Products</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : "NavLink"} to="/About">About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : "NavLink"} to="/Deshboard">Deshboard</NavLink>
                </div>
            </div>

        </>
    )
}

export default Navbar