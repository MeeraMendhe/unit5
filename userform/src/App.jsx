import './App.css';
import {Form} from './components/form'
import {useState,useEffect} from "react";
import {Tabel} from "./components/Tabel";



function App() {
  // const [data,setData]=useState([]);
  const [todo,setTodo] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  const getData=()=>{
    // console.log(userdata);
    // setData(userdata);
    // console.log(data);

      fetch("http://localhost:3001/formData")
      .then(d=>d.json())
      .then(res=>{
          setTodo(res)
          
      })

      console.log("todo",todo);
    
  }
  return (
    <div>
      <Form getData={getData}/>
      <Tabel data={todo} />
    </div>
  );
}

export default App;
