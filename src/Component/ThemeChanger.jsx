import sun from "../assert/sun.png";
import Moon from "../assert/Moon.png";
import { useState, useEffect } from "react";
const ThemeChanger = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply the theme to the body
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="theme-changer cursor-pointer flex items-center justify-center p-2 rounded-full"
      onClick={toggleTheme}
    >
      <div
        className={`icon transition-transform duration-700 ease-in-out ${
          isDarkMode ? "rotate-180" : "rotate-120"
        }`}
      >
        {isDarkMode ? (
          <img src={Moon} alt="Dark Mode" className="w-5 h-5" />
        ) : (
          <img src={sun} alt="Light Mode" className="w-5 h-5" />
        )}
      </div>
    </div>
  );
};

export default ThemeChanger;
