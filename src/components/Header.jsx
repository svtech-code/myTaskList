import { useEffect, useState } from "react";

import NightsStaySharpIcon from "@mui/icons-material/NightsStaySharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-4 bg-cyan-700 opacity-90 dark:bg-gray-800 dark:text-white text-dark rounded-lg h-20">
      <h1 className="text-3xl font-bold">My Task List</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
        {darkMode ? <LightModeSharpIcon /> : <NightsStaySharpIcon />}
      </button>
    </header>
  );
};

export default Header;
