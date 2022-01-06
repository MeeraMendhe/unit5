import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
export const Products=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/productsData")
        .then(res=>res.json())
        .then((result)=>{
            setProducts(result);
            console.log(result);
        })
    },[])
    return <>
    {products.map((e)=>
        <div>
        <table>
           <tfoot>
           <tr>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>
                <Link to={`/productdetails/${e.id}`}>MoreDetails</Link>
                </td>
            </tr>
           </tfoot>
        </table>
        </div>
    )}
    </>
}