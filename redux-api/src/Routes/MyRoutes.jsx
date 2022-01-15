import {Register} from "../Components/Register";
import {Login} from "../Components/Login";
import {Dashboard} from "../Components/Dashboard";
import {Routes,Route} from "react-router-dom";

export const MyRoutes=({children})=>{

    return (
        <>
        {children}
        <Routes>
        <Route path="/" element={ <Dashboard />}></Route>
        <Route path="/register" element={ <Register /> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        </Routes>
        </>
    )
}

