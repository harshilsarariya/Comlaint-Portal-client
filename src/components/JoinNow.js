import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinNow = (props) => {
  const [details, setDetails] = useState({
    companyname: "",
    email: "",
    services: "",
    phone: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/apply/joinnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyname: details.companyname,
        email: details.email,
        services: details.services,
        phone: details.phone,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Complain submitted successfully", "green");
      navigate("/");
    } else {
      props.showAlert(json.errors[0].msg, "red");
    }
  };

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto  mt-10 md:mt-10"
      >
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Join Now
        </h2>

        <div className="relative mb-4">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-600"
          >
            Company Name
          </label>
          <input
            type="text"
            onChange={onChange}
            id="full-name"
            name="companyname"
            className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            onChange={onChange}
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="services" className="leading-7 text-sm text-gray-600">
            Services
          </label>
          <textarea
            type="text"
            onChange={onChange}
            id="services"
            name="services"
            className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 resize-none  px-3 leading-8 transition-colors duration-200 ease-in-out"
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
            className="w-full bg-white rounded border border-gray-300 focus:border-[#717984] focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="text-white bg-[#717984] border-0 py-2 px-8 focus:outline-none hover:bg-[#717984] rounded text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinNow;
