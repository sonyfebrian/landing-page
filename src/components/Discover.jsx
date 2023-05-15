import React from "react";
import Button from "./Button";
import Bg from "../assets/bg_disc.png";

export default function Discover() {
  return (
    <>
      {" "}
      <div className="container  flex  py-5 md:flex-row flex-col items-center">
        <div className="hidden lg:block lg:max-w-2xl lg:w-full md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Bg}
          />
        </div>
        <div className="lg:flex-grow px-5 md:w-full lg:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl sm:text-5xl leading-10  mb-4 font-poppins font-semibold ">
            Our Process is Build Around Quality & Make it Perfect
          </h1>
          <p className="mb-8 leading-6 font-normal font-poppins text-base">
            Anenim Njilam tempor sapier gravida done porta and b adrdit ipsum
            enim justo integer actor imeer congue magna and purus pretlium
            insuss igula nurtrum luctue unrice.
          </p>
          <p className="mb-8 leading-6 font-normal font-poppins text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>

          <Button>Discover More</Button>
        </div>
      </div>
    </>
  );
}
