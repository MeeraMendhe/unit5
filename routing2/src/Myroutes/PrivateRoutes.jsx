import {Route ,Routes,Navigate} from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateRoutes =({children})=>{
    const {token} =useContext(AuthContext);
    if(!token){
        return <Navigate to={"/login"}/>
    }
    return children;
}