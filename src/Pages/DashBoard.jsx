import { useState, useEffect } from "react";
import DashBoardItems from "../Component/DashBoardItems";
import Skeleton from "../Component/Skeleton";
const DashBoard = () => {
  const [loading, setLoading] = useState(true);

  const info = [
    {
      heading: "Create From Blank",
      description:
        "Create a professional resume quickly and easily, tailored to showcase your strengths and achievements. Perfect for any career stage.",
      id: "1",
    },
    {
      heading: "Surprise Me",
      description:
        "Elevate your resume with AI-powered insights and tailored templates. Create a standout resume effortlessly, designed to open doors to your next big opportunity.",
      id: "2",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                Crafting Your Future, One Resume at a Time with{" "}
                <span className="text-blue-500">AI Precision</span>
              </h2>
            </div>
            <div className="flex justify-around">
              <DashBoardItems details={info} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DashBoard;
