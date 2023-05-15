import React from "react";
import IconUx from "../assets/ux.png";
import IconVs from "../assets/vs.png";
import IconDm from "../assets/dm.png";
import Icon from "../assets/icon.png";

import data from "../constans/data.json";

export default function CardFeatures() {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold font-sora title-font  mb-12 text-center">
          Our Features
        </h1>
        <div className="flex flex-wrap -m-4">
          {data &&
            data.features.map(({ id, title, price }) => (
              <>
                <div className="p-4 md:w-1/3" key={id}>
                  <span className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                    <div className="shadow p-4 rounded-lg bg-white">
                      <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                          <div className="absolute inset-0 " key={id}>
                            {id === 1 ? (
                              <>
                                {" "}
                                <img
                                  src={IconUx}
                                  alt=""
                                  className="lg:h-48 md:h-36 w-full  rounded-lg object-center"
                                />
                              </>
                            ) : id === 2 ? (
                              <img
                                src={IconVs}
                                alt=""
                                className="lg:h-48 md:h-36 w-full  rounded-lg object-center"
                              />
                            ) : id === 3 ? (
                              <img
                                src={IconDm}
                                alt=""
                                className="lg:h-48 md:h-36 w-full rounded-lg object-center"
                              />
                            ) : null}
                          </div>
                        </div>
                        <span className="absolute top-0 left-0 font-sora inline-flex mt-3 ml-3 px-3 py-1 rounded-lg z-10 bg-white text-xs font-sora font-normal text-black select-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 mr-2 fill-[#F2994A] stroke-none"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                          4.7{" "}
                          <span className="text-gray-300 ml-1 ">
                            &#40; 1k+ &#41;
                          </span>
                        </span>
                      </div>

                      <div className="mt-4">
                        <h1 className=" text-lg font-bold font-sora mb-3 text-black">
                          {title}
                        </h1>
                        <div className="grid grid-cols-2 mt-2">
                          <div className="flex items-center">
                            <div className="relative">
                              <img
                                alt="blog"
                                src={Icon}
                                className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center"
                              />
                            </div>
                            <span className="text-sm font-sora font-normal pl-4 ">
                              Mitchal jhon
                            </span>
                          </div>

                          <div className="flex justify-end">
                            <span className="text-white  font-sora font-bold lg:ml-auto md:ml-0 ml-auto leading-8 text-2xl p-2 rounded-md bg-black">
                              {price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                        <p className="inline-flex flex-col xl:flex-row xl:items-center text-black ">
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
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-xs font-sora font-normal pl-1 ">
                            29.500
                          </span>
                        </p>
                        <p className="inline-flex flex-col xl:flex-row xl:items-center text-black justify-end">
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
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                            />
                          </svg>
                          <span className="text-xs font-sora font-normal pl-1 ">
                            36 Lectures
                          </span>
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              </>
            ))}
        </div>

        <button className="flex mt-5 mx-auto bg-cinnabar font-sora font-semibold text-white py-2 px-8  rounded-full text-base">
          View All
        </button>
      </div>
    </>
  );
}
