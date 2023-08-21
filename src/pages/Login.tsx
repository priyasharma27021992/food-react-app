import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

export default function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const validatedData = await validationSchema.validate(values);
      try {
        login(values);
      } catch (error) {
        setError("Error occured");
      }
    } catch (error) {
      console.log("Error recorded", error);
    }
  };
  return (
    <section className="bg-gray-50 w-full h-full py-5">
      <div className="p-10 flex flex-col w-4/5 sm:w-6/12 md:w-5/12 lg:w-1/3 mx-auto mt-20 bg-white rounded-lg shadow">
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
                      className="block w-full h-8 my-3 border border-gray-500 rounded-lg"
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
                      className="block w-full h-8 my-3 border border-gray-500 rounded-lg"
                      type="password"
                      name="password"
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 pt-1">{errors.password}</div>
                    )}
                  </label>
                </div>

                <button
                  className="w-full mt-10 mb-5 p-2 border border-blue-600 text-black bg-primary-600 font-medium rounded-lg text-center"
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
