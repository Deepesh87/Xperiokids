import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoutes({children}) {
   const userToken = localStorage.getItem("token")
   if(userToken == null || userToken == undefined || userToken==''){
      return <Navigate to="/login" replace/>
   }
  return children;
}

export default PrivateRoutes;
