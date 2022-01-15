import {Link} from "react-router-dom";

export const Navbar=()=>{
    return (
        <>
            <Link to="/">Dashboard</Link>
            <br/>
            <Link to="/register">Register</Link>
            <br/>
            <Link to="/login">Login</Link>
        </>
    )
}