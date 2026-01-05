import { NavLink, Outlet, useNavigate } from "react-router"

const Deshboard = () => {

    const navigate = useNavigate();
    const handelClick = () => {
        navigate("/Deshboard");
    }
    return (
        <div className="Deshboard">
            <h5 onClick={handelClick}>Deshboard</h5>
            <div className="nestedRoutes">
                <NavLink className={({ isActive }) => isActive ? "active" : "NavLink"} to="Profile">Profile</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : "NavLink"} to="Settings">Settings</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Deshboard