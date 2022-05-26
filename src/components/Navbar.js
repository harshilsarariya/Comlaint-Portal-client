import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-inter sticky top-0 z-50">
      <nav className="flex bg-[#000000] items-center justify-between flex-wrap p-4 ">
        <ul className="flex space-x-6 items-center text-white font-bold ">
          <li className="flex">
            <Link className="text-2xl " to="/">
              Quickfix
            </Link>
          </li>
        </ul>

        <div className="space-x-1 ">
          <ul className="flex space-x-6 items-center text-white font-bold ">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/complaints">Complaints</Link>
            </li>
            <li>
              <Link to="/faqs">FAQ's</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
