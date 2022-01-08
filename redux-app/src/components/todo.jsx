import {useState} from "react"
import {Showtodo} from './showtodo';
import { AuthContext } from "../context/AuthContext";
import {addTodo} from "../redux/action"
import {useContext} from "react";

export const Todo=()=>{
    const {getState,dispatch,add}=useContext(AuthContext);
    const [flag,setFlag]=useState(false)
    const {todo}=getState();

    const [data,setData]=useState({})
    const handelchange=(e)=>{
        const {value}=e.target;
        setData({title:value,status:false});
    }

    const submitData=()=>{
        dispatch(addTodo(data.title))
        add(data);
    }
    return <div>
        <input type="text" onChange={handelchange} />

        <button onClick={submitData}>Add Todo</button>

        <button onClick={()=>setFlag(prev=>!prev)}>Edit todo</button>
        
        {
            flag ? 
            
                todo.map((e,i)=>(
                    <Showtodo key={i} details={e}/>
                ))
            :
            ""
        }

    </div>
}