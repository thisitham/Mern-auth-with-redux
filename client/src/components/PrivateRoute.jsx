import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

//'Outlet' in built component in react // it use to render child route elements of relavant parent route elements
//'Navigate' in built component in react // it changes the current location when it is rendered //it's not useNavigate , becase useNavigate is a hook function but Navigate is a component
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet/> : <Navigate to="/sign-in"/>; //if curretUser varibale have data, then render child component(means '/profile' - see in Header.js) , otherwise render '/sign-in' page
}
