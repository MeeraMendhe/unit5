import {useParams} from "react-router-dom"
import {useEffect,useState} from "react";
export const ProductsDetails=()=>{
    const {id} =useParams();
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:3001/productsData/${id}`)
        .then(res=>res.json())
        .then(result=>{
            setData(result);
        })
    },[])
    return <div>
        <li>{data.price}</li>
        <li>{data.name}</li>
        <li>{data.price}</li>
    </div>
}