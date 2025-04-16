"use client";

import { useTheme } from "../contexts/ThemeContext";

function ThemeChangeButton() {
  const { darkMode, setDarkMode, colorState } = useTheme();
  function handleClick() {
    if (colorState === "dark") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
      if (typeof window !== "undefined") {
        window.localStorage.setItem("colorState", JSON.stringify("dark"));
      }
    }

    if (colorState === "light") {
      setDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("colorState", JSON.stringify("light"));
    }

    if (colorState === "system") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      setDarkMode(isDarkMode ? true : false);
      document.documentElement.setAttribute(
        "data-theme",
        isDarkMode ? "dark" : "light",
      );
      window.localStorage.setItem("colorState", JSON.stringify("system"));
    }
  }
  return (
    <button
      onClick={handleClick}
      className="text-preset-4 ml-auto cursor-pointer rounded-lg bg-blue-500 px-4 py-3 text-[#fff]"
    >
      Apply Changes
    </button>
  );
}

export default ThemeChangeButton;
