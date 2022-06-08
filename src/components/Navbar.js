import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <div className="font-inter sticky top-0 z-50 ">
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

            {/* <li>
              <Link to="/complaints">Complain</Link>
            </li> */}
            <li>
              <Link to="/faqs">FAQ's</Link>
            </li>
            {!localStorage.getItem("token") ? (
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
            ) : (
              <li>
                <button className="font-bold " onClick={handleLogout}>
                  Log out
                </button>
              </li>
            )}
            <li>
              <Link
                className="bg-white text-black p-2 rounded px-3"
                to="/joinnow"
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
