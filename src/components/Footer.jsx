import React from "react";
import Icon from "../assets/icon_sosial.png";

import data from "../constans/data.json";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto  bg-[#FFF8DD] ">
          <div className="flex flex-col text-center max-w-4xl bg-[#06AED5] p-10 rounded-lg  overflow-visible -mt-48 mb-20  mx-auto">
            <h1 className="sm:text-5xl text-2xl font-bold font-poppins mb-4 text-white">
              It&#39;s Time to Start Investing in Yourself in Learning
            </h1>

            <button className="flex mx-auto mt-16 text-white bg-cinnabar font-sora border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-base">
              Get Started
            </button>
          </div>

          <div className="flex flex-wrap md:text-left text-center -mb-10 mx-4">
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold font-poppins   text-lg mb-3">
                E learn
              </h2>
              <nav className="list-none mb-10">
                {data &&
                  data.learn.map(({ id, name }) => (
                    <li
                      className="font-poppins font-normal text-base hover:text-gray-800 my-3"
                      key={id}
                    >
                      {name}
                    </li>
                  ))}
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold font-poppins   text-lg mb-3">
                Courses
              </h2>
              <nav className="list-none mb-10">
                {data &&
                  data.courses.map(({ id, name }) => (
                    <li
                      className="font-poppins font-normal text-base hover:text-gray-800 my-3"
                      key={id}
                    >
                      {name}
                    </li>
                  ))}
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold font-poppins   text-lg mb-3">
                Community
              </h2>
              <nav className="list-none mb-10">
                {data &&
                  data.community.map(({ id, name }) => (
                    <li
                      className="font-poppins font-normal text-base hover:text-gray-800 my-3"
                      key={id}
                    >
                      {name}
                    </li>
                  ))}
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold font-poppins   text-lg mb-3">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                {data &&
                  data.link.map(({ id, name }) => (
                    <li
                      className="font-poppins font-normal text-base hover:text-gray-800 my-3"
                      key={id}
                    >
                      {name}
                    </li>
                  ))}
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold font-poppins   text-lg mb-3">
                More
              </h2>
              <nav className="list-none mb-10">
                {data &&
                  data.link.map(({ id, name }) => (
                    <li
                      className="font-poppins font-normal text-base hover:text-gray-800 my-3"
                      key={id}
                    >
                      {name}
                    </li>
                  ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-[#27424D]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white font-poppins text-2xl font-bold text-center sm:text-left">
              Edu.dot
            </p>
            <p className="md:ml-auto md:mr-auto flex flex-wrap items-center font-light text-sm font-white font-sora justify-center">
              @2023 Learning All Rights Reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <img src={Icon} alt="" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
