import {Home} from '../components/Home';
import {Login} from '../components/Login';
import { Setting } from '../components/Setting';
import {Routes,Route} from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import {PrivateRoutes} from './PrivateRoutes';

export const AllRoutes=()=>{
    return <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/dashboard/setting" element={<PrivateRoutes><Setting/></PrivateRoutes>}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </>
}