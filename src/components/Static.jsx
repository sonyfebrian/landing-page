import React from "react";
import data from "../constans/data.json";

export default function Static() {
  return (
    <>
      <div className="container px-5 py-5 mx-auto bg-[#27424D]">
        <div className="flex flex-wrap -m-4 text-center">
          {data &&
            data.static.map(({ id, title, count }) => (
              <div className="p-4 sm:w-1/3 w-1/2" key={id}>
                <h2 className="font-semibold leading-10 font-poppins sm:text-5xl text-3xl text-white">
                  {count}
                </h2>
                <p className="font-normal font-poppins text-white text-2xl mt-3">
                  {title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
