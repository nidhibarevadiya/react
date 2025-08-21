import React from "react";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg font-medium transition-colors duration-200
                 bg-gray-800 text-white hover:bg-gray-700
                 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;