import { useState,useEffect } from "react";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todo,setTodo] = useState([]);

    useEffect(()=>{
        getTodo();
    },[])
  
  const addtodo=()=>{
    const payload ={
        title:text,
        status:false
    }
    fetch("http://localhost:3001/todo",{
        method: "POST",
        body:JSON.stringify(payload),
        headers:{
            "content-type": "application/json"
        }
    }).then(()=>{
        getTodo();
    })
    
  //   setTodo([...todo, text]);
  }

  const getTodo=()=>{
    fetch("http://localhost:3001/todo")
    .then(d=>d.json())
    .then(res=>{
        setTodo(res)
    })

  }

  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo
      "
      />
      <button onClick={addtodo}>add Todo</button>

      {todo.map((e,i) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  );
};
