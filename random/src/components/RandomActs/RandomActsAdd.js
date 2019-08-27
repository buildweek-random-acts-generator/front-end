import React from 'react';
import axiosWithAuth from "../../utils/axiosWithAuth"
import {
    withFormik,
    Form,
    Field
} from "formik";

import * as Yup from "yup";
import "./Random.css";

function RandomActsAdd() {
    return (

        <div>
        <Form className="formRandom" >
        <Field type="act"
        name="act"
        className = "inputRandom"
        placeholder= "Add an Act" />
        <button className = "btnRandom"type = "submit" >Add Act </button> 
        </Form>
        </div>
    )
}


const FormikRandomActsAdd = withFormik({
    mapPropsToValues({
        act
    }) {
        return {
            act: act || "",
        };
    },

    validationSchema: Yup.object().shape({
        act: Yup.string()
            .required("Please Type Something")
    }),

    handleSubmit(values, {
            setStatus
        }) {
        console.log(values);
        axiosWithAuth.post('https://random-ark-generator.herokuapp.com/api/arks/', values)
            .then(res => {
                console.log("login Payload", res.data)

                  setStatus(res.data)
                  localStorage.setItem('token', res.data);

            })
            .catch(err => console.log(err.response));

    }
})(RandomActsAdd);

export default FormikRandomActsAdd;
