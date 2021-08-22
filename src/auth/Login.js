import React, { useContext } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = ({ history }) => {
    const { login } = useContext(AuthContext);

    //Get login function from AuthContext
    const handleSubmit = event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        login(email.value, password.value, history);
    };

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
            </form>
            <Link to="/signup">Create your account here</Link>
        </div>
    );
};

export default withRouter(Login);