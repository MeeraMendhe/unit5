import { useState } from "react";
import {Display} from "./display";
import "./List.css"
export const List=({data})=>{
    const [dt,setDt]=useState({})
    const [flag,setFlag]=useState(false)
    
    const display=(d)=>{
        setDt(d)
    
       setFlag(true);
    }
    const Change=()=>{
        setFlag(false);
    }
    return <div className="lit">
        <ul  className="display">
        {data.map((e,i)=>(
            <div>
          
                <li>Title:{e.title}</li>
               
                <li >Time:{e.time?e.time:"Not Known"}</li>
                <br />
                <button onClick={()=>display(e)}>More</button>
            </div>
        ))}
        </ul>
       {flag? <Display change={Change} dt={dt}/>:"Click on Button to see recipe"}
    </div>
}