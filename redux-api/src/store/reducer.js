import {LOGIN_SUCCESS,LOGIN_FAILURE,GET_PROFILE} from "./actionTypes";
import {loadData, saveData} from "../utils/localStorage";

const token=loadData("token");

const initState = {
    isAuth:token? true:false,
    token:token || "",
    profile:[]
}

export const authReducer =(state=initState,{type,payload})=>{
    switch(type){

        case LOGIN_SUCCESS:{
            saveData("token",payload);
            return {
                ...state,
                isAuth:true,
                token:payload
            }
        }

        case LOGIN_FAILURE:{
            return{
                ...state,
                isAuth:false,
                token:""
            }

        }

        case GET_PROFILE:{
            return{
                ...state,
                profile:payload
            }
        }
        
        default :
        return state
    }
}