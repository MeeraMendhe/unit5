import { AuthContext } from "../context/AuthContext";
import {toggleTodo,dlt} from "../redux/action"
import {useContext} from "react";


export const Showtodo=({details})=>{
    const {title, status}=details;
    // console.log(title,status);
    const {dispatch,d,tgl}=useContext(AuthContext);

    const change=()=>{
        dispatch(toggleTodo(title));
        tgl()
    }

    const dt=()=>{
        dispatch(dlt(title))
        d();
    }

    return <div>
        <span>Title : {title}</span>
        <br />
        <span>Status : {status.toString()}</span>
        <span>
            <button onClick={change}>Toggle</button>
        </span>
        <span>
            <button onClick={dt}>Delete</button>
        </span>
    </div>
}