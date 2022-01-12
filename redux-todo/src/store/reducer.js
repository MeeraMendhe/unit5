import {ADD_TODO_LOADING,ADD_TODO_SUCCESS,ADD_TODO_ERROR,
    GET_TODO_LOADING,GET_TODO_SUCCESS,GET_TODO_ERROR,TOGGLE_TODO,DELETE_TODO,COMPLETE , EDIT } from "./actionTypes"


const init={
    loading:false,
    todo:[],
    error:false,
    total:0,
    completed:0
};


export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case ADD_TODO_LOADING:{
            return {
                ...state,loading:true
            }
        }
        case ADD_TODO_SUCCESS:{
            return {
                ...state,todo:[...state.todo,payload],loading:false,total:state.todo.length
            }
        }
        case ADD_TODO_ERROR:{
            return {
                ...state,error:true
            }
        }


        case GET_TODO_LOADING:{
            return {
                ...state,loading:true
            }
        }
        case GET_TODO_SUCCESS:{
            return {
                ...state,todo:payload,loading:false
            }
        }
        case GET_TODO_ERROR:{
            return {
                ...state,error:true
            }
        }


        case TOGGLE_TODO:{
            
             let a={
                ...state,todo:state.todo.map((e)=>
                    e.title===payload.title? 
                    {...e,status : !e.status}:e
                )
            }
            console.log(a);
            return a;
        }
        case DELETE_TODO:{
            return {
                ...state,todo:state.todo.filter((el)=>{
                    if(el.title!==payload){
                        return true;
                    }else{
                        return false;
                    }
                }),total:state.total-1
            }
        }
        case COMPLETE:{
            return {
                ...state,completed:state.todo.filter((e)=>{
                    if(!e.status){
                        return true;
                    }else{
                        return false;
                    }
                }).length
            }
        }
        case EDIT:{
            return{
                payload
            }
        }
        default:
        return state
    }
    
}
