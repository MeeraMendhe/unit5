import {useState } from "react"
import { Navigate } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
import {getData} from "../store/action";

export const Register=()=>{
    const isAuth =useSelector(state =>state.isAuth);



    const dispatch =useDispatch();
    const [text,setText]=useState({})
  

    const handelchange=(e)=>{
       const {name,value} = e.target;
        setText({...text,[name]:value})
    }

    const submitData=(e)=>{
        e.preventDefault();
        console.log(text);
        dispatch(getData(text,"register"));
    }

    if(isAuth){
        return <Navigate to={"/login"} />
    }

    return (
        <>
            <form action="" onSubmit={submitData}>
            <input onChange={handelchange} type="text" name="name" placeholder="Enter name" />
            <br/>
            <input onChange={handelchange} type="email" name="email" placeholder="Enter email" />
            <br/>
            <input onChange={handelchange} type="password" name="password" placeholder="Enter password" />
            <br/>
            <input onChange={handelchange} type="text" name="username" placeholder="Enter username"/>
            <br/>
            <input onChange={handelchange} type="number" name="mobile" placeholder="Enter mobile"/>
            <br/>
            <input onChange={handelchange} type="text" name="description" placeholder="Enter description"/>
            <br/>
            <input onChange={handelchange} type="submit" />
            </form>
        </>
    )
}