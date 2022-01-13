import {toggleTodo,dlt} from "../Redux/Todo/action"
import {useDispatch} from "react-redux";

export const Showtodo=({details})=>{
    const {title, status}=details;
    // console.log(title,status);
    const dispatch = useDispatch();
    const change=()=>{
        dispatch(toggleTodo(title));
    }

    const dt=()=>{
        dispatch(dlt(title))
    }

    return <div>
        <span>Title : {title}</span>
        <br />
        <span>Status : {status? "True":"False"}</span>
        <span>
            <button onClick={change}>Toggle</button>
        </span>
        <span>
            <button onClick={dt}>Delete</button>
        </span>
    </div>
}