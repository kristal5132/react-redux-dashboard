import React from "react"
import {NavLink} from "react-router-dom";
import {ResetPasswordForm} from "../components/Authorization/ResetPasswordForm";

export const ResetPassword:React.FC = () => {
    return (
        <>
            <section className="authorization">
                <div className="authorization-wrapper">
                    <h1 className="authorization__text">
                        Reset password
                    </h1>
                    <NavLink className="authorization__link" to="/">
                        Sign in
                    </NavLink>
                    <ResetPasswordForm/>
                </div>
            </section>
        </>
    )
}