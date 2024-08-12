const DashBoard = () => {
  return (
    <>
      {/* component */}
      <div className=" min-h-screen flex items-center justify-center">
        <div className=" h-screen flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl bg-transparent backdrop-blur-3xl ">
          <div className="flex-1 px-2 sm:px-0">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl  text-black font-bold">
                Create Your <span className="text-blue-500"> AI resume</span>
              </h3>
            </div>
            <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="group border-2 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:shadow-xl hover:smooth-hover">
                <a
                  className="border-2 text-black  group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </a>
                <a
                  className="text-black  group-hover:smooth-hover text-center"
                  href="#"
                >
                  Create Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
