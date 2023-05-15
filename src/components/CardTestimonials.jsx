import React from "react";
import Button from "./Button";
import BgTop from "../assets/bg_test.png";
import BgBottom from "../assets/bg_bottom.png";
import data from "../constans/data.json";
import IconQuote from "../assets/quote.png";
import IconUser from "../assets/icon_test.png";

export default function CardTestimonials() {
  return (
    <>
      <div className="container px-5 py-24 mx-auto bg-[#F1F7F9]">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Space The Final Frontier
            </h1>

            <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
              <Button>Discover more</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 mb-20">
          {data &&
            data.testimonials.map(({ id, name }) => (
              <div className="p-4 md:w-1/3 w-full" key={id}>
                <div className="h-full bg-white rounded">
                  <div className="flex flex-wrap sm:flex-row flex-col mb-12">
                    <img
                      alt=""
                      src={IconQuote}
                      className="w-10 h-10 ml-8  mt-8 object-center"
                    />

                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                      <img
                        alt=""
                        src={BgTop}
                        className="object-center hidden md:block "
                      />
                    </div>
                  </div>
                  <p className="text-base mb-6 p-8 font-poppins font-normal">
                    I enjoy working in he poster my wall editor because the site
                    is user friendly and makes designing simple.
                  </p>

                  <div className="flex flex-wrap sm:flex-row flex-col ">
                    <div className="flex md:ml-auto md:ml-0 mx-auto items-center flex-shrink-0 ">
                      <img
                        alt=""
                        src={BgBottom}
                        className="mr-5 hidden md:block"
                      />
                    </div>
                    <span className="inline-flex items-start">
                      <span className="grow flex flex-col pr-1">
                        <span className=" font-poppins font-bold ">{name}</span>
                        <span className="font-normal text-sm font-poppins ">
                          Corporate Founder
                        </span>
                        <div className="flex mb-4 flex-row-reverse">
                          <span className="flex  items-center">
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-[#FFB700]"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-[#FFB700]"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-[#FFB700]"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-[#FFB700]"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-[#FFB700]"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                      <img
                        alt="testimonial"
                        src={IconUser}
                        className="w-12 h-12 rounded-full flex-shrink-0 mr-2 object-cover object-center"
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
