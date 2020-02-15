import React from "react"
import {SignUpForm} from "../components/Authorization/SignUpForm";
import {NavLink} from "react-router-dom";

export const SignUp = () => {
    return (
        <>
            <section className="authorization">
                <div className="authorization-wrapper">
                    <h1 className="authorization__text">
                        Sign up
                    </h1>
                    <NavLink className="authorization__link" to="/">
                        Existing member?
                    </NavLink>
                    <SignUpForm/>

                </div>
            </section>
        </>
    )
};