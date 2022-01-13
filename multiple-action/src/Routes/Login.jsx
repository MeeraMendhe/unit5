import {Login} from "../Component/Login";
import { useDispatch , useSelector } from "react-redux";
import {loginFailure,loginSuccess} from "../Redux/auth/action";
import {Navigate} from "react-router";
// import {axios} from "axios";

export const LoginPage=()=>{
    const dispatch=useDispatch();

    const isAuth=useSelector((state)=>state.auth.isAuth);

    const handleLogin=(payload)=>{
        
     

          fetch("https://reqres.in/api/login",{
            method: "POST",
            body:JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'},
        }).then(d=>d.json())
        .then((response)=>{
            const action =loginSuccess(response.token);
            dispatch(action);
        }).catch((err) => {
            const action =loginFailure("wrong credentials");
            dispatch(action);
        })

    }
    if(isAuth){
        return <Navigate to="/"/>;
    }
    return (
        <div>
            <Login handleLogin={handleLogin}/>
        </div>
    )
}