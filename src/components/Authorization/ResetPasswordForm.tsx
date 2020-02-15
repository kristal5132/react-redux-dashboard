import React from "react";
import {InputBlock} from "../Form/InputBlock";
import {InputSubmit} from "../Form/InputSubmit";
import {Formik} from "formik";
import * as Yup from "yup";
import {InputError} from "../Form/InputError";
import {useHistory} from "react-router-dom"
import {resetPassword} from "../../scripts/resetpass";

const validationSchema = Yup.object().shape({
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

export const ResetPasswordForm: React.FC = () => {
    const history = useHistory();

    return (
        <Formik initialValues={{
            email: "",
            password: "",
            passwordConfirmation: ""
        }} onSubmit={(values) => {
            resetPassword(values).then((result) => {
                if (result) {
                    history.push('/')
                }
            });
        }} validationSchema={validationSchema}>
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

                    <InputBlock id="passwordConfirmation"
                                label="Repeat your password"
                                type="password"
                                placeholder="Rewrite your password"
                                value={values.passwordConfirmation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form__field"
                    />
                    <InputError touched={touched.passwordConfirmation} message={errors.passwordConfirmation}/>
                    <InputSubmit value="Reset" id="resetpass-submit"/>
                </form>
            )}

        </Formik>

    )
};