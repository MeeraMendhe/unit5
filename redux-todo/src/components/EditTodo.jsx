import { useState } from "react";
import {useDispatch} from "react-redux";
import {addTodoSuccess} from "../store/action"
import {useParams} from "react-router-dom"

export const EditTodo=()=>{
    const {id} =useParams();
    const dispatch=useDispatch();
    const [data,setData]=useState({});

    const handelchange=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value});

    }
    const submitData=(e)=>{
        e.preventDefault();
        console.log(data);
        fetch(`http://localhost:3001/todo/${id}`,{
            method: "PATCH",
            body: JSON.stringify({title:data.title}),
            headers: {'Content-Type': 'application/json'}
        }).then(d=>d.json()).then(res=>{
            dispatch(addTodoSuccess(res));
        }).catch(err=>{
            console.log(err);
        })
    }

        return <form action="" onSubmit={submitData}>
        <h1>Edit Todo</h1>
        <input type="text" name="title" onChange={handelchange} placeholder="Title"/>
        <br />
        <input type="submit"  />
    </form>

}