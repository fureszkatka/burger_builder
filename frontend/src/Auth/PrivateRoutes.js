import { isAuthenticated } from "./index";
import React from "react";
import { Navigate,Outlet } from "react-router";

//Make the preauthorization for some roots
const PrivateRoutes = ({children}) =>{
  
    return (
    !isAuthenticated() ? 
    <Navigate to="/login" />
    : 
    children
    )}

export default PrivateRoutes  
