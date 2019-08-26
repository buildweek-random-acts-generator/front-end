import React from 'react';
import "./LoginForm.css";
import {
    withFormik,
    Form,
    Field
} from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function LoginForm({
    errors,
    touched,
    status,
    props
}) {
    return ( 
    
    <div className = "container" >
        <div className = "form-cover" >

        <From className = "form" >
        <h2 className = "loginTitle" > Sign In </h2> 
        <label > Email </label> 
         {touched.username && errors.username && <p> {errors.username} </p>}
        <Field type = "email"
        name = "email"
        className = "input"
        placeholder = "jane@gmail.com" / >

        <label > Password </label> 
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type = "password"
        name = "password"
        className = "input"
        placeholder = "Enter your password" />
        <button className = "btnSignIn" > Login </button> 
        <p> Not a member yet? <a href="#"> Sign Up </a></p >
        </From> 
        </div> 
        </div>
    )
}


const FormikLoginForm = withFormik({
    mapPropsToValues({
        username,
        password
    }) {
        return {
            username: username || "",
            password: password || "",


        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required(),
        password: Yup.string()
            .min(5, "Password must be 16 characters or longer")
            .required("Password is required")
    }),
    handleSubmit(values) {
        console.log(values);
        // axios.post('http://localhost:5000/api/login', values)
        //     .then(res => {
        //         console.log("login Payload", res.data.payload)
        //         setStatus(res.data.payload)
        //         resetForm();

        //         localStorage.setItem('token', res.data.payload);
        //         props.history.push('/dashboard');

        //     })
        //     .catch(err => console.log(err.response));

    }
})(LoginForm);

export default FormikLoginForm;
