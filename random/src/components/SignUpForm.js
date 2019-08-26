import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const SignUpForm = ({ errors, touched, values, handleSubmit, status }) => {
    
    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <div>Create your account by filling in the forms </div>
        <Form>
            {/* Email input */}
          <Field type="text" name="email" placeholder="Jane@gmail.com" />
          {touched.email && errors.email && (
            <p className="error">{errors.species}</p>
          )}
            {/* Password input  */}
          <Field type="password" name="password" placeholder="******" />
          {touched.password && errors.password && <p className="error">{errors.password}</p>}
  
              {/* Password Confirmation input  */}
          <Field type="password" name="passwordConfirm" placeholder="******" />
          {touched.passwordConfirm && errors.passwordConfirm && <p className="error">{errors.passwordConfirm}</p>}
          </Form>
    );
  };
  

  const FormikSignUpForm = withFormik({
    mapPropsToValues({ email, password, passwordConfirm }) {
      return {
        email: email || '',
        password: password || '',
        passwordConfirm: passwordConfirm|| '',
      }
    },
  
    validationSchema: Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
      passwordConfirm: Yup.string()
    }),
  
    handleSubmit(values, { setStatus }) {
      axios
        .post('https://reqres.in/api/users/', values)
        .then(response => {
            console.log("response success", response)
        //   setStatus(response.data);
        })
        .catch(error => console.log(error.response));
    }
  })(SignUpForm) 
  
  export default FormikSignUpForm;
  
