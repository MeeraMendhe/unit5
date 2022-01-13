import {useState} from "react";

export const Login=({handleLogin})=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        let payload={email,password};
        handleLogin(payload);
    }

    return (
        <>
            <h3>Login forms</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" />
                <br />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}