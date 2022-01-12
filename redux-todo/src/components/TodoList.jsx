import {useParams} from "react-router-dom";
import { useSelector } from "react-redux";

export const TodoList=()=>{
    const i=useParams();
    const id=+i.id;

    const todo=useSelector(state=>state.todo)
    
    const data=todo[id-1];

    return <>
        <h1>TodoList</h1>
        <span>Title:{data.title}</span>
        &nbsp;
        <span>Status:{data.status}</span>
    </>

}