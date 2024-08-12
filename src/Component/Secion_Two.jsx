import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const Secion_Two = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    // Apply reveal effect to elements with the class 'headline'
    sr.reveal(".headline", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      delay: 300,
    });

    sr.reveal(".reveal", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      delay: 300,
    });
  }, []);
  return (
    <div>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="headline text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj"
              id="text"
            >
              Ace Your Next Interview with AI Precision
            </h2>
            <p className="headline mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
              Boost your interview skills with our AI-powered app. Get
              personalized practice and insights to excel with confidence.
            </p>
          </div>

          <div className="headline grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24 ">
            <div className="md:p-8 lg:p-14 hover:shadow-xl	duration-200 rounded-2xl cursor-pointer">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="23"
                  cy="23"
                  r="22"
                  stroke="#161616"
                  strokeWidth="2"
                />
                <path
                  d="M23 5L23 41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 23L41 23"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Data Analytics
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Leverage AI to analyze and interpret data trends effectively.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 hover:shadow-xl	duration-200 rounded-2xl cursor-pointer">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 23L41 23"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M23 5L23 41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 5L41 41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M41 5L5 41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                AI Training
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Enhance your AI models with targeted training and feedback.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 hover:shadow-xl	duration-200 rounded-2xl cursor-pointer">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 5C16.268 5 11 10.268 11 17C11 23.732 16.268 29 23 29C29.732 29 35 23.732 35 17C35 10.268 29.732 5 23 5Z"
                  stroke="#161616"
                  strokeWidth="2"
                />
                <path
                  d="M23 29V41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Tech Insights
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Gain valuable insights into the latest technology trends and
                innovations.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 hover:shadow-xl	duration-200 rounded-2xl cursor-pointer">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 5L23 41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 23L41 23"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M23 5L5 23"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M23 41L5 23"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Interview Prep
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Prepare for interviews with AI-driven practice sessions and mock
                tests.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t hover:shadow-xl	duration-200 rounded-2xl cursor-pointer">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 5H41V41H5V5Z" stroke="#161616" strokeWidth="2" />
                <path
                  d="M5 23L41 23"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M23 5L23 41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Performance
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Track your performance with detailed analytics and progress
                reports.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t hover:shadow-xl	duration-200 rounded-2xl cursor-pointer">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 5L23 41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 23L41 23"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 5L41 41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                AI Integration
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Seamlessly integrate AI tools into your workflow for enhanced
                productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secion_Two;
