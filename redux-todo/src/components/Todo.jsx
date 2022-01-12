import {useSelector,useDispatch} from "react-redux";
import {useState,useEffect} from "react";
import { addTodoLoading ,addTodoSuccess,addTodoError,getTodoLoading,getTodoSuccess,getTodoError,toggleTodo ,dlt,complete} from "../store/action";
// import {addTodo} from "../store/action";

import {Link} from "react-router-dom";

export const Todo=()=>{
    const {loading,todo,error,completed}=useSelector((state)=>({
        loading: state.loading,
        todo: state.todo,
        error: state.error,
        completed: state.completed
    }),
    function (prev,curr){
        if(prev.loading===curr.loading && prev.error===curr.error){
            return true;
        }
        return false;
    }
    );

    useEffect(()=>{
       getTodo();
       dispatch(complete())
    },[])

    async function getTodo(){
        try{
            dispatch(getTodoLoading());
           const data= await fetch("http://localhost:3001/todo").then((d)=>d.json());
        dispatch(getTodoSuccess(data))
        } catch (err) {
            console.log(err);
        dispatch(getTodoError(err));
        }
    }

    const put=(a)=>{
        dispatch(addTodoLoading());
                fetch("http://localhost:3001/todo",{
                    method: "POST",
                    body: JSON.stringify({status:false,title:a,loading:false}),
                    headers: {'Content-Type': 'application/json'}
                }).then(d=>d.json()).then(res=>{
                    console.log("res",res);
                    dispatch(addTodoSuccess(res))
                    dispatch(complete())
                    getTodo();
                }).catch(err=>{
                    dispatch(addTodoError(err));
                })
    }

    const dispatch=useDispatch();
    const [text,setText]=useState("")
    return loading?<div>Loading....</div>:error? <div>Something went wrong...</div> :
    <div>
        <h1>Todo app using react-redux </h1>
        <h3>Non-Completed tasks {completed}</h3> 
        <input type="text" 
        value={text}
        placeholder="Enter Todo"
        onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>{put(text)}}>Add Todo</button>

        {todo.map((e,i)=>(
            <div key={i}>
                <button>{e.title}</button>
                &nbsp;
                <button 
                     onClick={() =>{
                        
                        dispatch(toggleTodo(e));
                        console.log(e.id);
                        fetch(`http://localhost:3001/todo/${e.id}`,{
                            method: "PATCH",
                            body: JSON.stringify({status:!e.status}),
                            headers: {'Content-Type': 'application/json'}
                        }).then(d=>d.json()).then(res=>{
                            getTodo();
                            dispatch(complete())
                        }).catch(err=>{
                            console.log(err);
                        })
                    }}

                >{e.status.toString()}</button>
                &nbsp;
                <button>
                <Link style={{textDecoration:"none",color:"black"}}  to={`/todo/${e.id}`}>More Details</Link>
                </button>
                &nbsp;
                <button 
                     onClick={() =>{
                        dispatch(dlt(e));
                        console.log(e.id);
                        fetch(`http://localhost:3001/todo/${e.id}`,{
                            method: "DELETE",
                            headers: {'Content-Type': 'application/json'}
                        }).then(d=>d.json()).then(res=>{
                            dispatch(complete())
                            getTodo();
                        }).catch(err=>{
                            console.log(err);
                        })
                    }}
                >Delete</button> 
                <button>
                    <Link style={{textDecoration:"none",  color:"black"}} to={`/todo/${e.id}/edit`}>Edit</Link>
                </button>
            </div>           
        ))}

    </div>
}