import React from "react"
import {LoginForm} from "../components/Authorization/LoginForm";
import {NavLink} from "react-router-dom";

export const Login = () => {
    return (
        <>
            <section className="authorization">
                <div className="authorization-wrapper">
                    <h1 className="authorization__text">
                        Sign in
                    </h1>
                    <NavLink className="authorization__link" to="/signup">
                        Not a member?
                    </NavLink>

                    <LoginForm/>

                    <NavLink className="authorization__link" to="/resetpass">
                        Forgot password?
                    </NavLink>
                </div>
            </section>
        </>
    )
};