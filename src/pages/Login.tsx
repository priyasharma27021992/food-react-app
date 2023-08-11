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
        // const response = await fetch("/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // });
        // if (!response.ok) {
        //   const errorData = await response.json();
        //   setError(errorData?.message);
        // } else {
        //   const data = await response.json();

        //   localStorage.setItem("token", data.token);

        //   navigate("/home");
        // }
        if (values.username === "priya") {
          navigate("/");
        }
      } catch (error) {
        setError(error.message);
      }
    } catch (error) {
      console.log("Error recorded", error);
    }
  };
  return (
    <section className="bg-gray-50 w-full h-full">
      <div className="p-10 flex flex-col md:w-3/12 h-1/2 mx-auto mt-20 bg-white rounded-lg shadow">
        <h1 className="text-xl mx-auto font-bold md:text-2xl">
          Sign in your account
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => {
            return (
              <Form>
                <div className="flex flex-col justify-between">
                  <label
                    className="py-3 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="username"
                  >
                    Username:
                    <Field
                      type="text"
                      name="username"
                      className="block w-full h-8 mt-3 border border-gray-500 rounded-lg"
                    />
                    {errors.username && touched.username && (
                      <div className="text-red-600 pt-1">
                        {errors?.username}
                      </div>
                    )}
                  </label>
                  <label
                    className="py-3 w-full block text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="password"
                  >
                    Password:
                    <Field
                      className="block w-full h-8 mt-3 border border-gray-500 rounded-lg"
                      type="password"
                      name="password"
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 pt-1">{errors.password}</div>
                    )}
                  </label>
                </div>

                <button
                  className="w-full mt-5 p-2 border border-blue-600 text-black bg-primary-600 font-medium rounded-lg text-center"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}
