import {ADD_TODO,TOGGLE_TODO,DELETE_TODO} from "./actionTypes"


const init={
    todo:[]
};


export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case ADD_TODO:{
            return {
                ...state,todo:[...state.todo,payload]
            }
        }
        case TOGGLE_TODO:{
            return {
                ...state,todo:state.todo.map((e)=>
                    e.title===payload? 
                    {...e,status : !e.status}:e
                )
            }
        }
        case DELETE_TODO:{
            return {
                ...state,todo:state.todo.filter((el)=>{
                    if(el.title!==payload){
                        return true;
                    }else{
                        return false;
                    }
                })
            }
        }
        default:
        return state
    }
    
}
