import {useDispatch,useSelector} from "react-redux";
import {userData} from "../store/action";
import {useState} from "react";

export const Dashboard=()=>{
    const profile=useSelector((state)=>state.profile);

    
    let a=profile.items || [];
    console.log("a",a);
    console.log(profile);
    
    const [text, setText]=useState("");
    const dispatch =useDispatch();

    const submitData=()=>{
        dispatch(userData(text));
    }

    return (
        <>
            <h3>Dashboard</h3>
            <input type="text" placeholder="Search...." onChange={(e)=>setText(e.target.value)} />
            <input type="submit" onClick={submitData} />

            {
                a.map((e)=>(
                    <>
                        <h3>{e.login}</h3>
                        <a href={e.html_url} target="_blank"  rel="noopener noreferrer" >
                        <button>Go to profile</button>
                        </a>
                    </>
                ))
            }

        </>
    )
}