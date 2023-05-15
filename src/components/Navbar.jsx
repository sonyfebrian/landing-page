import React, { useState, useEffect } from "react";
import data from "../constans/data.json";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (scrollTop > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div
          className={`container ${
            isScrolled ? "bg-white drop-shadow-md" : ""
          } mx-auto lg:flex fixed lg:flex-wrap p-5 flex-col md:flex-row items-center justify-between`}
        >
          <h1 className="text-2xl leading-6 font-bold font-poppins text-cinnabar">
            Edu.dot
          </h1>{" "}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:ml-auto block md:mr-auto lg:flex lg:flex-wrap lg:items-center lg:text-base justify-center`}
          >
            {data &&
              data.menu.map(({ id, name }) => {
                if (id === 2) {
                  return (
                    <button
                      id="dropdownInformationButton"
                      data-dropdown-toggle="dropdownInformation"
                      className="text-base font-normal font-poppins hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                      key={id}
                    >
                      {name}
                      <svg
                        className="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  );
                } else {
                  return (
                    <span
                      className="mr-5 hover:text-gray-900 text-base font-normal font-poppins"
                      key={id}
                    >
                      {name}
                    </span>
                  );
                }
              })}
          </nav>
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
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        )}
      </header>
    </>
  );
}
