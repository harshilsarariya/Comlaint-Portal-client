import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        phone: credentials.phone,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Account Created successfully", "green");
      navigate("/");
    } else {
      props.showAlert(json.errors, "red");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-10"
    >
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Sign Up
      </h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="name"
          onChange={onChange}
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="phoneno" className="leading-7 text-sm text-gray-600">
          Phone no.
        </label>
        <input
          type="text"
          id="phoneno"
          onChange={onChange}
          name="phone"
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="flex space-x-4">
        <div className="relative  w-[363px] mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            onChange={onChange}
            id="password"
            name="password"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative  w-[363px] mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <button className="text-white bg-[#717984] border-0 py-2 px-8 focus:outline-none hover:bg-[#717984] rounded text-lg">
        Submit
      </button>
      <div className="text-center mt-10">
        <p>
          Already have an Account?{"   "}
          <Link to="/signin" className="text-blue-500 font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
