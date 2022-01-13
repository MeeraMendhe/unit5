import {Link} from "react-router-dom"
import {Routes,Route} from "react-router-dom"
import {Home} from "../Component/Home";
import {LoginPage} from "./Login";

export const MyRoutes=()=>{
    return (
        <>
            <div>
                <Link to="/">TASKS</Link>
                <br />
                <Link to="/login">LOGIN</Link>
                
                    <Routes>
                        <Route path="/" element={<Home/>} ></Route>
                        
                        <Route path="/login" element={<LoginPage/>}></Route>
                    </Routes>
                
            </div>
        </>
    )
}   