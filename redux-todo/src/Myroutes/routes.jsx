import {Todo} from "../components/Todo";
import { Routes,Route } from "react-router-dom";
import { Home } from "../components/Home";
import {TodoList} from "../components/TodoList";
import {EditTodo} from "../components/EditTodo";

export const AllRoutes=()=>{
    return <>
        <Routes>
            <Route path="/todo" element={ <Todo />}></Route>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/todo/:id" element={ <TodoList /> }></Route>
            <Route path="/todo/:id/edit" element={<EditTodo/>}></Route>
        </Routes>
    </>
}