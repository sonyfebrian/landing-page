import React, { useState } from "react";
import data from "../constans/data.json";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <span className="text-2xl leading-6 font-bold font-poppins text-cinnabar">
            Edu.dot
          </span>{" "}
          <div className={`${isOpen ? "block" : "hidden"}`}></div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:ml-auto block md:mr-auto lg:flex lg:flex-wrap lg:items-center lg:text-base justify-center`}
          >
            {data &&
              data.menu.map(({ id, name }) => (
                <span
                  className="mr-5 hover:text-gray-900 text-base font-normal font-poppins"
                  key={id}
                >
                  {name}
                </span>
              ))}
          </nav>
          <button
            className={`${
              isOpen ? "block" : "hidden"
            }inline-flex items-center font-poppins border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-normal mt-4 mr-4 md:mt-0`}
          >
            Log in
          </button>
          <Button>Sign up</Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden float-right rounded text-black-500 hover:text-black-400"
          >
                     {" "}
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
                         {" "}
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />         {" "}
            </svg>
                     {" "}
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
                         {" "}
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                       {" "}
            </svg>
                   {" "}
          </button>
          {/* mobile view */}       {" "}
        </div>
      </header>
    </>
  );
}
