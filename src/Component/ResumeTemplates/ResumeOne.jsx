import { useState, useEffect } from "react";

const ResumeOne = () => {
  const [resumeData, setResumeData] = useState({
    fullname: "",
    description: "",
    experiences: [],
    skills: [],
    image: "",
    hobbies: [],
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Retrieve data from localStorage when component mounts
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setResumeData({
        fullname: parsedData.fullname || "",
        description: parsedData.description || "",
        experiences: parsedData.experiences || [],
        skills: parsedData.skills || [],
        image: parsedData.image || "",
        hobbies: parsedData.hobbies || [],
        email: parsedData.email || "",
        phone: parsedData.phone || "",
      });
    }
  }, []);

  return (
    <div>
      <div className="bg-gray-100 p-4">
        <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
          {/* top content */}
          <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img
                src={
                  resumeData.image ||
                  "https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo"
                }
                alt="Profile"
              />
            </div>
            <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
              <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                {resumeData.fullname || "Your Name"}
              </p>
              <p className="text-heading">
                {resumeData.description || "Your Position"}
              </p>
            </div>
          </div>
          {/* main content */}
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="flex flex-col sm:w-1/3">
                {/* My Contact */}
                <div className="py-3 sm:order-none order-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    My Contact
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <p>Email: {resumeData.email || "your.email@example.com"}</p>
                  <p>Phone: {resumeData.phone || "Your Phone Number"}</p>
                </div>
                {/* Skills */}
                <div className="py-3 sm:order-none order-2">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Skills
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <ul>
                    {resumeData.skills.map((skill, index) => (
                      <li key={index} className="py-1">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Education Background */}
                <div className="py-3 sm:order-none order-1">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Education Background
                  </h2>
                </div>
              </div>
              <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                {/* About Me */}
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    About Me
                  </h2>
                  <p>{resumeData.description}</p>
                </div>
                {/* Professional Experience */}
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Professional Experience
                  </h2>
                  <ul>
                    {resumeData.experiences.map((experience, index) => (
                      <li key={index} className="py-1">
                        {experience}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Projects */}
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Projects
                  </h2>
                </div>
                {/* Hobbies */}
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Hobbies
                  </h2>
                  <ul>
                    {resumeData.hobbies.map((hobby, index) => (
                      <li key={index} className="py-1">
                        {hobby}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeOne;
