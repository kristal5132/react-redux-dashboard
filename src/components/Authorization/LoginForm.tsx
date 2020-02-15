import React, {useContext} from "react";
import {InputBlock} from "../Form/InputBlock";
import {InputSubmit} from "../Form/InputSubmit";
import {Formik} from "formik";
import * as Yup from "yup";
import {InputError} from "../Form/InputError";
import {Context} from "../Context";
import {loginToApp} from "../../scripts/login";
const axios = require("axios");

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email address")
        .required("Must enter an email"),
    password: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Mush have less then 255 characters")
        .required("Must enter password")
});

export const LoginForm = () => {
    const {addNewUser} = useContext(Context);
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                email: '',
                password: ''
            }} onSubmit={values => {
            loginToApp(values)
                .then(
                    async function setUser() {
                        let requestOptions:any = {
                            headers: {
                                "x-access-token": localStorage.token
                            },
                            redirect: 'follow'
                        };

                        let response = await axios.get("/api/users/", requestOptions);

                        addNewUser(response.data._id);

                    }
                )
        }}>

            {({values, handleChange, handleBlur, handleSubmit, touched, errors}) => (
                <form onSubmit={handleSubmit} className="authorization-form">
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
                    <InputSubmit value="Sign in" id="login-submit"/>
                </form>
            )}

        </Formik>
    )
};
