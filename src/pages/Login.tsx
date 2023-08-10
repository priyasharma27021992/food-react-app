import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const validatedData = await validationSchema.validate(values);

      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData?.message);
        } else {
          const data = await response.json();

          localStorage.setItem("token", data.token);

          navigate("/home");
        }
      } catch (error) {
        setError(error.message);
      }
    } catch (error) {
      console.log("Error recorded", error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => {
        return (
          <Form>
            <label htmlFor="username">
              Username:
              <Field type="text" name="username" />
              <ErrorMessage name="username" />
            </label>
            <label htmlFor="password">
              Password:
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </label>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}
