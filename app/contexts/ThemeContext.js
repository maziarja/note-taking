"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [colorState, setColorState] = useState("light");

  useEffect(() => {
    const storedValue = window.localStorage.getItem("colorState");
    const theme = storedValue ? JSON.parse(storedValue) : "light";

    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const finalTheme =
      theme === "system" ? (isDarkMode ? "dark" : "light") : theme;
    document.documentElement.setAttribute("data-theme", finalTheme);

    if (finalTheme === "dark") setDarkMode(true);
    else setDarkMode(false);

    setColorState(theme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        colorState,
        setColorState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("Theme context was used outside of Theme provider");
  return context;
}

export { ThemeProvider, useTheme };
