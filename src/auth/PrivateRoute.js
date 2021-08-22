import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Login from "./Login";

const PrivateRoute = ({ component, ...rest }) => {
    //Get currentUser from AuthContext
    const { currentUser } = useContext(AuthContext);
    //When currentUser return true then component = Home
    //If return value is false then jump to Login component
    const Component = currentUser ? component : Login;
    return <Route {...rest} component={Component, Component} />;
};

export default PrivateRoute;