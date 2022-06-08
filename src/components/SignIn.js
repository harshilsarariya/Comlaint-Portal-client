import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged in successfully", "green");
      navigate("/");
    } else {
      props.showAlert(json.errors, "red");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className=" md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full mt-8 md:mt-8"
      >
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Log In
      </h2>

      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={onChange}
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={onChange}
          name="password"
          className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="text-white bg-[#717984] border-0 py-2 px-8 focus:outline-none hover:bg-[#717984] rounded text-lg">
        Log in
      </button>

      <div className="text-center mt-10">
        <p>
          Don't have an Account?{"   "}
          <Link to="/signup" className="text-blue-500 font-semibold">
            Register Now!
          </Link>
        </p>
      </div>
    </form>
          </>
  );
};

export default SignIn;
