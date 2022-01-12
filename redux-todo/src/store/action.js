import {ADD_TODO_LOADING,ADD_TODO_SUCCESS,ADD_TODO_ERROR,
    GET_TODO_LOADING,GET_TODO_SUCCESS,GET_TODO_ERROR,TOGGLE_TODO,DELETE_TODO,COMPLETE ,EDIT} from "./actionTypes"

export const toggleTodo=(id)=>({
    
    type:TOGGLE_TODO,
    payload:id,
})

export const dlt=(payload)=>({
    type:DELETE_TODO,
    payload
})
export const addTodoLoading=(data)=>({
    type:ADD_TODO_LOADING,
    
})
export const addTodoSuccess=(data)=>({
    type:ADD_TODO_SUCCESS,
    payload:data
})

export const addTodoError=(data)=>({
    type:ADD_TODO_ERROR,
    payload:data
})

export const getTodoLoading=(data)=>({
    type:GET_TODO_LOADING,
    
})
export const getTodoSuccess=(data)=>({
    type:GET_TODO_SUCCESS,
    payload:data
})

export const getTodoError=(data)=>({
    type:GET_TODO_ERROR,
    payload:data
})

export const complete=()=>({
    type:COMPLETE
})

export const edit=(payload)=>({
    type:EDIT,
    payload:payload
})

