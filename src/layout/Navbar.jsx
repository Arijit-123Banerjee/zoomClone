import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // optional: for smooth scrolling
  });
};

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <header className="mb-2 px-4 shadow bg-white sticky top-0 z-50">
        <div className="relative mx-auto flex max-w-screen-lg flex-col items-center justify-between py-4 sm:flex-row">
          <Link to={"/"} onClick={scrollToTop}>
            <img
              src="https://meeting-scheduler-tubeguruji.vercel.app/logo.svg"
              className="w-[150px] md:w-[200px]"
              alt="logo"
            />
          </Link>
          <input className="peer hidden" type="checkbox" id="navbar-open" />
          <label
            className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
            htmlFor="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.88em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
          >
            <ul className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-8">
              <li>
                <Link
                  to={"/dashboard"}
                  onClick={scrollToTop}
                  className="text-gray-600 hover:text-[#0069ff]"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={"/upgrade"}
                  onClick={scrollToTop}
                  className="text-gray-600 hover:text-[#0069ff]"
                >
                  Upgrade
                </Link>
              </li>
              <li>
                <Link
                  to={"/Howdoesitwork"}
                  onClick={scrollToTop}
                  className="text-gray-600 hover:text-[#0069ff]"
                >
                  How it's Work?
                </Link>
              </li>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <li className="mt-2 sm:mt-0">
                  <a
                    className="rounded-xl border-2 border-[#0069ff] px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white hover:duration-200"
                    href="#"
                  >
                    Get Started
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
