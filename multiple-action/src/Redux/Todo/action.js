import {ADD_TODO,TOGGLE_TODO,DELETE_TODO} from "./actionTypes"

export const addTodo=(payload)=>({
    type:ADD_TODO,
    payload:{
        title:payload,
        status:false
    }
})

export const toggleTodo=(payload)=>({
    type:TOGGLE_TODO,
    payload
})

export const dlt=(payload)=>({
    type:DELETE_TODO,
    payload
})