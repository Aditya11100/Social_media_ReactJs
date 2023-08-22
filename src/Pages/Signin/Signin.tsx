import React from "react";
import "./Signin.css";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signin = () => {
  // const state = useSelector((state) => state);

  return (
    <div className="container">
      <div className="title">Sign-In</div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-container">
            <div className="input-filed">
              <Field className="input-type" type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="input-filed">
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button className="button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
