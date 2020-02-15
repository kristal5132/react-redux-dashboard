import React from "react";
import {InputBlock} from "../Form/InputBlock";
import {InputSubmit} from "../Form/InputSubmit";
import {Formik} from "formik";
import * as Yup from "yup";
import {InputError} from "../Form/InputError";
import {signUp} from "../../scripts/signup";
import {useHistory} from "react-router-dom"


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must write at least 2 characters"),
    email: Yup.string()
        .email("Must be a valid email address")
        .required("Must enter an email"),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const SignUpForm = () => {
    const history = useHistory();
    return (
        <Formik initialValues={{
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }} onSubmit={
            (values) => {
                signUp(values.name, values.email, values.password)
                    .then((result) => {
                        if (result) {
                            history.push('/')
                        }
                    })
            }
        } validationSchema={validationSchema}>
            {({values, handleChange, handleBlur, handleSubmit, touched, errors}) => (
                <form onSubmit={handleSubmit} className="authorization-form">
                    <InputBlock id="name"
                                label="Name"
                                type="text"
                                placeholder="Enter your name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form__field"
                    />
                    <InputError touched={touched.name} message={errors.name}/>

                    <InputBlock id="email"
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form__field"
                    />
                    <InputError touched={touched.email} message={errors.email}/>

                    <InputBlock id="password"
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form__field"
                    />
                    <InputError touched={touched.password} message={errors.password}/>

                    <InputBlock id="passwordConfirmation"
                                label="Repeat your password"
                                type="password"
                                placeholder="Repeat your password"
                                value={values.passwordConfirmation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form__field"
                    />
                    <InputError touched={touched.passwordConfirmation} message={errors.passwordConfirmation}/>
                    <InputSubmit value="Sign up" id="signup-submit"/>
                </form>
            )}

        </Formik>
    )
};