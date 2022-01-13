import {ADD_TODO,TOGGLE_TODO,DELETE_TODO} from "./actionTypes"
import {loadData,saveData,deleteTodo,tgl} from "../../utils/localStorage"

const init={
    todo:loadData("todo") || []
};


export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case ADD_TODO:{
            
            const update=[...state.todo,payload];
            saveData("todo", update);
            return {
                ...state,todo:update
            }
        }
        case TOGGLE_TODO:{
            let a= {
                ...state,todo:state.todo.map((e)=>
                    e.title===payload? 
                    {...e,status : !e.status}:e
                )
            }
            tgl("todo",a);
            return a;
        }
        case DELETE_TODO:{
            let a={
                ...state,todo:state.todo.filter((el)=>{
                    if(el.title!==payload){
                        return true;
                    }else{
                        return false;
                    }
                })
            }
            deleteTodo("todo",a);
            return a
        }
        default:
        return state
    }
    
}
