import Bg from "../assets/bg_hero.webp";
import data from "../constans/data.json";

export default function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container  flex  py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow px-5 md:w-full lg:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-2xl sm:text-6xl leading-10  mb-4 font-poppins font-semiBold ">
              Get Skills
              <br />
              From Our Top
              <br />
              <span className="text-cinnabar ">Class Courses</span>
            </h1>
            <p className="mb-8 leading-6 font-poppins">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
            <div className="pr-2 w-full sm:w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search your favorite courses"
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full bg-cinnabar font-poppins px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>

            <nav className="flex mt-4 flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              {data &&
                data.hero.map(({ id, name }) => (
                  <div key={id}>
                    <span className="bg-[#06AED5] text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    <span className="font-poppins text-lg font-normal">
                      {" "}
                      {name}
                    </span>
                  </div>
                ))}
            </nav>
          </div>
          <div className="hidden lg:block lg:max-w-2xl lg:w-full md:w-1/2 w-full">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Bg}
            />
          </div>
        </div>
      </section>
    </>
  );
}
