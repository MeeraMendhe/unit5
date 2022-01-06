import {useState,useContext} from "react"
import axios from "axios";
import {AuthContext} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

export const Login=()=>{
    const {token,setToken}=useContext(AuthContext);
    const [data,setData]=useState({});
    const handelchange=(e)=>{
        let {name,value} = e.target;
        setData({...data,[name]:value});
    }

    
    const navigate=useNavigate();
    const SubmitData=(e)=>{
        e.preventDefault();
       
        axios.post('https://reqres.in/api/login', {
           "email":data.email,
           "password":data.password,
          })
          .then(function (response) {
            console.log(response.data);
            setToken(response.data.token);
            navigate("/dashboard");
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return <div>
        <form action="" onSubmit={SubmitData}>
            <input type="text" placeholder="email" name="email" onChange={handelchange} />
            <input type="password" name="password" placeholder="Password" onChange={handelchange} />
            <input type="submit"/>
        </form>
    </div>
}