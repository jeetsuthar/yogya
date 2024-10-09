import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginSchema } from "../components/utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUserFunction } from "../../common/scripts/server"; // Import the login function
import "./login_custom_style.css";

const initialValues = {
  identifier: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordStateHandle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col transition-all">
      {/* Main Content */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center ">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center max-sm:">
          <img
            src="https://img.freepik.com/premium-photo/sign-login-website-page_406811-99939.jpg?ga=GA1.1.1444325298.1727359852&semt=ais_hybrid"
            alt="Login Illustration"
            className="h-auto w-auto object-fill"
          />
        </div>

        {/* Login Form */}
        <div className="w-screen md:w-1/2 h-full flex flex-col justify-center items-center bg-white py-10 backgroundImage">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold mb-4 text-center main-heading">
              ScoopInvestment
            </h1>
            <p className="text-center text-gray-600 mb-8 secondary-heading">
              Admin Login
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("form values:", values);
                loginUserFunction(values);  // Pass form data to login function
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Username Field */}
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 outer-label"
                      htmlFor="identifier"
                    >
                      Username
                    </label>
                    <Field
                      type="text"
                      name="identifier"
                      placeholder="Username"
                      className="inputFields w-full px-4 py-2 border rounded-lg transition duration-300 custom-border "
                      autoComplete="true"
                    />
                    <ErrorMessage
                      name="identifier"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 outer-label"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="relative w-full">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="********"
                        className="inputFields w-full px-4 py-2 border rounded-lg transition duration-300 custom-border  "
                        autoComplete="true"
                      />
                      <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 cursor-pointer"
                        onClick={passwordStateHandle}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-6 rounded-lg w-full"
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <p className=" text-gray-500 py-3 text-center ">
        © www.scoopinvestment.com, {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Login;
