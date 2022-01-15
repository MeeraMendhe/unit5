import { useState } from "react";
import {useDispatch} from "react-redux";
import {getData} from "../store/action";

export const Login=()=>{
    const dispatch =useDispatch();
    const [text,setText]=useState({})

    const handelchange=(e)=>{
       const {name,value} = e.target;
        setText({...text,[name]:value})
    }

    const submitData=(e)=>{
        e.preventDefault();

        dispatch(getData(text,"login"));

    }

    return (
        <>
            <form action="" onSubmit={submitData}>
            <input onChange={handelchange} type="password" name="password" placeholder="Enter password" />
            <br/>
            <input onChange={handelchange} type="text" name="username" placeholder="Enter username"/>
            <br/>
            <input onChange={handelchange} type="submit" />
            </form>
        </>
    )    
}