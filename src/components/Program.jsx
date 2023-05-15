import React from "react";
import Bg from "../assets/bg_pro.png";

export default function Program() {
  return (
    <>
      <div className="container  flex  py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  md:w-full lg:w-1/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl sm:text-5xl leading-10  mb-4 font-poppins font-semibold ">
            Access to Everything For Everyone
          </h1>
          <p className="mb-8 leading-6 font-normal font-lexend text-base">
            Online learning program designed to prepare you for a career.
            Courses include recorded video lectures, auto graded
          </p>
          <div className="flex flex-wrap -m-4 mb-5 lg:w-full">
            <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <span className="font-poppins text-black font-semibold text-base">
                  <span className="bg-[#06AED5] text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  World&#45;Class
                </span>
                <span className="font-poppins text-black font-semibold text-base">
                  <span className="bg-[#06AED5] text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Affordable
                </span>
              </nav>
            </div>
            <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <span className="font-poppins text-black font-semibold text-base">
                  <span className="bg-[#06AED5] text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Flexible
                </span>
                <span className="font-poppins text-black font-semibold text-base">
                  <span className="bg-[#06AED5] text-white  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Job-relevant
                </span>
              </nav>
            </div>
          </div>
          <button className="rounded-full bg-[#06aed5] font-poppins text-white px-3 py-1 text-base font-semibold">
            Get Started
          </button>
        </div>
        <div className="hidden lg:block lg:max-w-2xl lg:w-full md:w-1/2 w-full">
          <img
            className="object-cover ml-6 object-center rounded"
            alt="hero"
            src={Bg}
          />
        </div>
      </div>
    </>
  );
}
