import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Alert = (props) => {
  return (
    <div className=" font-inter">
      {props.alert && (
        <div
          className={`h-[50px] flex p-3 justify-between items-center bg-${props.alert.color}-200`}
        >
          <div className="ml-5">
            <span
              className={`font-semibold tracking-wider text-${props.alert.color}-600 text-lg`}
            >
              {props.alert.msg}
            </span>
          </div>
          <div className="mr-5">
            <button onClick={() => props.setAlert(null)}>
              <AiOutlineClose size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
