import React from "react";
import IconPlan from "../assets/plan.png";
import IconBook from "../assets/Book.png";
import IconFind from "../assets/Find.png";
import IconAward from "../assets/Award.png";

import data from "../constans/data.json";

export default function CardWork() {
  return (
    <>
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center w-full mb-10">
          <h1 className="sm:text-4xl text-2xl leading-tight font-poppins font-semibold ">
            How it work
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {data &&
            data.plan.map(({ id, title, description }) => (
              <div key={id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className={`border-2 border-gray-200 px-4 py-6 rounded-lg ${
                    id === 1
                      ? "bg-[#27424D]"
                      : id === 2
                      ? "bg-[#1F968E]"
                      : id === 3
                      ? "bg-[#9B7200]"
                      : id === 4
                      ? "bg-[#A93D33]"
                      : ""
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-24 h-24  ${
                      id === 1
                        ? "bg-[#06AED5]"
                        : id === 2
                        ? "bg-[#FF5000]"
                        : id === 3
                        ? "bg-[#B900D7]"
                        : id === 4
                        ? "bg-[#00C508]"
                        : ""
                    }  text-indigo-500 border-2 border-white rounded-full inline-flex items-center justify-center`}
                  >
                    {id === 1 ? (
                      <img src={IconPlan} alt="" />
                    ) : id === 2 ? (
                      <img src={IconFind} alt="" />
                    ) : id === 3 ? (
                      <img src={IconBook} alt="" />
                    ) : id === 4 ? (
                      <img src={IconAward} alt="" />
                    ) : null}
                  </div>
                  <div className="h-40">
                    {" "}
                    <h1
                      className={` ${
                        id === 1 ? "mb-10" : "mb-4"
                      }sm:text-4xl text-xl mt-4 font-semibold leading-5 text-white font-poppins`}
                    >
                      {title}
                    </h1>
                    <p className="my-8 leading-relaxed text-white font-poppins">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
