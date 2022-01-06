
import {Home} from './Home';
import {Products} from './Products';
import {ProductsDetails} from './ProductsDetails';
import {Route,Routes} from 'react-router-dom';

export const Navbar=()=>{
    return <>
       <Routes>
           <Route path="/" element={ <Home/>}></Route>
           <Route path="/products" element={ <Products/>}></Route>
           <Route path="/productdetails/:id" element={ <ProductsDetails/>}></Route>
       </Routes>
    </>
}

