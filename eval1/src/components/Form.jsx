import {useState,useRef} from "react";
import "./List.css" 



const data={
    title: "",
    ingredients: "",
    time: "",
    image: "",
    instruction: ""
  }

export const Form =({getData})=>{
    const [formData,setFormData] =useState(data);
    const myref = useRef()

    const handelchange=(e)=>{
        
        let {name,value}=e.target;
      
        if(name==="image"){
             value=URL.createObjectURL(myref.current.files[0]);
            console.log(value);
        }
        
        setFormData({...formData,[name]:value});

    }

    const submitData=(e)=>{
        e.preventDefault();
       
        fetch("http://localhost:3001/formData",{
            method: "POST",
            body:JSON.stringify(formData),
            headers:{
                "content-type": "application/json"
            }
        })
        .then(()=>{
            getData();
        })
    }

   
    return <form className="formStyle" onSubmit={submitData}>
            <input onChange={handelchange} type="text" name="title"  placeholder="title" />
            <input onChange={handelchange} type="text" name="time" placeholder="time" />
            <input onChange={handelchange} type="text" name="ingredients" placeholder="ingredients"/>
            <input type="file" onChange={handelchange} ref={myref} name="image" />
            <input onChange={handelchange} type="submit" />
            
        </form>
      
}

