import {useState} from "react"
import {Showtodo} from './showtodo';
import {addTodo} from "../Redux/Todo/action"
import {useSelector,useDispatch} from "react-redux";

export const Todo=()=>{
    const {todo}=useSelector((state)=>state.app);
    console.log(todo);
    const dispatch = useDispatch();
    const [data,setData]=useState({})
    const [flag,setFlag]=useState(false);
    const handelchange=(e)=>{
        const {value}=e.target;
        setData({title:value,status:false});
    }

    const submitData=()=>{
        dispatch(addTodo(data.title))
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