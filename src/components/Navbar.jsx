import React, { useState, useEffect } from "react";
import data from "../constans/data.json";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Update isOpen based on the viewport size
      setIsOpen(window.innerWidth > 768); // Example breakpoint: 768px
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto lg:flex lg:flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl leading-6 font-bold font-poppins text-cinnabar">
            Edu.dot
          </h1>{" "}
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
          {/* <button
            className={`${
              isOpen ? "block" : "hidden"
            }inline-flex items-center font-poppins border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-normal mt-4 mr-4 md:mt-0`}
          >
            Log in
          </button>
          <Button>Sign up</Button> */}
          <button
            onClick={handleToggle}
            className="block lg:hidden float-right rounded text-black-500 hover:text-black-400"
          >
            {isOpen ? (
              <FaTimes className="fill-current h-3 w-3" />
            ) : (
              <FaBars className="fill-current h-3 w-3" />
            )}
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } inline-flex items-center font-poppins border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-normal mt-4 mr-4 md:mt-0 block`}
          >
            {" "}
            <button className="font-poppins block border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-normal mt-4 mr-4 md:mt-0">
              Log in
            </button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>
    </>
  );
}
