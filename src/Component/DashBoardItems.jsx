/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const DashBoardItems = ({ details }) => {
  return (
    <div className="flex flex-wrap gap-20 justify-center mt-20">
      {details.map((item) => (
        <div
          key={item.id} // Use a unique key for each item
          className="relative flex flex-col bg-white shadow-md rounded-xl w-full sm:w-80 md:w-96 max-w-xs"
        >
          <div className="p-6">
            <h5 className="text-xl font-semibold text-blue-gray-900 mb-2">
              {item.heading}
            </h5>
            <p className="text-base font-light text-gray-700">
              {item.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <Link
              to={`/ResumeTemplate/${item.id}`} // Use the item's ID in the route
              className="w-full text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Create Resume
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardItems;
