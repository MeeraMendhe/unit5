import './components/List.css';
import './App.css'
import { Form } from './components/Form';
import {List} from './components/List';
import {useState,useEffect} from "react"
function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    getData();
  },[])
  const getData=()=>{
    fetch(" http://localhost:3001/formData")
    .then(d=>d.json())
    .then(res=>{
        console.log("res",res);
        setData(res);
    })
    console.log(data);
  }
  return (<>
    <h1 className="App">Food recipe</h1>
    <div className="box">
      <Form getData={getData}/>
      <List data={data}/>
    </div>
    </>
  );
}

export default App;
