import React, { useState } from "react";
import s_a from "../data/City";
import state_arr from "../data/State";

const Complaints = () => {
  const [city, setCity] = useState([]);

  const handleCity = (e) => {
    var indexOfState = state_arr.indexOf(e.target.value) + 1;
    var city_arr = s_a[indexOfState].split("|");
    setCity(city_arr);
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              We are here to assist you!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please complete the form below for your complaints.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base text-gray-600"
                  >
                    Complainant's Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#717984] focus:bg-white focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-base text-gray-600"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#717984] focus:bg-white focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/* dropdown */}
              <div className="flex space-x-4">
                <div className="mb-3 w-[363px] ml-2 left-0">
                  <label
                    htmlFor="message"
                    className="leading-7 text-base text-gray-600"
                  >
                    Select State
                  </label>
                  <select
                    defaultValue="Select State"
                    className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label=".form-select-lg example"
                    onChange={handleCity}
                  >
                    <option>Select your state</option>
                    {state_arr.map((state) => (
                      <option key={state} value={state.index}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3 w-[363px] ml-2 right-0">
                  <label
                    htmlFor="message"
                    className="leading-7 text-base text-gray-600"
                  >
                    Select city
                  </label>
                  <select
                    defaultValue="Select your city"
                    className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label=".form-select-lg example"
                  >
                    <option>Select your city</option>
                    {city.map((state) => (
                      <option key={state} value={state.index}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-base text-gray-600"
                  >
                    The complaint is regarding:
                  </label>
                  <textarea
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#717984] focus:bg-white focus:ring-2 focus:ring-[#717984] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-base text-gray-600"
                  >
                    The nature of complaint:
                  </label>
                  <textarea
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#717984] focus:bg-white focus:ring-2 focus:ring-[#717984] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-8/12">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-base text-gray-600"
                  >
                    Name of the company/person against which/whom the complaint
                    is filed
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#717984] focus:bg-white focus:ring-2 focus:ring-[#717984] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-base text-gray-600"
                  >
                    The specific details of the complaint:
                  </label>
                  <textarea
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#717984] focus:bg-white focus:ring-2 focus:ring-[#717984] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-[#717984] border-0 py-2 px-8 focus:outline-none hover:bg-[#717984] rounded text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Complaints;
