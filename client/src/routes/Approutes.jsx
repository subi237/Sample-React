import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";

export default function Approutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>


        </Routes>
    )
}