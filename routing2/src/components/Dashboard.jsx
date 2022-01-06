import {useContext,useEffect} from "react";
import {AuthContext} from "../contexts/AuthContext"
import { Navigate ,Link} from "react-router-dom";
import { Setting } from "./Setting";

export const Dashboard=()=>{
    const {token} =useContext(AuthContext);
     console.log("user created",token)
     useEffect(()=>{

     },[])
     if(!token){
         return <Navigate to={"/login"}/>
     }
     const handler=()=>{
         console.log("hello")
         return <Navigate to={"/dashboard/setting"}/> 
     }
    return <div>
        <h1>Login Sucessfull</h1>
        <Link to={"/dashboard/setting"}>Setting</Link>
    </div>
}