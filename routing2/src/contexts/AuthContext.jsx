import {createContext,useState} from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    // const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState("");
    const value={token,setToken};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}