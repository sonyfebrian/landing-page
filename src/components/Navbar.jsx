import React from "react";
import data from "../constans/data.json";
import Button from "./Button";

export default function Navbar() {
  console.log(data.menu, "cek menu");
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="ml-3 text-xl text-cinnabar">Edu.dot</span>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {data &&
              data.menu.map(({ id, name }) => (
                <span className="mr-5 hover:text-gray-900" key={id}>
                  {name}
                </span>
              ))}
          </nav>
          <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Log in
          </button>

          <Button>Sign up</Button>
        </div>
      </header>
    </>
  );
}
