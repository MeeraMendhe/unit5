import {createContext} from 'react'
import {useState} from "react";
export const AuthContext=createContext();

export const AuthContextProvider=(
    {children,store})=>{
    
    const [state,setState]=useState([]);
    const [t,setT]=useState("");
    const add=(data)=>{
        let d=getState()
        setState(d);
    }

    const tgl=()=>{
        setT(prev=>!prev)
    }

    const d=()=>{
        let d=getState()
        setState(d);
    }
    
    const {dispatch,getState}=  store;
    const value={dispatch,getState,add,tgl,d}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}