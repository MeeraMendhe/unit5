import { useState,useEffect} from "react";
import "./display.css"
export const Display=({change,dt})=>{
    console.log(dt);
    const [imgUrl,setImgUrl] = useState("");
    useEffect(()=>{
        let a=dt.title;
        console.log(a);
        fetch(` https://foodish-api.herokuapp.com/images/burger/`)
        .then(d=>d.json())
        .then(res=>{
            setImgUrl(res);
        })
        console.log("imgUrl",imgUrl);
       
    },[])
    const ch=()=>{
        change();
    }
    return <div className="show">
        {/* <div style={{backgroundImage:`url(${imgUrl})`,height:'200px',width:'200px'}}>Image not loaded</div> */}
        <p>Title:{dt.title}</p>
        <p>Ingredients:{dt.ingredients}</p>
        <p>Time:{dt.time}</p>
        <p>Instructions:{dt.instructions}</p>
        <button onClick={() =>ch()}>Close</button>
    </div>;
}