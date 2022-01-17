import { Routes, Route } from "react-router-dom";
import { Login } from "../Components/Login";
import { Dashboard } from "../Components/Dashboard";
import { Applied } from "../Components/Applied";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/aplliedJobs" element={<Applied />}></Route>
    </Routes>
  );
};
