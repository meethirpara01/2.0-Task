import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <h2>Nav</h2>
                <div className="menu">
                    <NavLink className={({ isActive }) =>isActive ? "active" : "NavLink"} to="/Docs">Docs</NavLink>
                    <NavLink className={({ isActive }) =>isActive ? "active" : "NavLink"} to="/Contact">Contact</NavLink>
                    <NavLink className={({ isActive }) =>isActive ? "active" : "NavLink"} to="/Products">Products</NavLink>
                    <NavLink className={({ isActive }) =>isActive ? "active" : "NavLink"} to="/About">About</NavLink>
                </div>
            </div>

        </>
    )
}

export default Navbar