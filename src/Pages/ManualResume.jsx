import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManualResume = () => {
  const [fullname, setFullname] = useState("");
  const [description, setDescription] = useState("");
  const [experiences, setExperiences] = useState([""]);
  const [skills, setSkills] = useState([""]);
  const [image, setImage] = useState("");
  const [hobbies, setHobbies] = useState([""]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("resumeData"));
    if (storedData) {
      setFullname(storedData.fullname || "");
      setDescription(storedData.description || "");
      setExperiences(storedData.experiences || [""]);
      setSkills(storedData.skills || [""]);
      setImage(storedData.image || "");
      setHobbies(storedData.hobbies || [""]);
      setEmail(storedData.email || "");
      setPhone(storedData.phone || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "resumeData",
      JSON.stringify({
        fullname,
        description,
        experiences,
        skills,
        image,
        hobbies,
        email,
        phone,
      })
    );
  }, [
    fullname,
    description,
    experiences,
    skills,
    image,
    hobbies,
    email,
    phone,
  ]);

  const handleExperienceChange = (index, event) => {
    const newExperiences = experiences.slice();
    newExperiences[index] = event.target.value;
    setExperiences(newExperiences);
  };

  const handleSkillChange = (index, event) => {
    const newSkills = skills.slice();
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleHobbyChange = (index, event) => {
    const newHobbies = hobbies.slice();
    newHobbies[index] = event.target.value;
    setHobbies(newHobbies);
  };

  const addExperience = () => {
    setExperiences([...experiences, ""]);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const addHobby = () => {
    setHobbies([...hobbies, ""]);
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const removeHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a URL for the selected file
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Application Form</h1>
      <form className="space-y-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullname" className="text-lg font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter your full name"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter a brief description"
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium mb-1">
            Choose an Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*" // Allows only image files to be selected
            onChange={(e) => handleImageChange(e)}
            className="border border-gray-300 rounded p-2"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Hobbies */}
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-1">Hobbies</label>
          {hobbies.map((hobby, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={hobby}
                onChange={(e) => handleHobbyChange(index, e)}
                className="border border-gray-300 rounded p-2 mr-2 flex-grow"
                placeholder={`Hobby ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeHobby(index)}
                className="bg-red-500 text-white rounded p-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addHobby}
            className="bg-blue-500 text-white rounded p-2"
          >
            Add Hobby
          </button>
        </div>

        {/* Experiences */}
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-1">Experiences</label>
          {experiences.map((experience, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={experience}
                onChange={(e) => handleExperienceChange(index, e)}
                className="border border-gray-300 rounded p-2 mr-2 flex-grow"
                placeholder={`Experience ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="bg-red-500 text-white rounded p-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="bg-blue-500 text-white rounded p-2"
          >
            Add Experience
          </button>
        </div>

        {/* Skills */}
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-1">Skills</label>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}
                className="border border-gray-300 rounded p-2 mr-2 flex-grow"
                placeholder={`Skill ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="bg-red-500 text-white rounded p-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="bg-blue-500 text-white rounded p-2"
          >
            Add Skill
          </button>
        </div>

        {/* Submit Button */}
        <Link
          to="/ResumeTemplate/1/:finalID"
          className="bg-green-500 text-white rounded p-2 mt-4"
        >
          Submit
        </Link>
      </form>
    </div>
  );
};

export default ManualResume;
