import React from "react";

const SignIn = () => {
  return (
    <div class=" md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-10">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>

      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          class="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button class="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
        Log in
      </button>
    </div>
  );
};

export default SignIn;
